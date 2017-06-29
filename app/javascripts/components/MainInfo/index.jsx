import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import header from "jsons/header.json";
import styles from "./styles.css";
import appli from "stylesheets/application.css"

class MainInfo extends Component {
  render() {
    return (
      <div className={styles.root}>
      	<div className={styles.banner}>
		  		<img className={styles.hero} src={require('./images/hero.jpg')} />
		  		<div className={styles.herotext}>
		  			<h1>#CivicTechFest</h1>
					<h2>Sep. 11th - 16th<br/>Taipei, Taiwan</h2>
				</div>
			</div>
			<article className={styles.relative}>
			  <div className={styles.brief}>
			    <p>Asia’s first ever civic technology festival with  a week-long collection of events.</p>
			  </div>
			  <div className={styles.dateline}>
			  	<ul>
			  		<li><a><span>Sep.</span><p>Events</p></a></li>
			  		<li><a><span>9</span><span>10</span><p>Code for Gender</p></a></li>
			  		<li className={styles.main}><a><span>11</span><span>12</span><span>13</span><p>TICTeC</p><h6>alongside with WCIT</h6></a></li>
			  		<li><a><span>14</span><p>Toolbox Hackathon<br />Code for ALL<br />AODP</p></a></li>
			  		<li><a><span>15</span><p>Democracy Forum</p></a></li>
			  		<li><a><span>16</span><p>g0v Hackthon</p></a></li>
			  	</ul>
			  </div>
			</article>
			<article className={styles.container}>
				<h2 className={styles.orange}>Main Event</h2>
				<div className={styles.mainevent}>
					<div className={styles.eventimg}>
						<img className={styles.logo} src={require(`file!images/sponsors/tictec.jpg`)} />
					</div>
					<div className={styles.eventcontent}>
						<h3>TICTeC @ Taipei</h3>
						<p>TICTeC (The Impacts of Civic Technology Conference) is an annual international conference that focuses on the impact of civic tech, and was first established in 2015 by the influential UK group “mySociety”. This conference aims to analyze and assess the development of civic tech, and focuses on studying the impact and effectiveness of civic tech under different social environments and political contexts. </p>
						<a className={styles.eventbtn}><span>Get Ticket !</span></a>
					</div>
					<div className={styles.eventdate}>						
						<div>
							<span>Sep.</span>
							<span>11</span><span>12</span><span>13</span>
						</div>
					</div>
					<div className={styles.venue}>
						<span><i className={styles.colorTICC}>place</i>TICC</span>
					</div>
					<div className={styles.tab}>
						<span className={styles.tabblue}>alongside with WCIT</span>
						<br />
						<span>Ticket</span>
					</div>
				</div>
			</article>

			<article className={styles.container}>

				<h2 className={styles.blue}>Side Events</h2>
				<div className={styles.blue_dateline}>
					<span>9</span>
					<span>10</span>
					<span className={styles.grey}>11</span>
					<span className={styles.grey}>12</span>
					<span className={styles.grey}>13</span>
					<span>14</span>
					<span>15</span>
					<span>16</span>
				</div>
				<div className={styles.sideevents} data-right="true">
					<div className={styles.overhidden}>
						<div className={styles.eventimg}>
							<img src="" />
						</div>
						<div className={styles.eventcontent}>
							<h3>TICTeC @ Taipei</h3>
							<p>This conference aims to analyze and assess the development of civic tech, and focuses on studying the impact and effectiveness of civic tech under different social environments and political contexts. </p>
							<a className={styles.eventbtn}><span>Sign up !</span></a>
						</div>
					</div>
					<div className={styles.eventdate}>						
						<div>
							<span>Sep.</span>
							<span>9</span><span>10</span>
						</div>
					</div>
					<div className={styles.venue}>
						<span><i className={styles.colorTICC}>place</i>TICC</span>
					</div>
					<div className={styles.tab}>
						<span>Free</span>
					</div>
				</div>

				<div className={styles.sideevents}>
					<div className={styles.overhidden}>
						<div className={styles.eventimg}>
							<img src="" />
						</div>
						<div className={styles.eventcontent} data-open="true">
							<h3>TICTeC @ Taipei</h3>
							<p>This conference aims to analyze and assess the development of civic tech, and focuses on studying the impact and effectiveness of civic tech under different social environments and political contexts. </p>
							<a className={styles.eventbtn}><span>Sign up !</span></a>
						</div>
					</div>
					<div className={styles.eventdate}>						
						<div>
							<span>Sep.</span>
							<span>14</span>
						</div>
					</div>
					<div className={styles.venue}>
						<span><i className={styles.colorTICC}>place</i>TICC</span>
					</div>
					<div className={styles.tab}>
						<span>Free</span>
					</div>
				</div>

				<div className={styles.sideevents} data-right="true">
					<div className={styles.overhidden}>
						<div className={styles.eventimg}>
							<img src="" />
						</div>
						<div className={styles.eventcontent}>
							<h3>TICTeC @ Taipei</h3>
							<p>This conference aims to analyze and assess the development of civic tech, and focuses on studying the impact and effectiveness of civic tech under different social environments and political contexts. </p>
							<a className={styles.eventbtn}><span>Sign up !</span></a>
						</div>
					</div>
					<div className={styles.eventdate}>						
						<div>
							<span>Sep.</span>
							<span>15</span>
						</div>
					</div>
					<div className={styles.venue}>
						<span><i className={styles.colorTICC}>place</i>TICC</span>
					</div>
					<div className={styles.tab}>
						<span className={styles.tabblue}>alongside with WCIT</span>
						<br />
						<span>Free</span>
					</div>
				</div>

			</article>

			<article className={styles.container} data-wide="true">

				<h2 className={styles.orange}>Keynote speakers</h2>
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

				<a className={styles.speakers}>
					<span className={styles.inner}>
							<span className={styles.avatar}>
								<span>
								<img src="" />
								</span>
							</span>
							<span className={styles.about}>
								<h3>Mathilde Bras</h3>
								<p>open government officer, Etalab, French</p>
							</span>
					</span>
					<span className={styles.venue}>
						<span>WCIT</span>
						<span>TICTeC</span>
					</span>
				</a>

				<a className={styles.speakers}>
					<span className={styles.inner}>
							<span className={styles.avatar}>
								<span>
								<img src="" />
								</span>
							</span>
							<span className={styles.about}>
								<h3>Mathilde Bras</h3>
								<p>open government officer, Etalab, French</p>
							</span>
					</span>
					<span className={styles.venue}>
						<span>WCIT</span>
						<span>TICTeC</span>
					</span>
				</a>

				<a className={styles.speakers}>
					<span className={styles.inner}>
							<span className={styles.avatar}>
								<span>
								<img src="" />
								</span>
							</span>
							<span className={styles.about}>
								<h3>Mathilde Bras</h3>
								<p>open government officer, Etalab, French</p>
							</span>
					</span>
					<span className={styles.venue}>
						<span>WCIT</span>
						<span>TICTeC</span>
					</span>
				</a>

				<a className={styles.speakers}>
					<span className={styles.inner}>
							<span className={styles.avatar}>
								<span>
								<img src="" />
								</span>
							</span>
							<span className={styles.about}>
								<h3>Mathilde Bras</h3>
								<p>open government officer, Etalab, French</p>
							</span>
					</span>
					<span className={styles.venue}>
						<span>TICTeC</span>
					</span>
				</a>

				<a className={styles.speakers}>
					<span className={styles.inner}>
							<span className={styles.avatar}>
								<span>
								<img src="" />
								</span>
							</span>
							<span className={styles.about}>
								<h3>Mathilde Bras</h3>
								<p>open government officer, Etalab, French</p>
							</span>
					</span>
					<span className={styles.venue}>
						<span>WCIT</span>
					</span>
				</a>

			</article>

     </div>
    );
  }
};

export default MainInfo;
