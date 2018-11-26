//= require jquery
//= require bootstrap
//= require_tree .

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#F4F4F4",
      "text": "#000000"
    },
    "button": {
      "background": "#2E416A"
    }
  },
  "theme": "classic",
  "position": "bottom-left",
  // "static": true,
  "dismissOnTimeout": 10000,
  "content": {
    message: "This website uses cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
    href: 'https://www.alexgwebdev.com/privacy.html',
  }
})});




$(window).load(function() {
  $("body").removeClass("preload");
});

$(".scroll-next").click(function() {
  let scrollSection = $(this).closest(".scrollable-section").next().offset().top;
  $("html, body").animate({scrollTop: scrollSection}, 0);
});
