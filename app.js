
const nav = document.querySelector('.nav');
// модальное окно
// const partnersBtn1 = document.getElementById("partners_btn");
// const programmDiv1 = document.querySelector(".programm1");

// partnersBtn1.addEventListener("click", function() {
//   programmDiv1.style.display = "block";
// });

// programmDiv1.addEventListener("click", function(event) { 
//   if (event.target === programmDiv1) {
//     programmDiv1.style.display = "none";
//   }
// });

// const closeBtn = document.querySelector(".close");
// const modal = document.querySelector(".programm1");

// closeBtn.addEventListener("click", function() {
//   modal.style.display = "none";
// });

// const form = document.querySelector('.wrapper_programm1');
// const emailInput1 = form.querySelector('.input-with-image1');
// const submitBtn1 = form.querySelector('button');

// submitBtn1.addEventListener('click', function(e) {
//   e.preventDefault();
//   const email = emailInput1.value;
//   const isValidEmail = validateEmail(email);

//   if (!isValidEmail) {
//     alert('Пожалуйста, введите корректный email');
//     return;
//   }

//   if (confirm('Форма успешно отправлена. Закрыть окно?')) {
//     modal.style.display = 'none';
//   }
// });

// function validateEmail(email) {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// форма на сайте

const programmDiv = document.querySelector(".programm");
const emailInput = programmDiv.querySelector('.input-with-image');
const submitBtn = programmDiv.querySelector('button');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const email = emailInput.value;
  const isValidEmail = validateEmail(email);

  if (!isValidEmail) {
    alert('Пожалуйста, введите корректный email');
    return;
  }

  if (confirm('Ваш запрос успешно отправлен. Закрыть окно?')) {
    programmDiv.style.display = 'flex';
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

$(function() {

  $('#nav-icon2').click(function(){

      $(this).toggleClass('open');
      nav.classList.toggle('bg')
  });

});




