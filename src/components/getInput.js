import React, { Component } from 'react';
import classes from './getInput.css';
import loc from '../icons/loc.png';
import search from '../icons/search.png';
import celsius from '../icons/celsius.png';
import fahrenheit from '../icons/fahrenheit.png';
class showData extends Component {

  state={

  };


//<img src={celsius} className={classes.humidity}/> 



  render() {
    return (
      <div >
         <h2>Weather <span className={classes.h2Mid}>Information</span> App</h2>
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