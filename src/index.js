console.log('Index.js is working');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiY29sZGJyZXciLCJhIjoiY2ptaTRvcXQxMDE3azNrbW84a3JhdXl3cCJ9.F6nKu-kqSY6HwgosMeVR9w';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = buildMarker('restaurant', [-87.641, 41.895]);

marker.addTo(map);

// let markerDomEl = document.createElement('div');
// //markerDomEl.className = 'marker';
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
