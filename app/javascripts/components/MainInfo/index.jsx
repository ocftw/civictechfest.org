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
					<img data-type={SideEvent.imgtype} src={require(`images/sideevents/${SideEvent.img}`)} />
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
				{ SideEvent.tab.map( (tab) => {
	        		return (
	        			<div>
	        				<span data-color={tab.tab_color}>{ tab.tab_name }</span>
	        				<br />
	        			</div>
			   			
			   		)
		          })}
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
						<p>{Speaker.title}</p>
						<p>{Speaker.organization}</p>
						<p>{Speaker.nation}</p>
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
				<h2>Sep. 10th - 16th<br/>Taipei, Taiwan</h2>
			</div>
		</div>
		<article className={styles.relative} data-wide="true">
		  <div className={styles.brief}>
		    <p>Asia&#39;s First Ever Civic Technology Festival with a week-long Collection of Events.</p>
		  </div>
		  <div className={styles.dateline}>
		  	<ul>
		  		<li className={styles.month}><span>Sep.</span><p>Events</p></li>
		  		<li><a><span>10</span><p>2017 SotM<br />Taiwan Summit</p></a></li>
		  		<li><a><span>10</span><p>Taiwan Open Gov.<br />Observation<br />Report Release</p></a></li>
		  	</ul>
		  	<ul>
		  		<li><a><span>11</span><p>Civic Tech Grant<br />Demo Party</p></a></li>
		  		<li className={styles.main}><a><span>11</span><span>12</span><span>13</span><p>TICTeC</p><h6>(alongside WCIT)</h6></a></li>
		  	</ul>
		  	<ul>
		  		<li><a><span>14</span><p>Creative Workshop<br /><br />Code for ALL Summit<br /><br /></p></a></li>
		  		<li><a><span>15</span><p>AODP Summit<br /><br />Data Bootcamp for NGOs</p></a></li>
		  		<li><a><span>16</span><p>g0v Hackathon</p></a></li>
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
					<p>Civic Tech Fest&#39;s main event is &quot;TICTeC@Taipei: The Impacts of Civic Technology Conference&quot;, co-organized by UK group &quot;mySociety&quot;. Started in 2015, TICTeC is the civic tech sector&#39;s annual research conference that focuses on the impacts of civic technology projects. This is the first time the conference has been held in Asia, making it a great opportunity to connect global civic tech actors from across the world.</p>
				<a className={styles.eventbtn} href="https://ocftw.kktix.cc/events/civictechfest2017" target="_blank"><span>Register Now</span></a>
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
					<span className={styles.tabblue}>alongside WCIT</span>
					<br />
					<span>Ticket</span>
				</div>
			</div>
			<div className={about.about}>
				<div className={about.title}>
					<h3>About WCIT 2017</h3>
					<a href="http://www.wcit2017.org/" target="_blank"><i className={about.icon}>home</i>www.wcit2017.org</a>
				</div>
				<div className={about.content}>
					<p>The 21st World Congress on Information Technology (WCIT 2017) is the parallel event of #CivicTechFest. It will be held at the same time and at the same location as TICTeC@Taipei and will be a really unique opportunity to showcase open government and civic tech initiatives to the wider IT industry.</p>
				</div>
			</div>
		</article>

		{ 
	      side_events[getLocale()].map( cat => {
	        return (
			<article id={cat.category} className={styles.container} key={cat.category}>

				<h2 className={styles.blue}>{cat.title}</h2>
				<div className={styles.blue_dateline}>
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

