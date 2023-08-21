var myMap = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
     projection: 'EPSG:4326',
center: [-58.59403, -34.70298],
        zoom:16
    })
}); 

  //Marcadores con icono alojado en server  
var marcStyle = new ol.style.Style({
    image: new ol.style.Icon(({
        anchor: [0.5, 1],
        src: "https://norfipc.com/img/icon/marker-icon.png"
    }))
});

var marcador1 = new ol.layer.Vector({
source: new ol.source.Vector({
features: [new ol.Feature({
  geometry: new ol.geom.Point([-58.59403, -34.70298])              
      })]
  }), style: [marcStyle]
});  
myMap.addLayer(marcador1);