import React, { Component } from 'react';
import classes from './getInput.css';
import loc from '../icons/loc.png';
import search from '../icons/search.png';
class showData extends Component {

  state={

  };






  render() {
    return (
      <div >
         <h2>Weather Information App</h2>
        <input type="text" onChange={this.props.setCity} className={classes.textBox}></input>
        <input type="text" onChange={this.props.setCountry} className={classes.textBox}></input>
        
        <button onClick={this.props.loadInfo} className={classes.search}><img src={search} className={classes.searchAndLocathinIcon}/></button>
        <button onClick={this.props.getGeoInfo} className={classes.search}><img src={loc} className={classes.searchAndLocathinIcon}/></button>
        <br/>
        <button onClick={this.props.convertTOc} className={classes.button}>C</button>
        <span className={classes.divider}></span>
        <button onClick={this.props.convertTOf} className={classes.button}>F</button>
      </div>
      
    );
  }
}

export default showData;