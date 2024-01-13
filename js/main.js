const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const password = document.getElementById('password');
const eyeicon = document.getElementById('eyeicon');

eyeicon.onclick = function () {
  if(password.type == "password") {
    (password.type = "text");
  }
  else {
    password.type = "password";
  }
}

// eyeicon.addEventListener('click', () => {
//   if (password.getAttribute('type') === 'password') {
//     password.setAttribute('type', 'text');
//   } else {
//     password.setAttribute('type', 'password');
//   }
// })