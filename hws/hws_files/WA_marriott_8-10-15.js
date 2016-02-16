// JavaScript Document
var ruleTriggered = {}; // Track rules that triggered to only run analytics once

// Convert ruleData Array to Hash with Rule Id as Key for easy access by Rule Id
var ruleData = {};
for (var i = 0; i < ATGSvcs.rules.ruledata.length; i++) {
  var objRuleData = ATGSvcs.rules.ruledata[i];
  ruleData[objRuleData.id] = objRuleData;
};

/*******************************************************
 * Process all events that were fired until this point *
 * catching up with events                             *
 *******************************************************/
// Stop logging events and rules in ATGSVcs
ATGSvcs.rules.maxEventLog = 0;

// Create an Event Log Array and copy the data from ATGSvcs in to it.
var eventLog = new Array();
eventLog = ATGSvcs.rules.eventLog;

// Merge the Event Log array with the Rule Log array.
var ruleLog = new Array();
ruleLog = ATGSvcs.rules.ruleLog;
allLogs = eventLog.concat(ruleLog);

// Sort the array on the Rule Log timestamp along with the new timestamp from the Event Log. This puts the events in to timestamp order
// so when we fire these events, they are fired in the order that they would have been fired had the functions been available.
// This is important in maintaining accuracy in the Analytics reporting for all aspects of the data, but particulalry Event Flow.
allLogs.sort(function(a, b) { return (a['ts'] < b['ts'] ? -1 : (a['ts'] > b['ts'] ? 1 : 0)); });

for (var i = 0; i < allLogs.length; i++) {
  // Check to see if we are running a Rule Event or an Event Event.
  if (allLogs[i].id) { // Rule Event
    var data = {};
    data.ruleLog = allLogs[i];
    data.source = ruleData[allLogs[i].id];
    eeRuleRanFunction({"type": "eeRuleRan"}, data);
  } else if (allLogs[i].event) { // Other Events
    var eventName = allLogs[i].event;
    var data = allLogs[i].data;
    switch (eventName) {
      case "eeSuppressed":
        eeSuppressedFunction({"type": "eeSuppressed"}, data);
        break;
      case "eeOffered":
        eeOfferedFunction({"type": "eeOffered"}, data);
        break;
      case "eeCustomEvent":
        eeCustomEventFunction({"type": "eeCustomEvent"}, data)
        break;
      case "eeTransactionCompleted":
        eeTransactionCompleted({"type": "eeTransactionCompleted"}, data)
        break;
    }
  }
}

/***************************************************
 * Setup callback for a all events that will occur *
 ***************************************************/
// Define ATGSvcs.rules.analytics.launch Params
var eeAnalyticsLaunchParams = {};
eeAnalyticsLaunchParams = {
  "poll-delay": -1, // in ms - Set to -1 to disable - Polling is not needed when not monitoring Call/Chat Started/Ended. Only used if pollDelay is not already set
  "poll-stop": function(e, data) {
    return; // here we don't want to log this to analytics
  }, // Rule Events
  "eeRuleRan": function(e, data) {
    data || (data = {});
    data.ruleLog || (data.ruleLog = {});
    data.ruleLog = ATGSvcs.rules.ruleLog[ATGSvcs.rules.ruleLog.length - 1];
    eeRuleRanFunction(e, data);
  },
  "eeTriggered": function(e, data) { // Not Supported - Please include in next release
    eeTriggeredFunction(e, data);
  }, // Hybrid Event
  "eeCustomEvent": function(e, data) {
    eeCustomEventFunction(e, data);
  }, // Invites Events
  "eeOffered": function(e, data) {
    eeOfferedFunction(e, data);
  },
  "eeAccepted": function(e, data) {
    eeAcceptedFunction(e, data);
  },
  "eeClosed": function(e, data) {
    eeClosedFunction(e, data); 
  },
  "eeSuppressed": function(e, data) {
    eeSuppressedFunction(e, data);
  }, // Interactions Events
  "chat-started": function(e, data) {
    eeChatStartedFunction(e, data);
  },
  "chat-ended": function(e, data) {
    eeChatEndedFunction(e, data);
  },
  "call-started": function(e, data) {
    eeCallStartedFunction(e, data);
  },
  "call-ended": function(e, data) {
    eeCallEndedFunction(e, data);
  }
};

// Load eeAnalytics events' callback.
ATGSvcs.rules.analytics.launch(eeAnalyticsLaunchParams);

/*****************************
 * Events Callback Functions *
 *****************************/

// Rules Events
function eeRuleRanFunction(e, data) {
  data || (data = {});
  var ruleId = data.source.id;
  logToAnalytics(e, data.source);

  // eeTriggered
  ruleTriggered[ruleId] || (ruleTriggered[ruleId] = false);
  if ( data.source.lastEvaluation == true && ruleTriggered[ruleId] == false) {
    ruleTriggered[ruleId] = true;
    eeTriggeredFunction({"type": "eeTriggered"}, data.source);
  }
  
}

function eeTriggeredFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

function eeCustomEventFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

// Invite Events
function eeOfferedFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

function eeAcceptedFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

function eeClosedFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

function eeSuppressedFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

// Generic Event Function
function eeGenericEventFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

// Interaction Events
function eeChatStartedFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

function eeChatEndedFunction(e, data) {
  data || (data = {});
  logToAnalytics(e, data);
}

function eeCallStartedFunction(e, data) {
  data || (data = {});
  data.rule || (data.rule = {});
  data.link || (data.link = {});
  var pollData = data.data.split(",");
  data.rule.id = pollData[0].substring(7);
  data.rule.name = ruleData[data.rule.id].name;
  data.link.id = pollData[2].substring(7);
  data.link.name = ATGSvcs.links.linkdata[data.link.id].name;
  logToAnalytics(e, data);
}

