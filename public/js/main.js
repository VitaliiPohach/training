var inputs = document.getElementsByClassName('input_text');

document.getElementById("registrationForm").addEventListener("submit", function(){
    var inpunValue = document.forms["registrationForm"]["firstName"].value;

    alert(inpunValue);
});


$( function() {
    $( "#datepicker" ).datepicker( $.datepicker.regional[ "uk" ] );
  } );



function initMap(){
    var myLatlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: 16,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions); 
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position)  {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              map.setCenter(pos);
            },
          );
        };

    var contentString = '<div id="content">'+myLatlng+'</div>';
    var infowindow = new google.maps.InfoWindow({content: contentString});

    google.maps.event.addListener(map, 'click', function(eventMap) { 
        var thisLatLng = eventMap.latLng.toString();
        thisLatLng = thisLatLng.slice(1,thisLatLng.length-1);
        var jsonReqest = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+thisLatLng+"&language=uk&key=AIzaSyCROkKbfxlac_qOIM5TRoW57QhSEYCVw-Q"

        jsonReqest=jsonReqest.toString();
        function getAdress() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var adress =this.responseText;
                    var a =  JSON.parse(adress)
                    for(var i=0;i<a.results.length;i++) {
                        var adress = a.results[i].formatted_address;
                        document.getElementById("adress").value = adress;
                            break;
                        };
                };
            };
        xhttp.open("GET",jsonReqest, true);
        xhttp.send();
        };
        getAdress();

    });}
