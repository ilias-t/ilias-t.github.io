//= require _vendor/jquery.js
//= require _vendor/jquery.cookie.js
//= require _vendor/fastclick.js
//= require _vendor/modernizr.js
//= require _vendor/placeholder.js
//= require _vendor/foundation.js
//= require _vendor/fittext.js

// Global variables
var delayedPageLoadID;

//Dynamically adjust textsize to page width
$(".hero-header").fitText(1, {minFontSize: "60em", maxFontSize: "90em"});

//Call stickyNav() on scroll
$(window).scroll(stickyNav);

//On load callback
$(document).ready(function() {
  splashAnimation();
});

//Splash page functionality
function splashAnimation() {
  delayedPageLoadID = window.setTimeout(showPage, 500);
}
function showPage() {
  $(".page-container").css("visibility", "visible");
  $(".splash-animation").remove();
}

//Make nav bar sticky
function stickyNav(){
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  $(".sticky").toggleClass("sticking-nav", scrollDistance >= heroHeight);
}