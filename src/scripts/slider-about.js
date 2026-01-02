'use strict';

const slider = document.querySelector('.slider-about');
const slides = slider.querySelectorAll('.slider-about__image');
const dots = slider.querySelectorAll('.slider-about__dot');

const leftButton = slider.querySelector('.slider-about__button--left');
const rightButton = slider.querySelector('.slider-about__button--right');
const currentSlide = slider.querySelector('.slider-about__current');
const totalSlides = slides.length;

let activeIndex = 0;
let startX = 0;

export function configureSliderAbout() {
  configureForMobileAndTablet();
  configureForDesktop();
}

function renderSlider() {
  slides.forEach((slider, i) => {
    slider.classList.toggle('slider-about__image--active', i === activeIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('slider-about__dot--active', i === activeIndex);
  });
}

function configureForMobileAndTablet() {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      activeIndex = index;
      renderSlider();
    });
  });

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) < 50) return;

    if (diff < 0 && activeIndex < slides.length - 1) {
      activeIndex++;
      renderSlider();
    }

    if (diff > 0 && activeIndex > 0) {
      activeIndex--;
      renderSlider();
    }
  });
}

function configureForDesktop() {
  let currentIndex = 0;

  slider.style.setProperty('--steps', totalSlides);

  function changeSlide(direction) {
    slides[currentIndex].classList.remove('slider-about__image--active');
    currentIndex = (currentIndex + direction) % totalSlides;
    slides[currentIndex].classList.add('slider-about__image--active');

    if (totalSlides - 1 === currentIndex) {
      rightButton.classList.add('slider-about__button--disabled');
    }

    if (currentIndex < totalSlides - 1) {
      rightButton.classList.remove('slider-about__button--disabled');
    }

    if (currentIndex > 0) {
      leftButton.classList.remove('slider-about__button--disabled');
    }

    if (currentIndex === 0) {
      leftButton.classList.add('slider-about__button--disabled');
    }

    setSlide(currentIndex);
  }

  function setSlide(index) {
    slider.style.setProperty('--step', index);
    currentSlide.textContent = index + 1;
  }

  if (leftButton && rightButton) {
    leftButton.addEventListener('click', () => changeSlide(-1));
    rightButton.addEventListener('click', () => changeSlide(1));
  }
}