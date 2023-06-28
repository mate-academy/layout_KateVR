'use strict';

const techModalFirst = document.querySelector('.tech__modal--1');
const techModalSecond = document.querySelector('.tech__modal--2');
const techModalThird = document.querySelector('.tech__modal--3');
const buttonFirst = document.querySelector('.tech__button--1');
const buttonSecond = document.querySelector('.tech__button--2');
const buttonThird = document.querySelector('.tech__button--3');

buttonFirst.addEventListener('click', () => {
  buttonFirst.classList.toggle('active');
  techModalFirst.classList.toggle('active');

  if (buttonFirst.classList.contains('active')) {
    buttonSecond.classList.remove('active');
    techModalSecond.classList.remove('active');
    buttonThird.classList.remove('active');
    techModalThird.classList.remove('active');
  }
});

buttonSecond.addEventListener('click', () => {
  buttonSecond.classList.toggle('active');
  techModalSecond.classList.toggle('active');

  if (buttonSecond.classList.contains('active')) {
    buttonFirst.classList.remove('active');
    techModalFirst.classList.remove('active');
    buttonThird.classList.remove('active');
    techModalThird.classList.remove('active');
  }
});

buttonThird.addEventListener('click', () => {
  buttonThird.classList.toggle('active');
  techModalThird.classList.toggle('active');

  if (buttonThird.classList.contains('active')) {
    buttonFirst.classList.remove('active');
    techModalFirst.classList.remove('active');
    buttonSecond.classList.remove('active');
    techModalSecond.classList.remove('active');
  }
});

const input = document.getElementById('counter');
const priceElement = document.getElementById('price');

input.addEventListener('change', function() {
  const value = this.value;
  const price = calculatePrice(value);

  priceElement.textContent = price;
});

function calculatePrice(value) {
  const basePrice = 1200;
  const totalPrice = basePrice * value;

  return totalPrice + '$';
}

let currentStep = 1;

showStep(currentStep);

function nextStep(evt, stepName) {
  evt.preventDefault();

  if (stepName === 'step3') {
    submitForm();

    return;
  }
  showStep(currentStep += 1);
}

function showStep(step) {
  const i;
  const tabcontent;

  tabcontent = document.getElementsByClassName('purchase__slider');

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  document.getElementById('step' + step).style.display = 'block';
  currentStep = step;
}

function submitForm() {
  // Відправка форми або виконання необхідних дій при завершенні
  alert('Form submitted!');
  // Очищення форми
  document.getElementById('step1').style.display = 'block';
  document.getElementsByTagName('form')[0].reset();
  currentStep = 1;
}

// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("purcahse__slider");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("purcahse__link");
//   for (j = 0; j < tablinks.length; j++) {
//     tablinks[j].className = tablinks[j].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// document.getElementById("tab1").style.display = "block";
// document.getElementsByClassName("tablink")[0].className += " active";

// const link = document.getElementsByClassName("purcahse__link");
// const content = document.getElementsByClassName("purcahse__slider")
