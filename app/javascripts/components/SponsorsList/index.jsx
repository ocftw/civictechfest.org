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
                     Asia's first ever civic technology festival with a week-long collection of events.
                  </p>
                  <p>
                    &quot;Civic Tech Fest&quot; is Asia&#39;s first ever civic technology festival and conference, featuring a series of forums, workshops, round tables, conferences and hackathons related to open data and open government.
                  </p>
                  <p>
                    #CivicTechFest is a week-long collection of events coordinated by the Open Culture Foundation alongside the WCIT in September 2017. Civic Tech Fest&#39;s main event is &quot;TICTeC@Taipei: The Impacts of Civic Technology Conference&quot;, co-organized by UK group &quot;mySociety&quot;.
                  </p>
                  <p>
                    We invite regional and international groups to create events and activities over the span of the week. In addition to TICTeC@Taipei, featured events include a data bootcamp for NGOs, presentation sessions on open government research, and the g0v.tw hackathon. We hope through the course of our discussions, we can lay the groundwork for a global civic tech network, and foster more collaboration in the global civic tech movement. 
                  </p>
                </div>
              </div>

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

