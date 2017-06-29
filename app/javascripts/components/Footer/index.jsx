import React, { Component } from "react";
import styles from "./styles.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.root}>
        <div className={styles.footerlink}>
          <a href="">support</a>
          <a href="">contact</a>
        </div>
        <div>
          Civic Tech Fest © 2017
        </div>
      </footer>
    );
  }
};

export default Footer;
