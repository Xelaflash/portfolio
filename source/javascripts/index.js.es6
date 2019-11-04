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


console.log(`
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝══════╝`);
console.log("%c So, you are checking the console?? 🤘(-‿-)🤘", 'color:#fa0000');
console.log("%c Cool, but I've cleaned the house already. ¯\\_(ツ)_/¯", 'color:#2E416A');
console.log("%c Feel free to contact me if you want to work with me or even just to say you liked browsing this website. 👻 🤙 ", 'color:#60D')


// script to detect if using IE and display an alert
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;

  else
    return 0; //It is not IE
}

if (GetIEVersion() > 0) {
  alert("You are using " + GetIEVersion() + "\nThis website probably won’t work great in Internet Explorer.\n We generally only support recent versions of major browser like, Chrome, Firefox, Safari and Edge.\nFor a better browsing experience we recommend updating your browser.");
}
