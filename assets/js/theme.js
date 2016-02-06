$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $("#navbar").removeClass("white-fade")
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $("#navbar").addClass("white-fade")
  }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});
