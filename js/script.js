

$(document).ready(function ($) {
	$('.tab__content:first').show();
	$('.tabs li:first').addClass('active');

	$('.tabs li').click(function(event) {
		$('.tabs li').removeClass('active')
		$(this).addClass('active');
		$('.tab__content').hide();

		var selectTab = $(this).find('a').attr('href');
		$(selectTab).fadeIn();
	});

	// Подсказки

	$('.pole').hover(
	function() {
		$(this).next('.help').stop().animate({opacity: "show", left: "365px"}, "slow");
	},
	function() {
		$('.help').stop().animate({opacity: "hide", left: "375"}, "fast");
	});



	$('.help__button').on('click', function() {
		$('.help').stop().animate({opacity: "show", left: "365px"}, "slow");
	});


});	

