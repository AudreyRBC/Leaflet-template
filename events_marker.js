export function event_marker(marker, data, map){
  //hover open & close popup
  marker.addEventListener( 'mouseover',e => marker.openPopup() )
  //on click recenter the map
  marker.addEventListener('click', e => map.panTo(new L.LatLng(data.lat, data.lng)) )
}
