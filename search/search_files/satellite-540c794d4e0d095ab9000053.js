var _sdi = _sdi || {};

_sdi.marriott = {
  getAccountByDomain: function(){
    var d = document.domain,
        map = {
          'marriottglobal':[
            'www.marriott.com',
            'www.marriott.co.uk',
            'www.marriott.fr',
            'www.marriott.de',
            'www.marriott.com.au',
            'www.marriott.com.cn',
            'www.marriott.co.jp',
            'www.marriott.co.kr'
          ],
          'marriottglobaldev': [/mi-dev.*\.com/],
          'marriottglobaltest': [/mi-test.*\.com/],
          'marriottglobalstage': [/mi-stage.*\.com/,/mi-prodbuild.*\.com/,/mi-qc\.com/,/mi-wp\.com/],
          'marriottuk': 'www.marriott.co.uk',
          'marriottfr': 'www.marriott.fr',
          'marriottde': 'www.marriott.de',
          'marriottla': 'www.espanol.marriott.com',
          'marriottau': 'www.marriott.com.au',
          'marriottcn': 'www.marriott.com.cn',
          'marriottjp': 'www.marriott.co.jp',
          'marriottkr': 'www.marriott.co.kr'
        },
        rsid=[],
        rs;
    // loop and find the domain
    for(rs in map){
      var list = map[rs];
      // if a string check for an exact match
      if(typeof list == 'string'){
        if(d==list){
          rsid.push(rs);
        }
      }
      // array
      else {
        // loop through array items
        for(var i=0; i<list.length; i++){
          if(typeof list[i] == 'string'){
            if(d==list[i]){
              rsid.push(rs);
              continue;
            }
          }
          else {
            if(d.match(list[i])){
              rsid.push(rs);
              continue;
            }
          }
        }
      }
    }
    return rsid.join(',');
  },
  getAccount: function() {
    var config = document.getElementById('analytic-configuration'),
        env = '',
        siteId = '',
        dest = [],
        lang = document.getElementById('omniglobalSiteLanguage'),
        c = document.getElementById('omniSiteLocale'),
        rs = document.getElementById('siteTrackingReportSuite');

    if (config) {
      env = config.getAttribute("data-environment");
      siteId = config.getAttribute("data-siteid");
    } else if (rs) {
      env = rs.value || rs.getAttribute('value');
      if(c && c.value){
        siteId = c.value.toLowerCase();
        if(siteId == 'us' || siteId == 'es'){
          siteId = '';
        }
      }
    }

    env = (env || '').toLowerCase();
    siteId = (siteId || '').toLowerCase();

    if(env){
      if (env == "prod") {
        env = "";
      }
      dest.push("marriottglobal" + env);
      if (siteId != "") {
        if (siteId == "laca") {
          siteId = "la";
        }
        dest.push("marriott" + siteId + env);
      }
    }
    return dest.join(',');
  },
  accountSet: false
};

// create swa object
var swa_account = 'marriottglobal',
    acct = _sdi.marriott.getAccount();

if(!acct || acct==''){
  acct = _sdi.marriott.getAccountByDomain();
}

if(acct && acct!=""){
  swa_account = acct;
}

var s_account = swa_account;
var swa = s_gi(swa_account);
var s = swa;

swa.visitor = Visitor.getInstance('664516D751E565010A490D4C@AdobeOrg');

