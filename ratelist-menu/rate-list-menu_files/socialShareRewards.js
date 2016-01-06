;var socialShare = {
	el : null,
	propertyInfo : new Array,	  
	pushPin : function(){
		this.image;
		this.name;
		this.state;
		this.city;
		this.country;
		this.url;
	},
	
	// Open Graph Tags
	applyOpenGraph : function(pType, pURL, pTitle, pDescription, pImage) {
		  
		var $head = $('head');
	  
		// Default type is article
		var ogType = "website";
		if("" !== pType && typeof pType === "string") {
			ogType = pType;
		}
	  
		// Default URL is current page
		var ogURL = window.location.href;
		if("" !== pURL && typeof pURL === "string") {
			ogURL = pURL;
		}
	  
		// Default Title is current page title tag
		var ogTitle = document.title;
		if("" !== pTitle && typeof pTitle === "string") {
			ogTitle = pTitle;
		}
	  
		var ogDescription = "";
		if(typeof pDescription === "string") {
			ogDescription = pDescription;
		}
	  
		var ogSiteName = "Marriott International";
	  
		var ogImage = "";
		if(typeof pImage === "string") {
			ogImage = pImage;
		}
	  
		// Get the meta tags if they exist
		var mType = $head.find("meta[property='og:type']:first");
		var mURL = $head.find("meta[property='og:url']:first");
		var mTitle = $head.find("meta[property='og:title']:first");
		var mDescription = $head.find("meta[property='og:description']:first");
		var mSiteName = $head.find("meta[property='og:site_name']:first");
		var mImage = $head.find("meta[property='og:image']:first");

		var mfbAppID = $head.find("meta[property='fb:app_id']:first");
	  
		// ...and populate or create accordingly
		if(mType.length > 0) {
			mType.attr("content", ogType);
		} else {
			$head.append('<meta property="og:type" content="'+ogType+'" />');
		}
		  
		if(mURL.length > 0) {
			mURL.attr("content", ogURL);
		} else {
			$head.append('<meta property="og:url" content="'+ogURL+'" />');
		}
		  
		if(mTitle.length > 0) {
			mTitle.attr("content", ogTitle);
		} else {
			$head.append('<meta property="og:title" content="'+ogTitle+'" />');
		}
		  
		if(mDescription.length > 0) {
			mDescription.attr("content", ogDescription);
		} else if(ogDescription != ""){
			$head.append('<meta property="og:description" content="'+ogDescription+'" />');
		}
		  
		if(mSiteName.length > 0) {
			mSiteName.attr("content", ogSiteName);
		} else {
			$head.append('<meta property="og:site_name" content="'+ogSiteName+'" />');
		}
		  
		if(mImage.length > 0) {
			mImage.attr("content", ogImage);
		} else if(ogImage != "") {
			$head.append('<meta property="og:image" content="'+ogImage+'" />');
		}
		
		if(!(mfbAppID.length > 0)) { //HWS uses: 143602039041041
			$head.append('<meta property="fb:app_id" content="311568359040551" />');
		}
		
	}
	,sharelines : function() {
		$('.js-shareline').each(function(i) {        
			// get desired shareline and its shareable text
			var shareline = $(this);
			var sharelineText = shareline.text();

			var sharelineTitle = "Marriott International"
			var firstH1 = $("#layout-body-container").find("h1:first");
			if(firstH1.length > 0) {
				sharelineTitle = firstH1.text();
			}
			
			// attach some classes for future display
			shareline.addClass("l-float-left l-margin-top-half");
			
			// insert new parent container before the desired shareline...
			var sharelineContainerId = "shareline-container-"+i;
			shareline.before('<div class="js-shareline-container clearfix t-border-top t-border-bottom l-padding l-margin-top-half" id="'+sharelineContainerId+'"></div>');
			
			// then get it...
			var sharelineContainer = shareline.parent().find("#"+sharelineContainerId).filter(":first");
			
			// then first insert the share options container...
			var sharelineOptionsContainerId = "shareline-options-"+i;
			sharelineContainer.append('<div class="l-float-left l-display-block" id="'+sharelineOptionsContainerId+'"></div>');
			
			// ...and then insert the desired shareline
			sharelineContainer.append(shareline);
			
			// window url
			/*var windowURL = window.location.hostname;
			var windowURLPrefix = windowURL.substring(0, windowURL.indexOf("."));
			var windowURLSuffix = windowURL.substring(windowURL.lastIndexOf("."));
			windowURL = "marriott" + windowURLSuffix + window.location.pathname;
			if(windowURLPrefix!= "" && windowURLPrefix != "localhost" && windowURLPrefix != "marriott") {
				windowURL = windowURLPrefix + "." + windowURL;
			}
			windowURL = window.location.protocol + "//" + windowURL;
			*/
			var windowHREF = window.location.href;
			
			// apply open graph tags
			//socialShare.applyOpenGraph("", windowHREF, sharelineTitle, sharelineText, "");
			
			// lets do the Gigya set-up
			var userAction = new gigya.socialize.UserAction();
			userAction.setTitle(sharelineText);
			userAction.setSubtitle(sharelineTitle);
			userAction.setDescription(sharelineText);
			userAction.setLinkBack(windowHREF);
			
			// Determine from absolute uri for short urls
			var absoluteURL = $("input#absolute-uri");
			var shortUrls = "always";
			if(absoluteURL.length > 0 && absoluteURL.val().indexOf(".marriott.") == -1) {
				shortUrls = "never";
			}
			            
			var shareParams = {
			    userAction: userAction
			    ,containerID: sharelineOptionsContainerId
			    ,showCounts: "none"
			    ,iconsOnly: "true"
			    ,shortURLs: shortUrls
				,deviceType : "auto"
			    ,shareButtons: [
					{
						provider: "Facebook"
					    ,iconImgUp: "/Images/Rewards/Social_login/fb36x36social_sprite.png"
					}
			        ,{
			            provider: "Twitter"
			            ,iconImgUp: "/Images/Rewards/Social_login/twi36x36social_sprite.png"
			        }
			    ]
				,onLoad : function(){
			    	if(analytics) {
			    		function setShareOptionTracking(elem, shareOn) {
			    			if(elem.length > 0) {
			    				elem.data("analytics", {description:"Share on " + shareOn, sendNow:"true"});
			    				analytics.utilities.elementClickAnalytics(elem);
			    			}
			    		};
			    		var gigFacebook = sharelineContainer.find(".gig-button-container-facebook").filter(":first");
			        	var gigTwitter = sharelineContainer.find(".gig-button-container-twitter").filter(":first");
			        	setShareOptionTracking(gigFacebook, "Facebook");
			        	setShareOptionTracking(gigTwitter, "Twitter");	                	
			        }
			    }
			};            
			// then finally, let's display Gigya share items
			gigya.socialize.showShareBarUI(shareParams);
		});
	}
	,socialShareOptions : function(elem) {
		var shareContainerId = elem.data("elem");
		var shareContainer = $("#"+shareContainerId);
		if(shareContainer.length > 0) {
		
			var shareContainerDisplayId = shareContainerId+"-display";
			var shareContainerDisplay = $("#"+shareContainerDisplayId).find(".gig-share-bar-container").filter(":first");
			var pType = "";
			var pURL = "";
			var pTitle = "";
			var pDescription = "";
			var pImage = "";

			if(shareContainerDisplay.length <= 0) {	  
				// now that we have the share container let's prep for share option display
				var shareAction = new gigya.socialize.UserAction();
					  
				var shareData = shareContainer.data("share");
				if(typeof shareData !== "undefined") {
			  
					// get the shareable data
					var shareName = shareData.name;
					var shareCity = shareData.city;
					var shareState = shareData.state;
					var shareCountry = shareData.country;
					var shareURL = shareData.url;
					var shareCode = shareData.code;
					var shareImage = shareData.image;
			  
					var shareDescription = "";
					if(typeof shareName !== "undefined" || shareName != "") {
						shareAction.setTitle(shareName);
						shareDescription += shareName;
					}
					if(typeof shareCity !== "undefined" || shareCity != "") {
						if(shareDescription != "") {
							shareDescription += ", ";
						}
						shareDescription += shareCity;
					}
					if(typeof shareState !== "undefined" || shareState != "") {
						if(shareDescription != "") {
							shareDescription += ", ";
						}
						shareDescription += shareState;
					}
					if(typeof shareCountry !== "undefined" || shareCountry != "") {
						if(shareDescription != "") {
							shareDescription += " ";
						}
						shareDescription += shareCountry;
					}
					if(shareDescription != "") {
						shareAction.setDescription(shareDescription);
						pDescription = shareDescription;
						pTitle = shareDescription;
					}
			  
					if(typeof shareURL !== "undefined" || shareURL != "") {
						shareAction.setLinkBack(shareURL);
						pURL = shareURL;
					} else {
						shareURL = "";
					}
			  
					if(typeof shareImage !== "undefined" || shareImage != "") {
						shareAction.addMediaItem({type: "image", src: shareImage, href: shareURL });
						pImage = shareImage;
					}
				}
	  
				// apply open graph tags
				//socialShare.applyOpenGraph(pType, pURL, pTitle, pDescription, pImage);
      
				
				// Determine from absolute uri for short urls
				var absoluteURL = $("input#absolute-uri");
				var shortUrls = "always";
				if(absoluteURL.length > 0 && absoluteURL.val().indexOf(".marriott.") == -1) {
					shortUrls = "never";
				}
				
				// populate share options
				var shareParams = {
						userAction : shareAction
						,shareButtons : [
						                 {
						                	 provider: "Facebook"
						                	,iconImgUp: "/Images/Rewards/Social_login/fb36x36social_sprite.png"
						                 }
						                 ,{
						                	 provider : "Twitter"
						                	,iconImgUp : "/Images/Rewards/Social_login/twi36x36social_sprite.png"
						                 }
						                 ,{
						                	 provider : "Pinterest"
						                	,iconImgUp : "/Images/Rewards/Social_login/pint36x36social_sprite.png"
						                 }
						                 ,{
						                	 provider : "Email"
						                	,iconImgUp : "/Images/Rewards/Social_login/email32x32.png"
						                 }
					                 ]
						,showCounts : "none"
						,iconsOnly : "true"
					    ,shortURLs: shortUrls
						,deviceType : "auto"
						,containerID : shareContainerId+"-display"
						,onLoad : function(){
							if(analytics) {
								function setShareOptionTracking(elem, shareOn) {
									if(elem.length > 0) {
										elem.data("analytics", {description:"Share on " + shareOn, sendNow:"true"});
										analytics.utilities.elementClickAnalytics(elem);
									}
								};
								var gigFacebook = shareContainer.find(".gig-button-container-facebook").filter(":first");
								var gigTwitter = shareContainer.find(".gig-button-container-twitter").filter(":first");
								var gigPinterest = shareContainer.find(".gig-button-container-pinterest").filter(":first");
								var gigEmail = shareContainer.find(".gig-button-container-email").filter(":first");
								setShareOptionTracking(gigFacebook, "Facebook");
								setShareOptionTracking(gigTwitter, "Twitter");
								setShareOptionTracking(gigPinterest, "Pinterest");
								setShareOptionTracking(gigEmail, "Email");
								
								/*shareContainer.find(".gig-button").on("click.closeAct",function(){
									shareContainer.find(".js-share-close:first").trigger("click");
								});*/
							}
						}
				};
	  
				// attach close hide and show
				shareContainer.find(".js-share-close").filter(":first").on("click", function(e){
					e.preventDefault();
					var optionsParent = $(this).parents(".is-share-options").filter(":first");
		  
					optionsParent.hide();
					optionsParent.siblings().show();
				});
	  
				elem.siblings().not(".js-nohide").hide();
				elem.hide();
				shareContainer.removeClass("l-display-none").show();
	  
				gigya.socialize.showShareBarUI(shareParams);
	  
			} else {
	  
				elem.siblings().not(".js-nohide").hide();
				elem.hide();
				shareContainer.removeClass("l-display-none").show();
			}
		}
	}
	,executeSocialShare : function(){
		
		var socialShares = $(".js-social-share");
		if(socialShares.length > 0){ 
			socialShares.each(function(){
		
				var socialShareElem = $(this);
				var padBottom = parseInt(socialShareElem.css("padding-bottom"));
				socialShareElem.css("padding-bottom", (padBottom+2) + "px");
		
				var shareActionTrigger = $(this).find("a").filter(":first");
				shareActionTrigger.on("click.share",function(e){
					e.preventDefault();
			
					var elem = $(this);
					var elemParent = elem.parent();
					elem.trigger("click.sendAnalytics");
						
					socialShare.socialShareOptions(elemParent);
						
				});
			});
		}
	}
};
$(document).on("ready.share", function() {
	socialShare.sharelines();
});
$(window).on("load.js-social", function(){	
	socialShare.executeSocialShare();
});