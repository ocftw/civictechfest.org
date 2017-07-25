import React, { Component } from "react";
import { getLocale } from "javascripts/locale";
import styles from "./styles.css";
import ICON_G from "../../components/icon_g.jsx"

class Taipei extends Component {
  render() {
    return (
      <div className={styles.root}>
        <section className={styles.section}>
          <h2 className={styles.header}>Taipei</h2>
          
          <div>

          	<section className={styles.about}>
              <div className={styles.title}>
                <h3><ICON_G icon="sim" icontype="google"/> Apply Data SIM Card</h3>
                
              </div>
              <div className={styles.content}>
                
                    <div className={styles.desc}>
                      <p>
                      	At <a href="http://www.taoyuan-airport.com/english" target="_blank">Taoyuan (TPE) (Mostly International flights)</a> or <a href="http://www.tsa.gov.tw/tsa/en/home.aspx" target="_blank">Songshan (TSA) airport</a> you can buy Data SIM card from main carriers of Taiwan. Due to the law, you must have BOTH your passport AND your local ID or international driver license to buy one. 😞
                      </p>
                    </div>
                                 
              </div>
            </section>

            <h2 className={styles.header}>Taipei Transportation</h2>
            <section className={styles.about}>
              <div className={styles.title}>
                <h3><ICON_G icon="airplain" icontype="google"/> Airport</h3>
                
              </div>
              <div className={styles.content}>
                
                
                <div className={styles.howtogo}>
                    
                    <h4><ICON_G icon="airplain" icontype="google"/> Taoyuan (TPE) Airport</h4>
                    <hr />
                  
                    <div className={styles.desc}>
                      <p>
                      	The Taoyuan Airport metro just opened, you can find the sign “metro Taoyuan” in the airport. The route map as below, and the last stop “Taipei Main Station” can transfer to many lines which can arrive the hotel and CSCS venue. 
                      </p>
                    </div>
                    <div className={styles.map}>
                      <img src={require(`images/taipei/tyairport.jpg`)} />
                    </div>
                  
                </div>
                <div className={styles.floor}>
                  <h4><ICON_G icon="airplain" icontype="google"/> Songshan (TSA) Airport</h4>
                  <hr />
                  <div className={styles.flex}>
                    <div className={styles.desc}>
                      <p>
                      	This airport is mostly domestic flight and locates within the central Taipei. You can reach the brown (BR) line of Taipei MRT at Songshan (TSA) Airport.
                      	</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.about}>
              <div className={styles.title}>
                <h3><ICON_G icon="mrt" icontype="google"/> MRT</h3>
                
              </div>
              <div className={styles.content}>
                
                    
                  
                    <div className={styles.desc}>
                      <p>
                      	Beside the one-way ticket. You can buy EasyCard at any station, which is a rechargeable contactless card. If you will make 5+trips per day, you can buy Taipei pass -five days unlimited pass (for MRT and Buses) or 24hr Taipei Metro Pass (only for MRT). EasyCard credits are refundable (with some fees) so if you still have some credits left, remember to go to the MRT counter to apply for a refund. No eating or drinking is allowed inside the station or on the train.
					  </p>
					  <p>
						Taipei metro has 5 lines; you can get the full route map on the website. Few important stops are highlighted as below:
				      </p>
                    </div>
                    <div className={styles.map}>
                      <img src={require(`images/taipei/mrt.jpg`)} />
                    </div>
                  
                
              </div>
            </section>

            <section className={styles.about}>
              <div className={styles.title}>
                <h3>Others</h3>
                
              </div>
              <div className={styles.content}>
                
                
                <div className={styles.howtogo}>
                    <h4><ICON_G icon="taxi" icontype="google"/> Taxi</h4>
                    <hr />
                  
                    <div className={styles.desc}>
                      <p>
                      	You can hail down a taxi from the street. Starts at NT$70-90, but in some tourist sites, the price will be a little bit higher.
                      </p>
                    </div>
                    
                </div>
                <div className={styles.howtogo}>
                  <h4><ICON_G icon="bus" icontype="google"/> Buses</h4>
                  <hr />
                  <div className={styles.flex}>
                    <div className={styles.desc}>
                      <p>
                      	There are complete buses network, you can check the route by Google Maps, and you can always pay by EasyCard. 
                      </p>
                    </div>
                    
                  </div>
                </div>
                <div className={styles.floor}>
                  <h4><ICON_G icon="bike" icontype="google"/> YouBike</h4>
                  <hr />
                  <div className={styles.flex}>
                    <div className={styles.desc}>
                      <p>
                      	<a href="http://taipei.youbike.com.tw/en/f43.php" target="_blank">YouBike</a> allows commuters to rent bike from one station and return at another. To use YouBike, you will need an <a href="https://www.easycard.com.tw/english/easycard/buy.asp" target="_blank">EasyCard</a> that is available at all metro station information counters and convenience stores. You will also need to register your EasyCard to use YouBike at roadside kiosks upon your first use (not every YouBike parking spot has kiosk). It is a cozy, eco-friendly, convenient way to move in the city; however, be aware of the safety, the traffic is very busy in Taipei.
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </section>

      </div>
    );
  }
};

export default Taipei;
