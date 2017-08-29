import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import styles from './styles.css';
import ICON from "../../components/icon.jsx"

class Ticket extends Component {
  render() {
    return (
      <div className={styles.root}>
        <section className={styles.section}>
                  <h2 className={styles.header}>Tickets</h2>
                  <div className={styles.orange_dateline}>
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
                        <span className={styles.note}>( includes entry to WCIT 2017 )</span>
                        <h4>Sep. 11th-13th</h4>
                      </div>
                      <div className={styles.content}>
                        <div className={styles.flex}>
                          <div className={styles.desc}>
                            <ICON icon="ticket" icontype="custom"/>
                            <p>Tickets are required to enter TICTeC@Taipei.</p>
                            <a href="https://ocftw.kktix.cc/events/civictechfest2017" target="_blank" className={styles.eventbtn}><span>Register Now</span></a>
                          </div>
                          <div className={styles.logo}>
                            <img src={require(`file!images/sponsors/tictec.jpg`)} />
                          </div>
                        </div>
                        <div className={styles.block}>
                          <h4>Tickets Include</h4>
                          <hr />
                          <ul className={styles.included}>
                            <li>Single room with breakfest of 4-stars hotel for 4 nights from Sep.10th-14th
                            (excpet regurlar tickets without accommodation)</li>
                            <li>Free entrance to TICTec@Taipei & WCIT 2017,plus social events (RSVP needed)</li>
                          </ul>
                        </div>
                        <div className={styles.block}>
                          <h4>Note</h4>
                          <hr />
                          <ul className={styles.notice}>
                            <li>TICTeC@Taipei will use the same &quot;Badge&quot; and &quot;Venue&quot; as WCIT 2017.</li>
                            <li>The &quot;Badge&quot; can be acquired at the WCIT registration desk.</li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
      </div>
    );
  }
};

export default Ticket;
