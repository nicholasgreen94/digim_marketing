$(function() {
  
  var $advertise_work = $(".advertise-work");
  var $web_work = $(".web-work");
  var $graphic_work = $(".graphic-work");
  var $advertise_collapse = $(".advertise-collapse");
  var $web_collapse = $(".web-collapse");
  var $graphic_collapse = $(".graphic-collapse");
  
  // When clicking on main contact add extra content that is hidden
    $(".main-content-link a").on("click", function(event) {
      event.preventDefault();
      $(".main-content-add").slideDown();
    });
    
    $(".team-members p").hide();
    $(".team-members").on("mouseover click", function() {
      $(".team-members p").show();
      $(".team-members span").each(function(index) {
        $(this).addClass("contact-email text-center");
      });
    })
    
    $(".team-members").on("mouseout", function() {
      $(".team-members p").hide();
      $(".team-members span").each(function() {
        $(this).removeClass("contact-email text-center");
      });
    });
    
  var date = new Date();
  $("#year").html(date.getFullYear());

  $advertise_work.hide();
  $advertise_collapse.hide();
  $(".advertise-btn").on("click", function() {
    $advertise_work.slideToggle("1500");
    $(this).hide();
    $advertise_collapse.show();
  });
  
  $advertise_collapse.on("click", function() {
    $advertise_work.slideToggle("1500");
    $(this).hide();
    $(".advertise-btn").show();
  });
  

  $web_work.hide();
  $web_collapse.hide();
  $(".web-btn").on("click", function() {
    $web_work.slideToggle("1500");
    $(this).hide();
    $web_collapse.show();
  });
  
  
  $web_collapse.on("click", function() {
    $web_work.slideToggle("1500");
    $(this).hide();
    $(".web-btn").show();
  });

  
  $graphic_work.hide();
  $graphic_collapse.hide();
  $(".graphic-btn").on("click", function() {
    $graphic_work.slideToggle("1500");
    $(this).hide();
    $graphic_collapse.show();
  });
  
  $graphic_collapse.on("click", function() {
    $graphic_work.slideToggle("1500");
    $(this).hide();
    $(".graphic-btn").show();
  });
  
  
  
})
