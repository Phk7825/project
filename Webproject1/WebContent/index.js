function initMap() {
  // 지도 생성
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.5665, lng: 126.9780},
    zoom: 15
  });

  // 검색창 생성
  var input = document.getElementById('search-box');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // 검색 이벤트 핸들러 등록
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  // 이벤트 핸들러 등록: 마우스 오른쪽 클릭 시 마커 생성
  map.addListener('rightclick', function(event) {
    var marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });
  });

  // 장소 선택 이벤트 핸들러 등록
  var markers = [];
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();
  if (places.length == 0) {
    return;
  }
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
    if (!place.geometry) {
      console.log("Returned place contains no geometry");
      return;
    }

    markers.push(new google.maps.Marker({
      map: map,
      title: place.name,
      position: place.geometry.location
    }));

    // 마커 클릭 이벤트 핸들러 등록
    markers.forEach(function(marker) {
      marker.addListener('click', function() {
        var infowindow = new google.maps.InfoWindow({
          content: marker.title
        });
        infowindow.open(map, marker);
      });
    });

    if (place.geometry.viewport) {
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);
});
}

// 검색창 초기화
function initializeSearchBox() {
  var input = document.getElementById('search-box');
  var searchBox = new google.maps.places.SearchBox(input);
}