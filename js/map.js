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

var map = new GMaps({
    div: '#map',
    lat: 36.196843,
    lng: -80.381694,
    zoom: 16
});

map.addMarker({
    lat: 36.196843,
    lng: -80.381694,
    title: 'Old Richmond Lights'
});

map.setOptions({styles: styles['hide']});