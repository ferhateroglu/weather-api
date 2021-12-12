const request = require('request');
const il = process.argv[2];
const URL = 'http://api.weatherapi.com/v1/current.json?key=2fab9888c0ee43d3a53190750211012&q='+il+'&aqi=no';

if(!il){
    console.log('bölge argümanını girmeyi unuttunuz');
}
else{
    //({url:''},(response,error) =>{}); şeklinde parametre alır.
    request({url: URL,json:true }, (error,response) => {
        if(response.body.error.code ===1006){
            console.log('bölge bilgisi bulunamadı');
        }else{
            const {temp_c,wind_kph}=response.body.current;
            console.log(il+' ilinde hava: '+temp_c+' derece ');
            console.log('Rüzgar: '+ wind_kph+'km/s');
        }
        
    });
}
