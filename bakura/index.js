function main() {
	var title = $(".text-effect-loop");
	var logo = $("#logo");
	var logopart = $(".st1");
	var bg = $(".big");
	var smll = $(".small");
	logo.hide()
	setTimeout(function(){
		logo.fadeIn(1000);
	}, 1000);
	setTimeout(function(){
	title.css("visibility", "visible");
	title.textEffect();
	}, 1000);


	bg.on("mouseover", function(){bg.textEffect();});
	smll.on("mouseover", function(){smll.textEffect();});
}

function run() {
                var image = document.getElementById('background');
                image.onload = function() {
                    var engine = new RainyDay({
                        image: this,
						blur:0,
						opacity:0.5
                    });
                    engine.rain([ [1, 2, 8000] ]);
                    engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
                };
                image.crossOrigin = 'anonymous';
                image.src = 'images/bg.png';
            }


$(document).ready(function(){

/*! Fades in whole page on load */
$('body').css('display', 'none');
$('body').fadeIn(500);
		main();
	   run();
}); 

 /*! Fades out the whole page when clicking links */
 $('a').click(function(e) {
 e.preventDefault();
 newLocation = this.href;
 $('body').fadeOut('slow', newpage);
 });
 function newpage() {
 window.location = newLocation;
 }


function Reload() {
try {
var headElement = document.getElementsByTagName("head")[0];
if (headElement && headElement.innerHTML)
headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
}
catch (e) {}
}