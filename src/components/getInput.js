import React, { Component } from 'react';
import axios from 'axios';
class showData extends Component {

  state={

  };






  render() {
    return (
      <div >
        <input type="text"></input>
        <input type="text"></input>
        <br></br>
        <button>Click</button>
        <br/>
        <button onClick={this.props.convertTOc}>C</button>
        <button onClick={this.props.convertTOf}>F</button>
      </div>
      
    );
  }
}

export default showData;