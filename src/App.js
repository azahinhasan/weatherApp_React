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
    city:'Chittagong',
    country: 'Bangladesh',
    cityFORSearch:'chittagong',
    countryFORSearch: 'bangladesh',
    tempType:'°C',
    fiveDaysTemp:[],
    fiveHoursTemp:[],
    trackLocation:false
  };


componentDidMount(){

  this.getInfo();
  this.getGeoInfo();
}


getInfo=()=>{
  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+this.state.cityFORSearch+','+this.state.cityFORSearch+'&appid=8eef13a1a5202c6c49a16bd128b1220c')  

  .then(response =>{
   console.log(response);
    this.setState({
      temp: response.data.main.temp,
      tempature: String((response.data.main.temp-273.15).toFixed(0)),
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



  axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.cityFORSearch+','+this.state.cityFORSearch+'&appid=8eef13a1a5202c6c49a16bd128b1220c')  
.then(response =>{

  console.log(response);

  const tempFive = response.data.list.slice(2,7);

  // console.log(tempFive);
  

  this.setState({fiveHoursTemp : tempFive});

  // console.log(this.state.fiveHoursTemp.dt_text);

  })
  .catch(error => {
      console.log(error);  //for hendeling error or failed 
      this.setState({error: true});
  });




  console.log("Historyrrr");
  //console.log(this.state.fiveHoursTemp.dt_txt);
  this.convertTOc();
}

convertTOc=()=>{

  if(this.state.tempType!='°C'){
    this.setState({tempature : String((this.state.temp-273.15).toFixed(0)) , tempType:'°C'})
  }

}

convertTOf=()=>{
  if(this.state.tempType!='°F'){
    this.setState({tempature : String(((this.state.temp-273.15)*9/5+32).toFixed(0))  , tempType:'°F'})
  }
  
}

setCity=(event)=>{
  this.setState({cityFORSearch: event.target.value});
}

setCountry=(event)=>{
  this.setState({cityFORSearch: event.target.value});
}




getGeoInfo = () => {
  axios.get('https://extreme-ip-lookup.com/json/').then((response) => {
      //console.log(response);
 if(this.state.trackLocation == true){
      this.setState({cityFORSearch : response.data.city , cityFORSearch:response.data.country ,trackLocation : false})
      this.getInfo();
 }
  }).catch((error) => {
      console.log(error);
  });

};

trackLocation=()=>{
  this.setState({trackLocation : true});
  this.getGeoInfo();
}


  render() {
    return (
      <div className={classes.App}>

{/*        
        <div className={classes.Datas}>
          <GetInput
            convertTOc={this.convertTOc}
            convertTOf={this.convertTOf}
            setCountry={this.setCountry}
            setCity={this.setCity}
            loadInfo={this.getInfo}
            getGeoInfo={this.trackLocation}
          />
          <ShowData
            state={this.state}
          />
        </div>
        <br/> */}
        {/* {this.state.fiveDaysTemp.map(p=>{
            console.log(p);
            console.log(p.dt_txt);
            console.log(p.main.temp);

        })} */}

        <p>Hello World</p>

      </div>
      
    );
  }
}

export default App;