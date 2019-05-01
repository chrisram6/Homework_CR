//Earthquake info url
//var t_plates_url = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
var e_quakes_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


//Map Layers
var sat_layer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
  id: "mapbox.satellite",
  accessToken: API_KEY
});
var gray_layer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
  id: "mapbox.light",
  accessToken: API_KEY
});
var out_layer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 15,
  id: "mapbox.outdoors",
  accessToken: API_KEY
});

//Create Map
var baseMaps = {
    "Satellite": sat_layer,
    "Grayscale": gray_layer,
    "Outdoors": out_layer,
  };

  var finalMap = L.map("map", {
    center: [37.09, -95.71],
     zoom: 4,
     layers:[sat_layer, gray_layer, out_layer]
});



//Load url data
d3.json(e_quakes_url, function(data) {
   setFeatures(data.features);
});

//Create functions
function circleMarker( feature, latlng ){    
    let options = {
      radius: feature.properties.mag*2.3,
      fillColor: magColor(feature.properties.mag),
      color: "black",
      weight: 1,
      opacity: 1,
      fillOpacity: .5
    }
    return L.circleMarker( latlng, options );
}

function setFeatures(eq_d) {

    function setFeatures_2(feature, layer) {
   
     layer.bindPopup("<h3>" + feature.properties.place +
     "</h3><hr>Magnitude: " + feature.properties.mag +
     "<p>" + new Date(feature.properties.time) + "</p>");;
     }
   
   var e_quake = L.geoJSON(eq_d, {pointToLayer: circleMarker,
     setFeatures_2: setFeatures_2
  }).addTo(finalMap)
   
 createMap(e_quake);
 }



//Give mag values, color
function magColor(mag) {
    if (mag >= 5) {
        return "darkred";
    }   else if (mag > 4) {
            return "red";
    }   else if (mag > 3) {
            return "orange";
    }   else if (mag > 2) {
            return "yellow";
    }   else if (mag > 1) {
            return "green"
    }   else {
            return "lightgreen"
    }
};

//Final Mapping w/layers
function createMap(e_quake) {
    // Create overlay 
    var mapOverlay = {
      Earthquakes: e_quake,
    };
    // Add the layer control to the map
    L.control.layers(baseMaps, mapOverlay, {
      collapsed: false
    }).addTo(finalMap)
}
