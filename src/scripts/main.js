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

let zIndex = 1;

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
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
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
