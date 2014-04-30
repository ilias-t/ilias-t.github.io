//= require _vendor/jquery.js
//= require _vendor/jquery-ui.js
//= require _vendor/jquery.cookie.js
//= require _vendor/fastclick.js
//= require _vendor/modernizr.js
//= require _vendor/placeholder.js
//= require _vendor/foundation.js
//= require _vendor/fittext.js
//= require _vendor/flowtype.js
//= require _vendor/picturefill.js
//= require _vendor/helperFunctions.js

// EVENTS
// Page Load Events
$(document).ready(autoAdjustFontSize);
$(document).ready(hideElements);
$(document).ready(sideNav);
$(document).ready(pageSmoothScrollNav);
// Triggered Events
$(window).scroll(stickyNav);
$(window).scroll(dropIn);

// FUNCTIONS
// Fluid Design
function autoAdjustFontSize() {
  $('body').flowtype({
    minimum   : 400,
    maximum   : 900,
    fontRatio : 30
  });
}
// Default with Hidden Elements
function hideElements() {
  $("#about_me_header").hide("drop", {direction: "left"}, 1);
}
// Slide-in Animations
function dropIn() {
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  if(scrollDistance >= (heroHeight * 0.25)) {
    $("#about_me_header").show("drop", {direction: "left"}, 400);
  }
  else {
    $("#about_me_header").hide("drop", {direction: "left"}, 400);
  }
  if(scrollDistance >= heroHeight) {
    $('#projects_header').show("drop", {direction: "right"}, 400);
  }
  else {
    $('#projects_header').hide("drop", {direction: "right"}, 400);
  }
}
// Sticky Nav
function stickyNav() {
  var scrollDistance = $("body").scrollTop();
  var heroHeight = $(".hero-photo").height();
  $(".contain-to-grid").toggleClass("sticking-nav", scrollDistance >= (heroHeight - 45));
}
// Side Nav
function sideNav() {
  $("#hamburger-icon").click(function() {
    $(".sidenav").css("minHeight", "100%");
  }); // Shows side nav
  $(".exit-off-canvas").click(function() {
    $(".sidenav").delay(250)
    .queue(function(hideNav) {
      $(this).css("minHeight", "auto");
      hideNav();
    });
  }); // Hides side nav
}
//EVENT LISTENERS
// Smooth scrolling navigation through page
function pageSmoothScrollNav() {
  //home
  $("#home-navbar").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  $("#home-sidenav").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  //aboutme
  $("#about-navbar").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  $("#about-sidenav").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  //projects
  $("#projects-navbar").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  $("#projects-sidenav").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  //technologies
  $("#technologies-navbar").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
  $("#technologies-sidenav").on("click", function() {
    scrollToAnchor($(this).attr("id"));
  });
}

// Helper functions
function scrollToAnchor(id) {
  var elID = "#" + id.match("[a-z]*(?=-)"); //select word before "-"
  var navHeight = $(".tab-bar").height() - 1;
  $('html,body').animate({scrollTop:$(elID).offset().top - navHeight},'slow');
}



