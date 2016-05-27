function main() {
	"use strict";
	$(document).scroll(function() {
		  var y = $(this).scrollTop();
		  if (y > 500) {
			$('#s2-container-01').fadeIn();
		  } else {
			$('#s2-container-01').fadeOut();
		  }
		  if (y > 900) {
			$("#s2-container-02").fadeIn(); 
		  } else {
			$("#s2-container-02").fadeOut(); 
		  }
	});
	
	$(".bg2").interactive_bg({
          strength: 10,
          scale: 1,
          contain: false
        });
}

window.onload = function() {
       "use strict";
	   main();
};
