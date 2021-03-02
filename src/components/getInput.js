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
        <input type="text" 
        onChange={this.props.setCity}
        className={classes.textBox}
        value={this.props.state.cityFORSearch}
        onClick={this.props.cityTextBox}
         />

        <input 
        type="text" onChange={this.props.setCountry} 
        className={classes.textBox}
        value={this.props.state.countryFORSearch}
        onClick={this.props.countryTextBox}/>
        
        <button onClick={this.props.loadInfo} className={classes.search}>
        <img src={search} className={classes.searchAndLocathinIcon}/>
        </button>
        
        <button onClick={this.props.getGeoInfo} className={classes.search}><img src={loc} className={classes.searchAndLocathinIcon}/></button>
        <br/>
        <button onClick={this.props.convertTOc} className={classes.button} disabled={Boolean(this.props.state.CbuttonClicked)}>C</button>
        <span className={classes.divider}></span>
        <button onClick={this.props.convertTOf} className={classes.button} disabled={Boolean(this.props.state.FbuttonClicked)}>F</button>
      </div>
      
    );
  }
}

export default showData;