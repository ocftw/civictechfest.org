import React, { Component } from "react";
import { Link } from "react-router";
import { StickyContainer, Sticky } from 'react-sticky';
import { getLocale } from "javascripts/locale";
import schedules from './schedules.json';
import categoriesData from './categories.json';
import styles from "./styles.css";
import Filter from "./filter";
import Session from './session';
import classNames from "classnames";
import classNamesBind from "classnames/bind";

const cx = classNamesBind.bind(styles);

const DATES = Array(
new Date(2017, 9, 10),
new Date(2017, 9, 11),
new Date(2017, 9, 12),
new Date(2017, 9, 13),
);

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

export default class ScheduleParallel extends Component {
  state = {
    showPanel: false,
    showSession: false,
    categoryOn: false,
    categories: categoriesData[getLocale()].map((cat, index) => ({...cat, index})),
    currentSession: () => ({}),
    currentSessionTime: null,
    currentSection: "",//TODO
  };
  defaultTitle = document.title;

  constructor() {
    super()

    this.togglePanel = this.togglePanel.bind(this)
    this.toggleCategory = this.toggleCategory.bind(this)
    this.clearCategory = this.clearCategory.bind(this)
    this.resetSession = this.resetSession.bind(this)
  }

  togglePanel() { // mobile filter
    this.setState({showPanel: !this.state.showPanel})
  }

  toggleCategory(index, e) {
    e.stopPropagation();
    var current = this.state.categories.slice(0);
    current[index] = Object.assign({}, current[index], {active: !current[index].active})

    var sum = current.reduce((pre, current)=>{
        if(current.active){
           return pre + 1;
        }else{
           return pre;
        }
    },0);
    var categoryOn = (sum > 0);

    this.setState({
        categories: current,
        categoryOn: categoryOn
    })
    window.scrollTo(this._root.offsetLeft, this._root.offsetTop);
  }

  setSession(value, time) {
    this.setState({
      showSession: true,
      currentSession: value,
      currentSessionTime: time,
    })

    document.body.classList.add(styles.mobileScrollLock);
  }

  resetSession() {
    this.setState({
      showSession: false,
      currentSession: () => ({}),
      currentSessionTime: null,
    })
    document.body.classList.remove(styles.mobileScrollLock);
  }

  clearCategory(){
    var current = this.state.categories.map((value,i)=>{
      return {
        ...value,
        active: false
      }
    });

    this.setState({
      categories: current,
      categoryOn: false
    })

    window.scrollTo(this._root.offsetLeft, this._root.offsetTop);
  }

  goToElement(refName){
    window.scrollTo(this.refs[refName].offsetLeft, this.refs[refName].offsetTop);
    this.setState({ currentSection: refName });
  }

