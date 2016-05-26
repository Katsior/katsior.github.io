function main() {
	"use strict";
	document.getElementById("bird_body").addEventListener("click", function(){this.classList.toggle("selected");});
	document.getElementById("bird_eye").addEventListener("click", function(){this.classList.toggle("selected");});
	document.getElementById("bird_wing").addEventListener("click", function(){this.classList.toggle("selected");});
	document.getElementById("bird_snout").addEventListener("click", function(){this.classList.toggle("selected");});
	
	$(document).scroll(function() {
		  var y = $(this).scrollTop();
		  if (y > 500) {
			$('.bottomMenu').fadeIn();
		  } else {
			$('.bottomMenu').fadeOut();
		  }
	});
}

window.onload = function() {
	"use strict";
	main();
};