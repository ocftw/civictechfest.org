import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import { IndexLink, Link } from "react-router";
import info from "jsons/header.json";
import styles from "./styles.css";
import icon from "./icon.css";
import ICON from "../icon.jsx"

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      hiddenMenu: false,
      offsetWidth: 0,
    };
  }
  static contextTypes = {
    router: React.PropTypes.object,
    changeLocale: React.PropTypes.func,
  };
  componentDidMount() {
    this.setState({
      offsetWidth: this.refs.header.offsetWidth
    });
    if (this.refs.header.offsetWidth <= 1025) {
      this.setState({ hiddenMenu: true, });
    }
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize(e) {
    this.setState({
      offsetWidth: this.refs.header.offsetWidth
    });
    if (this.state.hiddenMenu && this.refs.header.offsetWidth > 1025) {
      this.setState({ hiddenMenu: false });
    } else if (!this.state.hiddenMenu && this.refs.header.offsetWidth <= 1025) {
      this.setState({ hiddenMenu: true });
    }
  }
  showMenu() {
    this.setState({
      hiddenMenu: !this.state.hiddenMenu,
    });
  }
  hideMenu() {
    this.setState({
      hiddenMenu: true,
    });
  }
  render() {
    const { isActive } = this.context.router;
    return (
      <header className={styles.root} ref="header">
        <svg
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 31.25" version="1.1" x="0px" y="0px"
          className={styles.ham}
          onClick={() => this.showMenu()}
        >
          <title>Hamburger Round</title>
          <desc>Created by John Slater from the Noun Project</desc>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="#000000">
              <path d="M0,4 C0,2.8954305 0.889763236,2 2.00359486,2 L22.9964051,2 C24.10296,2 25,2.88772964 25,4 C25,5.1045695 24.1102368,6 22.9964051,6 L2.00359486,6 C0.897039974,6 0,5.11227036 0,4 L0,4 Z M0,12 C0,10.8954305 0.889763236,10 2.00359486,10 L22.9964051,10 C24.10296,10 25,10.8877296 25,12 C25,13.1045695 24.1102368,14 22.9964051,14 L2.00359486,14 C0.897039974,14 0,13.1122704 0,12 L0,12 Z M0,20 C0,18.8954305 0.889763236,18 2.00359486,18 L22.9964051,18 C24.10296,18 25,18.8877296 25,20 C25,21.1045695 24.1102368,22 22.9964051,22 L2.00359486,22 C0.897039974,22 0,21.1122704 0,20 L0,20 Z" />
              </g>
          </g>
        </svg>
        <div className={styles.brand}>
          <h2 className={styles.title}>
            <IndexLink to="/"><img className={styles.logo} src={require(`images/ctf-logo.svg`)} /></IndexLink>
          </h2>
          
          {
            do {
              if (this.state.offsetWidth >= 1025) {
                <Menu />
              }
            }
          }
        </div>
        {
          do {
            if (!this.state.hiddenMenu && this.state.offsetWidth < 1025) {
              <Menu />
            }
          }
        }

      </header>
    );
  }
};

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link
          to="/about"
          activeClassName={styles.active}
          onClick={() => hideMenu()}
        >
          <i className={icon.about}><ICON icon="about" /></i>
          {info[getLocale()].about}
          
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/agenda"
          activeClassName={styles.active}
          onClick={() => hideMenu()}
        >
          <i className={icon.agenda}><ICON icon="agenda" /></i>
          {info[getLocale()].agenda}
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/side_events"
          /*activeClassName={styles.active}*/
          onClick={() => hideMenu()}
        >
          <i className={icon.side_event}><ICON icon="side_event" /></i>
          {info[getLocale()].side_event}
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/speakers"
          activeClassName={styles.active}
          onClick={() => hideMenu()}
        >
          <i className={icon.speaker}><ICON icon="speaker" /></i>
          {info[getLocale()].speakers}
        </Link>
      </li>
      
      <li className={styles.item}>
        <Link
          to="/venue"
          activeClassName={styles.active}
          onClick={() => hideMenu()}
        >
          <i className={icon.venue}><ICON icon="venue" /></i>
          {info[getLocale()].venue}
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/tickets"
          activeClassName={styles.active}
          onClick={() => hideMenu()}
        >
          <i className={icon.ticket}><ICON icon="ticket" /></i>
          {info[getLocale()].ticket}
        </Link>
      </li>
      <li className={styles.item}>
        <Link
          to="/taipei"
          /*activeClassName={styles.active}*/
          onClick={() => hideMenu()} 
        >
          <i className={icon.taipei}><ICON icon="taipei" /></i>
          {info[getLocale()].taipei}
        </Link>
      </li>
    </ul>
  );
}

export default Header;