  render() {
    const {categoryOn: filterOn, currentSession, showSession, categories, showPanel} = this.state

    const categoryObj = {}
    for(let category of categories) categoryObj[category.id] = category

    const shouldPassFilter = (categoryId) => {
      if(!filterOn) return true;
      if(!categoryId) return false;
      return categoryObj[categoryId] && categoryObj[categoryId].active;
    }

    const mapTimeSlotToItems = (day, value, i) => {
      var itemClasses = classNames({
        "Schedule-item" : true,
      })
      let event = () => schedules[getLocale()][`day${day}`][i].event;
      var content = "";
      if(value.event){ //single event
        if(!shouldPassFilter(value.event.category)) {
          return null;
        }

        let id = `day${day}-all-${i}`

        if(typeof value.event === 'string'){
          content = <div className="Schedule-event">{value.event}</div>
        }else{
          content = <a id={`slot-${id}`} href={`#${id}`}
            className={classNames({
              "Schedule-event" : true
            })}
            onClick={this.setSession.bind(this, event, value.time)}>
            <div className="Schedule-main">
              {value.event.title}
              <div className="Schedule-presenter">{value.event.speaker}</div>
            </div>
          </a>;
        }

      }else{ //multile events
        let filteredEvents = value.events.filter(v => shouldPassFilter(v.category));
        if(filteredEvents.length === 0) return null;

        content = (
          <div className="Schedule-events">
            {
              filteredEvents.map((v,k)=>{
                var venue = (v.event.venue) ? (
                        <div className="Schedule-meta">
                          <div className="Schedule-venue">{v.event.venue}</div>
                        </div>) : "";
                var id = `day${day}-${v.event.venue ? v.event.venue.toLowerCase() : "UNKNOWN"}-${i}`;


                if (v.expandable == false || typeof v.event === 'string' ) {
                  return (
                    <div className={classNames({
                       "Schedule-event" : true
                     })}
                     href={`#${id}`} key={k} id={`slot-${id}`}>
                    {venue}
                      <div className="Schedule-main">
                        <div>{ typeof v.event === 'string' ? v.event : v.event.title }</div>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <a className={classNames({
                       "Schedule-event" : true
                     })}
                     onClick={this.setSession.bind(this,() => v.event, value.time)}
                     href={`#${id}`} key={k} id={`slot-${id}`}>
                    {venue}
                    <div className="Schedule-main">
                      <div>{ typeof v.event === 'string' ? v.event : v.event.title }</div>
                      {
                        v.event.moderator ? (
                          <div>
                            <p>Moderator</p>
                            <div className="Schedule-presenter">{multiParagraph(v.event.moderator_f)}</div>
                          </div>
                          ) : null
                      }
                      {
                        v.event.speaker ? (
                          <div>
                            <p>Speaker</p>
                            <div className="Schedule-presenter">{multiParagraph(v.event.speaker_f)}</div>
                          </div>
                          ) : null
                      }
                      {
                        v.event.category && categoryObj[v.event.category] ? (
                          <div className="Schedule-categoryIcon" style={{
                                 "background" : categoryObj[v.event.category].color
                               }}
                               title={`Toggle topic "${categoryObj[v.event.category].title}"`}
                               onClick={this.toggleCategory.bind(this, categoryObj[v.event.category].index)}
                               ></div>
                        ):null
                      }
                    </div>
                    </a>
                  )
                }
              })
            }
          </div>
        );
      }


      let [timeStart, timeEnd] = value.time.split('-')
      return (
        <div className={itemClasses}
             key={i}>
          <div className="Schedule-time">
            {timeStart}<span className="Schedule-timeEnd"> - {timeEnd}</span>
          </div>
          {content}
        </div>
      )
    }

    const filterStyle = {}
    const sessionStyle = {}

    return (
      <div className={styles.root} ref={c => this._root = c}>
        <div className={styles.container}>
        <h2>Agenda</h2>
        <div className={styles.orange_dateline}>
          <span className={styles.grey}>9</span>
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
            <div className={classNames({
              "Home-filter": true,
            })} style={filterStyle}>
              /*
              <Sticky topOffset={-60} stickyStyle={{marginTop: 60}}>
                <Filter title="categories"
                        data={categories}
                        filterOn={filterOn}
                        toggleCategoryHandler={this.toggleCategory}
                        clearCategoryHandler={this.clearCategory}/>
              </Sticky>
              */
            </div>
            <div className={classNames({
              "Home-schedule": true,
              "with-session" : showSession,
            })}>
              <div className={`Schedule`}>
                <Sticky topOffset={-60} stickyStyle={{marginTop: 60}}>
                  <div className={classNames({
                      "Schedule-title" : true,
                      "with-session" : showSession,
                      "without-session" : !showSession
                    })}>
                    <div className="Schedule-dayButtonLeftstop"></div>
                    { DATES.map((day, index) => {
                        return (
                          <div className={classNames({
                                 "Schedule-dayButton" : true,
                                  "is-active" : this.state.currentSection === "day"+index
                               })}
                               onClick={this.goToElement.bind(this,"day"+index)}>Day {index}</div>
                        )
                                                })
                    }
                    <div className="Schedule-switchBtn" onClick={this.props.onSwitch}>View Topics</div>
                    <div className={classNames({
                           'Schedule-filterBtn': true,
                           'is-show': showPanel,
                         })}
                         onClick={this.togglePanel}>Filter
                      <div className={classNames({'Schedule-bar1': true, 'is-active': showPanel})}></div>
                      <div className={classNames({'Schedule-bar2': true, 'is-active': showPanel})}></div>
                    </div>
                  </div>
                  <div className={classNames({
                    'Schedule-filterPanel': true,
                    'is-show': showPanel,
                  })}>
                    <Filter ref="filter"
                            title="categories"
                            data={categories}
                            filterOn={filterOn}
                            toggleCategoryHandler={this.toggleCategory}
                            clearCategoryHandler={this.clearCategory}
                            togglePanelHandler={this.togglePanel}/>
                  </div>
                </Sticky>
                  { DATES.map((day, index) => {
                      return (
                      <div
                        className={cx({
                          "Home-section": true,
                          "is-hidden": this.state.currentSection !== ''&& this.state.currentSection !== 'day'+index
                        })}
                        ref={`day${index}`}
                        id={`day${index}`}
                      >
                        <div className="Schedule-day">{day.getMonth()}/{day.getDate()}</div>
                        <section>
                          {schedules[getLocale()]["day"+index].map(mapTimeSlotToItems.bind(this, index))}
                        </section>
                      </div>
                      )
                    })
                  }
              </div>
            </div>
            <div className={classNames({
                "Home-session" : true,
                "is-show": showSession,
              })}
              style={sessionStyle}>
              <Session sessionHandler={this.resetSession}
                       data={currentSession()} time={this.state.currentSessionTime}
                       categories={this.state.categories}/>
            </div>

          </div>
        </StickyContainer>
        <div className={cx({
          backdrop: true,
          isShown: showSession,
        })} onClick={this.resetSession} />
      </div>
    );
  }
  componentDidMount() {
    var anchor = document.location.hash.split('#')[1] || '';
    var node = document.getElementById(`slot-${anchor}`);
    if (node && node.click) { node.click(); }
  }
  componentWillUnmount() {
    document.body.classList.remove(styles.mobileScrollLock);
  }
};

var multilineText = (text) => {
  var arr = text.split('\n');
  var ret = [arr.shift()];
  for (let line of arr) {
    ret.push(<br/>);
    ret.push(line);
  }
  return ret;
}
