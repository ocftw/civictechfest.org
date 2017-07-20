import React from "react";
import classNames from "classnames";
import "./session.css";
import presenters from '../SpeakerList/presenters.json';
import schedules from './schedules.json';
import categories from './categories.json';
import { getLocale, getString } from "javascripts/locale";
import avatarURL from "javascripts/helpers/avatar";
import styles from "./styles.css";
import helptext from "./helptext.json";


var multiParagraph = (text, className) => {
  if (!text) {
    return [];
  }
  var arr = text.split('\n');
  var ret = [];
  for (let i in arr) {
    let line = arr[i];
    ret.push(<p key={i} dangerouslySetInnerHTML={{__html: line}}></p>);
  }
  return ret;
}


var by_name = {};

presenters["en-US"].forEach((speaker) => {
  if (speaker.name_zh) {
    by_name[speaker.name_zh] = speaker;
  }
  by_name[speaker.name] = speaker;
});

export default React.createClass({
  displayName: "Session",

  render() {
    var {sessionHandler, data, time} = this.props;
    var category = categories[getLocale()].find(cat => cat.id === data.category);
    var venue = (data.venue) ? <div className="Session-venue">{data.venue}</div> : "";
    var language = (data.EN) ? <div className="Session-en">EN</div> : "";
    const [locale] = getLocale().split('-');

    var presenters = data.speaker_key ? data.speaker_key : data.speaker ? [data.speaker] : [];
    var moderators = data.moderator ? [data.moderator] : [];
    presenters.push(moderators);
    const speakers_bio = [];

    const presenters_profile = presenters.map( speaker => by_name[speaker] ).map( speaker => {
      const bio_text = ((speaker && getString(speaker, 'bio', locale)) || data.bio || '').replace(/\n/g, '<br/>');
      const speaker_title = speaker && getString(speaker, 'title', locale);
      const speaker_organization = speaker && getString(speaker, 'organization', locale);
      const speaker_name = speaker && getString(speaker, 'name', locale);
      const twitterID = speaker && getString(speaker, 'twitter', locale);
      const facebookID = speaker && getString(speaker, 'facebook', locale);
      const avatar = speaker ? avatarURL(speaker) : '';

      return <div className="Session-presenter" key={`speaker_${speaker_name}`}>
        <div className="Session-presenter-name">
            {speaker_name}
            { twitterID &&
              <a
                className="Session-twitter"
                href={`https://twitter.com/${twitterID}`}
                target="_blank"
              >
                <img
                  className="Session-social"
                  src={require('./twitter.png')}
                />
              </a>
            }
            { facebookID &&
              <a
                className="Session-facebook"
                href={`https://facebook.com/${facebookID}`}
                target="_blank"
              >
                <img
                  className="Session-social"
                  src={require('./fb.png')}
                />
              </a>
            }
        </div>
        <div className="Session-presenter-title">
            {speaker_title}
        </div>
        <div className="Session-presenter-organization">
            {speaker_organization}
        </div>
        { avatar && <img className="Session-presenter-avatar" src={avatar} /> }
        <hr />
        <div className="Session-presenter-biotext" key={`speaker_bio_${speaker_name}`}>
            <div>{bio_text}</div>
        </div>
      </div>;
    });

    if (time && presenters_profile.length ) {
      return (
          <div className="Session">
              <div className="Session-title">
                  {
                    category ? (
                      <div className="Session-category">
                        <div className="Session-categoryIcon" style={{
                               "background" : category.color
                             }}></div>
                        {category.title} - {category.tagline}
                      </div>
                    ) : null
                  }
                
                <h3>
                  {data.title}
                </h3>

                <div className="Session-close"
                   onClick={sessionHandler}></div>
              </div>
              <div className="Session-content">
                  <div className="Session-meta">
                    {venue}
                    <div className="Session-time">{time}</div>
                    {language}
                  </div>
                  
                  { data.abstract && <div className="Session-abstract">
                      <div className="Session-subTitle">Abstract</div>
                      <hr />
                      <div dangerouslySetInnerHTML={{__html: data.abstract}}></div>
                    </div>
                  }

                  <div className="Session-biography">
                    <div className="Session-subTitle">Biography</div>
                    { presenters_profile.map( profile => profile ) }
                  </div>
              </div>
          </div>
      );
    // nothing found in schedules_by_track.json,so display speaker.json's data instead
    // data = schedules[getLocale()][dataArray[0]][dataArray[2]].event
    }else if(data.value !== undefined) {
      const avatar = data ? avatarURL(data) : '';
      return (
        <div className="Session">
          <div style={{ color: '#FFF', backgroundColor: '#000', padding: '20px', textAlign: 'center'}}>{schedules[getLocale()].interpretation}
          </div>
            <div className="Session-close"
                 onClick={sessionHandler}></div>
            <div className="Session-content">
                <div className="Session-presenter" key={`speaker_${getString(data.value, 'name', locale)}`}>
                  <div className="Session-presenter-name">
                      {getString(data.value, 'name', locale)}
                  </div>
                  <div className="Session-presenter-title">
                      {getString(data.value, 'title', locale)}
                  </div>
                  <div className="Session-presenter-organization">
                      {getString(data.value, 'organization', locale)}
                  </div>
                  {avatar && <img className={styles.avatar} src={avatar}/>}
                </div>
                <div className="Session-biography" key={`bio_${data.value.bio}`}>
                    <div className="Session-subTitle">Biography</div>
                    <div dangerouslySetInnerHTML={{__html: getString(data.value, 'bio', locale)}}></div>
                </div>
            </div>
        </div>
      );
    }else {
      return <br />;
    }

  }
});
