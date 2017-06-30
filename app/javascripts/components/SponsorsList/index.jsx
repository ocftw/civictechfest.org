import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import styles from "./styles.css";
import sponsors from "jsons/sponsors.json";

var multiParagraph = (text, className) => {
  if (!text) {
    return [];
  }
  var arr = text.split('\n');
  var ret = [];
  for (let i in arr) {
    let line = arr[i];
    ret.push(<p key={i} dangerouslySetInnerHTML={{__html: line}}></p>);
  }
  return ret;
}

export default class SponsorsList extends Component {
  sponsor = (sponsor, i) => {
    return (
      <section className={styles.about} key={sponsor.name}>
        <div className={styles.title}>
          <h3>{sponsor.name}</h3>
          <a href={sponsor.url} target="_blank"><i className={styles.icon}>home</i>{sponsor.urlname}</a>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={require(`file!images/sponsors/${sponsor.logo}`)} />
          </div>
          <div className={styles.desc}>
            <p className={styles.brief}>
              {sponsor.brief}
            </p>
            {multiParagraph(sponsor.desc)}
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className={styles.root}>

        <section className={styles.topsection}>
          <h2 className={styles.header}>#CivicTechFest</h2>
          <div>
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src={require('./banner_cube.jpg')} />
                </div>
                <div className={styles.desc}>
                  <p className={styles.brief}>
                     Asia’s first ever civic technology festival with  a week-long collection of events. 
                  </p>
                  <p>
                    “Civic Tech Fest” is Asia’s first ever civic technology festival and conference, featuring a series of forums, workshops, roundtables, conferences and hackathons related to open data and open government. 
                  </p>
                  <p>
                    #CivicTechFest is a week-long collection of events coordinated by the Open Culture Foundation alongside the WCIT in September 2017. The main highlight for the Civic Tech Fest is “TICTeC@Taipei: The Impacts of Civic Technology Conference”, co-organized by mySociety. 
                  </p>
                  <p>
                    We invite regional and international groups to create events and activities over the span of the week. In addition to TICTeC@Taipei, featured events include data bootcamp for NGOs, presentation sessions on open government research, and g0v.tw hackathon. We hope through the course of our discussion, we can lay the groundwork for a global civic tech network, foster more collaborate in global civic tech movement.
                  </p>
                </div>
              </div>

          </div>
        </section>


        <section className={styles.section}>
          <h2 className={styles.header}>About</h2>
          <div>
            <section className={styles.about}>
              <div className={styles.title}>
                <h3>About TICTeC@Taipei</h3>
                <a href="" target="_blank"><i className={styles.icon}>home</i>tictec.mysociety.org</a>
              </div>
              <div className={styles.content}>
                <div className={styles.logo}>
                  <img src={require(`file!images/sponsors/tictec.jpg`)} />
                </div>
                <div className={styles.desc}>
                  <p className={styles.brief}>
                    
                     TICTeC@Taipei is Asia’s first TICTeC and is the major event of #CivicTechFest.
                    
                  </p>
                  <p>
                    TICTeC (The Impacts of Civic Technology Conference) is an annual international conference that focuses on the impact of civic tech, and was first established in 2015 by the influential UK group “mySociety”. This conference aims to analyze and assess the development of civic tech, and focuses on studying the impact and effectiveness of civic tech under different social environments and political contexts.</p> 
                  <p>Over the course of the conference, TICTeC looks to provide in-depth analysis regarding online participation tools, digital democracy tools, as well as their influence and popularity. Their findings act as important reference points for future development of the field. In comparison to other tech focused conferences, TICTeC has a more research and academic focus, and emphasizes the connection between online/offline tech with society.</p>
                  <p>As technology develops faster each day, and as society and politics develop comparatively slower, TICTeC is a way for civic tech advocates and critics to build a bridge for open government, democratic deepening, and civic participation to march forward. We hope through TICTeC@Taipei, we can build a global network of civic tech enthusiasts and have in-depth link to Taiwan & Asia communities. 

                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        { 
          sponsors[getLocale()].map( cat => {
            return (
              <section id={cat.category} className={styles.section} key={cat.category}>
                <h2 className={styles.header}>{cat.title}</h2>
                <div>{ cat.sponsors.map(this.sponsor) }</div>
              </section>
            )
          }) 
        }
      </div>
    );
  }
};

