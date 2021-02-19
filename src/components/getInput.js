import React, { Component } from 'react';
import axios from 'axios';
import classes from './getInput.css';
class showData extends Component {

  state={

  };






  render() {
    return (
      <div >
        <input type="text" onChange={this.props.setCity} className={classes.textBox}></input>
        <input type="text" onChange={this.props.setCountry} className={classes.textBox}></input>
        <br></br>
        <button onClick={this.props.loadInfo} className={classes.search}>Click</button>
        <br/>
        <button onClick={this.props.convertTOc} className={classes.button}>C</button>
        <span className={classes.divider}></span>
        <button onClick={this.props.convertTOf} className={classes.button}>F</button>
      </div>
      
    );
  }
}

export default showData;