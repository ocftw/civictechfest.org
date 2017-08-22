import React, { Component } from "react";
import { getLocale, getString } from "javascripts/locale";
import avatarURL from "javascripts/helpers/avatar";
import Lightbox from "javascripts/components/Lightbox";
import styles from "./styles.css";
import presenters from "./presenters.json";
import schedulesByTrack from "javascripts/components/Schedule/schedules_by_track.json";
import classnames from "classnames/bind";
import Session from "javascripts/components/Schedule/session";

const cx = classnames.bind(styles);

class SpeakerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: false,
      currentSession: () => ({}),
      currentSessionTime: null
    }
  }

  componentDidMount() {
    const { hash } = this.props.properties.location;
    if (hash.includes("all")) {
      setTimeout(() => document.getElementById(hash.replace('#', 'slot-')).scrollIntoView(false), 300);
      const dataArray = hash.replace('#', '').split('-');
      const value = schedulesByTrack[getLocale()][dataArray[0]][dataArray[2]];
      // TODO get presenter name,
      // search for sessions,
      // put in state currentSessions
      this.setState({
        showSession: true,
        currentSession: () => schedulesByTrack[getLocale()][dataArray[0]][dataArray[2]].event,
        currentSessionTime: value.time
      });
    } else if (hash.includes("none")) {
      let id = hash.replace('#', '').split('-');
      let data  = presenters["en-US"][id[1]];
      this.setState({
        showSession: true,
        currentSession: () => ({
          venue: "",
          category: "",
          language: "",
          speaker:  data.name,
          title: data.title,
          bio: data.bio,
          abstract: "",
          avatar: data.avatar,
          facebook: data.facebook,
          twitter: data.twitter,
          value: data
        }),
        currentSessionTime: ""
      })
    }
  }

  enableSession(value,time) {
    this.setState({
      showSession: true,
      currentSession: value,
      currentSessionTime: time
    })
  }

  disableSession = () => {
    this.setState({
      showSession: false,
      currentSection: () => ({}),
      currentSessionTime: null
    })
  }

  speaker = (speaker) => {
    const avatar = avatarURL(speaker);
    const [locale] = getLocale().split('-');
    let data = this.getSessionIdsBySpeaker(speaker, locale);

    return (
      <a className={styles.speakers} key={speaker.name}
        id = {`slot-${data.id}`}
        href= {`#${data.id}`}
        onClick={this.enableSession.bind(this, data.event, data.time)} 
        data-session={cx({
                          "false": !this.state.showSession,
                          "true": this.state.showSession
        })} 
      >
        <span className={styles.inner}>
          <span className={styles.avatar}>
            <span>
              <img src={avatar} />
            </span>
          </span>
          <span className={styles.about}>
            <h3>{speaker.name}</h3>
            <p>{speaker.title}</p>
            <p>{speaker.organization}</p>
          </span>
        </span>

      </a>
    );
  }
  /*
    @Purpose: Use name in speaker.json to search the data in schedules_by_track.json
    @return: event => () =>
            time,
            id(day-all-index) or id(none-index)  if nothing found in schedules_by_track.json
  */
  getSessionIdsBySpeaker(speaker, locale) {
    let sessiondata = [];
    let ids = [];

    for ( i=0; i<=3; i++ ) {
      Array.prototype.push.apply(sessiondata, schedulesByTrack[getLocale()]["day"+i].filter((day, index) => {
        if(day.event.speaker_f && day.event.speaker_f.includes(getString(speaker, 'name', locale))||
           (day.event.moderator_f && day.event.moderator_f === getString(speaker, 'name', locale)) //||
          ) {
          ids.push("day"+i+"-all-" + index.toString());
          return true;
        }else {
          return false;
        }
      })
      );
    }
    

    if(ids.length >= 0) {
      let day_venue_index = id.split("-");

      return {
        sessions: sessiondata,
        ids: ids
      };
    }

    // nothing found in schedules_by_track.json,so return speaker.json's data instead
    if( ids.length == 0 ) {

      let speakerElement = [];
      presenters['en-US'].map((element, i) => {
          speakerElement[i] = getString(element, 'name', locale);
      });

      let session_placeholder = {
        event: () => ({
          venue: "",
          category: "",
          language: "",
          speaker:  speaker.name,
          title: speaker.title,
          bio: speaker.bio,
          abstract: "",
          avatar: speaker.avatar,
          value: speaker }),
        time: ""
      }

      return {
        sessions: [session_placeholder],
        ids: ["none-" + speakerElement.indexOf(getString(speaker, 'name', locale))]
      };
    }
  }

  sortFunc = (a,b) => {
    const [locale] = getLocale().split('-');
    return getString(a, 'name', locale).localeCompare(getString(b, 'name', locale));
  }

  showBio = (speaker, e) => {
    e.preventDefault();
    this.refs.lightbox.setState({ show: true, speaker: speaker });
  }

  render() {
    return (
      <div className={styles.root}>
      <article className={styles.container} data-wide="true">
        <h2 className={cx({
          "header": true,
          "header-shrink" : this.state.showSession})}
        >
          Speakers
        </h2>
        <div className= {cx({"speaker-parent" : this.state.showSession })} >
          { presenters['en-US'].filter((s) => s.featured).sort(this.sortFunc).map(this.speaker) }
        </div>
        <div className= {cx({"speaker-parent" : this.state.showSession })} >
          { presenters['en-US'].filter((s) => !s.featured).sort(this.sortFunc).map(this.speaker) }
        </div>

        <div className={cx({
          "Home-session": true,
          "is-show": this.state.showSession
        }
        )}>
          <Session
            sessionHandler={this.disableSession}
            data={this.state.currentSession()}
            time={this.state.currentSessionTime}
          />
        </div>
      </article>
      </div>

    );
  }
};

export default SpeakerList;
