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
    let data = this.mapToDescription(speaker, locale);

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
  mapToDescription(speaker, locale) {
    let data = [];
    let event = null;
    let id = "";

    /*
    for (var day_key in schedulesByTrack[getLocale()]) {
      if ( !day_key.startsWith('day') ) continue;//skip header, etc TODO schedules_by_track.json bad structure
      console.log("day: "+day_key);
      for (var event_key in schedulesByTrack[getLocale()][day_key]) {
        console.log("event: "+event_key);
        data = schedulesByTrack[getLocale()][day_key][event_key];
        if ( !Array.isArray(data.event) ) continue;
        var thisevent = data.event;
        console.log(thisevent);
        if ( thisevent.hasOwnProperty('speaker') ) {
          console.log('cheching speaker');
          if ( Array.isArray(thisevent.speaker) ) {
            if ( thisevent.speaker.includes(getString(speaker, 'name', locale)) ) {
              event = thisevent;
              id = day_key+"-"+event_key;
              //data ?
            }
          } else if ( thisevent.speaker == getString(speaker, 'name', locale) ) {
            event = thisevent;
            id = day_key+"-"+event_key;
          }
          console.log('checked speaker');
        } else if ( thisevent.hasOwnProperty('moderator') ) {
          if ( Array.isArray(thisevent.moderator) ) {
            if ( thisevent.moderator.includes(getString(speaker, 'name', locale)) ) {
              event = thisevent;
              id = day_key+"-"+event_key;
              //data ?
            }
          } else if ( thisevent.moderator == getString(speaker, 'name', locale) ) {
            event = thisevent;
            id = day_key+"-"+event_key;
          }
          console.log('checked moderator');
        } else {
          console.log("no session found");
        }
      }
    }
    console.log(id);
    return {
      event: event,
      id: id,
      time: data.time
    };
    // search day1 first
    */
    data = schedulesByTrack[getLocale()]["day0"].filter((day, index) => {
      if(day.event.speaker_f && day.event.speaker_f.includes(getString(speaker, 'name', locale))||
         (day.event.moderator_f && day.event.moderator_f === getString(speaker, 'name', locale)) //||
        ) {
        id = "day0-all-" + index.toString();
        return true;
      }else {
        return false;
      }
    });
    
    if(id == "") {
      data = schedulesByTrack[getLocale()]["day1"].filter((day, index) => {
        if(day.event.speaker_f && day.event.speaker_f.includes(getString(speaker, 'name', locale))||
          (day.event.moderator_f && day.event.moderator_f === getString(speaker, 'name', locale)) //||
          ) {
          id = "day1-all-" + index.toString();
          return true;
        }else {
          return false;
        }
      });
    }

    // nothing found in day1, then try search day2
    if(id == "") {
      data = schedulesByTrack[getLocale()]["day2"].filter((day, index) => {
        if(day.event.speaker_f && day.event.speaker_f.includes(getString(speaker, 'name', locale))||
           ((day.event.moderator_f && day.event.moderator_f) === getString(speaker, 'name', locale))
          ) {
          id = "day2-all-" + index.toString();
          return true;
        }else {
          return false;
        }
      });
    }
    if(id == "") {
      data = schedulesByTrack[getLocale()]["day3"].filter((day, index) => {
        if(day.event.speaker_f && day.event.speaker_f.includes(getString(speaker, 'name', locale))||
           ((day.event.moderator_f && day.event.moderator_f) === getString(speaker, 'name', locale))
          ) {
          id = "day3-all-" + index.toString();
          return true;
        }else {
          return false;
        }
      });
    }

    // data found in day1 or day2
    if(id !== "") {
      let day_venue_index = id.split("-");

      return {
        event: () => schedulesByTrack[getLocale()][day_venue_index[0]][day_venue_index[2]].event,
        time: schedulesByTrack[getLocale()][day_venue_index[0]][day_venue_index[2]].time,
        id: id
      };
    }

    // nothing found in schedules_by_track.json,so return speaker.json's data instead
    if((data == null) ||
       (event == null) ||
       (id == "")){

      let speakerElement = [];
      presenters['en-US'].map((element, i) => {
          speakerElement[i] = getString(element, 'name', locale);
      });

      return {
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
        time: "",
        id: "none-" + speakerElement.indexOf(getString(speaker, 'name', locale))
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
