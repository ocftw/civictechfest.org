import React, { Component } from "react";
import c from 'classnames';
import styles from "./styles.css";

class ScrollButton extends React.Component {

  constructor() {
    super();

    this.state = {
        intervalId: 0
    };

    window.addEventListener('scroll', function(e) {
		  let supportPageOffset = window.pageXOffset !== undefined;
		  let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		  let scroll = {
		     x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
		     y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		  };

		  let btn = document.getElementById('scrolltop_btn'); // target element to change attribute
		  let btn_datatop = btn.getAttribute('data-top');

		  if(scroll.y > 300){ // 300px (arbitrary - put whatever point you need there.)
		  	if (btn_datatop == 'true') {
		  		btn.setAttribute('data-top', 'false');//change the attribute.
		  	}		    
		  }else {
		  	if (btn_datatop == 'false') {
		  		btn.setAttribute('data-top', 'true');
		  	}	
		  }
		},300);


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
               onClick={ () => { this.scrollToTop(); }} data-top="true">
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
