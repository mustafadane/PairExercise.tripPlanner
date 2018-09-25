const mapboxgl = require('mapbox-gl')

module.exports = (type, coordinates) => {
  let markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === "activity") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  if (type === "hotel") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  if (type === "restaurant") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
};
