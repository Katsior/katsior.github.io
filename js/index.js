function main() {
	"use strict";
	document.getElementById("bird_body").addEventListener("click", function(){this.classList.toggle("selected");});
	document.getElementById("bird_eye").addEventListener("click", function(){this.classList.toggle("selected");});
	document.getElementById("bird_wing").addEventListener("click", function(){this.classList.toggle("selected");});
	document.getElementById("bird_snout").addEventListener("click", function(){this.classList.toggle("selected");});
}

window.onload = function() {
	"use strict";
	main();
};