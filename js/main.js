$(document).ready(function(){


  $("#login").click(function(){
      $("#lightbox").fadeIn("fast", function() {
      	$("#lightbox").show();
      });
      $("#sfdc-card").fadeIn("fast", function() {
        $("#sfdc-card").show();
      });
      $("#grey-background").fadeIn("fast", function() {
        $("#grey-background").show();
      });
      $("#close").fadeIn("fast", function() {
        $("#close").show();
      });

      $("#grey-background").css("position", "fixed");

      $("#prospect-homepage").css("filter", "blur(5px)");
      $("#prospect-homepage").css("position", "fixed");

      // $("#prospect-homepage").fadeOut("fast", function() {
      //   $("#prospect-homepage").hide();
      // });
  });

  $("#sfdc-card").click(function(){
      $("#sfdc-login-container").fadeIn("fast", function() {
        $("#sfdc-login-container").show();
      });
      $("#sfdc-login").fadeIn("fast", function() {
        $("#sfdc-login").show();
      });
      $("#back-arrow").fadeIn("fast", function() {
        $("#back-arrow").show();
      });
  });

  $("#close").click(function(){
    $("#lightbox").fadeOut("fast", function() {
        $("#lightbox").hide();
      });
    $("#sfdc-card").fadeOut("fast", function() {
        $("#sfdc-card").hide();
      });
    $("#grey-background").fadeOut("fast", function() {
        $("#grey-background").hide();
      });
    $("#close").fadeOut("fast", function() {
        $("#close").hide();
      });
    $("#sfdc-login-container").fadeOut("fast", function() {
        $("#sfdc-login-container").hide();
      });
      $("#back-arrow").fadeOut("fast", function() {
        $("#back-arrow").hide();
      });
    $("#prospect-homepage").css("filter", "none");
  });


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});


});