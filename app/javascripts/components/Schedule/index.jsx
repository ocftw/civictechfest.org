import React, { Component } from 'react';
import schedules from './schedules_by_track.json';
import { getLocale } from "javascripts/locale";
import Filter from "./filter";
import Session from './session';
import styles from "./styles.css";
import classnames from "classnames/bind";
import { StickyContainer, Sticky } from 'react-sticky';
const cx = classnames.bind(styles);

const venues = [
  {
    "id": "r7",
    "title": "201B+C",
  },
  {
    "id": "r6",
    "title": "201A+F",
  },
  {
    "id": "r0",
    "title": "201B",
  },
  {
    "id": "r1",
    "title": "201C",
  },
  {
    "id": "r2",
    "title": "4F Joy",
  },
  {
    "id": "r3",
    "title": "4F Elegance",
  },
  {
    "id": "r4",
    "title": "201A",
  },
  {
    "id": "r5",
    "title": "201F",
  }

];

var multiParagraph = (textorArray, className) => {
  if (!textorArray) {
    return [];
  }
  var ret = [];
  if ( Array.isArray(textorArray) ) {
    for (let i in textorArray) {
      let line = textorArray[i];
      ret.push(<p key={i} dangerouslySetInnerHTML={{__html: line}}></p>);
    }
  } else if ( typeof textorArray === 'string' ) {
    var arr = textorArray.split('\n');
    for (let i in arr) {
      let line = arr[i];
      ret.push(<p key={i} dangerouslySetInnerHTML={{__html: line}}></p>);
    }
  }
  return ret;
}

class ScrollButton extends React.Component {

  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
    
  }
  
  scrollStep() {
    let scroll_block = document.getElementsByClassName('Home-session')[0];

    if (scroll_block.scrollTop === 0) {
        clearInterval(this.state.intervalId);
        
    }
    scroll_block.scrollTop -= 60;
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button title='Back to top' className={styles.scroll} id='scrolltop_btn_inner'
               onClick={ () => { this.scrollToTop(); }} data-top="false">
                <span className={styles.arrow_up}><i className="material-icons">first_page</i></span>
              </button>;
   }
} 

const venueObj = venues.reduce((aggObj, venue, idx) => {
  aggObj[venue.title] = venue
  aggObj.index = idx
  return aggObj
}, {})

const DAY_2 = "Tue Sep 12 2017";
const DAY_3 = "Wed Sep 13 2017";

