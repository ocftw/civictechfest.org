import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import header from "jsons/header.json";
import styles from "./styles.css";
import side_events from "jsons/side_events.json";
import about from "./about.css";
import keynote_speakers from "jsons/keynote_speakers.json";

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


export default class MainInfo extends Component {

  SideEvent = (SideEvent, i) => {
    return (
      	<div className={styles.sideevents}>
			<div className={styles.overhidden}>
				<div className={styles.eventimg}>
					<img data-type={SideEvent.imgtype} src={require(`file!images/sponsors/${SideEvent.img}`)} />
				</div>
				<div className={styles.eventcontent} data-open={SideEvent.isopen}>
					<h3>{SideEvent.name}</h3>
					{multiParagraph(SideEvent.desc)}

					<a data-islink={SideEvent.islink} href={SideEvent.url} target="_blank" className={styles.eventbtn}><span>{SideEvent.urlname}</span></a>
				</div>
			</div>
			<div className={styles.eventdate}>
									
				<div>
					<span>Sep.</span>
					{ SideEvent.date.map( (date) => {
		        		return (
				   			<span>{ date }</span>
				   		)
			          })}
				</div>
				
			</div>
			<div className={styles.venue}>
				<span><i data-color={SideEvent.venue_color}>place</i>{SideEvent.venue}</span>
			</div>
			<div className={styles.tab}>
				<span>{SideEvent.tab}</span>
			</div>
		</div>
    );
  };

  Speaker = (Speaker, i) => {
    return (
      	<a className={styles.speakers}>
			<span className={styles.inner}>
					<span className={styles.avatar}>
						<span>
						<img src={require(`${Speaker.avatar}`)} />
						</span>
					</span>
					<span className={styles.about}>
						<h3>{Speaker.name}</h3>
						<p>{Speaker.title}, {Speaker.organization}, {Speaker.nation}</p>
					</span>
			</span>
			<span className={styles.venue}>
				{ Speaker.event.map( (event) => {
	        		return (
			   			<span>{ event }</span>
			   		)
		        })}
			</span>
		</a>
    );
  }

  render() {
    return (
      <div className={styles.root}>
      	<div className={styles.banner}>
      		<div className={styles.heroimg}>
	  			<img className={styles.hero} src={require('./images/hero.jpg')} />
	  			<img className={styles.shero} src={require('./images/banner_phone.jpg')} />
	  		</div>
	  		<div className={styles.herotext}>
	  			<h1>#CivicTechFest</h1>
				<h2>Sep. 11th - 16th<br/>Taipei, Taiwan</h2>
			</div>
		</div>
		<article className={styles.relative} data-wide="true">
		  <div className={styles.brief}>
		    <p>Asia’s first ever civic technology festival with  a week-long collection of events.</p>
		  </div>
		  <div className={styles.dateline}>
		  	<ul>
		  		<li className={styles.month}><a><span>Sep.</span><p>Events</p></a></li>
		  		<li><a><span>9</span><span>10</span><p></p></a></li>
		  		<li><a><span>11</span><p>Civic Tech Grant DEMO Party</p></a></li>
		  		<li className={styles.main}><a><span>11</span><span>12</span><span>13</span><p>TICTeC</p><h6>alongside with WCIT</h6></a></li>
		  	</ul>
		  	<ul>
		  		<li><a><span>14</span><p>Asia Open Data Hackthon<br />Code for ALL</p></a></li>
		  		<li><a><span>15</span><p></p></a></li>
		  		<li><a><span>16</span><p>g0v Hackthon</p></a></li>
		  	</ul>
		  </div>
		</article>
		<article className={styles.container}>
			<h2 className={styles.orange}>Main Event</h2>
			<div className={styles.mainevent}>
				<div className={styles.eventimg}>
					<img data-type="logo" src={require(`file!images/sponsors/tictec.jpg`)} />
				</div>
				<div className={styles.eventcontent}>
					<h3>TICTeC @ Taipei</h3>
					<p>The main highlight for the Civic Tech Fest is “TICTeC@Taipei: The Impacts of Civic Technology Conference”, co-organized by UK group “mySociety”. TICTeC is an annual international conference that focuses on the impact of civic tech since 2015 and will be hold in Asia in the first time. TICTeC@Taipei is a great opportunity to connect global network in the Asia base. </p>
					<a className={styles.eventbtn} href="https://ocftw.kktix.cc/events/civictechfest2017" target="_blank"><span>Get Ticket !</span></a>
				</div>
				<div className={styles.eventdate}>						
					<div>
						<span>Sep.</span>
						<span>11</span><span>12</span><span>13</span>
					</div>
				</div>
				<div className={styles.venue}>
					<span><i data-color="1">place</i>TICC</span>
				</div>
				<div className={styles.tab}>
					<span className={styles.tabblue}>alongside with WCIT</span>
					<br />
					<span>Ticket</span>
				</div>
			</div>
			<div className={about.about}>
				<div className={about.title}>
					<h3>About WCIT 2017 TAIWAN</h3>
					<a href="http://www.wcit2017.org/" target="_blank"><i className={about.icon}>home</i>www.wcit2017.org</a>
				</div>
				<div className={about.content}>
					<p>The 21st World Congress on Information Technology (WCIT 2017) is the parallel event of #CivicTechFest. It is held in the same time and at same location as TICTeC@Taipei and will be a really unique opportunity to showcase open government and civic tech initiatives to the wider IT industry.</p>
				</div>
			</div>
		</article>

		{ 
	      side_events[getLocale()].map( cat => {
	        return (
			<article id={cat.category} className={styles.container} key={cat.category}>

				<h2 className={styles.blue}>{cat.title}</h2>
				<div className={styles.blue_dateline}>
					<span>9</span>
					<span>10</span>
					<span>11</span>
					<span className={styles.grey}>12</span>
					<span className={styles.grey}>13</span>
					<span>14</span>
					<span>15</span>
					<span>16</span>
				</div>					
		    	<div>
	            { cat.side_events.map(this.SideEvent) }
				</div>
			</article>
			)
          }) 
        }


        { 
	      keynote_speakers[getLocale()].map( cat => {
	        return (
			<article id={cat.category} className={styles.container} key={cat.category} data-wide="true">

				<h2 className={styles.orange}>{cat.title}</h2>
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

				<div>
				{ cat.keynote_speakers.map(this.Speaker) }
				</div>
			</article>
			)
          }) 
        }
			

     </div>
    );
  }
};

