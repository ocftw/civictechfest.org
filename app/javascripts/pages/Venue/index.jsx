import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import venues from "jsons/venues.json";
import styles from "./styles.css";
import { Link } from "react-router";


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

class Venue extends Component {
    render() {
          return (
              <div className={styles.root}>

                <section className={styles.section}>
                  <h2 className={styles.header}>Venue</h2>
                  <div className={styles.orange_dateline}>
                    <span className={styles.grey}>9</span>
                    <span className={styles.grey}>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span className={styles.grey}>14</span>
                    <span className={styles.grey}>15</span>
                    <span className={styles.grey}>16</span>
                  </div>
                  <div>
                    <section className={styles.about}>
                      <div className={styles.title}>
                        <h3>TICTeC@Taipei</h3>
                        <span className={styles.note}>( alongside WCIT 2017 )</span>
                        <h4>Sep. 11th-13th</h4>
                      </div>
                      <div className={styles.content}>
                        <div className={styles.venue}>
                          <i className={styles.icon} data-size="big" data-color="red">place</i>
                          <h4>Taipei International Convention Center (TICC)</h4>
                          <a href="https://www.google.com.tw/maps/place/Taipei+International+Convention+Center/@25.0331974,121.5586548,17z/data=!3m1!4b1!4m5!3m4!1s0x3442abb61ab34fd9:0xcbb39196afb006db!8m2!3d25.0331974!4d121.5608435?hl=en" target="_blank"><i className={styles.icon}>keyboard_arrow_right</i>1 Hsin-Yi Road,Section 5,Taipei 11049,Taiwan</a>
                          <br />
                          <a href="http://www.ticc.com.tw/main_en/index.aspx" target="_blank"><i className={styles.icon}>home</i>www.ticc.com.tw</a>
                          <img src={require(`images/venue/TICC.jpg`)} />
                        </div>
                        
                        <div className={styles.howtogo}>
                            <h4>How to go</h4>
                            <hr />
                          <div className={styles.flex}>
                            <div className={styles.desc}>
                              <dl>
                                <dt>MRT</dt>
                                <dd>The closest metro is &quot;Taipei 101/World Trade Center&quot; station (red line of Metro Taipei) Exit 1.</dd> 
                              </dl>
                            </div>
                            <div className={styles.map}>
                              <iframe width="300px" height="300px" frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0258325750356!2d121.55865481500621!3d25.033197383972766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb61ab34fd9%3A0xcbb39196afb006db!2sTaipei+International+Convention+Center!5e0!3m2!1sen!2stw!4v1498934928713"></iframe>
                            </div>
                          </div>
                        </div>
                        <div className={styles.floor}>
                          <h4>Floor plan</h4>
                          <hr />
                          <div className={styles.flex}>
                            <div className={styles.map}>
                              <span className={styles.mapname}>2F</span>
                              <span>201A | 201B | 201C | 201F</span>
                              <img src={require(`images/venue/floor2.jpg`)} />
                            </div>
                            <div className={styles.map}>
                              <span className={styles.mapname}>4F</span>
                              <span>Joy | Elegance</span>
                              <img src={require(`images/venue/floor4.jpg`)} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className={styles.about}>
                      <div className={styles.title}>
                        <h3>Hotel</h3>
                        <span className={styles.note}>( The hotel for the accommodation ticket package )</span>
                      </div>
                      <div className={styles.content}>
                        <div className={styles.venue}>
                          <i className={styles.icon} data-size="big" data-color="red">place</i>
                          <h4>Santos Hotel 三德大飯店</h4>
                          <a href="https://www.google.com.tw/maps/place/%E4%B8%89%E5%BE%B7%E5%A4%A7%E9%A3%AF%E5%BA%97/@25.064918,121.5163663,17z/data=!3m1!4b1!4m5!3m4!1s0x3442a946bf7550bd:0x6f515a581bbe8244!8m2!3d25.064918!4d121.518555" target="_blank"><i className={styles.icon}>keyboard_arrow_right</i>No.49, Sec. 3, Chengde Rd., Taipei City</a>
                          <br />
                          <a href="http://www.santoshotel.com/en/" target="_blank"><i className={styles.icon}>home</i>http://www.santoshotel.com/en/</a>
                        </div>
                        
                        <div className={styles.howtogo}>
                            <h4>How to go</h4>
                            <hr />
                          <div className={styles.flex}>
                            <div className={styles.desc}>
                              <dl>
                                <dt>MRT</dt>
                                <dd>The closest metro is “Mingquan W.Rd.” station (red & yellow line of Metro Taipei) exit 1.</dd>
                              </dl>
                            </div>
                            <div className={styles.map}>
                              <iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%E5%8F%B0%E7%81%A3TW-TPE%E5%A4%A7%E5%90%8C%E5%8D%80%E6%89%BF%E5%BE%B7%E8%B7%AF%E4%B8%89%E6%AE%B5%E4%B8%89%E5%BE%B7%E5%A4%A7%E9%A3%AF%E5%BA%97&t=&z=14&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.header}>Side Events Venue</h2>
                  <div className={styles.blue_dateline}>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span className={styles.grey}>12</span>
                    <span className={styles.grey}>13</span>
                    <span>14</span>
                    <span>15</span>
                    <span>16</span>
                  </div>
                  <div>
                    {
                      venues[getLocale()].map( cat => {
                        return (
                          <section className={styles.about}>
                            <div className={styles.title}>
                              <h3>{cat.title}</h3>
                            </div>
                            <div className={styles.content}>
                              <div className={styles.venue}>
                                  <div>{multiParagraph(cat.detail)}</div>
                              </div>
                            </div>
                          </section>
                        )
                      })
                    }
                  </div>
                </section>


              </div>
          );
    }
};

export default Venue;