/* Cookie Campaign Start*/
var omniCampaignCookie = function() {
  var campaignCookie = "";
  return {
    init: function() {},
    createCampaignCookie: function(theReferer) {
      var theReferrer = theReferer + "&";
      var dataURL = "trackingData=" + window.location + "&";
      document.cookie = "marketingCampaignTrackingData=" + theReferrer + dataURL + ";path=/";
      var redirUrl, mid;
      redirUrl = omniCampaignCookie.getQueryStringParameter('redirURL', 'false');
      mid = omniCampaignCookie.getQueryStringParameter('mid', 'false');
      if (redirUrl != "") {
        location.replace(unescape(omniCampaignCookie.getQueryStringParameter('redirURL', 'false')));
      } else if (mid != "") {
        location.replace(unescape(omniCampaignCookie.getQueryStringParameter('mid', 'false')));
      } else {
        location.replace("/reservation/800Page.mi");
      }
    },
    getQueryStringParameter: function(name, useReferrer) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[/i\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(window.location.href);
      if (useReferrer == "true") {
        var lowerCaseCookie = window.marketingCampaignTrackingData || swa.c_r("marketingCampaignTrackingData")||'';
        lowerCaseCookie = lowerCaseCookie.toLowerCase();
        results = regex.exec(lowerCaseCookie);
      }
      if (results == null)
        return "";
      else
        return results[1];
    },
    setCampaignData: function() {
      var refererFromCookie = '';
      refererFromCookie = window.marketingCampaignTrackingData || swa.c_r("marketingCampaignTrackingData")||'';
      if(refererFromCookie){
        window.marketingCampaignTrackingData = refererFromCookie;
      }
      swa.pageURL = window.location;
      if (omniCampaignCookie.getQueryStringParameter('scid', 'true') != "" && omniCampaignCookie.getQueryStringParameter('scid', 'true') != "null") {
        swa.campaign = omniCampaignCookie.getQueryStringParameter('scid', 'true');
        if (location.pathname == "/reservation/rateListMenu.mi") {
          swa.eVar46 = 'External Campaign Referrer';
          if (swa.events != "") {
            swa.events += ","
          }
          swa.events = "event88";
        }
      } else {
        if (omniCampaignCookie.getQueryStringParameter('pcamp', 'true') != "" && omniCampaignCookie.getQueryStringParameter('pcamp', 'true') != "null") {
          swa.campaign = "pCamp=" + omniCampaignCookie.getQueryStringParameter('pcamp', 'true') + ";";
          if (omniCampaignCookie.getQueryStringParameter('pad', 'true') != "" && omniCampaignCookie.getQueryStringParameter('pad', 'true') != "null") {
            swa.campaign = swa.campaign + "pAd=" + omniCampaignCookie.getQueryStringParameter('pad', 'true') + ";";
          }
          if (omniCampaignCookie.getQueryStringParameter('pid', 'true') != "" && omniCampaignCookie.getQueryStringParameter('pid', 'true') != "null") {
            swa.campaign = swa.campaign + "pId=" + omniCampaignCookie.getQueryStringParameter('pid', 'true') + ";";
          }
        }
        if (omniCampaignCookie.getQueryStringParameter('aff', 'true') != "null" && omniCampaignCookie.getQueryStringParameter('aff', 'true') != "") {
          swa.campaign = "aff=" + omniCampaignCookie.getQueryStringParameter('aff', 'true') + ";";
        }
        if (omniCampaignCookie.getQueryStringParameter('affname', 'true') != "null" && omniCampaignCookie.getQueryStringParameter('affname', 'true') != "") {
          swa.campaign = swa.campaign + "affname=" + omniCampaignCookie.getQueryStringParameter('affname', 'true') + ";";
        }
        if (omniCampaignCookie.getQueryStringParameter('vedate', 'true') != "null" && omniCampaignCookie.getQueryStringParameter('vedate', 'true') != "") {
          swa.campaign = "vedate=" + omniCampaignCookie.getQueryStringParameter('vedate', 'true') + ";vetype=" + omniCampaignCookie.getQueryStringParameter('vetype', 'true') + ";veseg=" + omniCampaignCookie.getQueryStringParameter('veseg', 'true') + ";veof=" + omniCampaignCookie.getQueryStringParameter('veof', 'true') + ";ck=" + omniCampaignCookie.getQueryStringParameter('ck', 'true') + ";";
          swa.eVar39 = omniCampaignCookie.getQueryStringParameter('nck', 'true');
        }
        if (omniCampaignCookie.getQueryStringParameter('rk', 'true') != "null" && omniCampaignCookie.getQueryStringParameter('rk', 'true') != "") {
          if (omniCampaignCookie.getQueryStringParameter('rk', 'true').indexOf("r") == 0 && document.referrer.length > 0 && document.referrer.indexOf('roomkey') > -1) {
            swa.linkTrackVars = "events";
            swa.linkTrackEvents = "event84";
            swa.events = "event84";
          }
        }
      }
      if (omniCampaignCookie.getQueryStringParameter('pid', 'true') != "" && omniCampaignCookie.getQueryStringParameter('pid', 'true') != "null") {
        swa.eVar31 = omniCampaignCookie.getQueryStringParameter('pid', 'true');
        if (location.pathname == "/reservation/rateListMenu.mi") {
          swa.eVar46 = 'External Non-Campaign Referrer';
          if (swa.events != "") {
            swa.events += ","
          }
          swa.events = "event88";
        }
      }
      if (omniCampaignCookie.getQueryStringParameter('affname', 'true') != "null" && omniCampaignCookie.getQueryStringParameter('affname', 'true') != "" && !swa.eVar31) {
        swa.eVar31 = "affname=" + omniCampaignCookie.getQueryStringParameter('affname', 'true');
      }
      if (omniCampaignCookie.getQueryStringParameter('ppc', 'true') != "" && omniCampaignCookie.getQueryStringParameter('ppc', 'true') != "null") {
        swa.pageURL = window.location + "?ppc=" + omniCampaignCookie.getQueryStringParameter('ppc', 'true');
      }
      var subDataStart = refererFromCookie.indexOf("trackingData=");
      var subDataEnd = refererFromCookie.length;
      var subData = refererFromCookie.substring(subDataStart, subDataEnd);
      refererFromCookie = refererFromCookie.replace(subData, '');
      if (refererFromCookie != "") {
        swa.referrer = refererFromCookie;
      } else {
        swa.referrer = document.referrer;
      }
      omniCampaignCookie.deleteCampaignCookie("marketingCampaignTrackingData");
    },
    deleteCampaignCookie: function(name) {
      document.cookie = name + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }
}();
/* Cookie Campaign End */

/* Google Referrer Change Patch v1.1 */
function swa_rf(s) {
  swa._rf_f = new Function('t', 'l', 'var s=this,i=t?t.indexOf("="):-1,n=(l.substring(0,1)=="!");l=n?l.substring(1):l;if(t){if(i>0){if((","+l+",").indexOf(","+t.substring(0,i)+",")>=0)t=n?""' + ':t;else t=n?t:""}if(t)s._rf_b+=(s._rf_b?"&":"")+t}');
  swa._rf = new Function('x', 'var s=this,y,i,h,a,b,l="q,ie,start,search_key,word,kw,cd";y=x=""+x;i=y.indexOf("?");if(i>=0){a="&"+y.substring(i+1)+"&";' + 'y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=="http://")i+=7;else if(h.substring(0,8)=="https://")i+=8;h=h.substring(i);i=h.indexOf("/");if(i>0){h=h.substring(0,i);if(h.indexOf("goo' + 'gle")>=0&&(a.indexOf("&q=")>=0||a.indexOf("&ie=")>=0||a.indexOf("&start=")>=0||a.indexOf("&search_key=")>=0||a.indexOf("&word=")>=0||a.indexOf("&kw=")>=0||a.indexOf("&cd=")>=0)){s._rf_b="";s.pt(a,"' + '&","_rf_f",l);s.pt(a,"&","_rf_f","!"+l);b=s._rf_b;if(b!=a)return y+"?"+b}}}return x');
  swa._rf_fl = swa.fl;
  swa.fl = new Function('x', 'l', 'var s=this;if(x&&l==255)x=s._rf(x);return s._rf_fl(x,l)');
  swa._rf_hav = swa.hav;
  swa.hav = new Function('var s=this,x=s.referrer;if(x)s.referrer=s.fl(x,255);if((s.referrer)&&(s.referrer.indexOf("cd=")>=0))s.prop65=getQueryStringVal(s.referrer,"cd");return s._rf_hav()');
  window.swa_rf_copied = true;
}
if(!window.swa_rf_copied){
  swa_rf(s);
}

function getQueryStringVal(refUrl, qName) {
  var n = refUrl.indexOf(qName);
  var n1 = refUrl.indexOf("&", n);
  if (n1 < 0) {
    return refUrl.substr(n + 3);
  } else {
    return refUrl.substr(n + 3, (n1 - (n + 3)));
  }
}
var sURI = location.href;
var sDomain = "";
var stempFilters = document.location.hostname + ",";
var execustayFrame = document.getElementById('resframe');
if (execustayFrame) {
  sURI = execustayFrame.src;
}
if (!sURI.match('/execustay/reservation/')) {
  stempFilters += ".marriott.com,"
}
stempFilters += ".marriott.co.uk,.marriott.de,.marriott.com.au," 
+ ".marriott.com.cn,.marriott.co.jp,.marriott.fr,.marriott.com.br,.marriottrewardinsiders.com,flexrez.com," 
+ "investor.shareholder.com,.marriott.com.ar,.marriott.com.br,.marriott.co.kr,.marriott.de,marriott.flexrez.com,.marriott.fr,.marriott.hk," 
+ ".marriott.ie,.marriottdevelopment.com,.marriottdruidsglen.ie,marriott-email.com,.marriotthotels.ch,.marriotthotels.co.kr," 
+ ".marriotthotels.co.nz,.marriotthotels.co.uk,.marriotthotels.com.au,.marriotthotels.ie,.marriottmodules.com,.marriottrewards.cl," 
+ ".marriottrewards.co.ve,.marriottrewards.com.ar,.marriottrewards.com.br,.marriottrewards.com.cn,.marriottrewards.com.do," 
+ ".marriottrewards.com.mx,.marriottrewards.de,.marriottrewardsinsiders.com,middleeast.shopmarriott.com,mi-prod2.com," 
+ ".renaissance.com.br,.renaissance.com.do,.renaissancehotels.at,.renaissancehotels.ch,.renaissancehotels.cn," 
+ ".renaissancehotels.co.at,.renaissancehotels.co.jp,.renaissancehotels.co.kr,.renaissancehotels.co.uk,.renaissancehotels.com.au," 
+ ".renaissancehotels.com.br,.renaissancehotels.com.cn,.renaissancehotels.de,.renaissancehotels.fr,.santiagomarriott.cl," 
+ "usablenet.com,investor.shareholder.com,.courtyard.cl,.courtyard.co.cr,.courtyard.com.au,.courtyard.com.mx,.courtyard.fr," 
+ ".courtyardhotels.at,.courtyardhotels.cn,.courtyardhotels.co.nz,.courtyardhotels.co.uk,.courtyardhotels.de,.courtyardmarriott.cl," 
+ "hoteis.marriott.com.br,hoteles.espanol.marriott.com,ibahn.com,joinmarriottrewards.com,blogs.marriott.com," 
+ "marriottrewardsinsiders.marriott.com,marriottassociatesweeps.dja.com,marriottrewardssweeps.dja.com,marriottconsumersweeps.dja.com," 
+ "investor.shareholder.com/mar/,news.marriott.com,ritzcarlton-email.com,editionhotels.com,execustay.com,.marriott.pt,.marriott.it"
+ ".ritzcarlton.com,.meetingsimagined.com,findyourmarriotttravelertype.com,marriott-n4k0bc5.com,proteahotels.com";

if (document.referrer.length > 0 && document.referrer.indexOf('gifts.marriott.com') > -1)
  swa.campaign = 'Unpaid Referrals: gifts.marriott.com';
if (document.referrer.length > 0 && document.referrer.indexOf('mgs.marriott.com') > -1)
  swa.campaign = 'Unpaid Referrals: mgs.marriott.com';
if (sURI.indexOf('/golf/hotels/hotel-information/travel/') > -1)
  sDomain = document.location.hostname;
if (sURI.indexOf('/wedding/hotels/hotel-information/travel/') > -1)
  sDomain = document.location.hostname;
if (sURI.indexOf('/spa/hotels/hotel-information/travel/') > -1)
  sDomain = document.location.hostname;
if (sURI.indexOf('/restaurant/hotels/hotel-information/travel/') > -1)
  sDomain = document.location.hostname;
if (sURI.indexOf('mdcom-init001a2') > -1)
  sDomain = document.location.hostname;
if (sURI.indexOf('mdcom-pss001c2') > -1)
  sDomain = document.location.hostname;
if (sURI.indexOf('localhost') > -1)
  sDomain = document.location.hostname;
if (sDomain != "")
  sDomain = "," + sDomain;
stempFilters = stempFilters + sDomain;
swa.trackDownloadLinks = true
swa.trackExternalLinks = true
swa.trackInlineStats = true
swa.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
swa.linkInternalFilters = "javascript:," + stempFilters;
swa.linkLeaveQueryString = false
swa.linkTrackVars = "None"
swa.linkTrackEvents = "None"
swa.siteID = swa.d.domain;
swa.defaultPage = ""
swa.queryVarsList = "promotions,page"
swa.pathExcludeDelim = ";"
swa.pathConcatDelim = ""
swa.pathExcludeList = ""
swa.charSet = "UTF-8";
swa.cookieDomainPeriods = "2"
swa.fpCookieDomainPeriods = "2"
var d = window.location.hostname
if (d.indexOf('.co.uk') > 1 || d.indexOf('.com.au') > -1 || d.indexOf('.com.cn') > -1 || d.indexOf('.co.jp') > -1 || d.indexOf('.com.br') > -1 || d.indexOf('.co.kr') > -1) {
  swa.cookieDomainPeriods = "3";
  swa.fpCookieDomainPeriods = "3";
}
  
/* Cookie Campaign Data */
omniCampaignCookie.setCampaignData();
  
swa.usePlugins=true
swa.doPlugins = function(s) {
  // check for the report suite ID
  if (!_sdi.marriott.accountSet) {
    var rsid = _sdi.marriott.getAccount();
    if (rsid) {
      s.sa(rsid);
      window.swa_account = window.s_account = rsid;
      _sdi.marriott.accountSet = true;
    }
  }
  
  //Marriott UAT Tracking
  /****
  if (s.c_r("MUAT")){
    try {
      var muatObj=JSON.parse(decodeURIComponent(s.c_r("MUAT")));
      var testerEid=muatObj.testerEid||"";
      var testReason=muatObj.testReason||"";
      var testCase=muatObj.testCase||"";
      var testSeq=muatObj.testSeq||0;
      if ( (testerEid != "")&&(testReason != "")&&(testCase != "") ){
          testSeq++;
          var uatString=testerEid.replace(/\|/g,'')+"|"
            +testReason.replace(/\|/g,'')+"|"
            +testCase.replace(/\|/g,'')+"|"
            +testSeq;
          s.eVar7=uatString;
          s.prop19=uatString;
          s.linkTrackVars=s.apl(s.linkTrackVars,"eVar7",",",2);
          s.linkTrackVars=s.apl(s.linkTrackVars,"prop19",",",2);
          s.events = s.apl(s.events,'event25',',',2);
          s.linkTrackEvents = s.apl(s.linkTrackEvents,'event25',',',2);

         muatObj.testSeq=testSeq;
         document.cookie = "MUAT="+encodeURIComponent(JSON.stringify(muatObj))+"; path=/; domain=.marriott."+document.location.hostname.split(".").pop();
      }
    } catch(e){};
  }
  ****/

	//SDI page Timing plugin config	
  var sdiTimingResults=_sdiTiming.getTimingInfo();
	if (sdiTimingResults.timingPageName) {
		s.eVar35=sdiTimingResults.timingPageName;
		s.eVar36=sdiTimingResults.timingBuckets;
		s.events=s.apl(s.events, "event150", ",", 2);
		s.events=s.apl(s.events, "event151="+sdiTimingResults.A_domainLookupEnd.ms, ",", 2);
		s.events=s.apl(s.events, "event152="+sdiTimingResults.B_connectEnd.ms, ",", 2);
		s.events=s.apl(s.events, "event153="+sdiTimingResults.C_responseStart.ms, ",", 2);
		s.events=s.apl(s.events, "event154="+sdiTimingResults.D_responseEnd.ms, ",", 2);
		s.events=s.apl(s.events, "event155="+sdiTimingResults.E_domInteractive.ms, ",", 2);
		s.events=s.apl(s.events, "event156="+sdiTimingResults.F_domComplete.ms, ",", 2);
		s.events=s.apl(s.events, "event157="+sdiTimingResults.G_loadEventEnd.ms, ",", 2);
	}
  
  /* Project Orange - START*/
  // a map of the data element and variable to set the data in
  var orange = {
    'business profile': 'prop36',
    'leisure profile': 'prop37',
    'segment profile': 'prop38',
    'cei method': 'prop40'
  }, loginStatus, memState = _satellite.getVar('window.dataLayer.memState');
  for(var slice in orange){
    if(_satellite.getVar(slice)){
      s[orange[slice]] = _satellite.getVar(slice);
    }
  }
  // remembered users
  if(memState == 'remembered'){
    s.events = s.apl(s.events,'event12',',',2);
    s.events = s.apl(s.events,'event13',',',2);
    loginStatus = 'remembered';
    s.c_w('s_loginState','remembered');
  }
  // logged in users
  if(memState == 'authenticated'){
    loginStatus = 'logged in';
    s.c_w('s_loginState','authenticated');
  }
  // logged out users
  if(window.location.pathname.indexOf('logout.mi')>-1){
    loginStatus = 'logged out';
  }
  
  // login status
  if(loginStatus){
    s.eVar22 = loginStatus;
    s.prop27 = 'D=v22';
  }
  
  // set the dtm.no_block context variable for processing rules filtering
  s.contextData['dtm.no_block']="true";
  s.linkTrackVars = s.apl(s.linkTrackVars,'contextData.dtm.no_block',',',2);
    
  // concur linked account tracking
  var concurLinked=_satellite.getVar("concurAffiliate");
  if (concurLinked != "") {
    s.eVar3=concurLinked;
    // Concur hotel searches
    //if ((document.location.pathname == "/search/findHotels.mi") && (loginStatus == 'logged in') ){
    //  s.events = s.apl(s.events,'event29',',',2);
    //}
    // Count resverations where "Send to Concur" option was chosen.
    if (( _satellite.getVar("isResSentToConcur") == "Sent to Concur" ) && (document.location.pathname == "/reservation/confirmation.mi")) {
      var serialized49="event49:"+s.purchaseID;
      s.events = s.apl(s.events,serialized49,',',2);
    }
  }

  // IATA on confirmation page
  if (document.location.pathname == "/reservation/confirmation.mi") {
    var iata=_satellite.getVar("iata");
    if (iata != "") {
      s.eVar64=iata;
    }
  }

  // hotel ID from URL or personalized Placement
   if (document.location.pathname == "/travel-inspiration.mi") {
    if(s.getQueryParam('htl') && !s.products){
     s.products = ';'+s.getQueryParam('htl');
    } else {
      try {
        //pull the hotelID from the first (of two) anchor tags within the T&T presonalized placement
        var hotelIDfromViewRatesLink ="";
        if (typeof window.projectOrangePropertyCode != "undefined") {
					if (window.projectOrangePropertyCode != "") {
						hotelIDfromViewRatesLink = window.projectOrangePropertyCode;
					}
				} else if ($('div[id^="personalizedPlacement-"] a.analytics-click[href*="propertyCode"]').length > 0) { 
          hotelIDfromViewRatesLink = $('div[id^="personalizedPlacement-"] a.analytics-click[href*="propertyCode"]')[0].href.match(/propertyCode=[A-Z]*/)[0].split("=")[1];
        } else if ($('div#po2-overlay-biggerBP a.analytics-click[href*="propertyCode"]').length > 0) {
          hotelIDfromViewRatesLink = $('div#po2-overlay-biggerBP a.analytics-click[href*="propertyCode"]')[0].href.match(/propertyCode=[A-Z]*/)[0].split("=")[1];
        }
        if ((hotelIDfromViewRatesLink != "") && !s.products) {
          s.products = ';'+hotelIDfromViewRatesLink;
        }
      } catch (e) {
        _satellite.notify(e);
      }
    }
  }
  
  // click tracking - uses cookies
  var c_orng = s.c_r('projectOrangeVars'), orng;
  if(c_orng){
    orng = c_orng.split('^');
    s.eVar1 = orng[0];
    // this should only be set in the query string, commenting out
    // s.prop64 = orng[1];
    s.events = s.apl(s.events,'event2',',',2);
    var exp = new Date();
    exp.setYear(exp.getFullYear()-1);
    s.c_w('projectOrangeVars','',exp);
  }
  
  // Project Orange Segment Profile
  if (document.location.pathname == "/travel-inspiration.mi") {
    if(s.getQueryParam('seg')){
      var seg = s.getQueryParam('seg');
      var cleanSeg=seg.match(/^[a-zA-Z]{1,4}/);
      if (cleanSeg[0] != "") {
          cleanSeg[0]=cleanSeg[0].toUpperCase();
      } 
      s.prop64=cleanSeg[0];
    }
  }
  /* Project Orange - END */

  /* Endeca Click Tracking - START */
  var lnk = s.lnk||s.eo, $p, $endeca;
  if(lnk){
    // use jQuery if possible
    if(window.jQuery){
      var $lnk = jQuery(lnk);
      if(lnk.nodeName != 'A'){
        $lnk = jQuery(lnk).closest('a');
      }
      // look for the data-analytics attribute in any parent elements
      if($lnk.parents('[data-analytics*="eVar48"]')){
        $p = $lnk.parents('[data-analytics*="eVar48"]').data('analytics');
        if($p && _satellite.isObject($p)){
          var data = $p.customData.split('^');
          for(var i=0; i<data.length; i++){
            if(data[i].indexOf('eVar48=')==0){
              $endeca = data[i].substring(7);
            }
          }
        }
      }
      // check for the "personalizedPlacement" in any parent element IDs
      if(!$endeca && $lnk.parents('[id*="personalizedPlacement"]') && typeof _satEndeca != 'undefined'){
        $p = $lnk.parents('[id*="personalizedPlacement"]').attr('id');
        // loop through tracked impressions to get the data
        for(var i=0; i<_satEndeca.length; i++){
          if(_satEndeca[i].indexOf($p)>-1){
            $endeca = _satEndeca[i];
          }
        }
      }

      // send custom link if we have a successful click
      if($endeca && !$lnk.attr('data-tracked-endeca')){
        $lnk.attr('data-tracked-endeca','true');
        s.eVar48 = $endeca;
        s.linkTrackVars = s.apl(s.linkTrackVars,'eVar48',',',2);
        s.linkTrackVars = s.apl(s.linkTrackVars,'events',',',2);
        s.events = s.apl(s.events,'event92',',',2);
        s.linkTrackEvents = s.apl(s.linkTrackEvents,'event92',',',2);
        s.linkName = 'Endeca Click';
        s.linkType = 'o';
      }
    }
  }
  /* Endeca Click Tracking - END */


  if (!s.pageType && !s.pageName)
    s.pageName = s.getPageName();
  s.events = s.events || '';
  if (s.events && s.events.indexOf('prodView') > -1)
    s.events += ",event1";
  var temphr = s.getTimeParting('h', '-5', new Date().getFullYear());
  var tempday = s.getTimeParting('d', '-5', new Date().getFullYear());
  var tempweek = s.getTimeParting('w', '-5', new Date().getFullYear());
  if (temphr)
    s.prop8 = s.eVar15 = tempweek + " : " + tempday + " : " + temphr;
  var om_nck = s.getQueryParam('nCK');
  s.eVar43 = om_nck;
  s.tnt = s.trackTNT();
  var om_vpckey = s.getQueryParam('vpckey');
  var om_mktcmp = s.getQueryParam('mktcmp');
  var om_vedate = s.getQueryParam('vedate');
  var om_vetype = s.getQueryParam('vetype');
  var om_veseg = s.getQueryParam('veseg');
  var om_veof = s.getQueryParam('veof');
  var om_ck = s.getQueryParam('ck');
  var om_lk = s.getQueryParam('lk');
  var om_aff = s.getQueryParam('aff');
  var om_affname = s.getQueryParam('affname');
  var om_co = s.getQueryParam('co');
  var om_nt = s.getQueryParam('nt');
  var om_pcamp = s.getQueryParam('pcamp');
  var om_app = s.getQueryParam('app');
  var om_vsretype = s.getQueryParam('vsretype');
  var om_vsrebrand = s.getQueryParam('vsrebrand');
  var om_vsremarsha = s.getQueryParam('vsremarsha');
  var om_scid = s.getQueryParam('scid');
  var om_vsresect = s.getQueryParam('vsresect');
  var om_vsrelink = s.getQueryParam('vsrelink');
  var om_aid = s.getQueryParam('aid');
  if (typeof om_mktcmp != 'undefined' && om_mktcmp)
    s.campaign = 'mktcmp=' + om_mktcmp;
  if (typeof om_ck != 'undefined' && om_ck)
    s.campaign = 'vedate=' + om_vedate + ';vetype=' + om_vetype + ';veseg=' + om_veseg + ';veof=' + om_veof + ';ck=' + om_ck + ';nck=' + om_nck + ';lk=' + om_lk;
  if (typeof om_aff != 'undefined' && om_aff)
    s.campaign = 'aff=' + om_aff + ';affname=' + om_affname;
  if (typeof om_aff != 'undefined' && om_aff && typeof om_co != 'undefined' && om_co && typeof om_nt != 'undefined' && om_nt)
    s.campaign = 'aff=' + om_aff + ';affname=' + om_affname + ';co=' + om_co + ';nt=' + om_nt;
  if (typeof om_pcamp != 'undefined' && om_pcamp)
    s.campaign = 'pcamp=' + om_pcamp;
  if (typeof om_vsretype != 'undefined' && om_vsretype)
    s.campaign = 'vsretype=' + om_vsretype + ';vsresect=' + om_vsresect + ';vsrelink=' + om_vsrelink + ';vsrebrand=' + om_vsrebrand + ';vsremarsha=' + om_vsremarsha;
  if (typeof om_app != 'undefined' && om_app)
    s.campaign = 'app=' + om_app;
  if (typeof om_scid != 'undefined' && om_scid)
    s.campaign = om_scid;
  if (typeof om_aid != 'undefined' && om_aid) {
    if (sURI.match('marriott.it') || sURI.match('booking.marriott.it')) {
      om_aid = om_aid.substring(0, om_aid.indexOf(';'));
    }
    s.campaign = 'aid=' + om_aid;
  }
  var o = s.channelManager(true);
  if (typeof o != 'undefined' && o) {
    if (!s.campaign) {
      if (o.channel == 'Other Websites') {
        o.referringDomain = s.split(o.referringDomain, '/');
        var tempDomain = o.referringDomain[0];
        var socialMedia = ['blogspot.com', 'blogger.com', 'facebook.com', 'bebo.com', 'hi5.com', 'linkedin.com', 'ning.com', 'plaxo.com', 'twitter.com', 'lifestream.fm', 'yelp.com', 'youtube.com', 'metacafe.com', 'blip.tv,viddler.com', 'flicker.com', 'zvents.com', 'digg.com', 'reddit.com', 'newsvine.com'];
        for (var i = 0; i < socialMedia.length; i++) {
          var socialMediaFlag = tempDomain.indexOf(socialMedia[i]);
          if (socialMediaFlag != -1) {
            s.campaign = 'Social Media: ' + tempDomain;
            i = socialMedia.length;
          } else {
            s.campaign = 'Unpaid Referrals: ' + tempDomain;
          }
        }
      }
      if (o.channel == 'Natural') {
        s.campaign = ('Natural Search: ' + o.partner);
      }
    }
  }
  s.campaign = s.getAndPersistValue(s.campaign, 'p_campaign', 0);
  if (s.campaign && typeof s.campaign != 'undefined') {
    s.eVar16 = s.campaign;
  }

  //set event 3&4 if entering the res flow from external sites. 
  if (s.pageName == "www.marriott.com/reservation/rateListMenu.mi") {
    var fakeA = document.createElement('a');
    fakeA.href=document.referrer;
    var refHost=fakeA.hostname||"";
    if ((refHost.indexOf("www.marriott.com") == -1 ) && (refHost != "")) { //this is an external referrer
      //increment events 3 & 4
        s.events = s.apl(s.events,'event3',',',2);

        s.events = s.apl(s.events,'event4',',',2);
        return true;      
    }
	}
  
  
  /* eVar31 tracking
  * There are a few ways that the value for eVar31 can be captured.
  * 1. From the marketingCampaignTrackingData cookie.  This logic is above and is the first item checked.
  *   a. If there is a "pid" value, it takes precedence.
  *   b. If there isn't a "pid" value but there is an "affname" value, it will be captured.
  * 2. From the "pid" or "affname" query parameters.  Only one will be captured, and "pid" has priority over "affname"
  * 3. From the Affname cookie.  It will always take the value before a pipe, and will remove "pid=" if it is part of the value.
  */
  if(!s.eVar31){
    // get value from query string params
    if(s.getQueryParam('pid')){
      s.eVar31 = s.getQueryParam('pid');
    }
    if(!s.eVar31 && s.getQueryParam('affname')){
      s.eVar31 = 'affname='+s.getQueryParam('affname');
    }
    // get value from Affname cookie
    var affname = s.c_r('Affname');
    if(!s.eVar31 && affname){
      affname = affname.split('|')[0].replace(/pid=/ig,'');
      if(affname){
        s.eVar31 = affname;
      }
    }
  }
}

swa.loadModule("Media")
swa.Media.autoTrack=false
swa.Media.trackWhilePlaying=true
swa.Media.trackVars="None"
swa.Media.trackEvents="None"

swa._t = swa.t;
swa.t = function(){
  swa._t.apply(this, arguments);
  swa.eVar48 = '';
  swa.eVar1 = '';
  swa.events = '';
}

swa.trackTNT=new Function("v","p","b",""
+"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
+"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
+"]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");
swa.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
swa.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
swa.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
swa.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");
swa.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");
swa.getTimeParting=new Function("t","z","y","l",""
+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+"|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+"00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+"||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+"le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+"eturn A}}else{return Z+', '+W}}}");
  swa.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");
swa.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");
swa.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");
swa.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");
swa.join=new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
swa.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
swa.__se=new Function(""
+"var l={'~':'tl:[\\'','^': 'kw:[\\'','%': 'ahoo','|': '\\'],','>': '"
+"\\']}','*': '.com','$': 'search',';':'query','#':'land','`':'oogle'"
+",'+':'http://www','<':'keyword'};var f=this.___se+'';var g='';for(v"
+"ar i=0;i<f.length;i++){if(l[f.substring(i,i+1)]&&typeof l[f.substri"
+"ng(i,i+1)]!='undefined'){g+=l[f.substring(i,i+1)];}else{g+=f.substr"
+"ing(i,i+1);}}return eval('('+g+')');");
swa.___se="{'Paid Search':{i:['ppc|'Sina - China':{^q=|~g`.cn/$?client="
+"aff-sina>,'National Directory':{^;=|~$.NationalDirectory*>,'eerstek"
+"euze.nl':{^Terms=|~+.eerstekeuze.nl/>,'Excite - Netscape':{^general"
+"=','$=|~excite$.netscape*','$excite.netscape*>,'Andromeda Search':{"
+"^<=|~p-$.virtualave.net>,'So-net':{^MT=|~so-net.$.goo.ne.jp>,'InfoS"
+"eek - Japan':{^;=','qt=|~$.m.infoseek.co.jp>,'Goo (Japan)':{^MT=|~$"
+".mobile.goo.ne.jp>,'AllSearchEngines':{^;=s|~all$engines.co.uk>,'zo"
+"eken.nl':{^;=|~+.zoeken.nl/>,'Northern Light':{^qr=|~www.northernli"
+"ght*>,'Biglobe':{^q=|~$.biglobe.ne.jp>,'track.nl':{^qr=|~+.track.nl"
+"/>,'Baidu':{^wd=','s=|~+.baidu*>,'3721*':{^p=|~+.3721*/>,'Galaxy':{"
+"^|~galaxy.tradewave*>,'G` - Norway (Startsiden)':{^q=|~g`.startside"
+"n.no>,'NetSearch':{^Terms=','$=|~net$voyager*','net$.org>,'au.Anzwe"
+"rs':{^p=|~au.anzwers.y%*>,'MSN - Latin America':{^q=|~$.latam.msn*>"
+",'Searchteria':{^p=|~ad.$teria.co.jp>,'FreshEye':{^ord=','kw=|~$.fr"
+"esheye*>,'Metacrawler':{^general=','/$/web/|~www.metacrawler*','$.m"
+"etacrawler*>,'Y%! - Austria':{^p=|~at.$.y%*>,'Y%! - Spanish (US : T"
+"elemundo)':{^p=|~telemundo.y%*','espanol.$.y%*>,'Business*':{^;=|~b"
+"usiness*/$>,'Y%! - Switzer#':{^p=|~ch.$.y%*>,'Y%! - Fin#':{^p=|~fi."
+"$.y%*>,'Dino Online':{^;=|~www.dino-online.de>,'Internet Times':{^$"
+"=',';=|~internet-times*>,'TheYellowPages':{^$=|~theyellowpages*>,'W"
+"eb-Search':{^q=|~www.web-$*>,'Y%! - Malaysia':{^p=|~malaysia.y%*','"
+"malaysia.$.y%*>,'WebCrawler':{^$Text=','$=|~www.webcrawler*>,'Monst"
+"er Crawler':{^qry=|~monstercrawler*>,'Sina - Hong Kong':{^word=|~g`"
+".sina*.hk>,'Sina - Taiwan':{^kw=|~g`.sina*.tw>,'Y%Japan - Mobile':{"
+"^p=|~mobile.y%.co.jp>,'Livedoor - Mobile':{^q=','<=|~dir.m.livedoor"
+"*>,'Blue Window':{^q=','qry=|~$.bluewin.ch','$.bluewindow.ch>,'Gene"
+"ral Search':{^<=|~general$*>,'InternetTrash':{^words=|~internettras"
+"h*>,'MSN - United Kingdom':{^q=|~uk.$.msn*','msn.co.uk>,'Y%! - Chin"
+"ese (US)':{^p=|~chinese.y%*>,'MSN - Singapore':{^q=|~$.msn*.sg>,'MS"
+"N - Republic of the Phlippines':{^q=|~$.msn*.ph>,'MSN - Taiwan':{^q"
+"=|~$.msn*.tw>,'MSN - Turkey':{^q=|~$.msn*.tr>,'MSN - People\\'s Rep"
+"ublic of China':{^q=|~$.msn*.cn>,'MSN - Malaysia':{^q=|~$.msn*.my>,"
+"'MSN - Hong Kong S.A.R.':{^q=|~$.msn*.hk>,'MSN - Brazil':{^q=|~$.ms"
+"n*.br>,'G` @ EZweb':{^;=|~ezsch.ezweb.ne.jp>,'AltaVista - Nether#s'"
+":{^q=|~nl.altavista*>,'AltaVista - Spain':{^q=','r=|~es.altavista*>"
+",'AltaVista - Italy':{^q=','r=|~it.altavista*>,'AltaVista - Canada'"
+":{^q=|~ca.altavista*>,'AltaVista - Switzer#':{^q=','r=|~ch.altavist"
+"a*>,'AltaVista - France':{^q=','r=|~fr.altavista*>,'AltaVista - Uni"
+"ted Kingdom':{^q=','r=|~uk.altavista*>,'AltaVista - Sweden':{^q=','"
+"r=|~se.altavista*>,'DejaNews':{^QRY=|~www.dejanews*>,'Excite':{^/$/"
+"web/','qkw=|~msxml.excite*>,'Globe Crawler':{^$=|~globecrawler*>,'H"
+"otBot':{^MT=',';=|~hotbot.lycos*>,'InfoSeek':{^qt=|~www.infoseek*',"
+"'infoseek.go*>,'MSN - South Africa':{^q=|~$.msn.co.za>,'MSN - Isrea"
+"l':{^q=|~$.msn.co.il>,'MSN - Japan':{^q=|~$.msn.co.jp>,'MSN - Canad"
+"a':{^q=|~sympatico.msn.ca','$.fr.msn.ca>,'MSN - Korea':{^q=',';=|~$"
+".msn.co.kr>,'Search City':{^$=','<=|~$city.co.uk>,'Search Viking':{"
+"^$=|~$viking*>,'Thunderstone':{^q=|~thunderstone*>,'Web Wombat (Au."
+")':{^I=','ix=|~webwombat*.au>,'AltaVista - Norway':{^q=|~no.altavis"
+"ta*>,'AltaVista - Denmark':{^q=|~dk.altavista*>,'MSN - India (Engli"
+"sh)':{^q=|~$.msn.co.in>,'MSN - Indonesia (English)':{^q=|~$.msn.co."
+"id>,'Nifty':{^Text=|~$.nifty*>,'ANZWERS':{^;=|~www.anzwers*>,'Buyer"
+"sIndex':{^;=|~buyersindex*>,'CNET Search*':{^q=|~cnet.$*>,'Dmoz':{^"
+"$=|~$.dmoz*','dmoz*>,'Final Search':{^pattern=|~final$*>,'FullWebin"
+"fo Directory & Search Engine':{^k=','s=|~fullwebinfo*>,'Go (Infosee"
+"k)':{^qt=|~infoseek.go*>,'GoEureka':{^q=','key=|~goeureka*.au>,'Liv"
+"e*':{^q=|~$.live*>,'QuestFinder':{^s=|~questfinder*','questfinder.n"
+"et>,'SearchHound':{^?|~$hound*>,'TopFile*':{^;=|~www.topfile*>,'Sin"
+"a - North America':{^$_key=|~g`.sina*>,'AOL* Search':{^;=|~$.aol*',"
+"'$.aol.ca>,'ByteSearch':{^$=','q=|~byte$*>,'ComFind':{^|~debriefing"
+"*','allbusiness*find*>,'Dictionary*':{^term=',';=|~Dictionary*','Di"
+"ctionary>,'ilse.nl':{^$_for=|~$.ilse.nl>,'Infoseek - Japan':{^qt=|~"
+"infoseek.co.jp>,'InfoSeek':{^qt=|~infoseek.co.uk>,'Rex Search':{^te"
+"rms=|~rex-$*','rex-$*>,'Search King':{^$term=','<=|~$king*>,'Search"
+"alot':{^;=','q=|~$alot*>,'Web Trawler':{^|~webtrawler*>,'Y%! - Asia"
+"':{^p=|~asia.y%*','asia.$.y%*>,'Y%! - Kids':{^p=|~kids.y%*','kids.y"
+"%*/$>,'SmartPages*':{^QueryString=|~smartpages*>,'MetaGopher':{^;=|"
+"~metagopher*>,'Froute':{^k=|~item.froute.jp','$.froute.jp>,'All The"
+" Web':{^;=','q=|~alltheweb*>,'DirectHit':{^qry=','q=|~directhit*>,'"
+"Excite Canada':{^$=','q=|~www.excite.ca','$.excite.ca>,'Excite - Ge"
+"rmany':{^$=','q=|~www.excite.de>,'Excite - Dutch':{^$=|~nl.excite*>"
+",'G` - Australia':{^q=|~g`*.au>,'G` - Brasil':{^q=|~g`*.br>,'InfoSp"
+"ace':{^QKW=','qhqn=|~infospace*>,'InfoTiger':{^qs=|~infotiger*>,'Lo"
+"okSmart':{^key=','qt=|~looksmart*','looksmart.co.uk>,'Lycos':{^;=|~"
+"www.lycos*','$.lycos*>,'Excite - Australia':{^$=','key=|~excite*.au"
+">,'Metacrawler - Germany':{^qry=|~216.15.219.34','216.15.192.226>,'"
+"MSN - Nether#s':{^q=|~$.msn.nl>,'MSN - Belgium':{^q=|~$.msn.be>,'MS"
+"N - Germany':{^q=|~$.msn.de>,'MSN - Austria':{^q=|~$.msn.at>,'MSN -"
+" Spain':{^q=|~$.msn.es>,'MSN - Italy':{^q=|~$.msn.it>,'MSN - France"
+"':{^q=|~$.msn.fr>,'MSN - Switzer#':{^q=|~$.msn.ch','fr.ch.msn*>,'MS"
+"N - Sweden':{^q=|~$.msn.se>,'RageWorld*':{^$=|~rageworld*>,'ToggleB"
+"ot!':{^$=',';=|~togglebot*>,'Web Wombat':{^I=','ix=|~webwombat*>,'M"
+"SN - Norway':{^q=|~$.msn.no>,'MSN - Denmark':{^q=|~$.msn.dk>,'G` - "
+"Nicaragua':{^q=|~g`*.ni>,'G` - Antigua and Barbuda':{^q=|~g`*.ag>,'"
+"G` - Anguilla':{^q=|~g`*.ai>,'G` - Taiwan':{^q=|~g`*.tw>,'G` - Ukra"
+"ine':{^q=|~g`*.ua>,'G` - Namibia':{^q=|~g`*.na>,'G` - Uruguay':{^q="
+"|~g`*.uy>,'G` - Ecuador':{^q=|~g`*.ec>,'G` - Libya':{^q=|~g`*.ly>,'"
+"G` - Norfolk Is#':{^q=|~g`*.nf>,'G` - Tajikistan':{^q=|~g`*.tj>,'G`"
+" - Ethiopia':{^q=|~g`*.et>,'G` - Malta':{^q=|~g`*.mt>,'G` - Philipp"
+"ines':{^q=|~g`*.ph>,'G` - Hong Kong':{^q=|~g`*.hk>,'G` - Singapore'"
+":{^q=|~g`*.sg>,'G` - Jamaica':{^q=|~g`*.jm>,'G` - Paraguay':{^q=|~g"
+"`*.py>,'G` - Panama':{^q=|~g`*.pa>,'G` - Guatemala':{^q=|~g`*.gt>,'"
+"G` - Isle of Gibraltar':{^q=|~g`*.gi>,'G` - El Salvador':{^q=|~g`*."
+"sv>,'G` - Colombia':{^q=|~g`*.co>,'G` - Turkey':{^q=|~g`*.tr>,'G` -"
+" Peru':{^q=|~g`*.pe>,'G` - Afghanistan':{^q=|~g`*.af>,'G` - Malaysi"
+"a':{^q=|~g`*.my>,'G` - Mexico':{^q=|~g`*.mx>,'G` - Viet Nam':{^q=|~"
+"g`*.vn>,'G` - Nigeria':{^q=|~g`*.ng>,'G` - Nepal':{^q=|~g`*.np>,'G`"
+" - Solomon Is#s':{^q=|~g`*.sb>,'G` - Belize':{^q=|~g`*.bz>,'G` - Pu"
+"erto Rico':{^q=|~g`*.pr>,'G` - Oman':{^q=|~g`*.om>,'G` - Cuba':{^q="
+"|~g`*.cu>,'G` - Bolivia':{^q=|~g`*.bo>,'G` - Bahrain':{^q=|~g`*.bh>"
+",'G` - Bangladesh':{^q=|~g`*.bd>,'G` - Cambodia':{^q=|~g`*.kh>,'G` "
+"- Argentina':{^q=|~g`*.ar>,'G` - Brunei':{^q=|~g`*.bn>,'G` - Fiji':"
+"{^q=|~g`*.fj>,'G` - Saint Vincent and the Grenadine':{^q=|~g`*.vc>,"
+"'G` - Qatar':{^q=|~g`*.qa>,'MSN - Ire#':{^q=|~$.msn.ie>,'G` - Pakis"
+"tan':{^q=|~g`*.pk>,'G` - Dominican Republic':{^q=|~g`*.do>,'G` - Sa"
+"udi Arabia':{^q=|~g`*.sa>,'G` - Egypt':{^q=|~g`*.eg>,'G` - Belarus'"
+":{^q=|~g`*.by>,'Biglobe':{^extrakey=|~$.kbg.jp>,'AltaVista':{^q=','"
+"r=|~altavista.co>,'AltaVista - Germany':{^q=','r=|~altavista.de>,'A"
+"OL - Germany':{^q=|~suche.aol.de','suche.aolsvc.de>,'Excite - Japan"
+"':{^$=','s=|~excite.co.jp>,'Fansites*':{^q1=|~fansites*>,'FindLink'"
+":{^|~findlink*>,'GoButton':{^|~gobutton*>,'G` - India':{^q=|~g`.co."
+"in>,'G` - New Zea#':{^q=|~g`.co.nz>,'G` - Costa Rica':{^q=|~g`.co.c"
+"r>,'G` - Japan':{^q=|~g`.co.jp>,'G` - United Kingdom':{^q=|~g`.co.u"
+"k>,'G` - Yugoslavia':{^q=|~g`.co.yu>,'Overture':{^Keywords=|~overtu"
+"re*>,'Hotbot - United Kingdom':{^;=|~hotbot.co.uk>,'Loquax Open Dir"
+"ectory':{^$=|~loquax.co.uk>,'MSN - Mexico':{^q=|~t1msn*.mx','$.prod"
+"igy.msn*>,'Netscape Search':{^;=','$=|~netscape*>,'Y%! - Philippine"
+"s':{^p=|~ph.y%*','ph.$.y%*>,'Y%! - Thai#':{^p=|~th.y%*','th.$.y%*>,"
+"'Y%! - Argentina':{^p=|~ar.y%*','ar.$.y%*>,'Y%! - Indonesia':{^p=|~"
+"id.y%*','id.$.y%*>,'Y%! - Hong Kong':{^p=|~hk.y%*','hk.$.y%*>,'Y%! "
+"- Russia':{^p=|~ru.y%*','ru.$.y%*>,'Y%! - Canada':{^p=|~ca.y%*','ca"
+".$.y%*>,'Y%! - Taiwan':{^p=|~tw.y%*','tw.$.y%*>,'Y%! - Catalan':{^p"
+"=|~ct.y%*','ct.$.y%*>,'Y%! - Canada (French)':{^p=|~qc.y%*','cf.$.y"
+"%*>,'Y%! - China':{^p=|~cn.y%*','$.cn.y%*>,'Y%! - India':{^p=|~in.y"
+"%*','in.$.y%*>,'Y%! - Brazil':{^p=|~br.y%*','br.$.y%*>,'Y%! - Korea"
+"':{^p=|~kr.y%*','kr.$.y%*>,'Y%! - Australia':{^p=|~au.y%*','au.$.y%"
+"*>,'Y%! - Mexico':{^p=|~mx.y%*','mx.$.y%*>,'Y%! - Singapore':{^p=|~"
+"sg.y%*','sg.$.y%*>,'Y%! - Denmark':{^p=|~dk.y%*','dk.$.y%*>,'Y%! - "
+"Germany':{^p=|~de.y%*','de.$.y%*>,'Y%! - UK and Ire#':{^p=|~uk.y%*'"
+",'uk.$.y%*>,'Y%! - Sweden':{^p=|~se.y%*','se.$.y%*>,'Y%! - Spain':{"
+"^p=|~es.y%*','es.$.y%*>,'Y%! - Italy':{^p=|~it.y%*','it.$.y%*>,'Y%!"
+" - France':{^p=|~fr.y%*','fr.$.y%*>,'Y%! - Norway':{^p=|~no.y%*','n"
+"o.$.y%*>,'G` - Virgin Is#s':{^q=|~g`.co.vi>,'G` - Uzbekiston':{^q=|"
+"~g`.co.uz>,'G` - Thai#':{^q=|~g`.co.th>,'G` - Israel':{^q=|~g`.co.i"
+"l>,'G` - Korea':{^q=|~g`.co.kr>,'Y%! - Nether#s':{^p=|~nl.y%*','nl."
+"$.y%*>,'Y%! - New Zea#':{^p=|~nz.y%*','nz.$.y%*>,'G` - Zambia':{^q="
+"|~g`.co.zm>,'G` - South Africa':{^q=|~g`.co.za>,'G` - Zimbabwe':{^q"
+"=|~g`.co.zw>,'Y%! - Viet Nam':{^p=|~vn.y%*','vn.$.y%*>,'G` - Uganda"
+"':{^q=|~g`.co.ug>,'G` - Indonesia':{^q=|~g`.co.id>,'G` - Morocco':{"
+"^q=|~g`.co.ma>,'G` - Lesotho':{^q=|~g`.co.ls>,'G` - Kenya':{^q=|~g`"
+".co.ke>,'G` - Cook Is#s':{^q=|~g`.co.ck>,'G` - Botswana':{^q=|~g`.c"
+"o.bw>,'G` - Venezuela':{^q=|~g`.co.ve>,'BeGuide*':{^$=|~beguide*>,'"
+"dog*':{^$=|~doginfo*>,'Dogpile':{^q=','/$/web/|~dogpile*>,'Fireball"
+"':{^q=',';=|~fireball.de>,'FishHoo!':{^;=|~fishhoo*>,'InfoSeek - Ge"
+"rmany':{^qt=',';=|~infoseek.de>,'Lycos - United Kingdom':{^;=|~lyco"
+"s.co.uk>,'MetaDog*':{^$=','<=|~metapro*','metadog*>,'TooCool':{^?|~"
+"toocool*>,'Y%! - Japan':{^p=','va=|~y%.co.jp','$.y%.co.jp>,'Cafesta"
+"':{^<=','<s=|~cafesta*>,'Oh! New? Mobile':{^k=|~ohnew.co.jp>,'Chubb"
+"a':{^arg=|~chubba*>,'CyberBritain*':{^qry=|~hermia*','cyberbritain."
+"co.uk>,'GeoBoz Search':{^$=|~geoboz*>,'Go2net Metacrawler':{^genera"
+"l=|~go2net*>,'Tiscali':{^key=|~tiscali.it>,'TooZen':{^|~toozen*>,'W"
+"AKWAK':{^MT=|~wakwak*>,'Webalta':{^q=|~webalta.ru>,'MSN LiveSearch "
+"Mobile':{^q=|~m.live*>,'AOL - United Kingdom':{^;=|~aol.co.uk','$.a"
+"ol.co.uk>,'Dazzo!':{^$=|~dazzo*>,'Deoji':{^$=','k=|~deoji*>,'Excite"
+" - France':{^$=','q=|~excite.fr>,'Excite.ch':{^$=','q=|~excite.ch>,"
+"'Godado':{^Keywords=|~godado.it>,'Goo (Jp.)':{^MT=|~goo.ne.jp>,'G` "
+"- Po#':{^q=|~g`.pl>,'G` - United Arab Emirates':{^q=|~g`.ae>,'G` - "
+"Luxembourg':{^q=|~g`.lu>,'G` - Slovakia':{^q=|~g`.sk>,'G` - Russia'"
+":{^q=|~g`.ru>,'G` - Denmark':{^q=|~g`.dk>,'G` - Portugal':{^q=|~g`."
+"pt>,'G` - Romania':{^q=|~g`.ro>,'G` - Fin#':{^q=|~g`.fi>,'G` - Latv"
+"ia':{^q=|~g`.lv>,'G` - Guernsey':{^q=|~g`.gg>,'G` - Ire#':{^q=|~g`."
+"ie>,'G` - Sweden':{^q=|~g`.se>,'G` - Lithuania':{^q=|~g`.lt>,'G` - "
+"Canada':{^q=|~g`.ca>,'G` - Spain':{^q=|~g`.es>,'G`':{^q=|~g`.co','g"
+"`syndication*>,'G` - Germany':{^q=|~g`.de>,'G` - Switzer#':{^q=|~g`"
+".ch>,'G` - China':{^q=|~g`.cn>,'G` - Nether#s':{^q=|~g`.nl>,'G` - A"
+"ustria':{^q=|~g`.at>,'G` - Belgium':{^q=|~g`.be>,'G` - Chile':{^q=|"
+"~g`.cl>,'G` - France':{^q=|~g`.fr>,'G` - Italy':{^q=|~g`.it>,'Nexet"
+" Open Directory':{^SEARCH=','q=|~nexet.net>,'Nomade':{^s=','MT=|~no"
+"made.fr>,'Orbit.net':{^|~orbit.net>,'Search.ch':{^q=|~$.ch>,'Y%!':{"
+"^p=|~y%*','$.y%*>,'G` - Norway':{^q=|~g`.no>,'G` - Haiti':{^q=|~g`."
+"ht>,'G` - Vanuatu':{^q=|~g`.vu>,'G` - Repulic of Georgia':{^q=|~g`."
+"ge>,'G` - The Gambia':{^q=|~g`.gm>,'G` - Timor-Leste':{^q=|~g`.tp>,"
+"'G` - Armenia':{^q=|~g`.am>,'G` - British Virgin Is#s':{^q=|~g`.vg>"
+",'G` - American Samoa':{^q=|~g`.as>,'G` - Turkmenistan':{^q=|~g`.tm"
+">,'G` - Trinidad and Tobago':{^q=|~g`.tt>,'G` - Cote D\\'Ivoire':{^"
+"q=|~g`.ci>,'G` - Seychelles':{^q=|~g`.sc>,'G` - Greece':{^q=|~g`.gr"
+">,'G` - The Bahamas':{^q=|~g`.bs>,'G` - Kyrgyzstan':{^q=|~g`.kg>,'G"
+"` - Saint Helena':{^q=|~g`.sh>,'G` - Burundi':{^q=|~g`.bi>,'G` - To"
+"kelau':{^q=|~g`.tk>,'G` - Rep. du Congo':{^q=|~g`.cg>,'G` - Dominic"
+"a':{^q=|~g`.dm>,'G` - Sao Tome and Principe':{^q=|~g`.st>,'G` - Rwa"
+"nda':{^q=|~g`.rw>,'G` - Jordan':{^q=|~g`.jo>,'G` - Czech Republic':"
+"{^q=|~g`.cz>,'Yandex.ru':{^text=|~yandex.ru>,'G` - Senegal':{^q=|~g"
+"`.sn>,'G` - Jersey':{^q=|~g`.je>,'G` - Honduras':{^q=|~g`.hn>,'G` -"
+" Green#':{^q=|~g`.gl>,'G` - Hungary':{^q=|~g`.hu>,'G` - Is#':{^q=|~"
+"g`.is>,'G` - Pitcairn Is#s':{^q=|~g`.pn>,'G` - Mongolia':{^q=|~g`.m"
+"n>,'G` - Malawi':{^q=|~g`.mw>,'G` - Montserrat':{^q=|~g`.ms>,'G` - "
+"Liechtenstein':{^q=|~g`.li>,'G` - Micronesia':{^q=|~g`.fm>,'G` - Ma"
+"uritius':{^q=|~g`.mu>,'G` - Moldova':{^q=|~g`.md>,'G` - Maldives':{"
+"^q=|~g`.mv>,'G` - Niue':{^q=|~g`.nu>,'G` - Kazakhstan':{^q=|~g`.kz>"
+",'G` - Kiribati':{^q=|~g`.ki>,'G` - Nauru':{^q=|~g`.nr>,'G` - Laos'"
+":{^q=|~g`.la>,'G` - Isle of Man':{^q=|~g`.im>,'G` - Guyana':{^q=|~g"
+"`.gy>,'G` - Croatia':{^q=|~g`.hr>,'G` - Slovenia':{^q=|~g`.si>,'G` "
+"- Sri Lanka':{^q=|~g`.lk>,'G` - Azerbaijan':{^q=|~g`.az>,'G` - Bulg"
+"aria':{^q=|~g`.bg>,'G` - Bosnia-Hercegovina':{^q=|~g`.ba>,'G` - Ton"
+"ga':{^q=|~g`.to>,'G` - Rep. Dem. du Congo':{^q=|~g`.cd>,'MSN - New "
+"Zea#':{^q=','mkt=en-nz|~msn.co.nz>,'G` - Djibouti':{^q=|~g`.dj>,'G`"
+" - Guadeloupe':{^q=|~g`.gp>,'G` - Estonia':{^q=|~g`.ee>,'G` - Samoa"
+"':{^q=|~g`.ws>,'G` - San Marino':{^q=|~g`.sm>,'MSN UK':{^q=|~msn.co"
+".uk>,'Mobagee Search':{^q=|~s.mbga.jp>,'Lycos - Italy':{^;=|~lycos."
+"it>,'Lycos - France':{^;=|~lycos.fr>,'Lycos - Spain':{^;=|~lycos.es"
+">,'Lycos - Nether#s':{^;=|~lycol.nl>,'Lycos - Germany':{^;=|~lycol."
+"de','$.lycos.de>,'Magellan':{^$=|~magellan>,'myGO':{^qry=|~mygo*>,'"
+"NBCi':{^<=','qkw=|~nbci*>,'Nate*':{^;=|~nate*','$.nate*>,'Crooz':{^"
+";=|~crooz.jp>,'Ask Jeeves':{^ask=','q=|~ask*','ask.co.uk>,'MSN':{^q"
+"=|~msn*>,'AOL - France':{^q=|~aol.fr>,'MetaIQ*':{^$=','qry=|~metaiq"
+">,'Web.de':{^su=|~web.de>,'Ask - Japan':{^q=|~ask.jp>,'Microsoft Bi"
+"ng':{^q=|~bing*>}}";
swa.isEntry=function(){
  try {
    var s=this;
    var l=swa.linkInternalFilters,
      r=swa.referrer||typeof swa.referrer!='undefined'?swa.referrer:document.referrer,
      p=l.indexOf(','),
      b=0,
      v='',
      ref_domain,
      r2;

    if(!r){return 1;}

    if(r.indexOf('//')>-1){
      ref_domain = r.substring(r.indexOf('//')+2);
      if(ref_domain.indexOf('/')>-1){
        ref_domain = ref_domain.substring(0,ref_domain.indexOf('/'));
      }
    }
    r2 = (r.split('?'))[0];
    if(!ref_domain){
      ref_domain = r2;
    }

    while(p=l.indexOf(',')){
      v=p>-1?l.substring(0,p):l;
      // internal filter is more than domain
      if(v.indexOf('/')>-1){
        if(r2.indexOf(v)>-1){
          return 0;
        }
      }
      // referring domain only
      else {
        if(v=='.'||ref_domain.indexOf(v)>-1){
          return 0;
        }
      }
      if(p==-1){break;}
      b=p+1;
      l=l.substring(b,l.length);
    }
  }
  catch(error){}
  return 1;

};
swa.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");
swa.channelManager=new Function("p","f",""
+"var dl='Direct Load',nr='No Referrer',ow='Other Websites';if(!this."
+"p_fo('cm')) {return -1;}if(!this.isEntry()){return 0;}var s=this,r="
+"s.referrer||typeof s.referrer!='undefined'?s.referrer:document.refe"
+"rrer,e,k,c,w,_b=0,url=s.pageURL?s.pageURL:s.wd.location,url=url+'',"
+"rf='';s.__se=s.__se();var br=0;var ob=new Object;ob.debug=function("
+"m){if(f){f(m);}};ob.channel='';ob.keyword='';ob.partner='';ob.toStr"
+"ing=function(ar){var str='';var x=0;for(x in ar){str+=ar[x]+':\\\''"
+"+ob[ar[x]]+'\\\',';}str='{'+str.substring(0,str.length-1)+'}';retur"
+"n str;};ob.referrer=r?r:nr;ob.getReferringDomain=function(){if(this"
+".referrer==''){return '';}if(r&&typeof r!='undefined'){var end=r.in"
+"dexOf('?') >-1?r.indexOf('?'):r.substring(r.length-1,r.length)=='/'"
+"?r.length-1:r.length;var start=r.indexOf('://')>-1?r.indexOf('://')"
+"+3:0;return r.substring(start,end);}else{return nr;}};ob.clear=func"
+"tion(ar){var x=0;for(x in ar){this[ar[x]]='';}this.referringDomain="
+"this.getReferringDomain();};ob.referringDomain=ob.getReferringDomai"
+"n();ob.campaignId=''; ob.isComplete=function(){var ar=['channel','k"
+"eyword','partner','referrer','campaignId'];for(var i=0;i<ar.length;"
+"i++){if(!ob[ar[i]]){return 0;}}if(p&&s.c_r('cmm')==ob.toString(ar))"
+"{this.debug('Duplicate');this.clear(ar);return 1;}else if(p){s.c_w("
+"'cmm',ob.toString(ar));return 1;}return 1;};ob.matcher=function(u,x"
+"){if(!u){return false;}if(typeof s.__se[u].i!='undefined'&&(s.campa"
+"ign||s.getQueryParam&&s.getQueryParam(ids[x]))){ob.campaignId=s.get"
+"QueryParam(ids[x]);return true;}else if(typeof s.__se[u].p!='undefi"
+"ned' &&(s.campaign||s.getQueryParam&&s.getQueryParam&&s.getQueryPar"
+"am(ids[x].substring(0,ids[x].indexOf('='))))){var _ii=ids[x].substr"
+"ing(ids[x].indexOf('=') +1,ids[x].length);var _id=s.campaign||s.get"
+"QueryParam(ids[x].substring(0,ids[x].indexOf('=')));if (_ii==_id.su"
+"bstring(0,_ii.length)){ob.campaignId=_id;return true;}}else{return "
+"false;}};var ids='';var _p='';for(var i in s.__se){if(_p){break;}fo"
+"r(var j in s.__se[i]){if(!(j=='p' ||j=='i')){_p=i;}}}for(var u in s"
+".__se[_p]){if(u!='i' &&u!='p'){for(var h=0;h<s.__se[_p][u].tl.lengt"
+"h;h++){if(s.__se[_p][u].tl[h]&&typeof s.__se[_p][u].tl[h]=='string'"
+"){if(r.indexOf(s.__se[_p][u].tl[h])!=-1){ob.partner=u;br=1;break;}}"
+"if(br){break;}}}else {ids=s.__se[_p][u];}if(br){for(var i=0;i<s.__s"
+"e[_p][ob.partner].kw.length;i++){if(s.__se[_p][u].kw[i]&&typeof s._"
+"_se[_p][u].kw[i]=='string') {var kwd=s.__se[_p][u].kw[i].substring("
+"0,s.__se[_p][u].kw[i].length-1);ob.keyword=s.getQueryParam?s.getQue"
+"ryParam(kwd,'', r):''; if(ob.keyword){break;}}}for(var x=0;x<ids.le"
+"ngth;x++){if(ob.matcher(_p,x)){ob.channel=_p;if(!ob.keyword){ob.key"
+"word='n/a'; }break;}};if(!ob.channel){ob.channel='Natural'; ob.camp"
+"aignId='n/a';"
+"if(r.match(/r\.search\.yahoo\.com|www\.google\.*|www\.bing\.com/) && !ob.keyword){ob.keyword='n/a';}"
+"}break;}}if(ob.isComplete()){return ob;}for(var _u in"
+" s.__se){if(_u==_p){continue;}for(var u in s.__se[_u]){ids=s.__se[_"
+"u][u];for(var x=0;x<ids.length;x++){if(ob.matcher(_u,x)){ob.channel"
+"=_u;ob.partner=_u;ob.keyword='n/a'; break;}}if(ob.isComplete()){ret"
+"urn ob;}}}if(ob.isComplete()){return ob;}if(ob.referrer&&(ob.referr"
+"er!=nr)){ob.channel=ow;ob.partner=ow;ob.keyword='n/a'; ob.campaignI"
+"d='n/a'; }if(ob.isComplete()){return ob;}ob.channel=dl;ob.partner=d"
+"l;ob.keyword='n/a'; ob.campaignId='n/a';return ob;");
if(!swa.__ccucr){
  swa.c_rr=swa.c_r;swa.__ccucr=true;swa.c_r=new Function("k",""
  +"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
  +"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
  +"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
  +",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
  +"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
  +"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
  +"urn v;");
}
if(!swa.__ccucw){
  swa.c_wr=swa.c_w;swa.__ccucw=true;
  swa.c_w=new Function("k","v","e",""
  +"this.new2 = true;"
  +"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
  +"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
  +".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
  +"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
  +".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
  +"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
  +"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
  +"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
  +".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
  +"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
  +"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
}

swa.trackingServer="metrics.marriott.com";
swa.trackingServerSecure="smetrics.marriott.com";
//Sep2015//swa.visitorMigrationKey="4E57E5D3"
//Sep2015//swa.visitorMigrationServer="marriottinternational.122.2o7.net"
//Sep2015//swa.visitorMigrationServerSecure="marriottinternational.122.2o7.net"
swa.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
+" m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
+"i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
+"is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
+"Data,x;c['a.contentType']='video';c[ns+'channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe="
+"'m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if("
+"i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2=''"
+";if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentTy"
+"pe\"){if(v)v+=','+a;vo[a]=c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c["
+"x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMil"
+"estones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};"
+"m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+"
+"i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v="
+"m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new O"
+"bject;if(!m.channel)m.channel=m.s.wd.location.hostname;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i"
+".l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.m"
+"ediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||("
+"x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l"
+">0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)fo"
+"r(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,'"
+",');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+("
+"i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if("
+"!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti="
+"ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||(x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.co"
+"mpleteByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='"
+"_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monito"
+"r(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.link"
+"TrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o"
+";i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else"
+" r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s'"
+",f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Objec"
+"t;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var "
+"e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var "
+"m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.dur"
+"ation;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x="
+"m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x"
+"=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?"
+"o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l"
+",\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+"
+"';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o"
+".GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+"
+"'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd"
+"[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Fun"
+"ction('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.atta"
+"chEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";swa.m_i("Media");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.27.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.tagContainerMarker='';s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingS"
+"erverSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net"
+"';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobi"
+"le?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+(s.tagContainerMarker?\"-\"+s.tagContainerMarker:\"\")+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv"
+">=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+"
+"'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;fo"
+"r(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=windo"
+"w,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s."
+"forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_"
+"top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'"
+"};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v)"
+"{var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLo"
+"werCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google'"
+")>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(',"
+"'+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf"
+",vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',"
+"')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk]"
+";if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(ty"
+"peof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else "
+"if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.subs"
+"tring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv="
+"','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[m"
+"n].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x"
+"=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='supplementalDataID')q='sdid';else if(k=='timestamp')q"
+"='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='marketingCloudVisitorID')q='mid';else if(k=='analyticsVisitorID')q='aid';else if(k=='audienceManagerLocatio"
+"nHint')q='aamlh';else if(k=='audienceManagerBlob')q='aamb';else if(k=='authState')q='as';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k"
+"=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS"
+"erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s"
+".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='"
+"cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els"
+"e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else"
+" if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q"
+"='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=="
+"'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if("
+"b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase("
+"):'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=functi"
+"on(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFi"
+"lters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.inde"
+"xOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.ln"
+"k=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct."
+"href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForce"
+"dLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcEl"
+"ement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a"
+".parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent"
+"\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var"
+" x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n"
+"=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=t"
+"his,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.p"
+"rotocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagN"
+"ame;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t"
+"=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toL"
+"owerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if"
+"(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.inde"
+"xOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=funct"
+"ion(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s"
+".epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s"
+".sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]"
+"]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var "
+"s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf("
+"\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclic"
+"k',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTrackin"
+"g=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s"
+"_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m)"
+"{if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}retu"
+"rn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m"
+";l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s"
+".un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl"
+"=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e'"
+",'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m["
+"l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))r"
+"eturn;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).ind"
+"exOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s."
+"m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).i"
+"ndexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.l"
+"oadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}"
+"else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._i"
+"n+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250"
+";if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/"
+"javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,"
+"u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){v"
+"ar s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=fu"
+"nction(vo,onlySet){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!onlySet&&!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i"
+"=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s"
+".maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.d"
+"lt()};s._waitingForMarketingCloudVisitorID = false;s._doneWaitingForMarketingCloudVisitorID = false;s._marketingCloudVisitorIDCallback=function(marketingCloudVisitorID) {var s=this;s.marketingCloud"
+"VisitorID = marketingCloudVisitorID;s._doneWaitingForMarketingCloudVisitorID = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAnalyticsVisitorID = false;s._doneWaitingForAnalyticsVisitorID "
+"= false;s._analyticsVisitorIDCallback=function(analyticsVisitorID) {var s=this;s.analyticsVisitorID = analyticsVisitorID;s._doneWaitingForAnalyticsVisitorID = true;s._callbackWhenReadyToTrackCheck("
+");};s._waitingForAudienceManagerLocationHint = false;s._doneWaitingForAudienceManagerLocationHint = false;s._audienceManagerLocationHintCallback=function(audienceManagerLocationHint) {var s=this;s."
+"audienceManagerLocationHint = audienceManagerLocationHint;s._doneWaitingForAudienceManagerLocationHint = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAudienceManagerBlob = false;s._doneWa"
+"itingForAudienceManagerBlob = false;s._audienceManagerBlobCallback=function(audienceManagerBlob) {var s=this;s.audienceManagerBlob = audienceManagerBlob;s._doneWaitingForAudienceManagerBlob = true;"
+"s._callbackWhenReadyToTrackCheck();};s.isReadyToTrack=function() {var s=this,readyToTrack = true,visitor = s.visitor;if ((visitor) && (visitor.isAllowed())) {if ((!s._waitingForMarketingCloudVisito"
+"rID) && (!s.marketingCloudVisitorID) && (visitor.getMarketingCloudVisitorID)) {s._waitingForMarketingCloudVisitorID = true;s.marketingCloudVisitorID = visitor.getMarketingCloudVisitorID([s,s._marke"
+"tingCloudVisitorIDCallback]);if (s.marketingCloudVisitorID) {s._doneWaitingForMarketingCloudVisitorID = true;}}if ((!s._waitingForAnalyticsVisitorID) && (!s.analyticsVisitorID) && (visitor.getAnaly"
+"ticsVisitorID)) {s._waitingForAnalyticsVisitorID = true;s.analyticsVisitorID = visitor.getAnalyticsVisitorID([s,s._analyticsVisitorIDCallback]);if (s.analyticsVisitorID) {s._doneWaitingForAnalytics"
+"VisitorID = true;}}if ((!s._waitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint) && (visitor.getAudienceManagerLocationHint)) {s._waitingForAudienceManagerLocationHint = true;"
+"s.audienceManagerLocationHint = visitor.getAudienceManagerLocationHint([s,s._audienceManagerLocationHintCallback]);if (s.audienceManagerLocationHint) {s._doneWaitingForAudienceManagerLocationHint ="
+" true;}}if ((!s._waitingForAudienceManagerBlob) && (!s.audienceManagerBlob) && (visitor.getAudienceManagerBlob)) {s._waitingForAudienceManagerBlob = true;s.audienceManagerBlob = visitor.getAudience"
+"ManagerBlob([s,s._audienceManagerBlobCallback]);if (s.audienceManagerBlob) {s._doneWaitingForAudienceManagerBlob = true;}}if (((s._waitingForMarketingCloudVisitorID)     && (!s._doneWaitingForMarke"
+"tingCloudVisitorID)     && (!s.marketingCloudVisitorID)) ||((s._waitingForAnalyticsVisitorID)          && (!s._doneWaitingForAnalyticsVisitorID)          && (!s.analyticsVisitorID)) ||((s._waitingF"
+"orAudienceManagerLocationHint) && (!s._doneWaitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint)) ||((s._waitingForAudienceManagerBlob)         && (!s._doneWaitingForAudienceMa"
+"nagerBlob)         && (!s.audienceManagerBlob))) {readyToTrack = false;}}return readyToTrack;};s._callbackWhenReadyToTrackQueue = null;s._callbackWhenReadyToTrackInterval = 0;s.callbackWhenReadyToT"
+"rack=function(callbackThis,callback,args) {var s=this,callbackInfo;callbackInfo = {};callbackInfo.callbackThis = callbackThis;callbackInfo.callback     = callback;callbackInfo.args         = args;i"
+"f (s._callbackWhenReadyToTrackQueue == null) {s._callbackWhenReadyToTrackQueue = [];}s._callbackWhenReadyToTrackQueue.push(callbackInfo);if (s._callbackWhenReadyToTrackInterval == 0) {s._callbackWh"
+"enReadyToTrackInterval = setInterval(s._callbackWhenReadyToTrackCheck,100);}};s._callbackWhenReadyToTrackCheck=new Function('var s=s_c_il['+s._in+'],callbackNum,callbackInfo;if (s.isReadyToTrack())"
+" {if (s._callbackWhenReadyToTrackInterval) {clearInterval(s._callbackWhenReadyToTrackInterval);s._callbackWhenReadyToTrackInterval = 0;}if (s._callbackWhenReadyToTrackQueue != null) {while (s._call"
+"backWhenReadyToTrackQueue.length > 0) {callbackInfo = s._callbackWhenReadyToTrackQueue.shift();callbackInfo.callback.apply(callbackInfo.callbackThis,callbackInfo.args);}}}');s._handleNotReadyToTrac"
+"k=function(variableOverrides) {var s=this,args,varKey,variableOverridesCopy = null,setVariables = null;if (!s.isReadyToTrack()) {args = [];if (variableOverrides != null) {variableOverridesCopy = {}"
+";for (varKey in variableOverrides) {variableOverridesCopy[varKey] = variableOverrides[varKey];}}setVariables = {};s.vob(setVariables,true);args.push(variableOverridesCopy);args.push(setVariables);s"
+".callbackWhenReadyToTrack(s,s.track,args);return true;}return false;};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexO"
+"f('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));"
+"if(!s.c_w(k,fid,e))fid=0;return fid};s.track=s.t=function(vo,setVariables){var s=this,notReadyToTrack,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),s"
+"ess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '"
+"+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if (s.visitor) {if (s.visitor.getAuthState) {s.authState = s.visitor.getAuthState();}if ((!s.supplementalDataID) && ("
+"s.visitor.getSupplementalDataID)) {s.supplementalDataID = s.visitor.getSupplementalDataID(\"AppMeasurement:\" + s._in,(s.expectSupplementalData ? false : true));}}if(s.mpc('t',arguments))return;s.g"
+"l(s.vl_g);s.uns();s.m_ll();notReadyToTrack = s._handleNotReadyToTrack(vo);if (!notReadyToTrack) {if (setVariables) {s.voa(setVariables);}if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='"
+"',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.to"
+"Precision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';"
+"if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv"
+">=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.of"
+"fsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return h"
+"p');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30)"
+"{ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectio"
+"nType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);"
+"if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s"
+".eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}i"
+"f(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLea"
+"veQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else "
+"trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-"
+"object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx"
+";if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt"
+"(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s',"
+"'var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+"
+"(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m("
+"'t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);}s.abort=0;s.supplementalDataID=s.pageURLRest=s.lnk=s.e"
+"o=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=t"
+"his;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagC"
+"ontainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];"
+"y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='functi"
+"on'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply"
+"(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagNa"
+"me){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('"
+"Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parse"
+"Float(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;"
+"if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='supplementalDat"
+"aID,timestamp,dynamicVariablePrefix,visitorID,marketingCloudVisitorID,analyticsVisitorID,audienceManagerLocationHint,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,"
+"ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteL"
+"ightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIn"
+"crementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,audienceManagerBlob,authState,linkName,linkType';var n;for(n="
+"1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,re"
+"solution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trac"
+"kingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccoun"
+"tMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,light"
+"TrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=functi"
+"on(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()

//SDI page timing plugin code
window._sdiTiming={sObj : s}; //Modify to match your Adobe Analytics 's' object

if ((window.performance)&&(window.sessionStorage)){
  window._sdiTiming.loadChecker = setInterval(function(){ _sdiTiming.checkLoad() }, 250);
}
window._sdiTiming.checkLoad= function () {
	if (window.performance.timing.loadEventEnd > 0) {
			clearInterval(window._sdiTiming.loadChecker);
		_sdiTiming.processTimingData();
	}
}
window._sdiTiming.processTimingData = function () {
	var pt=window.performance.timing;
	var ptZero=pt.navigationStart;
	var ptObj= {
		A_domainLookupEnd	: {
			ms : pt.domainLookupEnd - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.domainLookupEnd - ptZero) 
		},
		B_connectEnd		: {
			ms : pt.connectEnd - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.connectEnd - ptZero) 
		},		
		C_responseStart		: {
			ms : pt.responseStart - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.responseStart - ptZero) 
		},	
		D_responseEnd		: {
			ms : pt.responseEnd - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.responseEnd - ptZero) 
		},	
		E_domInteractive	: {
			ms : pt.domInteractive - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.domInteractive - ptZero) 
		},	
		F_domComplete		: {
			ms : pt.domComplete - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.domComplete - ptZero) 
		},
		G_loadEventEnd		: {
			ms : pt.loadEventEnd - ptZero,
			bucket : _sdiTiming.getTimeBucket(pt.loadEventEnd - ptZero) 
		},
		timingPageName			: _sdiTiming.sObj.pageName||document.location.pathname,
		timingBuckets		: ""  
	};
	for (node in ptObj) {
		if (typeof ptObj[node].ms == "number"){
	  		ptObj.timingBuckets+=node[0]+ptObj[node].bucket;
		}
	}

	//Sanity check on the data.  G must be less than 5 minutes. Also G>=F>=E>=D>=C>=B>=A>=0
	if ((ptObj.G_loadEventEnd.ms<=300000)&&(ptObj.G_loadEventEnd.ms>=ptObj.F_domComplete.ms)&&(ptObj.F_domComplete.ms>=ptObj.E_domInteractive.ms)&&(ptObj.E_domInteractive.ms>=ptObj.D_responseEnd.ms)&&(ptObj.D_responseEnd.ms>=ptObj.C_responseStart.ms)&&(ptObj.C_responseStart.ms>=ptObj.B_connectEnd.ms)&&(ptObj.B_connectEnd.ms>=ptObj.A_domainLookupEnd.ms)&&(ptObj.A_domainLookupEnd.ms>=0)) {
		sessionStorage.setItem("performanceTiming", JSON.stringify(ptObj));
	}	
}
window._sdiTiming.getTimeBucket = function (time) {
	var bucket="";
	if (typeof time == "number"){
		if (time < 20000) {
			for (var i=1; i<=20; i++){
				if (time/(i*1000) < 1) {
					bucket="("+(i-1)+"-"+i+")";
					break;
				}
			}
		} else {
			bucket="(>20)";
		}
	} else {
		bucket="(999)";
	}
	return bucket;
}
window._sdiTiming.getTimingInfo = function () {
	var results={};
	if ((window.performance)&&(window.sessionStorage)){
	  if ((typeof s.linkType == "undefined")&&(typeof s.linkName == "undefined")){
	    if (sessionStorage.getItem("performanceTiming")){ 
	      try {
		      	results=JSON.parse(sessionStorage.getItem("performanceTiming"));
				sessionStorage.removeItem("performanceTiming");
	        } catch (e) {
	          if (window.console){
	          		console.log(e)
	          		console.log("Error _sdiTiming : Could not parse performance timing data from sessionStorage");
	        	};
	        }
	    } 
	  }
	}
	return results;
}
