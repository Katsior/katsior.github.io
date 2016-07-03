function main(){
	"use strict";
	var title = $(".text-effect-loop");
	$("#intro-text").fadeIn(2000);
	title.textEffect();
	setTimeout(function(){
		$("#intro").fadeOut(4000);
	}, 5000);
	
}

$(document).ready(function() {
    "use strict";
	main();
});