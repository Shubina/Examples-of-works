// STICKY HEADER
$(window).scroll(function() {
if ($(this).scrollTop() > 1)
    $('header').addClass("sticky");
  else $('header').removeClass("sticky");
});



















// MAP
function initMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 17, // уровень приближения
		center: {lat: -33.8666, lng: 151.1958},
		mapTypeId: google.maps.MapTypeId.ROADMAP, // тип карты ROADMAP, SATELLITE, HYBRID или TERRAIN
		//disableDefaultUI: true,
		// или
		mapTypeControl: false, // переключатель типа карты - ROADMAP, SATELLITE, HYBRID или TERRAIN
		streetViewControl: false, // человечек
		panControl: false, // круг с позиционированием
		zoomControl: false, // ползунок для масштабирования
		scaleControl: false // шкала масштаба
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	// стилизируем карту. https://snazzymaps.com/
	map.set('styles', 
		[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
	);

// Маркер
	var marker = new google.maps.Marker({
	map: map,
		// Define the place with a location, and a query string.
		place: {
			location: {lat: -33.8666, lng: 151.1958},
			query: 'Строка для определения'
		}
	});

	// Construct a new InfoWindow.
	var infoWindow = new google.maps.InfoWindow({
		content: 'Hello my friends :)'
	});

	// Opens the InfoWindow when marker is clicked.
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}


// Загружаем карту
google.maps.event.addDomListener(window, 'load', initMap);
