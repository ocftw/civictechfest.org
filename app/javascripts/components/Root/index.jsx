import React, { Component } from "react";
import {
  AppBar,
  MainSection,
  Milestone,
  SponsorsSummary,
  Footer,
} from "javascripts/components";
import { getLocale, setLocale } from "javascripts/locale";

class Root extends Component {
  static childContextTypes = {
    changeLocale: React.PropTypes.func,
  };

  getChildContext() {
    return {
      changeLocale: this.changeLocale.bind(this)
    };
  }

  changeLocale(locale, e) {
    e.preventDefault();
    setLocale(locale);
    this.setState({});
  }

  render() {
    return (
      <section>
        <AppBar />
        <MainSection>
          {this.props.children}
		  <SponsorsSummary />
          <Footer />
        </MainSection>
      </section>
    );
  }
};

export default Root;
