import React, { Component } from 'react';
import axios from 'axios';
import classes from './showData.css';
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
        <div>

        {
        this.props.state.fiveDaysTemp.map(p=>{

          switch(this.state.i) {
            case 0:
              // code block
              this.setState({i : 1});
              break;
            case 1:
              // code block
              this.setState({i : 2});
              break;
            case 2:
                // code block
                this.setState({i : 3});
                break
              case 3:
                  // code block
                  this.setState({i : 4});
                  break
              case 4:

                this.setState({i : 5});
                break;
              case 5:
                this.setState({i : 6});
                break;
            default:
              //this.setState({i : 0});
              // code block
          }
          return(
            // <table dir="rtl">
            //   <td>
            //     <tr>
            //     {p.dt_txt}
            //     </tr>
            //     <tr>
            //     {p.main.temp}
            //     </tr>
            //   </td>
            // </table>
            // console.log(p);
            // console.log(p.dt_txt);
            // console.log(p.main.temp);
            <div>
              <span>{p.dt_txt} |||<br/> {p.main.temp} <nobr/></span>
            </div>

            
          )

        })}

        </div>
      </div>
      
    );
  }
}

export default showData;