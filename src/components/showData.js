import React, { Component } from 'react';
import axios from 'axios';
class showData extends Component {

  state={

  };






  render() {
    return (
      <div >

        <p>Hello</p>
        <p>{this.props.state.tempature-273.15}</p>
        <p>{new Date(this.props.state.sunRise*1000).toLocaleTimeString()}</p>
        <p>{new Date(this.props.state.sunSet*1000).toLocaleTimeString()}</p>

      </div>
      
    );
  }
}

export default showData;