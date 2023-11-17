'use strict';

import $ from 'jquery';
import 'slick-carousel';

const body = document.body;

const asideMenu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.nav-menu__link');
const languageItems = document.querySelectorAll('.nav-language__link');
const blockMore = document.querySelector('.more');

const popupLang = document.querySelector('.language');
const popupHelp = document.querySelector('.help');

const iconMenu = document.querySelector('.icon--menu');
const iconClose = document.querySelector('.icon--close');
const iconArrowLeft = document.querySelectorAll('.icon--arrow');
const iconCloseHelp = document.querySelectorAll('.help--close');
const iconMore = document.querySelector('.header__more--link');

// Функція відкриття меню
function openMobileMenu() {
  asideMenu.style.display = 'block';
};

// Функція закриття меню
function closeMobileMenu() {
  if (asideMenu) {
    asideMenu.style.display = 'none';
  }
}

// Функція закриття popup Language
function closePopupLang() {
  if (popupLang) {
    popupLang.style.display = 'none';
    body.classList.remove('unscroll');
  }
}

// Open Mobile Menu
iconMenu.addEventListener('click', openMobileMenu);

// Close Mobile Menu
iconClose.addEventListener('click', closeMobileMenu);

menuItems.forEach(item => {
  item.addEventListener('click', closeMobileMenu);
});

// Pop-up's Open
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const popupId = item.getAttribute('data-popup');
    const popup = document.getElementById(popupId);

    // Перевіряємо, чи popup існує
    if (popup) {
      popup.style.display = 'block';
    }
  });
});

// Close popup Language
iconArrowLeft.forEach(button => {
  button.addEventListener('click', closePopupLang);
});

languageItems.forEach(item => {
  item.addEventListener('click', closePopupLang);
});

// Close popup Help
iconCloseHelp.forEach(button => {
  button.addEventListener('click', () => {
    if (popupHelp) {
      popupHelp.style.display = 'none';
      body.classList.remove('unscroll');
    }
  });
});

// Відкриття блоку More

iconMore.addEventListener('click', () => {
  if (blockMore) {
    blockMore.classList.toggle('hidden');
  }
});

// Slider HEADER
$('.header-slider').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        dots: true,
      },
    },
  ],
});

// Slider ABOUT
$('.about-slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
      },
    },
  ],
});

const $currentSl = $('.about-slide__numSlide');
const $totalSlides = $('.about-slide__totalSlide');
const total = $('.about-slider').slick('getSlick').slideCount;

$totalSlides.text(total);

$('.about-slider').on('afterChange',
  function(event, slick, currentSlide, nextSlide) {
    const i = (currentSlide || 0) + 1;

    $currentSl.text(i);
  });

// Unscroll Menu
iconMenu.addEventListener('click', () => {
  body.classList.add('unscroll');
});

asideMenu.addEventListener('click', (event) => {
  const isLanguageOrHelp = event.target.classList.contains('language-item')
  || event.target.classList.contains('help-item');

  // Якщо так, не видаляти клас 'unscroll'
  if (!isLanguageOrHelp) {
    body.classList.remove('unscroll');
  }
});

// Button Bac-To-Top
const backtoTop = document.querySelector('.back-top');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 500) {
    backtoTop.style.opacity = '1';
  } else {
    backtoTop.style.opacity = '0';
  }
});

backtoTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
