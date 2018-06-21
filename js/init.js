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
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});


$('#front-carousel').carousel({
    interval: 8000
});