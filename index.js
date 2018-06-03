function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===' '){c=c.substring(1)}
if(c.indexOf(name)===0){return c.substring(name.length,c.length)}}
return""}
function isCookieExist(cname){var username=getCookie(cname);if(username!==""){return!0}else{return!1}}
jQuery(document).ready(function(){var clickCount=0;if(isCookieExist(idAdsense)){clickCount=parseInt(getCookie(idAdsense),10)}else{setCookie(idAdsense,"0",1)}
if(clickCount>=limitClick){jQuery("div[id="+idAdsense+"]").remove()}else{var adInterval=setInterval(function(){if(jQuery('#'+idAdsense+' iframe').length>0){console.log('AdsShield Found!');jQuery('#'+idAdsense+' iframe').iframeTracker({blurCallback:function(){console.log('AdsClicked and will removed!');clickCount++;setCookie(idAdsense,""+clickCount+"",1);var adDelayRemoved=setInterval(function(){jQuery("div[id="+idAdsense+"]").remove();clearInterval(adDelayRemoved)},250)}});clearInterval(adInterval)}},200)}})
