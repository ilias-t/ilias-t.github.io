//= require _vendor/jquery.js
//= require _vendor/jquery-ui.js
//= require _vendor/jquery.cookie.js
//= require _vendor/fastclick.js
//= require _vendor/modernizr.js
//= require _vendor/placeholder.js
//= require _vendor/foundation.js
//= require _vendor/fittext.js
//= require _vendor/flowtype.js
//= require _vendor/helperFunctions.js

// EVENTS
// Page Load Events
$(document).ready(autoAdjustFontSize);
$(document).ready(hideElements);
// Triggered Events
$(window).scroll(stickyNav);
$(window).scroll(slideIn);

// FUNCTIONS
// Fluid Design
function autoAdjustFontSize() {
  $('body').flowtype({
    minimum   : 400,
    maximum   : 900,
    fontRatio : 30
  });
  // $(".title-text").fitText(1, {minFontSize: "55px", maxFontSize: "90px"});
  // // $(".section-header").fitText(1.2, {minFontSize: "20px", maxFontSize: "50px"});
  // $(".social-icons").fitText(1.2, {minFontSize: "40px", maxFontSize: "250px"});  //not responding to maxFontSize
}
// Default with Hidden Elements
function hideElements() {
  $("#about_me_header").hide("slide", {direction: "left"}, 1);
}
// Slide-in Animations
function slideIn() {
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  if(scrollDistance >= (heroHeight * 0.25)) {
    $("#about_me_header").show("slide", {direction: "left"}, "fast");
  }
  else {
    $("#about_me_header").hide("slide", {direction: "left"}, "fast");
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


