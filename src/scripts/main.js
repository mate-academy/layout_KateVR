'use strict';

const techModalFirst = document.querySelector('.tech__modal--1');
const techModalSecond = document.querySelector('.tech__modal--2');
const techModalThird = document.querySelector('.tech__modal--3');
const buttonFirst = document.querySelector('.tech__button--1');
const buttonSecond = document.querySelector('.tech__button--2');
const buttonThird = document.querySelector('.tech__button--3');

function toggleModal(buttonElement, modalElement) {
  buttonElement.classList.toggle('active');
  modalElement.classList.toggle('active');
}

function deactivateModal(buttonElement, modalElement) {
  buttonElement.classList.remove('active');
  modalElement.classList.remove('active');
}

buttonFirst.addEventListener('click', () => {
  toggleModal(buttonFirst, techModalFirst);

  if (buttonFirst.classList.contains('active')) {
    deactivateModal(buttonSecond, techModalSecond);
    deactivateModal(buttonThird, techModalThird);
  }
});

buttonSecond.addEventListener('click', () => {
  toggleModal(buttonSecond, techModalSecond);

  if (buttonSecond.classList.contains('active')) {
    deactivateModal(buttonFirst, techModalFirst);
    deactivateModal(buttonThird, techModalThird);
  }
});

buttonThird.addEventListener('click', () => {
  toggleModal(buttonThird, techModalThird);

  if (buttonThird.classList.contains('active')) {
    deactivateModal(buttonFirst, techModalFirst);
    deactivateModal(buttonSecond, techModalSecond);
  }
});

const input = document.getElementById('counter');
const priceElement = document.getElementById('price');

input.addEventListener('input', function() {
  const value = this.value;
  const price = calculatePrice(value);

  priceElement.textContent = price;
});

function calculatePrice(value) {
  const basePrice = 1200;
  const totalPrice = basePrice * value;

  return totalPrice + '$';
}

document.querySelector('.touch__form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
  });

document.querySelector('.purchase__form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
  });

const stepFirst = document.getElementById('step1');
const stepSecond = document.getElementById('step2');
const stepThird = document.getElementById('step3');
const tabFirst = document.getElementById('tab1');
const tabSecond = document.getElementById('tab2');
const tabThird = document.getElementById('tab3');
const btnFirst = document.getElementById('btn1');
const btnSecond = document.getElementById('btn2');
const formFirst = document.getElementById('form-first');
const img = document.getElementById('img');

function setStepActive(stepElement, tabElement, opacity) {
  if (!stepElement.classList.contains('active')) {
    stepElement.classList.add('active');
    tabElement.classList.add('active');
  }

  if (stepFirst !== stepElement) {
    stepFirst.classList.remove('active');
    tabFirst.classList.remove('active');
  }

  if (stepSecond !== stepElement) {
    stepSecond.classList.remove('active');
    tabSecond.classList.remove('active');
  }

  if (stepThird !== stepElement) {
    stepThird.classList.remove('active');
    tabThird.classList.remove('active');
  }

  formFirst.style.opacity = opacity;
  img.style.opacity = opacity;
}

stepFirst.addEventListener('click', () => {
  setStepActive(stepFirst, tabFirst, '1');
});

stepSecond.addEventListener('click', () => {
  setStepActive(stepSecond, tabSecond, '1');
});

stepThird.addEventListener('click', () => {
  setStepActive(stepThird, tabThird, '0');
});

btnFirst.addEventListener('click', () => {
  setStepActive(stepSecond, tabSecond, '1');
});

btnSecond.addEventListener('click', () => {
  setStepActive(stepThird, tabThird, '0');
});

document.addEventListener('DOMContentLoaded', function() {
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const aboutVideoItems = document.querySelectorAll('.about__video');
  const aboutPages = document.querySelectorAll('.about__number');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function showSlide(index) {
    aboutVideoItems.forEach(function(item, itemIndex) {
      item.classList.remove('active');
      item.classList.add('hidden');

      if (itemIndex === index) {
        item.classList.add('active');
        item.classList.remove('hidden');
      }
    });

    aboutPages[0].textContent = index + 1;
  }

  function nextSlide() {
    currentSlide++;

    if (currentSlide >= aboutVideoItems.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = aboutVideoItems.length - 1;
    }
    showSlide(currentSlide);
  }

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      previousSlide();
    }
  }

  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', previousSlide);
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchEnd);
});

// const menu = document.querySelector('.navs__burger-btn');
// const menuBody = document.querySelector('.page__menu');
// const body = document.querySelector('.page__body');
// const menuLinks = document.querySelectorAll('.menu__link');

// function menuClose() {
//   menu.classList.remove('active');
//   menuBody.classList.remove('active');
//   body.classList.remove('lock');
// }

// if (menu) {
//   menu.addEventListener('click', function(e) {
//     menu.classList.toggle('active');

//     if (menu.classList.contains('active')) {
//       const logo = document.querySelector('.menu__logo');

//       menuBody.classList.add('active');
//       body.classList.add('lock');

//       logo.addEventListener('click', (elem) => {
//         elem.preventDefault();
//         menuClose();
//       });

//       if (menuLinks.length > 0) {
//         menuLinks.forEach(el => {
//           el.addEventListener('click', function() {
//             menuClose();
//           });
//         });
//       };
//     } else {
//       menuClose();
//     }
//   });
// };

// Отримуємо посилання на елементи DOM
const headerBurgerBtn = document.querySelector('.header__burger-btn');
const pageBody = document.querySelector('.page__body');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBurgerBtn = document.querySelector('.menu__burger-btn');
const menuLogo = document.querySelector('.menu__logo');

function addLockClass() {
  pageBody.classList.add('lock');
}

function removeLockClass() {
  pageBody.classList.remove('lock');
}

headerBurgerBtn.addEventListener('click', addLockClass);

menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', removeLockClass);
});

menuBurgerBtn.addEventListener('click', removeLockClass);

menuLogo.addEventListener('click', removeLockClass);
