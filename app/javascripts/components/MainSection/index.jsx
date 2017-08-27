import React, { Component } from "react";
import c from 'classnames';
import styles from "./styles.css";

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
        
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button title='Back to top' className={styles.scroll} id='scrolltop_btn'
               onClick={ () => { this.scrollToTop(); }} data-top="false">
                <span className={styles.arrow_up}><i className="material-icons">first_page</i></span>
              </button>;
   }
} 

function MainSection({children, className}) {
  return (
    <main className={c(styles.root, className)}>
      {children}
      <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    </main>
  );
};

export default MainSection;
