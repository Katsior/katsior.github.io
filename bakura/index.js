function main() {
	var title = $(".text-effect-loop");
	var logo = $("#logo");
	var bg = $(".big");
	var smll = $(".small");
	
	title.textEffect();
	
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

window.onload = function() {
       "use strict";
	   main();
	   run();
};
