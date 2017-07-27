import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import styles from "./styles.css";
import side_events from "jsons/side_events.json";

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

export default class SideEvents extends Component {
  sideevent = (sideevent, i) => {
    return (
      <section className={styles.about} key={sideevent.name}>
        <div className={styles.title}>
          <h3>{sideevent.name}</h3>
          <a data-islink={sideevent.islink} href={sideevent.url} target="_blank">{sideevent.urlname}</a>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={require(`images/sideevents/${sideevent.img}`)} />
          </div>
          <div className={styles.desc}>
            
            {multiParagraph(sideevent.desc)}
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <div className={styles.root}>


        { 
          side_events[getLocale()].map( cat => {
            return (
              <section id={cat.category} className={styles.section} key={cat.category}>
                <h2 className={styles.header}>{cat.title}</h2>
                <div>{ cat.side_events.map(this.sideevent) }</div>
              </section>
            )
          }) 
        }
      </div>
    );
  }
};

