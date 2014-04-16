//= require _vendor/jquery.js
//= require _vendor/jquery.cookie.js
//= require _vendor/fastclick.js
//= require _vendor/modernizr.js
//= require _vendor/placeholder.js
//= require _vendor/foundation.js
//= require _vendor/fittext.js
//= require _vendor/helperFunctions.js

// EVENTS
// Page Load Events
$(document).ready(autoAdjustFontSize);
// Triggered Events
$(window).scroll(stickyNav);
$(window).scroll(slideIn);

// FUNCTIONS
// Fluid Design
function autoAdjustFontSize() {
  $(".title-text").fitText(1, {minFontSize: "55px", maxFontSize: "90px"});
  // $(".section-header").fitText(1.2, {minFontSize: "20px", maxFontSize: "50px"});
  $(".social-icons").fitText(1.2, {minFontSize: "40px", maxFontSize: "250px"});  //not responding to maxFontSize
}
// Slide-in Animations
function slideIn() {
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  if(scrollDistance >= (heroHeight * 0.5)) {
    $('#about_me_header').animate({ marginLeft: "0"} , 1000);
  }
  if(scrollDistance >= heroHeight) {
    $('#portfolio_header').animate({ marginRight: "0"} , 1000);
  }
}
// Sticky Nav
function stickyNav() {
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  $(".contain-to-grid").toggleClass("sticking-nav", scrollDistance >= (heroHeight - 45));
}


