
$(function(){var audienceTrackingSRCObj=$(':hidden[name=btAudienceTrackingSRCURL]');var adPlacementSRCURLs=$('.bt-ad-placement-src-url');var windowObject=$(this);if($("#bt-audience-tracking-script").length!=0&&audienceTrackingSRCObj.length!=0)
{var audienceTrackingSRC=audienceTrackingSRCObj.val();var scriptCode='<script type="text/javascript" src="'+audienceTrackingSRC+'"></script>';windowObject.enableLazyLoad("bt-audience-tracking-script",scriptCode);}
if($('.bt-ad-placement-iframe').length!=0&&adPlacementSRCURLs.length!=0)
{adPlacementSRCURLs.each(function()
{var thisAdSRCURL=$(this).val();var thisAdName=$(this).attr('name');var thisAdHeight=$(this).data("options").height;var thisAdWidth=$(this).data("options").width;var thisAdIFrameCode='<IFRAME SRC="'+thisAdSRCURL+'" WIDTH="'+thisAdWidth+'" HEIGHT="'+thisAdHeight+'" FRAMEBORDER="0" MARGINWIDTH="0" MARGINHEIGHT="0" SCROLLING="no" class="ad-placement-iframe"></IFRAME>';if($('#'+thisAdName).length!=0)
{windowObject.enableLazyLoad(thisAdName,thisAdIFrameCode);}});}});