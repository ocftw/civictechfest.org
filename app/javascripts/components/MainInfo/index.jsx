import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import header from "jsons/header.json";
import styles from "./styles.css";
import about from "./about.css";

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
			<article className={styles.relative} data-wide="true">
			  <div className={styles.brief}>
			    <p>Asia’s first ever civic technology festival with  a week-long collection of events.</p>
			  </div>
			  <div className={styles.dateline}>
			  	<ul>
			  		<li><a><span>Sep.</span><p>Events</p></a></li>
			  		<li><a><span>9</span><span>10</span><p></p></a></li>
			  		<li><a><span>11</span><p>Civic Tech Grant DEMO Party</p></a></li>
			  		<li className={styles.main}><a><span>11</span><span>12</span><span>13</span><p>TICTeC</p><h6>alongside with WCIT</h6></a></li>
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
						<img className={styles.logo} src={require(`file!images/sponsors/tictec.jpg`)} />
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
						<span><i className={styles.colorTICC}>place</i>TICC</span>
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
