import React, { Component } from "react";
import {
  MainInfo,
  Milestone,
  About,
  MainSection,
} from "javascripts/components";



class Home extends Component {
  render() {
    return (
      <div>
        { (window.location.search.includes("cool") || Date.now() > 1504972800000) && <Milestone /> }
        <MainInfo />
      </div>
	);
  }
};

export default Home;

