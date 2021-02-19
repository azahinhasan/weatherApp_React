import React, { Component } from 'react';
import axios from 'axios';
class showData extends Component {

  state={

  };






  render() {
    return (
      <div >

        <p>{this.props.state.city},{this.props.state.country}</p>
        <div>{this.props.state.tempature-273.15} &#x2103;<br/>{this.props.state.weather}</div>
        <br/>
        {/* <div>High Temp: {this.props.state.maxTemp-273.15}</div>
        <div>High Temp: {this.props.state.minTemp-273.15}</div> */}
        <span>SunRise : {new Date(this.props.state.sunRise*1000).toLocaleTimeString()} </span>
        <span></span>
        <span>SunSet : {new Date(this.props.state.sunSet*1000).toLocaleTimeString()}</span>

      </div>
      
    );
  }
}

export default showData;