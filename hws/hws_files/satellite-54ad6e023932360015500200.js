_satellite.pushBlockingScript(function(event, target, $variables){
  try {
if($("form.hws-reservations-form").length>0){
$( "form.hws-reservations-form" ).submit(function( event ) {
  var clstCode = $("form.hws-reservations-form input[type='radio']:checked").val();
  function createCookie(name,value,days) {
		if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
    createCookie('HWScc',clstCode,0);

});
}
}
catch(e){}
});
