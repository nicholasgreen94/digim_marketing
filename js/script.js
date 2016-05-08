$(function() {
  // When clicking on main contact add extra content that is hidden
    $(".main-content-link a").on("click", function(event) {
      event.preventDefault();
      $(".main-content-add").slideDown();
    });
    
    $(".team-members p").hide();
    $(".team-members").on("mouseover click", function() {
      $(".team-members p").toggle();
    })
    
    $(".team-members").on("mouseout", function() {
      $(".team-members p").hide();
    });
    
    var date = new Date();
    $("#year").html(date.getFullYear());
    
    $(".graphic-work").hide();
    $(".graphic-btn").on("click", function() {
      $(".graphic-work").slideToggle("1500");
    });
})
