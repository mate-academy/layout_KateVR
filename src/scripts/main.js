/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('load', eventWindow => {
  const body = document.querySelector('.body');
  const select = document.querySelector('.select__text');
  const selectArrow = document.querySelector('.select__arrow');
  const selectItems = document.querySelectorAll('.select__item');
  const selectItemsWrapper = document.querySelector('.select__items');
  const selectUI = [select, selectArrow];
  const faqTabTitle = document.querySelectorAll('.popupfaq__tab-title');
  let innerSelectItem = ''; // selectItem inner text work when element hover

  selectUI.forEach(el => {
    el.addEventListener('click', e => { //  selectUI is click
      const innerTextSelect = select.innerHTML;

      selectItemsWrapper.style.display = 'flex'; // select list is show

      body.addEventListener('click', event => {
        // take value from list item and put to select
        // if terget not list item - close list
        if (event.target.classList.contains('select__item')) {
          selectItemsWrapper.style.display = 'none';
          event.target.innerHTML = innerTextSelect;
          select.innerHTML = innerSelectItem;
        } else {
          selectItemsWrapper.style.display = 'none';
          innerSelectItem = '';
        }
      }, true);
    });
  });

  selectItems.forEach(el => { // add hover item value to innerSelectItem
    el.addEventListener('mouseover', event => {
      innerSelectItem = event.target.innerHTML;
    });
  });

  // scroll disable
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#popup-lang'
      || window.location.hash === '#popup-menu'
      || window.location.hash === '#popup-help'
      || window.location.hash === '#popupvideo'
      || window.location.hash === '#popup-faq') {
      body.classList.add('body--with-menu');
    } else {
      body.classList.remove('body--with-menu');

      const video = document.querySelectorAll('.video');

      video.forEach(el => {
        const url = el.getAttribute('src');

        el.removeAttribute('src');
        el.setAttribute('src', url);
      });
    }
  });

  faqTabTitle.forEach(el => { //  show onckick FAQ text block
    el.addEventListener('click', e => {
      faqTabTitle.forEach(item => {
        if (e.target.nextElementSibling.classList.contains('show-text')) {
          return;
        }

        const x = item.nextElementSibling;

        x.classList.remove('show-text');
        x.nextElementSibling.classList.remove('show-text');
        item.firstElementChild.classList.remove('arrow-active');
      });

      el.nextElementSibling.classList.toggle('show-text');
      el.nextElementSibling.nextElementSibling.classList.toggle('show-text');
      el.firstElementChild.classList.toggle('arrow-active');
    });
  });
});

// eslint-disable-next-line no-undef
const swiper = new Swiper('.startpage__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.startpage__slider-next',
    prevEl: '.startpage__slider-prev',
  },
}
);

// eslint-disable-next-line no-undef
const aboutSlider = new Swiper('.about__slider', {
  direction: 'horizontal',
  loop: true,
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.about__slider-next',
    prevEl: '.about__slider-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
}
);

const aboutButtonVideo = document.querySelector('.about__button');
const startpageButtonVideo = document.querySelector('.startpage__button');
const closeVideoCross = document.querySelector('.close-video');

aboutButtonVideo.addEventListener('click', e => {
  closeVideoCross.setAttribute('href', '#about');
});

startpageButtonVideo.addEventListener('click', e => {
  closeVideoCross.setAttribute('href', '#');
});

const techDetails = document.querySelectorAll('.tech__details');

techDetails.forEach(el => {
  el.addEventListener('click', e => {
    e.target.classList.toggle('tech__details');
    e.target.classList.toggle('tech__details-active');

    const body = document.querySelector('.body');

    body.addEventListener('click', function techDetailsListener(event) {
      if (event.target !== e.target) {
        e.target.classList.add('tech__details');
        e.target.classList.remove('tech__details-active');
        body.removeEventListener(techDetailsListener);
      }
    });
  });
});
