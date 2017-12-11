var map = new GMaps({
    div: '#map',
    lat: 36.196843,
    lng: -80.381694,
    zoom: 16,
    styles: styles['hide']
});

map.addMarker({
    lat: 36.196843,
    lng: -80.381694,
    title: 'Old Richmond Lights'
});

{styles: styles['hide']}

var styles = {
    hide: [
      {
        featureType: 'poi.business',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{visibility: 'off'}]
      }
    ]
  };