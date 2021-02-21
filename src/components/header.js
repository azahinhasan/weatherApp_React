import React, { Component } from 'react';
import axios from 'axios';
import classes from './showData.css';
class herderText extends Component {



  render() {
    return (
    <div className={classes.headerName}>
      <div className={classes.Line5}></div>
      <span className={classes.heraderText}>{this.props.header}</span>
      <div className={classes.Line25}></div>
    </div>
      
    );
  }
}

export default herderText;