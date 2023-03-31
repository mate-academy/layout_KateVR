'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButtonHeader = document.querySelector('.header__burger');
  const crossButtonMenu = document.querySelectorAll('.menu__cross');
  const body = document.querySelector('.body');
  const menuHeader = document.querySelector('.header__menu');
  const menuItemHasSub = document.querySelectorAll('.menu__link--has-sub');
  const menuItemSubArrow = document.querySelectorAll('.arrow-back');
  const plusSpec = document.querySelectorAll('.spec__plus');

  // Header menu

  burgerButtonHeader.addEventListener('click', () => {
    body.classList.toggle('lock');
    menuHeader.classList.toggle('active');
  });

  crossButtonMenu.forEach(cross => {
    cross.addEventListener('click', () => {
      if (window.location.hash) {
        window.location.hash = '';
      }

      if (cross.closest('.active')) {
        cross.closest('.active').classList.remove('active');
      }
    });
  });

  menuItemHasSub.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('active');
    });
  });

  menuItemSubArrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
      arrow.closest('.active').classList.remove('active');
    });
  });

  // Slider
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1280: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination--progress-bar',
          type: 'progressbar',
        },
      },
    },
  });

  swiper.on('slideChange', () => {
    const currentSlideNumber = swiper.activeIndex + 1;

    showSlidesNumbers(currentSlideNumber);
  });

  function showSlidesNumbers(currentSlide = 1) {
    const totalSlides = document.querySelector('.swiper-counter__total');
    const currentSlides = document.querySelector('.swiper-counter__current');

    currentSlides.textContent = currentSlide;
    totalSlides.textContent = swiper.slides.length;
  }

  showSlidesNumbers();

  // Specs show

  plusSpec.forEach(plus => {
    plus.addEventListener('click', () => {
      plus.classList.toggle('active');
      plus.parentElement.classList.toggle('active');
    });
  });

  // Contact form
  const contactForm = document.querySelector('.contact__form');
  const contactInputs = document.querySelectorAll('[data-form="input"]');

  function formInputValidate(formInput) {
    let emptyInputs = 0;

    for (let i = 0; i < formInput.length; i++) {
      if (formInput[i].value.length === 0) {
        formInput[i].classList.add('no-valid');
        emptyInputs++;
      }

      if (formInput[i].value.length > 0
         && formInput[i].classList.contains('no-valid')) {
        formInput[i].classList.remove('no-valid');
      }
    }

    if (emptyInputs > 0) {
      return false;
    } else {
      return true;
    }
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formInputValidate(contactInputs)) {
      contactForm.reset();
    }
  });

  // Text Area adjust height
  const messageContactForm = document.querySelector('#contact-message');

  messageContactForm.addEventListener('input', changeHeightTextArea, false);

  function changeHeightTextArea() {
    messageContactForm.style.height = 'auto';
    messageContactForm.style.height = (messageContactForm.scrollHeight) + 'px';
  }

  // SVG icon fill
  const svgIcons = document.querySelectorAll('.svg-icon');

  svgIcons.forEach(icon => {
    // eslint-disable-next-line no-undef
    SVGInjector(icon);
  });
});
