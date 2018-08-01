$(document).ready(function() {

	$(window).scroll(function() {
		var nav_img = $('.navbar-brand img');
		if ($(document).scrollTop() < 130) {
			$('nav').addClass('transparent');
			nav_img.attr("src","img/biotherm-white-dots.png");
		} else {
			$('nav').removeClass('transparent').css('color: black');
			nav_img.attr("src","img/biotherm-black-dots.png");
		}
	});
	
	if (window.location.hash) {
	var hash = window.location.hash;
		$('html, body').animate({
			scrollTop :  $(hash).offset().top
		}, 500);
	};
	
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

$(function() {
	$("img.lazy").lazyload();
});

$('.imageHoverLoad').mouseenter(function() {
	var elem = $(this);
	elem.fadeOut(400).promise().done(function() {
		elem.attr('src', elem.attr('data-hover')).fadeIn(400);
	});
});

$('.imageHoverLoad').mouseleave(function() {
	var elem = $(this);
	elem.fadeOut(400).promise().done(function() {
		elem.attr('src', elem.attr('data-original')).fadeIn(400);
	});
});

$('#front-carousel').carousel({
    interval: 8000
});