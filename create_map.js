import L from 'leaflet';

import {create_layer_map} from './create_layer_map.js';
import {create_layer_group} from './create_layer_group.js';
import {create_markers} from './create_marker.js';

//params map
const center_map = [34.704803, -85.281898];
const zoom_map = 5;
const map_url = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';


const map_setting = L.map('map',{
  center : center_map,
  zoom : zoom_map,
  doubleClickZoom : false,
  scrollWheelZoom : false,
})

//params markers





export function create_map(map_setting){
  create_layer_map(map_url, "map", 15, map_setting)
  create_markers(map_setting)
}














create_map(map_setting)
