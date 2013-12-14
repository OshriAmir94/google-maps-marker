/* 
 * Use only one global object!
 * All our variables and functions goes under this global object
 */
var MYMAP = new Object();


/* Variable to hold our Google Maps MAP object */
MYMAP.map = null;


/* An array to hold our Google Maps MARKER objects */
MYMAP.markers = new Array();


/* Our markers coordinate that we will plot on the map */
MYMAP.markersCoordinate = [
    { lat: 41.8240000000, lng: -71.4128000000 },
    { lat: 38.0000000000, lng: -97.0000000000 },
    { lat: 41.6933000000, lng: -71.6395000000 },
    { lat: 41.4878000000, lng: -73.0627000000 },
    { lat: 28.7578000000, lng: -81.3397000000 },
    { lat: 40.1658000000, lng: -74.0743000000 },
    { lat: 42.6590000000, lng: -71.4484000000 }
];


/**
 * Our main thread function
 *
 * Param    : - none
 * Return   : - (void)
 */
MYMAP.main = function() {
    MYMAP.initMap(MYMAP.markersCoordinate[0].lat, MYMAP.markersCoordinate[0].lng);

    for (var i = 0; i < MYMAP.markersCoordinate.length; i++) {
        MYMAP.addMarker(MYMAP.markersCoordinate[i].lat, MYMAP.markersCoordinate[i].lng);
    }
}


/**
 * Function to initialize Google Maps MAP object
 *
 * Param    : - lat (float)
 *              A latitude of default center coordinate
 *            - lng (float)
 *              A longitude of default center coordinate
 * Retrun   : - (void)
 */
MYMAP.initMap = function(lat, lng) {
    /* Get DIV element DOM object that would hold our map canvas */
    var mapCanvas = document.getElementById("map-canvas");

    /* Create Google Maps LatLng object which represent default center coordinate */
    var latlng = new google.maps.LatLng(lat, lng);

    /* Default map options */
    var mapOptions = {
        center      : latlng,       // Default map center coordinate
        zoom        : 4,            // Default zoom level
        mapTypeId   : 'roadmap'     // Default map type
    }

    /* Finaly initialize our google maps MAP object */
    MYMAP.map = new google.maps.Map(mapCanvas, mapOptions);
}


/**
 * Function to add a MARKER object to map
 *
 * Param    : - lat (float)
 *              Latitude coordinate of the marker
 *            - lng (float)
 *              Longitude coordinate of the marker
 * Return   : - (void)
 */
MYMAP.addMarker = function(lat, lng) {
    /* Create Google Maps LatLng object to represent our given coordinate */
    var latlng = new google.maps.LatLng(lat, lng);

    /* Finaly create our Google Maps MARKER object and store it in our array */
    var marker = new google.maps.Marker({
        position    : latlng,       // Our given coordinate
        map         : MYMAP.map     // Google Maps MAP object
    });

    MYMAP.markers.push(marker);
}

/* Add listener: when DOM is loaded, execute our main function! */
google.maps.event.addDomListener(window, 'load', MYMAP.main);
