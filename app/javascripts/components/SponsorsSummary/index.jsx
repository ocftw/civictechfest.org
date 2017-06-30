import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import sponsors from "jsons/partner.json";
import _ from "jsons/sponsors_summary.json";
import styles from "./styles.css";

class SponsorsSummary extends Component {
  sponsor = (sponsor) => {
    var name = sponsor.alt_name || sponsor.name;
    return (
      (sponsor.url) ? <a href={sponsor.url} target="_blank" className={styles.sponsor} key={sponsor.name} >
        <img className={styles.logo} src={require(`file!images/sponsors/${sponsor.logo}`)} />
        
      </a> : <span className={styles.sponsor} key={sponsor.name} >
        <img className={styles.logo} src={require(`file!images/sponsors/${sponsor.logo}`)} />
      </span>
    );
  }

  render() {
    return (
      <div className={styles.root}>
        <section id="" className={styles.section} key="">
          <h2 className={styles.header}>Host</h2>
          <div>
            <a href="http://ocf.tw/" target="_blank" className={styles.sponsor} key="" >
              <img className={styles.logo} src={require(`file!images/sponsors/OCF-LOGO-04.png`)} />
            </a>
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

export default SponsorsSummary;
