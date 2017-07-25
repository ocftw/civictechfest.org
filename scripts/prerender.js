import sm from 'sitemap'
import {writeFile, writeFileSync} from 'fs'
import Browser from 'zombie'
import {resolve} from 'path'
import {server as superstatic} from 'superstatic'

import {basic, schedule, sponsors} from '../jld.js'

/*
* Page data to prerender.
*
* TODO: Maybe separate data from prerender script?
*
* Supported Keys
* ==============
* path:     URL segment after '/'
* title:    Strings to prepend before site name in title
* desc:     Override the default open-graph description.
* ogImage:  Override the default open-graph image with a (absolute) URL to new image.
*
*/
const PAGES = [{
  path: 'index',
  ld: basic
}, {
  path: 'agenda',
  title: 'Agenda',
  ld: schedule
}, {
  path: 'speakers',
  title: 'Speakers',
  ld: basic
}, {
  path: 'side_event',
  title: 'Side Events',
  ld: basic
}, {
  path: 'about',
  title: 'About',
  ld: sponsors
}, {
  path: 'venue',
  title: 'Venue',
  ld: basic
}, {
  path: 'live',
  title: '直播',
  ld: basic
}, {
  path: 'tickets',
  title: 'Tickets',
  ld: basic
}, {
  path: 'taipei',
  title: 'Taipei',
  ld: basic
}]


// Main prerender script
//

const PORT = 8081;
const server = superstatic({
  port: PORT,
  cwd: resolve(__dirname, '../dist'),
  config: {
    cleanUrls: true,
    debug: true,
    rewrites: PAGES.map(({path}) => ({source: `/${path}`, destination: '/index.html'}))
  }
})

Browser.localhost('localhost', PORT)

let connectApp = server.listen(async () => {
  console.log(`Static server listening at http://localhost:${PORT}`)

  await Promise.all(PAGES.map(async page => {
    const outputFilePath = resolve(__dirname, `../dist/${page.path}.html`)
    let html = await renderToString(page)

    await writeFileAsync(outputFilePath, html, 'utf-8')

    console.log('Rendered ', page.path, 'to', outputFilePath)
  }))

  console.log('All rendered, closing down the server...')
  process.exit()
})

// Utility functions
//

async function renderToString(page){
  const browser = new Browser({waitDuration: '10s'})
  await browser.visit(`/${page.path}`)

  if(page.title) {
    let titleElem = browser.document.querySelector('title')
    titleElem.innerHTML = `${page.title} :: ${titleElem.innerHTML}`
  }
  if(page.ld) {
    let jld = browser.document.querySelector('#jld')
    jld.innerHTML = page.ld
  }

  if(page.ogImage) {
    let ogImageElem = browser.document.querySelector('meta[property="og:image"]')
    ogImageElem.setAttribute('content', page.ogImage)
  }

  if(page.desc) {
    let ogDescElem = browser.document.querySelector('meta[property="og:description"]')
    ogDescElem.setAttribute('content', page.desc)
  }

  return `<!DOCTYPE html>${browser.document.documentElement.outerHTML}`
}

function writeFileAsync(...args){
  return new Promise((resolve, reject) => {
    writeFile(...args, (err) => {
      if(err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

// Unhandled rejection handling
//
process.on('unhandledRejection', function(reason, promise) {
  if (reason.stack) {
    // Error object, has stack info
    console.error(reason.stack);
  } else {
    console.error('Reason:', reason);
  }
  console.error('Promise:', promise);
});

var sitemap = sm.createSitemap({
  hostname: 'http://summit.g0v.org/'
});

// Sitemap generation
//

PAGES.map(({path}) => sitemap.add({url: `/${path}`, changefreq: 'weekly', priority: 0.7}))

writeFileSync(resolve(__dirname, "../dist/sitemap.xml"), sitemap.toString());
