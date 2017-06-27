import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import header from "jsons/header.json";
import styles from "./styles.css";

class MainInfo extends Component {
  render() {
    return (
      <div className={styles.root}>
      	<div className={styles.banner}>
	  		<img className={styles.hero} src={require('./images/hero.jpg')} />
	  		<div className={styles.herotext}>
	  			<h1>#CivicTechFest</h1>
				<h2>Sep. 11th - 16th<br/>Taipei, Taiwan</h2>
			</div>
		</div>
		<article className={styles.relative}>
		  <div className={styles.brief}>
		    <p>Asia’s first ever civic technology festival with  a week-long collection of events.</p>
		  </div>
		</article>
      </div>
    );
  }
};

export default MainInfo;
