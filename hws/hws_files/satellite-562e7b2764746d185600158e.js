_satellite.pushAsyncScript(function(event, target, $variables){
  

  if(!$('#vert-ad').length){

		var targetLoc = $('#page-zones #zone-3 .l-zone-section').eq(0);
		var vertAdId = "QWqyefqFOk"
    if (dataLayer.isProd=="false") {
      vertAdId = "lEr3URdStH"
    }

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

		$('<div id="gutter-ad-container"><IFRAME id="gutter-ad" SRC="//ag.yieldoptimizer.com/ag/pt?pt='+vertAdId+'&t=f&mc='+dataLayer.mrshaCode+'&htlid='+htlName+'&hbrndc='+dataLayer.brndCode+'&hcty='+htlArray[0]+'&hst='+htlArray[1]+'&hctry='+htlArray[2]+'&cb='+ord+'"" WIDTH="160" HEIGHT="600" FRAMEBORDER="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="no" ></IFRAME></div>').insertAfter(targetLoc);
		$('#gutter-ad-container').css('position','relative');
    $('#gutter-ad-container #gutter-ad').css('position','absolute').css('top','-345px').css('left','1020px');
  }

});
