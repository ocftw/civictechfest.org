import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import styles from "./styles.css";
import side_events from "jsons/side_events.json";
import ICON_G from "./../icon_g.jsx"


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
          <p>
            <span><ICON_G icon="event" icontype="sideevent"/> 2017 Sep. {sideevent.date}th {sideevent.time}</span>
            <span><ICON_G icon="place" icontype="sideevent"/> {sideevent.place}</span>
            <span><ICON_G icon="entry" icontype="sideevent"/> Entry: {sideevent.entry}</span>
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={require(`images/sideevents/${sideevent.img}`)} />
          </div>
          <div className={styles.desc}>
            <p className={styles.brief}>
                {sideevent.brief}
            </p>
            {multiParagraph(sideevent.desc_long)}
            <div className={styles.remind} data-type={sideevent.remind_type}>
              <h4><ICON_G icon="info_outline" icontype="sideevent"/> {sideevent.remind_title}</h4>
              <hr />
              { 
                sideevent.remind.map( cat => {
                  return (
                    <dl>
                      <dt><ICON_G icon="arrow_right" icontype="sideevent"/> {cat.remind_sub}</dt>
                      <dd>{cat.remind_desc}</dd>
                    </dl>
                  )
                }) 
              }
              <hr />
              
            </div>
            <div>
              <a className={styles.eventbtn} data-islink={sideevent.islink} href={sideevent.url} target="_blank"><span>{sideevent.urlname}</span></a>
              <div className={styles.host}>
                <span>Host</span>
                { 
                  sideevent.host.map( cat => {
                    return (
                      <img src={require(`file!images/sponsors/${cat.host_logo}`)} />
                    )
                  }) 
                }
              </div>
            </div>
            
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
                <div className={styles.blue_dateline}>
                  <span>10</span>
                  <span>11</span>
                  <span className={styles.grey}>12</span>
                  <span className={styles.grey}>13</span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                </div>
                <div>{ cat.side_events.map(this.sideevent) }</div>
              </section>
            )
          }) 
        }
      </div>
    );
  }
};

