//= require _vendor/jquery.js
//= require _vendor/jquery.cookie.js
//= require _vendor/fastclick.js
//= require _vendor/modernizr.js
//= require _vendor/placeholder.js
//= require _vendor/foundation.js
//= require _vendor/fittext.js
//= require _vendor/helperFunctions.js


// HERO TEXT
// Funcations run on page load
$(document).ready(autoAdjustFontSize);
// Dynamically adjust textsize to page width
function autoAdjustFontSize() {
  $(".title-text").fitText(1, {minFontSize: "55em", maxFontSize: "90em"});
  $(".social-icons").fitText(1.2, {minFontSize: "40em", maxFontSize: "200em"});
}

// NAVBAR
// Call stickyNav() on scroll
$(window).scroll(stickyNav);
// Make nav bar sticky
function stickyNav(){
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  $(".contain-to-grid").toggleClass("sticking-nav", scrollDistance >= (heroHeight - 45));
}


