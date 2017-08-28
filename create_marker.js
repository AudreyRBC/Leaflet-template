import {template_pop_up} from './template-popup.js';
import {event_marker} from './events_marker.js';

const icon_url = "dist/images/pin.svg";
const icon_size = [38, 95]; 
const icon_anchor = [22, 94];
const pop_up_position = [-3, -76];

const data_markers = []

data_markers.push(
  {name: "LaFayette, GA, USA", lat: 34.704803,	lng: -85.281898},
  {name: "Brainerd, MN, USA", lat: 46.352673,	lng: -94.202011},
  {name: "Canton, GA, USA", lat: 34.234726,	lng: -84.4882975},
  {name: "Limestone, OK, USA", lat: 36.317890,	lng: -95.742416},
  {name: "Tullahoma, TN, USA", lat: 35.362022,	lng: -86.209435},
  {name: "Arnold, Annapolis, MD, USA", lat: 39.031719,	lng: -76.504326},
  {name: "Grayling, MI, USA", lat: 44.661404,	lng: -84.714752},
  {name: "Mt Holly, NJ, USA", lat: 39.993145,	lng: -74.787941},
  {name: "Star, ID, USA", lat: 43.692108,	lng: -116.493462},
  {name: "Marshville, NC, USA", lat: 34.988487,	lng: -80.367004},
  {name: "Glendora, CA, USA", lat: 34.136120,	lng: -117.865341},
  {name: "Cheboygan, MI, USA", lat: 45.650528,	lng: -84.476624},
  {name: "Pleasant Hill, LA, USA", lat: 31.819914,	lng: -93.514626},
  {name: "St. Augustine, FL, USA", lat: 29.901243,	lng: -81.312431},
  {name: "Crozet, VA, USA", lat: 38.069580,	lng: -78.700577},
)

let marker;

export function create_markers(map){
  const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     icon_size,
        iconAnchor:   icon_anchor,
        popupAnchor:  pop_up_position,
    }
  });

  const icon_param = new LeafIcon({iconUrl: icon_url})
  data_markers.forEach(data => {
    marker = L.marker([data.lat, data.lng], {
      icon: icon_param,
    })
    .addTo(map)
    .bindPopup(template_pop_up(data))

    event_marker(marker, data, map)
  })

}
