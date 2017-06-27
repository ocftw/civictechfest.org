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

        <MainInfo />

	);
  }
};

export default Home;


/*
import __html from 'raw-loader!./template.html';
// workaround https://github.com/webpack-contrib/raw-loader/issues/13
var trimmed_html = __html.replace(/\\n/g, '\n').replace(/\\/g, "");
trimmed_html = trimmed_html.substring(18, trimmed_html.length-1);
var template = { __html: trimmed_html };

var Home = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});

export default Home;
*/
