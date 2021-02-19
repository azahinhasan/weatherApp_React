import React, { Component } from 'react';
import axios from 'axios';
import ShowData from './components/showData';
import GetInput from './components/getInput';
class App extends Component {

  state={
    tempature:0,
    maxTemp:0,
    minTemp:0,
    sunRise:0 ,
    sunSet:0,
    humidity:0,
    weather:'',
    city:'',
    country: ''
  };


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Dhaka,bd&appid=8eef13a1a5202c6c49a16bd128b1220c')  

            .then(response =>{
             console.log(response);
              this.setState({
                tempature: response.data.main.temp,
                sunRise : response.data.sys.sunrise,
                sunSet: response.data.sys.sunset,
                maxTemp: response.data.main.temp_max,
                minTemp: response.data.main.temp_min,
                weather: response.data.weather[0].main,
                city: response.data.name,
                country: response.data.sys.country
              
              });

            })
            .catch(error => {
                console.log(error);  //for hendeling error or failed 
                this.setState({error: true});
            });

            console.log(this.state.tempature)
}



  render() {
    return (
      <div >

        <GetInput/>
        <ShowData
        state={this.state}
        />


      </div>
      
    );
  }
}

export default App;