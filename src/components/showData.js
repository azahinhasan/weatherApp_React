import React, { Component } from 'react';

import classes from './showData.css';
import HeaderText from './header';

import sunRise from './sunrises.png';

import sunset from '../icons/sunset.png';
import sunrise from '../icons/sunrise.png';
import humidity from '../icons/humidity.png';
import autumn from '../icons/autumn.png';
// import summer from '../icons/sunset.png';
// import snowing from '../icons/021-snowing-1.png';
// import rain from '../icons/021-rain-2.png';
// import loc from '../icons/loc.png';
// import search from '../icons/search.png';


class showData extends Component {

  state={
      time1temp:0,
      time1:0,
      time2temp:0,
      time2:0,
      time3temp:0,
      time3:0,
      time4temp:0,
      time4:0,
      time5temp:0,
      time5:0,
      i:0
  };




  render() {
    return (
      <div className={classes.allData}>
        <HeaderText header="Current Tempature"/>

        <p>{this.props.state.city},{this.props.state.country}</p>

        <div>
          <span className={classes.temp}>{this.props.state.tempature}</span>
          {this.props.state.tempType}
          <br/>{this.props.state.weather}
        </div>
        <br/>

        <HeaderText header="Humidity and Wind"/>
        <span><img src={humidity} className={classes.humidity}/>  {this.props.state.humidity-3}% </span>
        <span className={classes.space}></span>
        <span><img src={autumn} className={classes.humidity}/>  {this.props.state.wind}m/s</span>

        <br/>
        <HeaderText header="Sunrise and Sunset"/>
        <span><img src={sunrise} className={classes.sunRise}/>{new Date(this.props.state.sunRise*1000).toLocaleTimeString()}  </span>
        <span className={classes.space}></span>
        <span><img src={sunset} className={classes.sunSet}/> {new Date(this.props.state.sunSet*1000).toLocaleTimeString()}</span>
        <div>

        
        <HeaderText header="15 Hours Tempature"/>
        <table>
          <tbody>
            <tr>
              {this.props.state.fiveHoursTemp.map(p=>{

                return(

                  <th key={p.main.temp}>
                    <td>  
                      {this.props.state.tempType == "°C"? 
                      (p.main.temp-273.15).toFixed(0)+" °C" :
                      ((p.main.temp-273.15)*9/5+32).toFixed(0)+" °F"}
                    </td>
                    <td className={classes.timeTr}>
                      { ("0"+new Date(p.dt_txt).getHours()).slice(-2)}:{("0"+new Date(p.dt_txt).getMinutes()).slice(-2)}
                    </td>
                  </th>
                )
              })}
            </tr>
          </tbody>
        </table>

        </div>
      </div>
      
    );
  }
}

export default showData;