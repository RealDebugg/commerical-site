// Stoppa användare i firefox från att dra bilder till en ny flik
$(document).on("dragstart", function(e) {
  if (e.target.nodeName.toUpperCase() == "IMG") {
    return false;
  }
});

//Animation för navigations menyn
$(document).ready( function() {
  $('[data-toggle="navvers"]').click( function() {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $("#menu-mobile").slideDown( "slow" );
    } else {
      $("#menu-mobile").fadeOut();
    }
  });
  $('[data-toggle="tooltip"]').tooltip();  
});