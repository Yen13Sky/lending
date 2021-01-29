/*BURGER*/
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body',).toggleClass('active');
	$('body').toggleClass('lock');
});
/*=============================================================================*/
/*IBG*/
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();
/*=============================================================================*/
/*SLIDER SLICK*/
if ($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true;
		//infinite: folse;
		dots:true,
		arrows: false,
		accessibility: false,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		responsive:[{
			breakpoint: 768,
			settings: {}
		}]
	})
}
/*=============================================================================*/