function eeCallEndedFunction(e, data) {
  data || (data = {});
  data.rule || (data.rule = {});
  data.link || (data.link = {});
  var pollData = data.data.split(",");
  data.rule.id = pollData[0].substring(7);
  data.rule.name = ruleData[data.rule.id].name;
  data.link.id = pollData[2].substring(7);
  data.link.name = ATGSvcs.links.linkdata[data.link.id].name;
  logToAnalytics(e, data);
}

/******************************
 * Analytics Logging Function *
 ******************************/
/*
 * data.rule.id and data.rule.name available for all events
 * data.link.id and data.link.name available for eeOffered, eeAccepted, eeClosed, call-started, call-ended
 * chat-started and chat-ended to be implemented
 */
function logToAnalytics(e, data) 
{
  var timeStamp = getDateTimeEST(0);
  data || (data = {});
  data.rule || (data.rule = {});
  data.link || (data.link = {});
 
  
  // Make the data object structure consist for all events
  // data.rule.id and data.rule.name
  if (typeof(data.id) != "undefined" && typeof(data.rule.id) == "undefined") {
    data.rule.id = data.id;
  }
  if (typeof(data.name) != "undefined" && typeof(data.rule.name) == "undefined") {
    data.rule.name = data.name;
  }
  // data.link.id
  if (typeof(data.linkid) != "undefined") {
    data.link.id = data.link.ulbid;
  }
  
  var param1 = ""; // Event Name
  var param2 = ""; // Rule Name
  var param3 = ""; // Attributes
  var param4 = "";
  
  
  
  var c = /^WA/.test(data.name); // this line of code is looking for WA in the rule name if it's found it's excluded from website analytics tracking
  
  if(!c){

    switch (e.type){
      case "eeTriggered":
        param1 = "Rule Triggered";
		param2 = data.rule.name;
		
		if(typeof(s_account)!='undefined')
		{
			 var s=s_gi(s_account);
			 s.linkTrackVars='prop47,events';
			 s.prop47=param2;
			 s.linkTrackEvents='event54';
			 s.events='event54';
			 s.m_i = function(param){ return ""; }; 
			 void(s.tl(true,'o','Chat Rule:Triggered:'+param2+':' + document.title));

		} 		
		
        break;
      case "eeOffered":
        param1 = "Invitation Offered";
		param2 = data.link.name;
		
		if(typeof(s_account)!='undefined')
		{
		 if(!param2.match(/CONTROL/))
			{
			 var s=s_gi(s_account);
			 s.linkTrackVars='eVar49,events';
			 s.eVar49=param2;
			 s.linkTrackEvents='event60';
			 s.events='event60';
			 s.m_i = function(param){ return ""; }; 
			 void(s.tl(true,'o','Chat Invite:Presented:'+param2+':' + document.title));
			}
		 if(param2.match(/CONTROL/))
			{
			var s=s_gi(s_account);
			s.linkTrackVars='eVar49,events';
			s.eVar49=param2;	
			s.linkTrackEvents='event55';
			s.events='event55';
			s.m_i = function(param){ return ""; }; 
			void(s.tl(true,'o','Chat Rule:Suppressed:'+param2+':' + document.title));
			}
		}

		
        break;
      case "eeAccepted":
        param1 = "Invitation Accepted";
		param2 = data.link.name;
		
		if(typeof(s_account)!='undefined')
		{
		var s=s_gi(s_account);
		s.linkTrackVars='eVar49,events';
		s.linkTrackEvents='event56';
		s.eVar49=param2;
		s.events='event56';
		s.m_i = function(param){ return ""; }; 
		void(s.tl(true,'o','Chat Invite:Accepted:'+param2+':' + document.title));
		}

	     break;
    case "eeClosed":
        //param1 = "Invitation Closed";
		param2 = data.link.name;
		if(typeof(s_account)!='undefined')
		{
		var s=s_gi(s_account);
		s.linkTrackVars='eVar49,events';
		s.linkTrackEvents='event57';
		s.eVar49=param2;
		s.events='event57';
		s.m_i = function(param){ return ""; }; 
		void(s.tl(true,'o','Chat Invite:Declined:'+param2+':' + document.title));
		} 
			
        break;
	  case "eeSuppressed":
		 break;
      case "chat-started":
		break;
      case "chat-ended":
        break;
      case "call-started":
        param1 = "Call Started";
        break;
      case "call-ended":
        param1 = "Call Ended";
        break;
    }
	
 }
}

function getDateTimeEST(d) {
  if ( d == 0) {
    d = new Date();
  }
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var offset = -5; // EST is GMT-0500
  var dEST = new Date(utc + (3600000*offset));
  var dESTYear = dEST.getFullYear();
  var dESTMonth = dEST.getMonth() + 1;
  dESTMonth = dESTMonth > 9 ? dESTMonth : "0" + dESTMonth;
  var dESTDay = dEST.getDate();
  dESTDay = dESTDay > 9 ? dESTDay : "0" + dESTDay;
  var dESTHours = dEST.getHours();
  dESTHours = dESTHours > 9 ? dESTHours : "0" + dESTHours;
  var dESTMinutes = dEST.getMinutes();
  dESTMinutes = dESTMinutes > 9 ? dESTMinutes : "0" + dESTMinutes;
  var dESTSeconds = dEST.getSeconds();
  dESTSeconds = dESTSeconds > 9 ? dESTSeconds : "0" + dESTSeconds;
  var timeStamp = dESTYear + "-" + dESTMonth + "-" + dESTDay + " " + dESTHours + ":" + dESTMinutes + ":" + dESTSeconds;
  return timeStamp;
}