// (function() {
//     'use strict'

//     angular
//         .module('ideaAng')
//         .controller('MapCtrl', function($scope, $http) {
//     $scope.map;
//     // $scope.infoBox = new google.maps.InfoWindow();
//     var mapContainer = document.getElementById('map');
//     mapContainer.style.width = '100%';
//     mapContainer.style.height = '300px';


//     var styles = [
//         {
//             "featureType": "administrative",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#444444"
//                 }
//             ]
//         },
//         {
//             "featureType": "landscape",
//             "elementType": "all",
//             "stylers": [
//                 {
//                     "color": "#f2f2f2"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "all",
//             "stylers": [
//                 {
//                     "visibility": "off"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "all",
//             "stylers": [
//                 {
//                     "saturation": -100
//                 },
//                 {
//                     "lightness": 45
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "all",
//             "stylers": [
//                 {
//                     "visibility": "simplified"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.arterial",
//             "elementType": "labels.icon",
//             "stylers": [
//                 {
//                     "visibility": "off"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit",
//             "elementType": "all",
//             "stylers": [
//                 {
//                     "visibility": "off"
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "all",
//             "stylers": [
//                 {
//                     "color": "#46bcec"
//                 },
//                 {
//                     "visibility": "on"
//                 }
//             ]
//         }
//     ];
 
//     $scope.initialize = function() {
//         var styledMap = new google.maps.StyledMapType(styles,
//             {name: "Styled Map"});
//         var mapOptions = {
//             center: new google.maps.LatLng(50.02875610389468, 36.215117052197456),
//             zoom: 13,
//             disableDefaultUI: true
//         };
//         $scope.map = new google.maps.Map(mapContainer, mapOptions);
        
//         $scope.map.mapTypes.set('map_style', styledMap);
        // $scope.map.setMapTypeId('map_style');
        // function initMap() { 
        // map = new google.maps.Map(document.getElementById('map'), { 
        // center: {lat: 48.464717, lng: 35.046183}, 
        // zoom: 10 
        // });
        // initMap() 
        // map.setOptions({styles: mapStyle});
            // }
        // };
// });
//     })()