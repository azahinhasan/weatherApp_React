import React, { Component } from 'react';
import axios from 'axios';
import ShowData from './components/showData';
import GetInput from './components/getInput';
import classes from './App.css';
class App extends Component {

  state={
    temp:0,
    tempature:'',
    maxTemp:0,
    minTemp:0,
    sunRise:0 ,
    sunSet:0,
    humidity:0,
    weather:'',
    city:'',
    country: '',
    tempType:'f'
  };


  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Dhaka,bd&appid=8eef13a1a5202c6c49a16bd128b1220c')  

            .then(response =>{
             console.log(response);
              this.setState({
                temp: response.data.main.temp,
                tempature: String(response.data.main.temp-273.15)+ " °C",
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
            this.convertTOc();
}

convertTOc=()=>{

  if(this.state.tempType!='c'){
    this.setState({tempature : String((this.state.temp-273.15)+" °C") , tempType:'c'})
  }

}

convertTOf=()=>{
  if(this.state.tempType!='f'){
    this.setState({tempature : String(((this.state.temp-273.15)*9/5+32)+" °F")  , tempType:'f'})
  }
  
}

  render() {
    return (
      <div className={classes.App}>

        <div className={classes.Datas}>
          <GetInput
            convertTOc={this.convertTOc}
            convertTOf={this.convertTOf}
          />
          <ShowData
            state={this.state}
          />
        </div>



      </div>
      
    );
  }
}

export default App;