import React, { Component } from 'react';
import axios from 'axios';
import classes from './showData.css';
class showData extends Component {

  state={

  };






  render() {
    return (
      <div className={classes.allData}>

        <p>{this.props.state.city},{this.props.state.country}</p>

        <div>
          <span className={classes.temp}>{this.props.state.tempature}</span>
          {this.props.state.tempType}
          <br/>{this.props.state.weather}
        </div>

        <br/>
        {/* <div>High Temp: {this.props.state.maxTemp-273.15}</div>
        <div>High Temp: {this.props.state.minTemp-273.15}</div> */}
        <span>SunRise : {new Date(this.props.state.sunRise*1000).toLocaleTimeString()} | </span>
        <span className={classes.space}></span>
        <span>SunSet : {new Date(this.props.state.sunSet*1000).toLocaleTimeString()}</span>

      </div>
      
    );
  }
}

export default showData;