'use strict';

const sliderPrev = document.querySelectorAll('.slider-prev');
const sliderNext = document.querySelectorAll('.slider-next');
const sliderBtn = document.querySelectorAll('.slider__btn');

sliderNext.forEach(next => {
  next.addEventListener('click', () => {
    const currentSlider = next.closest('.slider');
    const countSlides = currentSlider.querySelector('.slider__count');
    const slides = currentSlider.querySelectorAll('.slider__slide');
    const slide = currentSlider.querySelector('.slider__slide--show');
    const ac = currentSlider.querySelector('.slider__change--active');

    if (slide.nextElementSibling) {
      const slidei = slide.nextElementSibling.getAttribute('data-index');

      slide.classList.remove('slider__slide--show');
      slide.nextElementSibling.classList.add('slider__slide--show');
      countSlides.innerText = `${slidei}/${slides.length}`;
    }

    if (slides[slides.length - 1].classList.contains('slider__slide--show')) {
      ac.classList.remove('slider__change--active');
      next.classList.add('slider__change--active');
    } else {
      ac.classList.remove('slider__change--active');
      next.previousElementSibling.classList.add('slider__change--active');
    }
  });
});

sliderPrev.forEach(prev => {
  prev.addEventListener('click', () => {
    const currentSlider = prev.closest('.slider');
    const countSlides = currentSlider.querySelector('.slider__count');
    const slides = currentSlider.querySelectorAll('.slider__slide');
    const slide = currentSlider.querySelector('.slider__slide--show');
    const ac = currentSlider.querySelector('.slider__change--active');

    if (slide.previousElementSibling) {
      const slidei = slide.previousElementSibling.getAttribute('data-index');

      slide.classList.remove('slider__slide--show');
      slide.previousElementSibling.classList.add('slider__slide--show');
      countSlides.innerText = `${slidei}/${slides.length}`;
    }

    if (slides[0].classList.contains('slider__slide--show')) {
      ac.classList.remove('slider__change--active');

      prev.classList.add('slider__change--active');
    } else {
      ac.classList.remove('slider__change--active');
      prev.nextElementSibling.classList.add('slider__change--active');
    }
  });
});

sliderBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const currentSlider = btn.closest('.slider');
    const slides = currentSlider.querySelectorAll('.slider__slide');
    const ac = currentSlider.querySelector('.slider__slide--show');
    const cb = currentSlider.querySelector('.slider__btn--active');

    ac.classList.remove('slider__slide--show');
    slides[btn.getAttribute('data-index')].classList.add('slider__slide--show');

    cb.classList.remove('slider__btn--active');
    btn.classList.add('slider__btn--active');
  });
});
