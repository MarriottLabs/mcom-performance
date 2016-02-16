//ForeSee integration V4

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
   return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

var foreSee = function () {
	//Wait for ForeSEe var, then add campaign info
	var checksForFSR = 0;
	(function checkForeSee() {
		if (typeof(FSR) != 'undefined' && typeof(FSR.CPPS) != 'undefined' && typeof(FSR.CPPS.set) != 'undefined') {
			var campID = '',
			campExp = '';
			if(typeof ttMETA != 'undefined'){
				var arrayLength = ttMETA.length;
				for (var i = 0; i < arrayLength; i++) {
					var tmpVal = ttMETA[i];
					if (tmpVal !== '' && tmpVal.campaign !== '' && tmpVal.campaign.toLowerCase().indexOf('monitor') == -1) {
						campID = "mvt" + tmpVal.campaignID;
						campExp = tmpVal.experience;
						FSR.CPPS.set(campID, campExp);	
					}
				}
			}
			     /**
					Booking Info:
						Cash/Points
					 **/
					//Member Level
					if (typeof dataLayer.mrLevel != 'undefined') {
						FSR.CPPS.set('MemLevel', dataLayer.mrLevel);
					}
					//Authentication Status
					if (typeof dataLayer.memState != 'undefined') {
						FSR.CPPS.set('MemState', dataLayer.memState);
					}
					//CEI Segment: SttBhvSeg
					if (typeof dataLayer.SttBhvSeg != 'undefined') {
						FSR.CPPS.set('CEI_SttBhvSeg', dataLayer.SttBhvSeg);
					}
					//CEI Segment: SttLeisProf
					if (typeof dataLayer.SttLeisProf != 'undefined') {
						FSR.CPPS.set('CEI_SttLeisProf', dataLayer.SttLeisProf);
					}
					//CEI Segment: SttBusProf
					if (typeof dataLayer.SttBusProf != 'undefined') {
						FSR.CPPS.set('CEI_SttBusProf', dataLayer.SttBusProf);
					}
					//Booking Info:	Rooms
					if (typeof dataLayer.numRooms != 'undefined') {
						FSR.CPPS.set('NumbRooms', dataLayer.numRooms);
					}
					//Booking Info:	Nights
					var fromDate = dataLayer.chckInDat;
					var toDate = dataLayer.chckOutDate;
					if((typeof fromDate !='undefined' && fromDate !='') && (typeof toDate !='undefined' && toDate !='')){
						FSR.CPPS.set('NumbNigths', daysBetween(fromDate, toDate));
					}
					//Booking Info:	Order Value
					if(typeof FSR_revenue != 'undefined' && FSR_revenue !=''){
						FSR.CPPS.set('orderValue', FSR_revenue);
					}
					//Experiment Control Flag: Global
					if (typeof dataLayer.ExCntrlFlag != 'undefined') {
						FSR.CPPS.set('ExCntrlFlag', dataLayer.ExCntrlFlag);
					}
					//Experiment Control Flag: Advertising
					if (typeof dataLayer.AdCntrlFlag != 'undefined') {
						FSR.CPPS.set('AdCntrlFlag', dataLayer.AdCntrlFlag);
					}
					//Experiment Control Flag: Personalization
					if (typeof dataLayer.PersCntrlFlag != 'undefined') {
						FSR.CPPS.set('PersCntrlFlag', dataLayer.PersCntrlFlag);
					}					
					var theUrl = window.location.toString();
					//visited homepage
					if(theUrl.indexOf("/default.mi")>-1){
					  FSR.CPPS.set('SawHomePage', "true");
					}
					//visited HWS page
					var isLiteHWS = $('body').hasClass('lite');
					if(theUrl.indexOf("/hotels/")>-1 && !isLiteHWS){
					  FSR.CPPS.set('SawHWSpage', "true");
					}else if(theUrl.indexOf("/hotels/")>-1 && isLiteHWS){
					  FSR.CPPS.set('SawHWSLitepage', "true");
					}
					//visited Groups page
					if(theUrl.indexOf("/meetings/group-travel/")>-1 || theUrl.indexOf("/meeting-event-hotels/")>-1){
					  FSR.CPPS.set('SawGroupsPage', "true");
					}
					//visited Rewards page
					if(theUrl.indexOf("/rewards/")>-1){
					  FSR.CPPS.set('SawRewardsPage', "true");
					}
					//visited Search page
					if(theUrl.indexOf("/search/")>-1){
					  FSR.CPPS.set('SawSearchPage', "true");
					}
					//visited Reservation page
					if(theUrl.indexOf("/reservation/")>-1){
					  FSR.CPPS.set('SawReservationPage', "true");
					}
					//visited Ministores page
					if(theUrl.indexOf("/hotel-search")>-1){
					  FSR.CPPS.set('SawMinistoresPage', "true");
					}
		} else {
			setTimeout(function () {
				checksForFSR++;
				if (checksForFSR >= 30)
					return;
				checkForeSee();
			}, 500);
		}
	}
		());
};
foreSee();

