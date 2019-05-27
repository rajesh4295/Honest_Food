
var request = require('request');
var searchgeo = require('./searchGeoJSON');

class Controller{
    init(){
        return new Promise((resolve, reject) => {
            this.authKey = "672085920692515716990x2459"; //using free geocode service with limited hits
            this.url = "https://geocode.xyz/?scantext=";
            resolve();
        });
    }

    search(text){
        return new Promise((resolve, reject) => {
            var me = this;
            let searchURL = this.url+text+"&auth="+this.authKey+"&geoit=JSON";
            request.get(searchURL, (err, response, body) => { //Get latitude and longtitude of address
                if(err){
                    console.log(err)
                    reject(err);
                }
                body = JSON.parse(body);
                var feature = searchgeo.geoLookup(body.longt, body.latt); //Lookup GeoJSON for latt and long
               
                if(feature){
                    if(feature.features.length>0){
                        resolve(feature.features[0].properties.Name);
                    }
                    else{
                        resolve("No result found");
                    }
                }
            });
        }, err => {
            reject(err);
        });
    }
}

module.exports = new Controller;