const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const passwordIn = document.getElementById('passwordIn');
const eyeiconIn = document.getElementById('eyeiconIn');

eyeiconIn.onclick = function () {
  if(passwordIn.type == "password") {
    (passwordIn.type = "text");
  }
  else {
    passwordIn.type = "password";
  }
}

const passwordUp = document.getElementById('passwordUp');
const eyeiconUp = document.getElementById('eyeiconUp');

eyeiconUp.onclick = function () {
  if(passwordUp.type == "password") {
    (passwordUp.type = "text");
  }
  else {
    passwordUp.type = "password";
  }
}

const passwordUpConf = document.getElementById('passwordUpConf');
const eyeiconUpConf = document.getElementById('eyeiconUpConf');

eyeiconUpConf.onclick = function () {
  if(passwordUpConf.type == "password") {
    (passwordUpConf.type = "text");
  }
  else {
    passwordUpConf.type = "password";
  }
}



let showIn = function (state) {
    document.getElementById('modalFormIn').style.display = state;
    document.getElementById('filterIn').style.display = state;
}

let showUp = function (state) {
  document.getElementById('modalFormUp').style.display = state;
  document.getElementById('filterUp').style.display = state;
}

let showQuiz = function (state) {
  document.getElementById('modalFormQuiz').style.display = state;
  document.getElementById('filterQuiz').style.display = state;
}
