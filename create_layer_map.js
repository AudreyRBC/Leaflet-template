export function create_layer_map(url, id_layer, max_zoom, map_setting){
  L.tileLayer(url, {
    id: id_layer,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: max_zoom,
  })
  .addTo(map_setting);
}
