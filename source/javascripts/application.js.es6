//= require jquery
//= require bootstrap
//= require_tree .


// var test = document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     console.log(test)
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });




// function scrollToNext() {
//     var elmnt = document.querySelectorAll(".scrollable-section").forEach (element => {
//       console.log(element.id);
//     });

//     var nextElmt = $(elmnt).closest('.scrollable-section').next();
//     console.log(nextElmt)
//     // });
// //     // var elmnt = document.getElementById("about");
// //      var nextElmt = $(elmnt).closest('.scrollable-section').next();

// //     console.log(nextElmt.id)
// //     // nextElmt.scrollIntoView();
// }

  $(".scroll-next").click(function() {
    let scrollSection = $(this).closest(".scrollable-section").next().offset().top;
    $("html, body").animate({scrollTop: scrollSection}, 0);
  });
