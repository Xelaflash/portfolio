//= require jquery
//= require bootstrap
//= require_tree .


$(window).load(function() {
  $("body").removeClass("preload");
});

$(".scroll-next").click(function() {
  let scrollSection = $(this).closest(".scrollable-section").next().offset().top;
  $("html, body").animate({scrollTop: scrollSection}, 0);
});
