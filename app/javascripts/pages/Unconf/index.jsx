import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import hotels from "jsons/hotels.json";
import styles from "./styles.css";
import content from "text/unconf";

class Unconf extends Component {
    render() {
          return (
              <div className={styles.root}>
                <div dangerouslySetInnerHTML={{__html: content[getLocale()]}}>
                </div>
                <img src={require("./unconf_room.png")} />
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQqUFSYca3fyDOfe7fwhr3vRrD_Q6LA5LdhmqqyspZPlekWDgPSuZegydinMT8ikxHWJ0s9h8fnBvjd/pubhtml?widget=true&amp;headers=false" width="100%" height="400px"></iframe>
              </div>
          );
    }
};

export default Unconf;
