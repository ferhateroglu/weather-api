const request = require('request');
const URL = 'http://api.weatherapi.com/v1/current.json?key=2fab9888c0ee43d3a53190750211012&q=Mersin&aqi=no';

//({url:''},(response,error) =>{}); şeklinde parametre alır.
request({url: URL,json:true }, (error,response) => {
    const {temp_c,wind_kph}=response.body.current;
    console.log('Mersinde hava: '+temp_c+' derece ');
    console.log('Rüzgar: '+ wind_kph);
});