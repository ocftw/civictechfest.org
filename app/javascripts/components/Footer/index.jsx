import React, { Component } from "react";
import styles from "./styles.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.root}>
        <div className={styles.footerlink}>
          <a href="mailto:intl@ocf.tw">Contact: intl@ocf.tw</a>
        </div>
        <div>
          Civic Tech Fest © 2017
        </div>
      </footer>
    );
  }
};

export default Footer;
