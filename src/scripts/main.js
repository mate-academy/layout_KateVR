'use strict';

const faqBtns = document.querySelectorAll('.faq__button');
const helpBtns = document.querySelectorAll('.help__button');
const faqBlock = document.getElementById('faq');
const helpBlock = document.getElementById('help');
const helpCrossBtn = document.getElementById('help__cross');
const faqCrossBtn = document.getElementById('faq__cross');
const questionTitle = document.querySelectorAll('.question__action');
const questionText = document.querySelectorAll('.question__text');
const questionArrow = document.querySelectorAll('.question__arrow');
const playerBtn = document.querySelectorAll('.player__button');
const playerBlock = document.getElementById('player');
const playerCrossBtn = document.getElementById('player__cross');
const mobileMenuBtn = document.getElementById('mobile__menu');
const mobileMenu = document.getElementById('mobile__nav');
const mobileMenuCross = document.getElementById('mobile__cross');
const mobileLinks = document.querySelectorAll('.mobile__menu-item');
const form = document.querySelector('.form');

const slider1 = document.getElementById('slider1');

let zIndex = 1;

function newSlider(slider) {
  const sliderPhotos = slider.querySelector('.slider__wrapper');
  const sliderPrev = slider.querySelector('.slider__button-prev');
  const sliderNext = slider.querySelector('.slider__button-next');
  const photosAmount = sliderPhotos.childElementCount - 1;
  let counter = 0;

  sliderNext.addEventListener('click', () => {
    if (counter > photosAmount - 1) {
      counter = -1;
    }
    counter++;
    sliderPhotos.style.transform = `translateX(-${100 * counter}%)`;
    changeImgCounter(counter);
  });

  sliderPrev.addEventListener('click', () => {
    if (counter < 1) {
      counter = photosAmount + 1;
    }
    counter--;
    sliderPhotos.style.transform = `translateX(-${100 * counter}%)`;
    changeImgCounter(counter);
  });

  function changeImgCounter(value) {
    const imgCounter = document.querySelector('.about__img-counter');

    imgCounter.textContent = (value + 1) + '/5';
  }
}

newSlider(slider1);

for (const faqBtn of faqBtns) {
  faqBtn.addEventListener('click', () => {
    faqBlock.classList.add('faq__active');
    faqBlock.style.zIndex = '' + zIndex;
    zIndex++;
  });
}

faqCrossBtn.addEventListener('click', () => {
  faqBlock.classList.remove('faq__active');
  faqBlock.style.zIndex = '' + 0;
  zIndex--;
});

for (const helpBtn of helpBtns) {
  helpBtn.addEventListener('click', () => {
    helpBlock.classList.add('help__active');
    helpBlock.style.zIndex = '' + zIndex;
    zIndex++;
  });
}

helpCrossBtn.addEventListener('click', () => {
  helpBlock.classList.remove('help__active');
  helpBlock.style.zIndex = '' + 0;
  zIndex--;
});

for (let i = 0; i < questionTitle.length; i++) {
  questionTitle[i].addEventListener('click', () => {
    questionText[i].classList.toggle('question__text--active');
    questionArrow[i].classList.toggle('question__arrow--active');
  });
}

for (const button of playerBtn) {
  button.addEventListener('click', () => {
    if (window.matchMedia('(min-width: 1280px )').matches) {
      playerBlock.classList.add('player__active');
    } else {
      window.location.href = 'https://youtu.be/zHINMzzwOkM';
    }
  });
}

playerCrossBtn.addEventListener('click', () => {
  playerBlock.classList.remove('player__active');
});

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('mobile__nav--active');
});

mobileMenuCross.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile__nav--active');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

for (const link of mobileLinks) {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile__nav--active');
  });
}
