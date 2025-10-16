/* eslint-disable max-len */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.image-slider__slide');
  const sliderDots = document.querySelectorAll('.image-slider__dot');

  let slideIndex = 1;

  showSLides(slideIndex);

  function changeSlides(n) {
    showSLides((slideIndex += n));
  }

  function currSlide(n) {
    showSLides((slideIndex = n));
  }

  function showSLides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) =>
      slide.classList.remove('image-slider__slide--active'),
    );

    sliderDots.forEach((dot) =>
      dot.classList.remove('image-slider__dot--active'),
    );

    slides[slideIndex - 1].classList.add('image-slider__slide--active');
    sliderDots[slideIndex - 1].classList.add('image-slider__dot--active');
  }

  const prevSlideButton = document.getElementById('prev-slide');
  const nextSlideButton = document.getElementById('next-slide');

  prevSlideButton.addEventListener('click', (event) => {
    event.preventDefault();
    changeSlides(-1);
  });

  nextSlideButton.addEventListener('click', (event) => {
    event.preventDefault();
    changeSlides(1);
  });

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currSlide(index + 1);
    });
  });

  const techButton1 = document.querySelector('.tech__button--1');
  const techButton2 = document.querySelector('.tech__button--2');
  const techButton3 = document.querySelector('.tech__button--3');

  const techSpecs1 = document.querySelector('.tech__specs--1');
  const techSpecs2 = document.querySelector('.tech__specs--2');
  const techSpecs3 = document.querySelector('.tech__specs--3');

  function toggleClasses(element, className) {
    element.classList.toggle(className);
  }

  techButton1.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses(techButton1, 'tech__button--opened');
    toggleClasses(techSpecs1, 'tech__specs--visible');
  });

  techButton2.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses(techButton2, 'tech__button--opened');
    toggleClasses(techSpecs2, 'tech__specs--visible');
  });

  techButton3.addEventListener('click', (event) => {
    event.preventDefault();
    toggleClasses(techButton3, 'tech__button--opened');
    toggleClasses(techSpecs3, 'tech__specs--visible');
  });

  const dropdown = document.querySelectorAll('.dropdown');
  const dropdownButton = document.querySelectorAll('.dropdown__arrow-button');

  for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', (event) => {
      event.preventDefault();
      dropdown[i].classList.toggle('dropdown--active');
    });
  }

  const questions = document.querySelectorAll('.faq__question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      toggleAnswer(question);
    });
  });

  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const answerDate = answer.nextElementSibling;

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      answerDate.style.display = 'block';
    } else {
      answer.style.display = 'none';
      answerDate.style.display = 'none';
    }
  }

  const expDateInput = document.getElementById('expiration-date');

  expDateInput.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }

    event.target.value = value;
  });

  expDateInput.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && event.target.value.length === 3) {
      event.target.value = event.target.value.slice(0, 2);
    }
  });

  const cardNumber = document.querySelectorAll('.pay__card-input');

  cardNumber.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value.length === 4 && index < cardNumber.length - 1) {
        cardNumber[index + 1].focus();
      }
    });
  });

  const buyNowButtons = document.querySelectorAll('.buy-button');
  const cartCloseButtons = document.querySelectorAll('.cart__close');

  const orderInfo = document.querySelector('.cart__order-info');
  const orderPrice = document.querySelector('.cart__order-price');

  const tabsPlaceOrder = document.querySelectorAll('.tab__place-order');
  const tabsPay = document.querySelectorAll('.tab__pay');
  const tabsComplete = document.querySelectorAll('.tab__complete');

  const placeOrderContent = document.querySelector('.cart__place-order');
  const payContent = document.querySelector('.cart__pay');
  const completeContent = document.querySelector('.cart__complete');

  buyNowButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabsPlaceOrder.forEach((tab) => {
        tab.classList.add('cart__tab--active');
      });
      orderInfo.classList.add('cart__order-info--active');
      placeOrderContent.classList.add('cart__place-order--active');
    });
  });

  const purchaseButton1 = document.getElementById('place-order-button');
  const purchaseButton2 = document.getElementById('pay-button');

  purchaseButton1.addEventListener('click', (event) => {
    event.preventDefault();

    tabsPlaceOrder.forEach((tab) => {
      tab.classList.remove('cart__tab--active');
    });

    tabsPay.forEach((tab) => {
      tab.classList.add('cart__tab--active');
    });

    placeOrderContent.classList.remove('cart__place-order--active');
    payContent.classList.add('cart__pay--active');

    if (window.innerWidth >= 768 && window.innerWidth <= 1280) {
      orderPrice.style.marginLeft = '120px';
    } else {
      orderPrice.style.marginLeft = '0';
    }
  });

  purchaseButton2.addEventListener('click', (event) => {
    event.preventDefault();

    tabsPay.forEach((tab) => {
      tab.classList.remove('cart__tab--active');
    });

    tabsComplete.forEach((tab) => {
      tab.classList.add('cart__tab--active');
    });

    payContent.classList.remove('cart__pay--active');
    orderInfo.classList.remove('cart__order-info--active');
    orderPrice.style.marginLeft = '0';
    completeContent.classList.add('cart__complete--active');
  });

  cartCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      tabsComplete.forEach((tab) => {
        tab.classList.remove('cart__tab--active');
      });

      completeContent.classList.remove('cart__complete--active');
    });
  });

  function toggleScroll() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const currentHash = window.location.hash;
    const isDesktop = window.innerWidth >= 1280;

    if (
      ['#menu', '#language', '#help', '#faq', '#cart'].includes(currentHash)
    ) {
      body.classList.add('no-scroll');

      if (isDesktop) {
        header.style.filter = 'blur(5px)';
      }
    } else {
      body.classList.remove('no-scroll');

      if (isDesktop) {
        header.style.filter = 'blur(0)';
      }
    }
  }

  window.addEventListener('hashchange', toggleScroll);
  window.addEventListener('load', toggleScroll);
});
