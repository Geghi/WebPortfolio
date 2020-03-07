setTimeout(function() {
        var loader = document.querySelector(".loader");
        loader.className += " hide";
      }, 2000);

setTimeout(function() {
        var landing = document.getElementById("landing-text");
		landing.style.zIndex="10";
      }, 2500);

$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	
	$('.top-nav .nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	
	$('#up').on('click', function () {
		$('html, body').animate( {
			scrollTop: 0
		}, 1500);				   
	});
	
	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 1500);				   
	});
	
	AOS.init({
		easing: 'ease',
		duration: 800,
		once: true
	});
});