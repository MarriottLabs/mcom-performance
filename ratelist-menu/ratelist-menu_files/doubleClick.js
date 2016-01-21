
$(function()
{var doubleClickSrcObj=$(':hidden[name=dcIframeUrl]');if($("#double-click-iframe").length!=0&&doubleClickSrcObj.length!=0)
{var doubleClickSrc=doubleClickSrcObj.val();var axel=Math.random()+"";var a=axel*10000000000000;doubleClickSrc=doubleClickSrc+'num='+a+'?';var iframeCode='<iframe name="doubleClickIframe" src="'+doubleClickSrc+'" width="1" height="1" frameborder="0" />';$(this).enableLazyLoad("double-click-iframe",iframeCode);}});