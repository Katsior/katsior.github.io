function openNav() {
	$("#nav").css("width", "100%");
}

function closeNav() {
	$("#nav").css("width", "0%");
}

function introAnim() {
	$("#top-img").css("transform","translate(0%,0)");
	$("#content").css("margin-top","-100px");
	$("#top-img h1").css("transform","translate(0%,0)");
}

jQuery(document).ready(function() {
	"use strict";
	introAnim();

});
