$(function() {
  // When clicking on main contact add extra content that is hidden
    $(".main-content-link a").on("click", function(event) {
      event.preventDefault();
      $(".main-content-add").slideDown();
    });
    
    var date = new Date();
    $("#year").html(date.getFullYear());
})
