
var omnitureCustom=function(){var customCookie=omnitureStandard.getOmniCookie("omniData");var URL=window.location.href;return{getOmniCustomValues:function(){$("#property-results .cont-button").click(function(){if($(this).attr("href").length>0&&$(this).attr("href").match("/reservation/continueReservation.mi")){if(customCookie.match("sRContinueRes*")==null){customCookie+="sRContinueRes*";}}});if($(".column .book-right-holder").length>0){$(".column .book-right").mouseover(function(){var bookRightTracked=$(this).hasClass('book-right-tracked');if(typeof swa!=="undefined"&&bookRightTracked!=true){$(this).addClass("book-right-tracked");var searchSection="Search Results";if($("#search-results").length==0){searchSection="MiniStores";}
swa.linkTrackEvents="event42";swa.linkTrackVars="eVar1,events";swa.eVar1="uri="+searchSection+":Section:loc=upper body:linkDescription=Book Right Hover";swa.events="event42";void(swa.tl(true,'o','Book Right Hover'));}});}
if($(".column .book-right-holder").length>0){$(".column .book-right-holder .book-right-text a").one("click",function(event){if(typeof swa!=="undefined"){swa.linkTrackEvents="event2";swa.linkTrackVars="eVar1,events";var searchSection="Search Results";if($("#search-results").length==0){searchSection="MiniStores";}
swa.eVar1="uri="+searchSection+":Section:loc=upper body:linkDescription=Book Right Logo";swa.events="event2";void(swa.tl(true,'o','Book Right Click'));}});}
$("a.js-view-rate-btn-link").click(function(){omnitureCustom.setupTrackingValue(this,"No");});$("#execustay-mesg-wrapper .search-button").click(function(){if(typeof swa!=="undefined"){swa.linkTrackEvents='';swa.linkTrackVars='eVar14';swa.eVar14="removeNightRestriction=true";void(swa.tl(this,'o','Execustay Remove Night Restriction'));}});if($("#omniSavedMARSHA").val()==""){var splitEdits=$("#omniEditVars").val().split("_");$.each(splitEdits,function(iterator,value){value=value.replace(/^\s+|\s+$/g,"");var frontSect=value.substring(0,value.indexOf("="));var backSect=value.substring(value.indexOf("=")+1);var varNum=frontSect.substring(0,frontSect.indexOf(":"));var varType=frontSect.substring(frontSect.indexOf(":")+1);var valName=backSect.substring(0,backSect.indexOf(":"));var valValue=backSect.substring(backSect.indexOf(":")+1);if(valName=="brands"){if(valValue.length>1&&valValue.match("ll")==null){valValue=valValue.substring(1,valValue.length-1).toLowerCase().replace(/\s+/g,"");}
else{valValue="all";}}
if(varType=="eVar"){swa["eVar"+varNum]=valValue;}
else if(varType=="prop"){swa["prop"+varNum]=valValue;}});}else{swa.products=$("#omniProduct").val();}
omnitureCustom.processOmniCookie();if($("#merch-property-results").length>0){var compiledSearchResults=$('#merch-property-results').data();if(compiledSearchResults.hotelrates&&compiledSearchResults.hotelmarshacodes){swa.eVar70=compiledSearchResults.hotelmarshacodes;swa.eVar71=compiledSearchResults.hotelrates;}}
var recentlyVal;if($("#recently-viewed").length>0){var rvCount=$('#recently-viewed .property-carousel-panel').length;recentlyVal=":Recently Viewed:Displayed "+rvCount;}
if(recentlyVal){swa.eVar73="uri="+URL+recentlyVal;}
if($('#searchResultTrackingEnable').val()=='true'){var searchResultDataArray=$("#omniSearchResultValues").val().split(":")
var sortOrder=searchResultDataArray[4];var currency=$('#currency').val()||'';var availabilityChoice=$('#availability-filter').val()||'';availabilityChoice=$.trim(availabilityChoice);var recordsPerPage=($('#recordsPerPage').length>0)?$('#recordsPerPage').val():'';var currentPage=searchResultDataArray[5];var numberOfRecord=searchResultDataArray[0];var relevancySortType=$("#relevancySortType").val();if(sortOrder=='City'||sortOrder=='Price'||sortOrder=='Brand')
{swa.prop66=sortOrder+';'+currency+';'+availabilityChoice+';'+recordsPerPage+';'+currentPage+';'+numberOfRecord+';';}
else if(relevancySortType=='SortFullList')
{sortOrder='Full List';}
else if(relevancySortType=='SortPartialList')
{sortOrder='Sort Order';}
else if(relevancySortType=='SortOverHead')
{sortOrder='Control List';}
else if(relevancySortType=='SortFullPartialList')
{sortOrder='Full Review';}
else if(relevancySortType=='SortFullRevenue')
{sortOrder='Full Revenue';}
else if(sortOrder=='Distance')
{sortOrder='Distance'}
else if(sortOrder=='SearchRelevance')
{sortOrder='SearchRelevance';}
swa.prop66=sortOrder+';'+currency+';'+availabilityChoice+';'+recordsPerPage+';'+currentPage+';'+numberOfRecord+';';}
if($('#searchResultTrackingEnable').val()=='true'){var searchResultDataArray=$("#omniSearchResultValues").val().split(":")
var sortOrder=searchResultDataArray[4];if((sortOrder=='SearchRelevance'||sortOrder=='Distance')&&($("#segmentValues").val()!=null)){var segmentValues=$('#segmentValues').val();swa.prop49=segmentValues;}}
if($('#cityPOIClicked').val()=='true'){swa.eVar14='Dimension=POI';}
var expandMapTracked=false;var expandMapControl=$('#expand-map');if(expandMapControl.length>0){expandMapControl.on('click',function(){var pageType=(URL.match('hotel-search'))?'MiniStores':'SearchResults';if(!expandMapTracked){if(typeof swa!=="undefined"){swa.linkTrackVars='prop29,events';swa.prop29=pageType+":Expand Map";void(swa.tl($(this),'o','Expand Map Control'));}
expandMapTracked=true;}});}},performAdditionalRequests:function(){},processOmniCookie:function(){if($("#omniSavedMARSHA").val()==""){var availabilityArray=$("#omniAvailabilityValues").val().split(",");var availCity=availabilityArray[0];var availState=availabilityArray[1];var availCountry=availabilityArray[2];var availCheckIn=availabilityArray[3];var availCheckOut=availabilityArray[4];var count=0;if(customCookie.length>0){var multiSearchData="";if(customCookie.match("omniMultiSearch")){var subData=customCookie.substring(customCookie.indexOf("omniMultiSearch"));subData=subData.substring(0,subData.indexOf("*"));var multiSearchArray=subData.split("_");var searchlocation=multiSearchArray[0];var indate=multiSearchArray[1];var outdate=multiSearchArray[2];var whatChanged="";searchlocation=searchlocation.substring(searchlocation.indexOf("location")+8);indate=indate.substring(indate.indexOf("indate")+6);outdate=outdate.substring(outdate.indexOf("outdate")+7);if(searchlocation!=(availCity+availState+availCountry)&&(indate!=availCheckIn||outdate!=availCheckOut)){whatChanged="Location and Date";}
else if(searchlocation!=(availCity+availState+availCountry)){whatChanged="Location";}
else if(indate!=availCheckIn||outdate!=availCheckOut){whatChanged="Date";}
if(whatChanged!=""){swa.events+=",event29";swa.eVar6=whatChanged;swa.eVar11+=":editSearch";}
multiSearchData="omniMultiSearchlocation"+availCity+availState+availCountry+"_indate"+availCheckIn+"_outdate"+availCheckOut;customCookie=customCookie.replace(subData,multiSearchData);}else{multiSearchData="omniMultiSearchlocation"+availCity+availState+availCountry+"_indate"+availCheckIn+"_outdate"+availCheckOut+"*";customCookie+=multiSearchData;}
if(customCookie.match("hwsSearchType")){var hwsSearch=customCookie.substring(customCookie.indexOf("hwsSearchType"));hwsSearch=hwsSearch.substring(0,hwsSearch.indexOf("*")+1);customCookie=customCookie.replace(hwsSearch,"");}
if(customCookie.match("resRateExpand")){customCookie=customCookie.replace("resRateExpand*","");}
if(customCookie.match("resRoomExpand")){customCookie=customCookie.replace("resRoomExpand*","");}
if(customCookie.match("resPriceExpand")){customCookie=customCookie.replace("resPriceExpand*","");}
var bookingPace=$("#omniBookingPace");if(customCookie.match("count_")&&bookingPace.length>0){var countStr=customCookie.substring(customCookie.indexOf("count_"));countStr=countStr.substring(0,countStr.indexOf("*"));count=parseInt(countStr.substring(countStr.indexOf("_")+1));if(count!=undefined&&bookingPace.val()<=1){count++;}
else{count=0;}
customCookie=customCookie.replace(countStr,"count_"+count);}else{customCookie+="count_"+count+"*";}
if($("#ctc-search-count").length>0){$("#ctc-search-count").attr("value",count);}
document.cookie="omniData="+customCookie+";path=/";}else{var multiSearchData="omniMultiSearchlocation"+availCity+availState+availCountry+"_indate"+availCheckIn+"_outdate"+availCheckOut+"*";customCookie="count_0*"+multiSearchData;if($("#ctc-search-count").length>0){$("#ctc-search-count").attr("value","0");}
document.cookie="omniData="+customCookie+";path=/";}}},setupTrackingValue:function(selectedHotel,fromMap){var recordNumber;var selectedhotelDistance;var selectedhotelPrice;var selectedhotelPagePlacement;var mData=$(selectedHotel).data();if(mData.recordnumber){recordNumber=mData.recordnumber;}
if(mData.hoteldistance){selectedhotelDistance=mData.hoteldistance;}
if(mData.hotelprice){selectedhotelPrice=mData.hotelprice;}
if(mData.hotelpageplacement){selectedhotelPagePlacement=mData.hotelpageplacement;}
omnitureCustom.processSearchResultSet(recordNumber,selectedhotelDistance,selectedhotelPrice,fromMap,selectedhotelPagePlacement);},processSearchResultSet:function(recordNumber,selectedhotelDistance,selectedhotelPrice,fromMap,selectedhotelPagePlacement){var setSearchResultCookie=$("#searchResultTrackingEnable").val();if(setSearchResultCookie=="true"){var searchResultTrackingData;var isRefineSearch="No";var searchResultDataArray=$("#omniSearchResultValues").val().split(":");var numberOfRecord=searchResultDataArray[0];var minPrice=searchResultDataArray[1];var maxPrice=searchResultDataArray[2];var minDistance=searchResultDataArray[3];var sortOrder=searchResultDataArray[4];var currentPage=searchResultDataArray[5];var isFilterSelected=searchResultDataArray[6];if(URL.match("/refineSearch")&&!URL.match("page=")){isRefineSearch="Yes";}
searchResultTrackingData="searchResultTrackingData"+numberOfRecord+":"+selectedhotelPagePlacement+":"+selectedhotelPrice+":"+minPrice+":"+maxPrice+":"+selectedhotelDistance+":"+minDistance+":"+fromMap+":"+isRefineSearch+":"+isFilterSelected+":"+sortOrder+":"+currentPage+"*";setTrackingCookie(searchResultTrackingData,"searchResultTrackingData");}}};}();