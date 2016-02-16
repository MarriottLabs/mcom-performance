_satellite.pushAsyncScript(function(event, target, $variables){
  
		var leaderboardAdId ="PFeiCQWEOY"
    var rectangleAdId = "9VprlGQXif"
    if(dataLayer.isProd == "false"){
      leaderboardAdId ="IfMgNZ3sdm"
      rectangleAdId = "VVcraAqBBT"
    }

    if(!$('#leaderboard').length){

		var htlLoc = dataLayer.hotelLoc;
		var htlArray = htlLoc.split(',');
		var hotTtle = document.title;
		var ttlArray = hotTtle.split('|');
		var metaTags=document.getElementsByTagName("meta");
		var htlName= "";
		for (var i = 0; i < metaTags.length; i++) {
			if (metaTags[i].getAttribute("property") == "og:title") {
				htlName= metaTags[i].getAttribute("content");
				break;
			}
		}

		var ord=Math.random()*10000000000000000;

		if(window.location.href.indexOf("hotels/travel") != -1) {
					var ldBoardLoc = $('#MMN_Rooms_Horizontal');
				}

		//shashi

if (typeof Response != 'undefined' && $('body').data('responsive')==true) {
  Response.ready(function () {
        Response.create({
            prop: "width", // property to base tests on
            prefix: "r", // custom aliased prefixes
            breakpoints: [768,1390], // custom breakpoints
            lazy: false // enable lazyloading
        });
        checkBreakpointRBB();

       Response.crossover(function (e) { //  stuff to do on "width" crossovers
           e.stopPropagation();
			//alert("crossover");
            checkBreakpointRBB();
        }, "width");

        function checkBreakpointRBB() {
			   if (Response.band(768)){

							if($('#ad_leaderboard_lowerbreakpt').length==0 && $('#ad_leaderboard').length==0 ){
								var	AdUrl= "//ag.yieldoptimizer.com/ag/pt?pt=" + leaderboardAdId + "&t=f";

								$('<div id="ad_leaderboard"><IFRAME id="leaderboard" SRC="https:'+AdUrl+'&mc='+dataLayer.mrshaCode+'&htlid='+htlName+'&hbrndc='+dataLayer.brndCode+'&hcty='+htlArray[0]+'&hst='+htlArray[1]+'&hctry='+htlArray[2]+'&cb='+ord+'"" WIDTH="728" HEIGHT="90" FRAMEBORDER="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="no" ></IFRAME></div>').insertBefore(ldBoardLoc);




								$('#ad_leaderboard').css("margin-top","36px").css("margin-bottom","39px");

								$('#ad_leaderboard').css("padding-top","15px").css("padding-bottom","15px").css("border-top","1px solid #d2d2d2").css("border-bottom","1px solid #d2d2d2").css("text-align","center");

							} else if($('#ad_leaderboard_lowerbreakpt').length >=1 || $('#ad_leaderboard').length >= 1 ){

							$('#ad_leaderboard_lowerbreakpt').css("display","none");
							$('#ad_leaderboard').css("display","block");



							}
				   }
				else {

					if($('#ad_leaderboard_lowerbreakpt').length==0 && $('#ad_leaderboard').length==0){
								var	AdUrl= "//ag.yieldoptimizer.com/ag/pt?pt=" + rectangleAdId + "&t=f";

								$('<div id="ad_leaderboard_lowerbreakpt"><IFRAME id="leaderboard" SRC="https:'+AdUrl+'&mc='+dataLayer.mrshaCode+'&htlid='+htlName+'&hbrndc='+dataLayer.brndCode+'&hcty='+htlArray[0]+'&hst='+htlArray[1]+'&hctry='+htlArray[2]+'&cb='+ord+'"" WIDTH="300" HEIGHT="250" FRAMEBORDER="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="no" ></IFRAME></div>').insertBefore(ldBoardLoc);

								$('#ad_leaderboard_lowerbreakpt').css("margin-top","36px").css("margin-bottom","39px");

								$('#ad_leaderboard_lowerbreakpt').css("padding-top","15px").css("padding-bottom","15px").css("border-top","1px solid #d2d2d2").css("border-bottom","1px solid #d2d2d2").css("text-align","center");
					} else if($('#ad_leaderboard_lowerbreakpt').length >= 1 || $('#ad_leaderboard').length >= 1) {

							$('#ad_leaderboard_lowerbreakpt').css("display","block");
							$('#ad_leaderboard').css("display","none");


					}



				 }

	if (Response.band(1390)){

			$('#gutter-ad-container').css("display","inline");

			 } else {
				 $('#gutter-ad-container').css("display","none");
	 }
			


            }
        });

		}


	//ends


		}

});
