'use strict';

const leftButton = document.querySelector('.header__slider-button--left');
const rightButton = document.querySelector('.header__slider-button--right');
const slider = document.querySelector('.header__slider');
const slides = document.querySelectorAll('.header__background-image ');
const totalSlides = slides.length;

export function addSliderForHeader() {
  let currentIndex = 0;

  slider.style.setProperty('--steps', totalSlides);

  function changeSlide(direction) {
    slides[currentIndex].classList.remove('header__background-image--active');
    currentIndex = (currentIndex + direction) % totalSlides;
    slides[currentIndex].classList.add('header__background-image--active');

    if (totalSlides - 1 === currentIndex) {
      rightButton.classList.add('header__slider-button--disabled');
    }

    if (currentIndex < totalSlides - 1) {
      rightButton.classList.remove('header__slider-button--disabled');
    }

    if (currentIndex > 0) {
      leftButton.classList.remove('header__slider-button--disabled');
    }

    if (currentIndex === 0) {
      leftButton.classList.add('header__slider-button--disabled');
    }

    setSlide(currentIndex);
  }

  function setSlide(index) {
    slider.style.setProperty('--step', index);
  }

  if (leftButton && rightButton) {
    leftButton.addEventListener('click', () => changeSlide(-1));
    rightButton.addEventListener('click', () => changeSlide(1));
  }
}
