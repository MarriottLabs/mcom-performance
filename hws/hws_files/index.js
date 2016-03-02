(function() { 
    window.addEventListener('DOMContentLoaded',handleDomContentLoaded, false);

    var tl  = new TimelineLite();

    document.onkeypress = pauseAnimation;
    function pauseAnimation(e) {
        if(e.keyCode == '32') tl.paused() ? tl.play() : tl.pause();
    }
     
    function handleDomContentLoaded() {
        var bonusPtsDark = document.getElementById("bonusPtsDark"),
            numOfSlices  = 203;

        tl.set(bonusPtsWhite, {opacity:0,rotationX:90,transformPerspective:400, perspective:400, transformStyle:"preserve-3d"})
          .set(fivePts, {opacity:1,transformPerspective:400, perspective:400, transformStyle:"preserve-3d"})
          .set(freeNight, {opacity:0,rotationX:90,transformPerspective:400, perspective:400, transformStyle:"preserve-3d"})
          .to(bonusPtsWhite, .75, {rotationX:0, opacity:1}, "+=.7");
        shineText();
        tl.to(fivePts, .75, {rotationX:-90, opacity:0}, "-=1")
          .to(freeNight, .75, {rotationX:0, opacity:1})
          .set(cardShine, {top:"-30%", left:"-30%"});

        function shineText() {
            var spans = [];
            for(var i = 0; i < numOfSlices; i++) {
                var span = document.createElement("span");
                TweenLite.set(span,{width: 1, left: i});
                bonusPtsDark.appendChild(span);
                spans.push(span);
            }

            tl.staggerTo(spans, 1, { opacity: 1 }, .004)
              .staggerTo(spans, 1, { opacity: 0 }, .004, "-= 1.5");
        }

        tl.play();
    }

    
})();





