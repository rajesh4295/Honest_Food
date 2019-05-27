const GeoJsonGeometriesLookup = require('geojson-geometries-lookup');
var geojson = require('../data/FullStackTest_DeliveryAreas.geo.json');
const glookup = new GeoJsonGeometriesLookup(geojson);

class searchGeo{

    geoLookup(long, lat){
        const point1 = {type: "Point", coordinates: [long, lat]};
        return glookup.getContainers(point1);
    }
    
}

module.exports = new searchGeo;

