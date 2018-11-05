//= require jquery
//= require bootstrap
//= require_tree .

  $(".scroll-next").click(function() {
    let scrollSection = $(this).closest(".scrollable-section").next().offset().top;
    $("html, body").animate({scrollTop: scrollSection}, 0);
  });
