import axios from 'axios';
//npm install --save axios


const instance=axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=8eef13a1a5202c6c49a16bd128b1220c'

});

export default instance;