// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/02.jpg", 
	 		 "images/05.jpg",
			 "images/06.jpg",
			 "images/07.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})