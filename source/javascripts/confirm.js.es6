const swalButton = document.getElementById('confirm');

var elem = document.createElement("div");
elem.innerHTML = 'You take the <strong id="blue-pill">blue pill</strong> the story ends. <br> You take the <strong id="red-pill">red pill</strong> you stay in Wonderland, and I show you how deep the rabbit hole goes.';

function bindSweetAlertButton(e) {
  e.preventDefault();
  swal({
    title: "Red or Blue pill?",
    content: elem,
    icon:'https://res.cloudinary.com/dcf4y5ngp/image/upload/v1543430920/morpheus2.png',
     buttons: ["Blue pill", "Red pill"],
    dangerMode: true,
  }).then(function(isConfirm) {
  if (isConfirm) {
    swal("There is no turning back! You are going to enter the Matrix!", {
      icon: "warning"
    }).then(function() {
        window.location.href = "/easter-matrix.html";
      });
  } else {
    swal("You choosed to stay in your illusional reality!", {
      icon: "error"
      });
    }
  });
};

if (swalButton) {
  swalButton.addEventListener('click', bindSweetAlertButton);
}
