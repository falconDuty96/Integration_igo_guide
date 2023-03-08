function initMap() {
    const myLatLng = { lat: 51.508742, lng: -0.120850};
    var mapProp = {
        center: new google.maps.LatLng(51.508742,-0.120850) ,
        zoom: 15 ,
    }
    var map = new google.maps.Map(document.getElementById("maps"),mapProp) ;

    var marker = new google.maps.Marker({
        position: myLatLng ,
    }) 

    marker.setMap(map) ;


}

window.initMap = initMap;
  
  
