mapboxgl.baseApiUrl = 'https://api.mapbox.com';
mapboxgl.accessToken = "pk.eyJ1IjoibWFyaW5hdHJpcGV0c2thIiwiYSI6ImNrdW5zYWt5ejBid3EydWp0MmN6ZjllY3UifQ.lWUHjx3PTBDxLhv94nbYuw";
import refs from './refs.js';

const { contactSecMapContainer: mapContainer } = refs;


let map = new mapboxgl.Map({
  container: mapContainer, 
  style: "mapbox://styles/mapbox/light-v10?optimize=true", 
  center: [2.3364, 48.86091], 
    zoom: 16, 

});
 


map.addControl(new mapboxgl.NavigationControl());




const markerMain = new mapboxgl.Marker({ color: "black" })
  .setLngLat([2.3364, 48.86091])
  .addTo(map);
const marker2 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3333, 48.8602])
  .addTo(map);
const marker3 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3397, 48.8607])
  .addTo(map);
const marker4 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.333, 48.8619])
  .addTo(map);
const marker5 = new mapboxgl.Marker({ color: "gray" })
  .setLngLat([2.3365, 48.8625])
  .addTo(map);
