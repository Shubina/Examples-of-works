(function () {
	
	function animateHov(elem){
		elem.addClass("animated " + "flipInX").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			 elem.removeClass("animated " + "flipInX");
		})
	};
	function animateCl(elem){
		elem.addClass("animated " + "flipOutX").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			 elem.removeClass("animated " + "flipOutX");
		})
	}
	$(document).ready(function () {
	$(".butn").mouseenter(function() {
		animateHov($(this));
	});
	$(".butn").click(function() {
		animateCl($(this));
	});
	});


	$(document).ready(function() {
	$('.click').click( function(event){
		alignCenter($('.popup'));
		 $(window).resize(function() {
    	alignCenter($('.popup'));
  		})
		$('.popup').fadeIn(400,
		 	function(){
				$('.popup')
					.css('display', 'block')
					.animate({opacity: 1}, 500);
		});
	});
	$('.popup').click( function(){
		$('.popup')
			.animate({opacity: 0}, 500,
				function(){
					$(this).css('display', 'none');
				}
			);
	});
  function alignCenter(elem) {
    elem.css({
    	width: $(window).width() + 'px',
    	height: $(window).height() + 'px'
    })
  }



	$('.estimate').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400,
		 	function(){
				$('.popup-free')
					.css({	"display": "-webkit-flex",
							"display": "-moz-flex",
							"display": "-ms-flex",
							"display": "flex"})
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('.popup-close, .overlay').click( function(){
		$('.popup-free')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);
	});




  $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.services').find('.services-content').removeClass('active').eq($(this).index()).addClass('active');
  });


});

})();

