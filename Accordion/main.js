
$(document).ready(function() {

	function close() {
		$('a').removeClass('active').siblings().slideUp()
	}

	$('ul').on('click', function(e) { 
		var $target = $(e.target); 
		if($target.is('active')) 
			close();
		else close();

		$target.addClass('active').siblings().slideDown();
	})

	


var str = "Завтрак в 09:00 23:25 54:70 13:67 1:15 26:27";
str.match(/(([01]\d)|(2[0-3])|\D\d)\:[0-5]\d/g);
// str.match(/\d\d\W\d\d/);
});