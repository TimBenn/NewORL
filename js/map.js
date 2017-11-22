var initMap = function () {
  var uluru = {
    lat: 36.196843,
    lng: -80.381694
  };
  var map = new google.maps.Map(document.querySelector('.map-container'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

export default initMap;
