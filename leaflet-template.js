//webpack import
import L from 'leaflet';

//params map
const center_map = [43.300000, 5.400000];
const zoom_map = 15;
const map_url = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
const map_setting = L.map('map',{
  center : center_map,
  zoom : zoom_map,
  doubleClickZoom : false,
  scrollWheelZoom : false,
})

//params markers
let icon_marker;
let marker;
const icon_url = "my_url";
const icon_size = [38, 95];
const icon_anchor = [22, 94];
const pop_up_position = [-3, -76];



export function create_map(map_setting){
  create_layer_map(map_url, "map", 15, map_setting)
  create_markers(map_setting)
}

function create_layer_map(url, id_layer, max_zoom, map_setting){
  L.tileLayer(url, {
    id: id_layer,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: max_zoom,
  })
  .addTo(map_setting);
}


function create_layer_group(marker){
  let markers = L.layerGroup(marker);
}

function create_markers(map){
  const LeafIcon = L.Icon.extend({
    options: {
        iconSize:     icon_size,
        iconAnchor:   icon_anchor,
        popupAnchor:  pop_up_position,
    }
  });

  const icon_param = new LeafIcon({iconUrl: icon_url})
  marker = L.marker(center_map, {
    icon: icon_param,
  })
  .addTo(map)
  .bindPopup(template_pop_up)
}

function template_pop_up(){
  const pop_up = '<div class="pop-up">'
                  + '<div>'
                      +'<p class="uk-article-title">Chimay</p>'
                      + '<p class="p-small">1 Place Léopold</p>'
                      + '<p class="p-small">6460 Chimay</p>'
                  +'</div>'
                  +'<a href="#"> See more </a>'
                +'</div>';
  return pop_up;
}


create_map(map_setting)
