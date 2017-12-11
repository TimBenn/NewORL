var map = new GMaps({
    div: '#map',
    lat: 36.196843,
    lng: -80.381694,
    zoom: 16,
    styles: {
        featureType: 'poi.business',
        stylers: [{visibility: 'off'}]
    }
});

map.addMarker({
    lat: 36.196843,
    lng: -80.381694,
    title: 'Old Richmond Lights'
});