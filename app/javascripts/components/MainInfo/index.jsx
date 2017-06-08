import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import header from "jsons/header.json";
import styles from "./styles.css";

class MainInfo extends Component {
  render() {
    return (
      <div className={styles.root}>
	  	<img className={styles.hero} src={require('./images/hero.png')} />
		<h2 className={styles.heroleft} >Sep. 11th - 16th<br/>TAIWAN</h2>
		<h2 className={styles.heroright} >Co-host with WCIT 2017 &amp;<br/>TICTeC@Taipei</h2>
      </div>
    );
  }
};

export default MainInfo;
