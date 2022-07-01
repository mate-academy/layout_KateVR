'use strict';

const form = document.querySelector('.touch__form');
const more = document.querySelector('.more');
const goTop = document.querySelector('.main__go-top');
const footer = document.querySelector('.footer');
const menuList = document.querySelector('.header__menu-list');
const menuToggler = document.querySelector('.header__burger-toggler');
const aboutPrev = document.querySelector('.about__prev');
const aboutNext = document.querySelector('.about__next');
const aboutSlideshow = document.querySelector('.about__slideshow');
const aboutCounter = document.querySelector('.about__counter');
let counter = 1;

form.addEventListener('submit', event => {
  event.preventDefault();

  form.reset();

  window.location.href = '#';
});

window.addEventListener('scroll', () => {
  if (more.getBoundingClientRect().top < 0
    && footer.getBoundingClientRect().top >= window.innerHeight) {
    goTop.style.display = 'block';
  } else {
    goTop.style.display = 'none';
  }
});

menuList.addEventListener('click', () => {
  menuToggler.checked = false;
});

function updateSlider() {
  if (counter < 1) {
    counter = 5;
  }

  if (counter > 5) {
    counter = 1;
  }

  aboutSlideshow.style.left = `${(counter - 1)
  * -1 * aboutSlideshow.offsetWidth / 5}px`;
  aboutCounter.textContent = `${counter}/5`;
}

aboutPrev.addEventListener('click', () => {
  --counter;
  updateSlider();
});

aboutNext.addEventListener('click', () => {
  ++counter;
  updateSlider();
});

if (window.innerWidth < 1280) {
  setInterval(() => {
    ++counter;
    updateSlider();
  }, 2000);
}
