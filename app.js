const request = require('request');
const URL = 'http://api.weatherapi.com/v1/current.json?key=2fab9888c0ee43d3a53190750211012&q=istanbul&aqi=no';

//({url:''},(response,error) =>{}); şeklinde parametre alır.
request({url: URL }, (error,ser) => {
    console.log(response);
});