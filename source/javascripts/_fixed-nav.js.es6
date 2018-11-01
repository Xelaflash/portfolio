// function initUpdateNavbarOnScroll() {
//   const navbar = document.querySelector('#navbar');
//   if (navbar) {
//     window.addEventListener('scroll', () => {
//       if (window.scrollY >= window.innerHeight) {
//         navbar.classList.add('navbar-wagon-white');
//       } else {
//         navbar.classList.remove('navbar-wagon-white');
//       }
//     });
//   }
// }


function checkScroll(){
    var startY = $('#navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('#navbar').addClass("scrolled");
    }else{
        $('#navbar').removeClass("scrolled");
    }
}

if($('#navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
