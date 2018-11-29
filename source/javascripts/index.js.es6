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
console.log("%c Feel free to contact me if you want to work with me or even just to say you liked browsing this website. 👻 🤙 ", 'color:#60D')
console.log("%c If you see the error below 👇, it's because you have accepted the analytics cookie. The script is blocked by client. ¯\\_(ツ)_/¯", 'color:#2E416A');
