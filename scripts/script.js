$(document).ready(function(){
	
	$window = $(window);
	
	$('section[data-type="background"]').each(function() {
		var $bgObj = $(this); // assinging the object
		
		$(window).scroll(function() {
			
			var yPos = -($window.scrollTop() / $bgObj.data('speed'));
			
			var coords = '50% ' + yPos + 'px';
			
			// Move the background
			$bgObj.css({ backgroundPosition: coords });
		});
	});
});
document.createElement("article");
document.createElement("section");