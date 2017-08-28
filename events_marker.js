export function event_marker(marker, data, map){
  //hover open & close popup
  marker.addEventListener( 'mouseover',e => marker.openPopup() )
  marker.addEventListener( 'mouseout',e => marker.closePopup() )

  //on click recenter the map
  return marker.addEventListener('click', e => map.panTo(new L.LatLng(data.lat, data.lng)) )
}
