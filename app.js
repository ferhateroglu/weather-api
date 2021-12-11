const request = require('request');
const il = process.argv[2];
const URL = 'http://api.weatherapi.com/v1/current.json?key=2fab9888c0ee43d3a53190750211012&q='+il+'&aqi=no';
const ILLER = {
    "1": "ADANA",
    "2": "ADIYAMAN",
    "3": "AFYONKARAHISAR",
    "4": "AĞRI",
    "5": "AMASYA",
    "6": "ANKARA",
    "7": "ANTALYA",
    "8": "ARTVIN",
    "9": "AYDIN",
    "10": "BALIKESIR",
    "11": "BILECIKK",
    "12": "BINGÖL",
    "13": "BITLIS",
    "14": "BOLU",
    "15": "BURDUR",
    "16": "BURSA",
    "17": "ÇANAKKALE",
    "18": "ÇANKIRI",
    "19": "ÇORUM",
    "20": "DENIZLI",
    "21": "DİYARBAKIR",
    "22": "EDIRNE",
    "23": "ELAZIĞ",
    "24": "ERZINCAN",
    "25": "ERZURUM",
    "26": "ESKIŞEHIR",
    "27": "GAZIANTEP",
    "28": "GIRESUN",
    "29": "GÜMÜŞHANE",
    "30": "HAKKARİ",
    "31": "HATAY",
    "32": "ISPARTA",
    "33": "MERSIN",
    "34": "ISTANBUL",
    "35": "IZMIR",
    "36": "KARS",
    "37": "KASTAMONU",
    "38": "KAYSERI",
    "39": "KIRKLARELI",
    "40": "KIRŞEHIR",
    "41": "KOCAELI",
    "42": "KONYA",
    "43": "KÜTAHYA",
    "44": "MALATYA",
    "45": "MANISA",
    "46": "KAHRAMANMARAŞ",
    "47": "MARDİN",
    "48": "MUĞLA",
    "49": "MUŞ",
    "50": "NEVŞEHIR",
    "51": "NIĞDE",
    "52": "ORDU",
    "53": "RIZE",
    "54": "SAKARYA",
    "55": "SAMSUN",
    "56": "SIIRT",
    "57": "SINOP",
    "58": "SIVAS",
    "59": "TEKIRDAĞ",
    "60": "TOKAT",
    "61": "TRABZON",
    "62": "TUNCELİ",
    "63": "ŞANLIURFA",
    "64": "UŞAK",
    "65": "VAN",
    "66": "YOZGAT",
    "67": "ZONGULDAK",
    "68": "AKSARAY",
    "69": "BAYBURT",
    "70": "KARAMAN",
    "71": "KIRIKKALE",
    "72": "BATMAN",
    "73": "ŞIRNAK",
    "74": "BARTIN",
    "75": "ARDAHAN",
    "76": "IĞDIR",
    "77": "YALOVA",
    "78": "KARABüK",
    "79": "KILIS",
    "80": "OSMANİYE",
    "81": "DÜZCE"
}

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
