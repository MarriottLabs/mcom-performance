 try {
    var theUrl = window.location.toString();
    if (theUrl.indexOf("marriott.com/hotels/travel/") > -1) {
        var rndNmb = Math.floor((Math.random() * 100) + 1);
        if (rndNmb < 21) {
            window.onload = function() {

                //Hotel Base Image
                getBaseImage = function() {
                    var imgTemp = $('div#zone-2.l-zone-2 div.layout-13 div.block-1.is-cursor-pointer noscript').text();
                    if (imgTemp == '') {
                        imgTemp = $('noscript:eq(1)').text();
                    }
                    var startTrim = imgTemp.indexOf('http');
                    var endTrim = imgTemp.indexOf('?');
                    var htlBaseImg = imgTemp.substring(startTrim, endTrim);
                    if (typeof htlBaseImg != 'undefined' && typeof htlBaseImg != '') {
                        return ("entity.hotelBaseImage=" + htlBaseImg);
                    }
                }

                //Hotel Ratings
                runRecipe = function() {
                    var rateImage = $('#BVRRRatingOverall_Rating_Summary_2 div.BVRRRatingNormalImage>img');
                    var rateText = $(rateImage).attr('alt');
                    var rateValue = $('span[itemprop=ratingValue]').html().trim();
                    var rateImgPath = $(rateImage).attr('src');
                    var nmbReviews = $('div#BVRRCustomReviewCountLinkReadID.BVRRRatingSummaryLink.BVRRCustomReviewCountLinkRead a.analytics-click-hws span.BVRRCount.BVRRNonZeroCount span.BVRRNumber').text();
					var bsImage = getBaseImage();
                    if (typeof rateText != 'undefined' && typeof rateText != '') {
                        var htlRateImage = "entity.hotelRateImage=" + rateImgPath;
                        var htlRateTxt = "entity.hotelRateText=" + rateText;
                        var htlNumReviews = "entity.hotelNumbReviews=" + nmbReviews;
                        var htlRateValue = "entity.hotelRateValue=" + rateValue;
                    }
					mboxUpdate("global_sitewide_data",htlRateImage,htlRateTxt,htlRateValue,htlNumReviews,getBaseImage());
                }

                var checkForRating = function() {
                    var checkElemJquery = 0;
                    (function checkDTMB() {
                            if (document.getElementById('BVRRRatingOverall_Rating_Summary_2') && typeof($) == 'function') {
                                runRecipe();
                            } else {
                                setTimeout(function() {
                                    checkElemJquery++;
                                  if (checkElemJquery >= 30){
										mboxUpdate("global_sitewide_data",getBaseImage());
                                    return;}
                                    checkDTMB();
                                }, 500);
                            }
                        }
                        ());
                };
                checkForRating();
				
            }
        }
    }
} catch (e) {}

