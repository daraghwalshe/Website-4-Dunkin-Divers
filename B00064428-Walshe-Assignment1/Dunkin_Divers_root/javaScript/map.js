
/* **************************************************************** *
 *     Daragh Walshe        	B00064428    		Oct. 2014       *
 *     Rich Web Developent      Assignment_01				        *
 * **************************************************************** */


var rendererOptions = {
	draggable: true
};
var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
var directionsService = new google.maps.DirectionsService();
var map;

//some variables with latitude and logtitude
var howth = new google.maps.LatLng(53.390647, -6.071300);
var howthDive = new google.maps.LatLng(53.391824, -6.066622);
var mapCenter = new google.maps.LatLng(53.346809, -6.258926);
///////////////////////////////
var loc = $("#startLoc").val();
///////////////////////////////

function initialize() {

	var mapOptions = {
		zoom: 12,
		//center: mapCenter
		center: howth
	};

	//a new google map centered on howth harbour
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('directionsPanel'));

	//a listener to watch if a marker gets mooved
	google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
		computeTotalDistance(directionsDisplay.getDirections());
	});


	calcRoute();


		//contents of pop-up window
		var contentString = '<div id="content">'+
		  '<h2 id="firstHeading" class="firstHeading">Howth Harbour</h2>'+
		  '<p><img src="images/howthSmall.jpg" class="mapPic" alt="picture of howth"></p>' +
		  '<p><i>We are located on the West pier of the picturesque</br> ' +
		  'howth harbour, which is still a working fishing harbour.</i></p>'+
		  '</div>';

		var infowindow = new google.maps.InfoWindow({
		  content: contentString
		});

		var diveIcon = 'images/wink.png';

		//customised marker with diver image
		var marker = new google.maps.Marker({
		  position: howthDive,
		  map: map,
		  icon: diveIcon,
		  title: 'Howth Harbour'
		});

		//listener for the 'wink' marker
		google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
		});

}//end initialize


///////////////////////////////////////////////////////////
function calcRoute() {

	//two draggable markers with second one set on the dive club
	var request = {

		origin: ($("#startLoc").val()),
		//origin: '179 Howth Rd, Dublin',
		destination: '16 W Pier, Dublin',
		travelMode: google.maps.TravelMode.DRIVING,
	};

	//use google direction service to get the directions
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
		  directionsDisplay.setDirections(response);
		}
	});
}

//calculate the distance to the club
function computeTotalDistance(result) {
	var total = 0;
	var myroute = result.routes[0];
	for (var i = 0; i < myroute.legs.length; i++) {
		total += myroute.legs[i].distance.value;
	}
	total = total / 1000.0;
	document.getElementById('total').innerHTML = total + ' km';
}

google.maps.event.addDomListener(window, 'load', initialize);

//---------------------------------
//re-initalise with new loc string
$(document).ready(function() {
  	var loc;

  	$("#button").click(function(){
		loc = $("#startLoc").val();
		//alert("outerFunc: " + loc);
		initialize();
  		});
 });