function mapTimeSlotToItems(day, value, i) {
  let id = `day${day}-all-${i}`;
  let venue = value.venue || (value.event && value.event.venue);
  let { hash } = this.props.location;
  let selected = hash ? (hash === '#' + id) : false;
  let event = () => schedules[getLocale()][`day${day}`][i].event;
  if(venue && this.state.venueOn) {
    let venueState = this.state.venues.filter(cat => cat.title === venue)[0]
    if(!venueState.active) return false;
  }

  let content;
  if (!value.time) {
    return (
      <div
        className={cx({ "Schedule-item" : true, })}
        key={i}
        data-venue={venue}
      >
        <div className="Schedule-time">
          {value.title}<span className={styles.nobreak}><span className={styles.gicon}>place</span>{venue}</span>
        </div>

        <a id={`slot-${id}`} href={`#${id}`}
          className={cx({
            "Schedule-tagline" : true
          })}
          onClick={this.setSession.bind(this, event, value.time)}>

          <div className="Schedule-main">
            <div>{value.tagline}</div>
            { value.anchor && <div className="Schedule-anchor">{schedules[getLocale()].moderator}: {value.anchor}</div> }
          </div>
        </a>
      </div>
    );
  } else {
    let [timeStart, timeEnd] = value.time.split('-');
    return (
      <div className={cx({
            "Schedule-item" : true,
            "Schedule-keynote" : !venue,
            })}
           key={i}>
        <div className="Schedule-time">
          {timeStart}<span className="Schedule-timeEnd"> - {timeEnd}</span>
        </div>
        {
          do {
            if (typeof value.event === 'string') {
              <div className="Schedule-event">{value.event}</div>
            } else if ( value.expandable === false ) {
              <div id={`slot-${id}`}
                className={cx({
                  "Schedule-event" : true,
                })}
                style={selected ? {backgroundColor: '#FFF7CB'} : {}}>
                <div className="Schedule-main">
                  {
                    value.event.panel ? (
                      <h5>{value.event.panel}</h5>
                      ) : null
                  }
                  
                  <h4>{value.event.title}</h4>
                  {
                    value.event.note ? (
                      <div className="Schedule-note">{multiParagraph(value.event.note)}</div>
                      ) : null
                  }
                  
                  {
                    value.event.moderator ? (
                      <div>
                        <p>Moderator</p>
                        <div className="Schedule-presenter">{multiParagraph(value.event.moderator_f)}</div>
                      </div>
                      ) : null
                  }
                  {
                    value.event.speaker ? (
                      <div>
                        <p>Speaker</p>
                        <div className="Schedule-presenter">{multiParagraph(value.event.speaker_f)}</div>
                      </div>
                      ) : null
                  }
                  {
                    venue ? (
                      <div className="Schedule-categoryIcon" data-venue={venue}
                           title={`Toggle venue "${venue}"`}
                           onClick={this.toggleVenue.bind(this, venueObj[venue].index)}
                           ><span>{venue}</span></div>

                    ) : null
                  }
                </div>
              </div>
            } else {
              <a id={`slot-${id}`} href={`#${id}`}
                className={cx({
                  "Schedule-event" : true,
                })}
                style={selected ? {backgroundColor: '#FFF7CB'} : {}}
                onClick={this.setSession.bind(this, event, value.time)}>
                <div className="Schedule-main">
                  {
                    value.event.panel ? (
                      <h5>{value.event.panel}</h5>
                      ) : null
                  }
                  
                  <h4>{value.event.title}</h4>
                  {
                    value.event.note ? (
                      <div className="Schedule-note">{multiParagraph(value.event.note)}</div>
                      ) : null
                  }
                  {
                    value.event.moderator ? (
                      <div>
                        <p>Moderator</p>
                        <div className="Schedule-presenter">{multiParagraph(value.event.moderator_f)}</div>
                      </div>
                      ) : null
                  }
                  {
                    value.event.speaker ? (
                      <div>
                        <p>Speaker</p>
                        <div className="Schedule-presenter">{multiParagraph(value.event.speaker_f)}</div>
                      </div>
                      ) : null
                  }
                  {
                    venue ? (
                      <div className="Schedule-categoryIcon" data-venue={venue}
                           title={`Toggle venue "${venue}"`}
                           onClick={this.toggleVenue.bind(this, venueObj[venue].index)}
                           ><span>{venue}</span></div>

                    ) : null
                  }
                </div>
              </a>
            }
          }
        }
      </div>
    );
  }
}

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    showSession: false,
    venueOn: false,
    mobileFilterOn: false,
    venues: venues.map(venue => ({...venue, active: false})),
    currentSection: (new Date().toDateString() === DAY_2) ? "day2" : "",
    currentSection: (new Date().toDateString() === DAY_3) ? "day3" : "",
    currentSession: () => ({}),
    currentSessionTime: null,
    };
  }

  componentDidMount() {
    const { hash } = this.props.location;

    this.setState({currentSection: (new Date().toDateString() === DAY_2) ? "day2" : ""});
    this.setState({currentSection: (new Date().toDateString() === DAY_3) ? "day3" : ""});

    if (hash) {
      setTimeout(() => document.getElementById(hash.replace('#', 'slot-')).scrollIntoView(false), 300);
      const dataArray = hash.replace('#', '').split('-');
      const value = schedules[getLocale()][dataArray[0]][dataArray[2]];
      this.setState({
        showSession: true,
        currentSession: () => schedules[getLocale()][dataArray[0]][dataArray[2]].event,
        currentSessionTime: value.time
      });
    }
  }

  setSession(value, time) {
    this.setState({
      showSession: true,
      currentSession: value,
      currentSessionTime: time,
    })

    document.body.classList.add(styles.mobileScrollLock);
  }
  resetSession = () => {
    this.setState({
      showSession: false,
      currentSession: () => ({}),
      currentSessionTime: null,
    })
    document.body.classList.remove(styles.mobileScrollLock);
  };
  setSection(currentSection) {
    console.log(currentSection);
    window.scrollTo(this._root.offsetLeft, this._root.offsetTop);
    this.setState({ currentSection });
  }
  toggleVenue = id => {
    let venues = this.state.venues.slice(0);
    venues[id] = {...venues[id], active: !venues[id].active}
    this.setState({venues, venueOn: true})
    window.scrollTo(this._root.offsetLeft, this._root.offsetTop);
  }
  clearVenue = () => {
    this.setState({
      venues: venues.map(venue => ({...venue, active: false})),
      venueOn: false
    })
    window.scrollTo(this._root.offsetLeft, this._root.offsetTop);
  }
  toggleMobileFilter = () => {
    this.setState({mobileFilterOn: !this.state.mobileFilterOn})
  }
  render () {
    return (
      <div className={styles.root} ref={c => this._root = c}>
       <div className={styles.container}>
        <h2>Agenda</h2>
        <div className={styles.orange_dateline}>
          <span className={styles.grey}>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span className={styles.grey}>14</span>
          <span className={styles.grey}>15</span>
          <span className={styles.grey}>16</span>
        </div>
        <h1>TICTeC@Taipei</h1>
       </div>
        <StickyContainer>
          <div className={styles.container}>
            <div className={cx({
              "Home-filter": true,
            })}>
              <Sticky topOffset={-60} stickyStyle={{marginTop: 60}}>
                <Filter
                  title='venues'
                  data={this.state.venues}
                  filterOn={this.state.venueOn}
                  toggleCategoryHandler={this.toggleVenue}
                  clearCategoryHandler={this.clearVenue}
                />
              </Sticky>
            </div>
            <div className={cx({
              "Home-schedule": true,
              "with-session" : this.state.showSession,
            })}>
              <div className={`Schedule`}>
                <Sticky topOffset={-60} stickyStyle={{marginTop: 60}}>
                  <div className={cx({
                      "Schedule-title" : true,
                      "with-session" : this.state.showSession,
                      "without-session" : !this.state.showSession
                    })}>

                    <div className="Schedule-dayButtonLeftstop">
                      <div className={cx({
                             "Schedule-dayButton" : true,
                             "is-active" : this.state.currentSection === "day0"
                           })}
                           onClick={this.setSection.bind(this, 'day0')}>Day 0</div>
                    </div>
                    <div className={cx({
                           "Schedule-dayButton" : true,
                           "is-active" : this.state.currentSection === "day1"
                         })}
                         onClick={this.setSection.bind(this, 'day1')}>Day 1</div>
                    <div className={cx({
                           "Schedule-dayButton" : true,
                           "is-active" : this.state.currentSection === "day2"
                         })}
                         onClick={this.setSection.bind(this, 'day2')}>Day 2</div>
                    <div className={cx({
                           "Schedule-dayButton" : true,
                           "is-active" : this.state.currentSection === "day3"
                         })}
                         onClick={this.setSection.bind(this, 'day3')}>Day 3</div>

                    <div className="Schedule-switchBtn" onClick={this.props.onSwitch}>View Parallel</div>
                  </div>
                  
                </Sticky>
                <div
                  className={cx({
                    "Home-section": true,
                    "is-hidden": this.state.currentSection !== ''&& this.state.currentSection !== 'day0'
                  })}
                  ref={(c) => this.day0 = c}
                  id="day0"
                >
                  <div className="Schedule-day">9/10 (Sun.)</div>
                  <section>
                    {schedules[getLocale()]["day0"].map(mapTimeSlotToItems.bind(this, 0))}
                  </section>
                </div>
                <div
                  className={cx({
                    "Home-section": true,
                    "is-hidden": this.state.currentSection !== ''&& this.state.currentSection !== 'day1'
                  })}
                  ref={(c) => this.day1 = c}
                  id="day1"
                >
                  <div className="Schedule-day">9/11 (Mon.)</div>
                  <section>
                    {schedules[getLocale()]["day1"].map(mapTimeSlotToItems.bind(this, 1))}
                  </section>
                </div>
                <div
                  className={cx({
                    "Home-section": true,
                    "is-hidden": this.state.currentSection !== '' && this.state.currentSection !== 'day2'
                  })}
                  ref={(c) => this.day2 = c}
                  id="day2"
                >
                  <div className="Schedule-day">9/12 (Tue.)</div>
                  <section>
                    {schedules[getLocale()]["day2"].map(mapTimeSlotToItems.bind(this, 2))}
                  </section>
                </div>
                <div
                  className={cx({
                    "Home-section": true,
                    "is-hidden": this.state.currentSection !== '' && this.state.currentSection !== 'day3'
                  })}
                  ref={(c) => this.day3 = c}
                  id="day3"
                >
                  <div className="Schedule-day">9/13 (Wed.)</div>
                  <section>
                    {schedules[getLocale()]["day3"].map(mapTimeSlotToItems.bind(this, 3))}
                  </section>
                </div>
                
              </div>
            </div>
            <div className={cx({
                "Home-session" : true,
                "is-show": this.state.showSession,
              })}>
              <Session
                sessionHandler={this.resetSession}
                data={this.state.currentSession()}
                time={this.state.currentSessionTime}
                categories={venues}
              />
            </div>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
          </div>
        </StickyContainer>
        <div className={cx({
          backdrop: true,
          isShown: this.state.showSession,
        })} onClick={this.resetSession} />
      </div>
    );
  }
}

export {default as ScheduleParallel} from './parallel'
