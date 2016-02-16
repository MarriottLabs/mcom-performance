;var socialLogin = {			
	//logo for header and sign in 
	paramsHeader : {
		containerID : 'social-login-header',
		height : 30,
		width : 90,
		showTermsLink : 'false',
		buttonsStyle : 'fullLogoColored',
		facepilePosition : 'none',
		enabledProviders : $('#social-login-header').data('login-providers'),
		hideGigyaLink : true,
		forceAuthentication : true,
		authCodeOnly : true,
		onLoad : function() {
			var gigProviders = $("#social-login-header").find('div[gigid]');
			if(gigProviders.length > 0) {
				gigProviders.each(function(){
					$(this).children().wrap('<a href="#"></a>').attr("title", $('.js-gig-alt-text[name="gig-' + $(this).attr("gigid") + '"]').val());
				});
				if(analytics) {
					gigProviders.each(function(){
						$(this).data("analytics", {location:"Header", description: $(this).attr("gigid") + " Login", sendNow:"true"});
						analytics.utilities.elementClickAnalytics($(this));
					});
				}
			}
		}
	},		
	paramsSignIn : {
		containerID : 'social-login-signIn',
		height : 30,
		width : 80,
		showTermsLink : 'false',
		buttonsStyle : 'fullLogoColored',
		facepilePosition : 'none',
		enabledProviders : $('#social-login-signIn').data('login-providers'),
		hideGigyaLink : true,
		forceAuthentication : true,
		authCodeOnly : true,
		onLoad : function() {		
			var gigProviders = $("#social-login-signIn").find('div[gigid]');
			if(gigProviders.length > 0) {
				gigProviders.each(function(){
					$(this).children().wrap('<a href="#"></a>').attr("title", $('.js-gig-alt-text[name="gig-' + $(this).attr("gigid") + '"]').val());
				});
				if(analytics) {
					gigProviders.each(function(){
						$(this).data("analytics", {location:"Header", description: $(this).attr("gigid") + " Login", sendNow:"true"});
						analytics.utilities.elementClickAnalytics($(this));
					});
				}
			}
		}
	},
	//params for login with FB
	paramsJoinNow : {
		containerID : 'social-join-now',
		height : 40,
		width : 230,
		showTermsLink : 'false',
		buttonsStyle : 'signInWith',		
		facepilePosition : 'none',
		enabledProviders : 'facebook',
		hideGigyaLink : true,
		forceAuthentication : true,
		authCodeOnly : true,
		onLoad : function() {			
			var gigFaceBook = $("#social-join-now").find('div[gigid="facebook"]');
			var titleCopy = $("#joinNowTitle").val();			
			if(gigFaceBook.length > 0) {			
				$('div[gigid="facebook"]').children().wrap('<a href="#" ></a>').append("<span class='l-display-none'> " + titleCopy + "</span>").attr("title", titleCopy);				
			}			
		}		
	},	
	//params for manage connection. Added requiredCapabilities with login value to included none default providers like WeChat
	paramsConnect : {
		version : 2,
		showTermsLink: false,
		showEditLink: true,
		width:	30,
		height:	56,
		containerID: 'social-connection',
		enabledProviders: $("#social-connection").data('login-providers'),
		requiredCapabilities: 'login',
		forceAuthentication : true
	},	
	//ajax function to join from join now
	handleLoginJoinNow : function(eventObj){	
		if(eventObj.source == 'showLoginUI'){
			var loginResponse = JSON.stringify(eventObj);									
			GigyaService.getEnrollmentInfo(loginResponse,{				
				callback: function(data){				
					var result = JSON.parse(data);										
					if(result && result.isLinked == "no"){
						var firstName, lastName, country, address, city, state, zipCode, email, phoneNumber;
						firstName = result.firstName;
						lastName = result.lastName;
						country = result.country;
						address = result.address;
						city = result.city;
						state = result.state;
						zipCode = result.zip;
						email = result.email;
						phoneNumber = result.phone;
						
						var fieldFirstName =$("#field-first-name");
						if(!fieldFirstName.val()){
							fieldFirstName.val(firstName);
						}
						var fieldLastName =$("#field-last-name");
						if(!fieldLastName.val()){
							fieldLastName.val(lastName);
						}
						if(!$("#field-country").val()){
							$("#field-country option[value = " + country + " ]").attr("selected", "selected");
						}
						var fieldStree1 =$("#field-street1");
						if(!fieldStree1.val()){
							fieldStree1.val(address);
						}
						var fieldCity =$("#field-city");
						if(!fieldCity.val()){
							fieldCity.val(city);
						}
						if(!$("#field-state").val()){
							$("#field-state option[value = " + state + " ]").attr("selected", "selected");
						}
						var fieldPostal =$("#field-postal");
						if(!fieldPostal.val()){
							fieldPostal.val(zipCode);
						}
						var fieldTelephoneNumber =$("#field-telephone-number");
						if(!fieldTelephoneNumber.val()){
							fieldTelephoneNumber.val(phoneNumber);
						}
						var fieldEmail =$("#field-email");
						if(!fieldEmail.val()){
							fieldEmail.val(email);
						}
						//three parameters for linking																		
						if(result.UID){
							socialUId = result.UID;
						}
						if(result.signatureTimeStamp){
							socialSignatureTS = result.signatureTimeStamp;
						}
						if(result.uidSignature){
							socialUIdSignature = result.uidSignature;
						}						
						document.getElementById("gigyaUID").value = socialUId;
						document.getElementById("gigyaSignatureTimestamp").value = socialSignatureTS;
						document.getElementById("gigyaUIDSignature").value = socialUIdSignature;							
						socialUId = encodeURIComponent(socialUId);
						socialSignatureTS = encodeURIComponent(socialSignatureTS);
						socialUIdSignature = encodeURIComponent(socialUIdSignature);
						//hide or show fb section in join now page
						$(".js-social-join-now").addClass("l-display-none");	
						$(".js-more-info-social").removeClass("l-display-none").attr("tabindex", "0");
					}
					else if(result && result.isLinked == "yes"){
						var socialUId,socialSignatureTS, socialUIdSignature;
						var hostname = window.location.hostname;
						window.location.replace("https://"+hostname+"/socialLogin.mi?UID=rewardsWebService@"+encodeURIComponent(result.UID)+"&signatureTimestamp="+encodeURIComponent(result.signatureTimeStamp)+"&signature="+encodeURIComponent(result.uidSignature)+"&returnTo=/rewards/myAccount/profile.mi");                  																													
					}					
				}
			});
		}
	},
	//ajax function to first time sync	
	handleLogin : function(eventObj){
		if(eventObj.source == 'showLoginUI'){
			var loginResponse = JSON.stringify(eventObj);						
			GigyaService.isLinkedUser(loginResponse, { 		
				callback: function(data){	
					var result = JSON.parse(data);
					if(result && result.isLinked == "no"){
						$(".socialClick").append("<a class='mi-social-overcast' id='socialButton' href='/rewards/socialLink.mi'></a><input type='hidden' id='socialData' value='"+data+"' />");
						socialLogin.setPopups();
						document.getElementById("socialButton").click();
					}else if(result && result.isLinked =="yes"){
						var hostname = window.location.hostname;
						window.location.replace("https://"+hostname+"/socialLogin.mi?UID=rewardsWebService@"+encodeURIComponent(result.UID)+"&signatureTimestamp="+encodeURIComponent(result.signatureTimeStamp)+"&signature="+encodeURIComponent(result.uidSignature));                  
					}
				}
			});											
		}
		else if(eventObj.source ='showAddConnectionsUI'){
			var response = JSON.stringify(eventObj);
			GigyaService.linkUser(response, { 		
				callback: function(data){
					socialLogin.linkCallback(data);
				}
			});
		}
	},	
	deLinkAccounts : function(eventObj){
		GigyaService.deLinkUser({ 		
			callback: function(data){
				var jsonData = $.parseJSON(data);
				var socialImg = $("#social-profile-img");
				if(socialImg.length && jsonData && jsonData.success == "yes") {
					socialImg.attr("src","/Images/MyAccount/mrw_default_profile_placeholder.png");
					gigya.socialize.logout();
				}
			}
		});
		
	},
	linkAccounts : function(eventObj){
		var linkResponse = JSON.stringify(eventObj);
		GigyaService.linkUser(linkResponse, { 		
			callback: function(data){
				socialLogin.linkCallback(data);
			}
		});
	},
	//popup for the first time users
	setPopups : function () {			
		var miOvercast = $(".mi-social-overcast");	
		if(miOvercast.length && typeof $.magnificPopup !== "undefined") {
			miOvercast.each(function(i,el) {				
				var $el = $(el)									
					,mainClassStyles = "m-modal t-modal-med"
					,closeText = (typeof msgResources.closeText != 'undefined')? msgResources.closeText : 'Close'
					,loadingText = (typeof msgResources.loadingText != 'undefined')? msgResources.loadingText : 'Loading...'
					,elType = "ajax";					
				var options ={
					mainClass: mainClassStyles
					,type: elType				
					,closeMarkup: '<div class="m-modal-utilities">'+'<button id="close" class="m-modal-close mfp-close">%title% <i class="icon icon-close"></i></button>'+'</div>'
					,tClose: closeText
					,tLoading: loadingText					
					,callbacks: {
						beforeOpen: function() {
							this.container.attr('aria-live', 'assertive');
						}
						,parseAjax: function(mfpResponse) {
							var frag = $(mfpResponse.data).find('#layout-body-container, .js-popover,.l-body');
							mfpResponse.data = frag;
						}
						,afterClose: function() {						
							socialLogin.handleLogout();
						}
						,ajaxContentAdded: function() {					
							$('.js-social-cancel, .social-forgot-password' ).on('click.close', function(){								
								socialLogin.handleLogout();	
							});
							var socialData=$("#socialData");
							socialData=JSON.parse(socialData.val());
							var socialUId,socialSignatureTS, socialUIdSignature;
							if(socialData){
								if(socialData.UID){
									socialUId = socialData.UID;
								}
								if(socialData.signatureTimeStamp){
									socialSignatureTS = socialData.signatureTimeStamp;
								}
								if(socialData.uidSignature){
									socialUIdSignature = socialData.uidSignature;
								}
							}
							
							document.getElementById("gigyaUID").value = socialUId;
							document.getElementById("gigyaSignatureTimestamp").value = socialSignatureTS;
							document.getElementById("gigyaUIDSignature").value = socialUIdSignature;							
							socialUId = encodeURIComponent(socialUId);
							socialSignatureTS = encodeURIComponent(socialSignatureTS);
							socialUIdSignature = encodeURIComponent(socialUIdSignature);							
							//adding query link and params to forgot password
							
							function setLinkAndTracking(elem) {
								if(elem.length > 0){
									var elemLink = elem.attr("href");
									if(elemLink.indexOf("?") > -1) {
										elemLink += "&";
									} else {
										elemLink += "?";
									}
									elemLink += "UID=" + socialUId + "&signatureTimestamp=" + socialSignatureTS + "&UIDSignature=" + socialUIdSignature;
									elem.attr("href",elemLink);
									if(analytics) {
										analytics.utilities.dynamicDataAttribute();
										analytics.utilities.elementClickAnalytics(elem);
									}
								}
							};
							
							var forgotPasswordObject = $("#js-social-forgot-password");
							var createOnlineObject = $("#js-social-activate-online");
							
							setLinkAndTracking(forgotPasswordObject);
							setLinkAndTracking(createOnlineObject);
						}
					},					
				}				
				$el.magnificPopup(options);
			    $(document).on('click', '.mfp-close .icon-close', function(e) {			    	
			    	e.preventDefault();
			    	$.magnificPopup.close();			    												
			    });
			});			
		}			
	},	
	executeSocial : function(){
		
		var endSession = $("#endGigyaSession");
		if(endSession.length > 0 && endSession.val() == true) {
			this.handleLogout();
		}
		
		var socialConnection = $("#social-connection");
		if(socialConnection.length > 0) {
			socialLogin.showConnect();
		}
		
		var socialHeader = $("#social-login-header");
		var socialSignIn = $("#social-login-signIn");
		var socialJoinNow = $("#social-join-now");
		if(socialHeader.length > 0){	
			socialLogin.showLoginHeader();
		}
		if(socialSignIn.length > 0){
			socialLogin.showLoginSignin();			
		}
		if(socialJoinNow.length > 0){
			socialLogin.showJoinNow();	
			socialLogin.showHandleLoginJoinNow();
		}
		if(socialConnection.length > 0 || socialHeader.length > 0 || socialSignIn.length > 0 ) {
			socialLogin.showHandleLogin();
		}
	},
	// function to end gigya session
	handleLogout : function(){			
		gigya.socialize.logout();					
	},
	showLoginHeader : function(){gigya.socialize.showLoginUI(socialLogin.paramsHeader);},
	showLoginSignin : function(){gigya.socialize.showLoginUI(socialLogin.paramsSignIn);},
	showJoinNow : function(){gigya.socialize.showLoginUI(socialLogin.paramsJoinNow);},
	showHandleLoginJoinNow : function(){
		gigya.socialize.addEventHandlers({ 
		  onLogin : socialLogin.handleLoginJoinNow,		  
		});	
	},
	showHandleLogin : function(){
		gigya.socialize.addEventHandlers({ 
		   onLogin : socialLogin.handleLogin,
		   onConnectionRemoved : socialLogin.deLinkAccounts,
		   onConnectionAdded : socialLogin.linkAccounts,
		});	
	},
	showConnect : function(){ gigya.socialize.showAddConnectionsUI(socialLogin.paramsConnect);},
	linkCallback :function(data){
		var result = JSON.parse(data);
		if(result && result.socialPhotoURL && result.socialPhotoURL != "failure"){
			var socialImg = $("#social-profile-img");
			if(socialImg.length ){
				socialImg.attr("src", result.socialPhotoURL);
			}
		}else{
			location.reload(); 
		}
	}
}
$(window).on("load.social-login", function(){
	socialLogin.executeSocial();
});