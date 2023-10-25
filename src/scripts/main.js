'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const languageSelector = document.querySelector('.language-selector');
const mediaQueryOnTablet = window.matchMedia('(min-width: 768px)');
const mainMenu = document.querySelector('.navigation--touch');
const menuOpener = document.querySelector('.top-action__menu-opener');
const menuCloser = document.querySelector('.top-action__menu-closer');
const headerLinks = document.querySelectorAll('.navigation__menu-link');
const headerButton = document.querySelectorAll('.navigation__button');
const body = document.querySelector('.page__body');
const scrolWidth = window.innerWidth - document.body.clientWidth;

if (mediaQueryOnTablet.matches) {
  if (languageSelector.offsetHeight > mainMenu.offsetHeight) {
    languageSelector.style.height = languageSelector.offsetHeight + 'px';
    mainMenu.style.height = languageSelector.offsetHeight + 'px';
  } else {
    languageSelector.style.height = mainMenu.offsetHeight + 'px';
    mainMenu.style.height = mainMenu.offsetHeight + 'px';
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    if (languageSelector.offsetHeight > mainMenu.offsetHeight) {
      languageSelector.style.height = languageSelector.offsetHeight + 'px';
      mainMenu.style.height = languageSelector.offsetHeight + 'px';
    } else {
      languageSelector.style.height = mainMenu.offsetHeight + 'px';
      mainMenu.style.height = mainMenu.offsetHeight + 'px';
    }
  }
});

const form = document.querySelector('.get-in-touch__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

if (menuOpener) {
  menuOpener.addEventListener('click', (e) => {
    menuOpener.classList.toggle('_active');
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  menuCloser.addEventListener('click', (e) => {
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', (e) => {
      body.classList.toggle('_lock');
      mainMenu.classList.toggle('_open');

      if (!isMobile.any()) {
        if (body.classList.contains('_lock')) {
          setTimeout(() => {
            body.style.paddingRight = scrolWidth + 'px';
          }, 300);
        } else {
          setTimeout(() => {
            body.style.paddingRight = 0;
          }, 300);
        }
      }
    });
  }
}

if (menuCloser) {
  for (let i = 0; i < headerButton.length; i++) {
    headerButton[i].addEventListener('click', (e) => {
      body.classList.toggle('_lock');
      mainMenu.classList.toggle('_open');

      if (!isMobile.any()) {
        if (body.classList.contains('_lock')) {
          body.style.paddingRight = scrolWidth + 'px';
        } else {
          body.style.paddingRight = 0;
        }
      }
    });
  }
}

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    // Настройки слайдера
    loop: false, // Зациклить слайды
    margin: 16, // Отступ между слайдами
    nav: true, // Показать навигацию (кнопки "Вперед" и "Назад")
    navText: ['<div class="about-product__slider- previous">previous</div>', '<div class="about-product__slider-next">next</div>'],
    dots: true,
    items: 1,
    autoWidth: false,
    onInitialized: updateSlideInfo,
    onTranslated: updateSlideInfo,
  });

  function updateSlideInfo(event) {
    const currentItem = event.item.index + 1;
    const totalItems = event.item.count;

    $('.about-product__current-slide').text(currentItem);
    $('.about-product__total-slides').text(totalItems);
  }
});
