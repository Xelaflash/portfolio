function checkScroll(){
  const startY = $('#navbar').height() * 3; //The point where the navbar changes in px
  if($(window).scrollTop() > startY){
    $('#navbar').addClass("scrolled");
  } else {
    $('#navbar').removeClass("scrolled");
  }
};

if($('#navbar').length > 0){
  $(window).on("scroll load resize", function(){
    checkScroll();
  });
};

function scrlResize(){
  const home = $('#home').offset().top;
  const about = $('#about').offset().top;
  const projects = $('#projects').offset().top;
  const contact = $('#contact').offset().top;
  const playground = $('#playground').offset().top;
  const scrollPos = $(document).scrollTop() + 70;
  if (scrollPos >= home && scrollPos < about) {
    $('#navbar').css('background-color', '#2E416A');
  } else if (scrollPos >= about && scrollPos < projects) {
    $('#navbar').css('background-color', '#5775b6');}
    else if (scrollPos >= projects && scrollPos < contact) {
    $('#navbar').css('background-color', '#2E496A');
  } else if (scrollPos >= contact && scrollPos < playground) {
    $('#navbar').css('background-color', '#6593F5');
  } else if (scrollPos >= playground) {
    $('#navbar').css('background-color', '#003366');
  }
};

$(window).scroll(scrlResize);
$(window).resize(scrlResize);
