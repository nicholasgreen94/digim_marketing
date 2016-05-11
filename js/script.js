$(function() {
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

    $(".advertise-work").hide();
    $(".advertise-btn").on("click", function() {
      $(".advertise-work").slideToggle("1500");
      $(this).text("collapse");
    });

    $(".web-work").hide();
    $(".web-btn").on("click", function() {
      $(".web-work").slideToggle("1500");
      $(this).text("collapse");
    });
    
    $(".graphic-work").hide();
    $(".graphic-btn").on("click", function() {
      $(this).text("collapse");
      $(".graphic-work").slideToggle("1500");
    });
    
})
