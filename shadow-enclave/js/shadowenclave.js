function main(){
	"use strict";
	var title = $(".text-effect-loop");
	$("#intro-text").fadeIn(2000);
	title.textEffect();
	setTimeout(function(){
		$("#intro").fadeOut(4000);
	}, 5000);
	
	$("#left-event").on("click", function(){
		if ($("#left").hasClass("toggled")){
		$("#left").css("width","45%");
		$("#left").css("z-index","2");
		$("#left").removeClass("toggled");
		} else {
			$("#left").css("width","90%");
			$("#left").css("z-index","100");
		$("#left").addClass("toggled");
		}});
	
	$("#right-event").on("click", function(){
		if ($("#right").hasClass("toggled")){
		$("#right").css("width","45%");
		$("#right").css("z-index","2");
		$("#right").removeClass("toggled");
		} else {
			$("#right").css("width","90%");
			$("#right").css("z-index","100");
		$("#right").addClass("toggled");
		}});
	
}

$(document).ready(function() {
    "use strict";
	main();
});