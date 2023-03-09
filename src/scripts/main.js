/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('load', eventWindow => {
  const body = document.querySelector('.body');
  const faqTabTitle = document.querySelectorAll('.popupfaq__tab-title');
  const contactForm = document.querySelector('.contact__form');

  function selectWork(mainClass) {
    const select = document.querySelector(mainClass);
    const selectChilds = select.children;

    const selectText = selectChilds[0];
    const selectWrapper = selectChilds[1];
    const selectArrow = selectChilds[2];
    const selectItems = [...selectWrapper.children];
    let innerSelectItem = '';

    selectItems.forEach(el => { // add hover item value to innerSelectItem
      el.addEventListener('mouseover', event => {
        innerSelectItem = event.target.innerHTML;
      });
    });

    [selectText, selectArrow].forEach(el => {
      el.addEventListener('click', e => { //  selectUI is click
        const valueSelect = selectText.innerHTML;

        // select list is show
        selectWrapper.style.display = 'flex';

        select.addEventListener('click', event => {
          // take value from list item and put to select
          // if terget not list item - close list
          if (event.target.classList.contains('select__item')) {
            selectWrapper.style.display = 'none';
            event.target.innerHTML = valueSelect;
            selectText.innerHTML = innerSelectItem;
          } else {
            selectWrapper.style.display = 'none';
            innerSelectItem = '';
          }
        }, true);
      });
    });
  }

  selectWork('.header__lang');
  selectWork('.select-country');
  selectWork('.select-city');
  selectWork('.order-quantity');
  selectWork('.payform-quantity');

  // scroll disable
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#popup-lang'
      || window.location.hash === '#popup-menu'
      || window.location.hash === '#popup-help'
      || window.location.hash === '#popupvideo'
      || window.location.hash === '#popuporder'
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

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.reset();
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
});

const aboutSliderCurrent = document.querySelector('.currentSlide');
const aboutSliderAmount = document.querySelector('.allSlides');

aboutSlider.on('slideChange', () => {
  aboutSliderCurrent.innerHTML = aboutSlider.realIndex;
  aboutSliderAmount.innerHTML = aboutSlider.slides.length;
});

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

// rotate cards on click (beta)
const cards = document.querySelectorAll('.card');

cards.forEach(el => {
  el.addEventListener('click', e => {
    el.classList.add('backside');

    setTimeout(() => {
      el.classList.remove('backside');
    }, 1500);
  }, true);
});

const orderButton = document.querySelector('.order-button');
const payButton = document.querySelector('.pay-button');
const completeButton = document.querySelector('.completeButton');
const mainBuyButton = document.querySelector('.mainBuyButton');
const orderForm = document.querySelector('#place-order');
const payForm = document.querySelector('#pay');
const orderLinks = document.querySelectorAll('.order__nav-link');
const orderTabs = document.querySelectorAll('.ordertab');
const orderImage = document.querySelector('.order__imageblock');

// move forward 1 => 2 tab
orderForm.addEventListener('submit', e => {
  e.preventDefault();
  orderForm.reset();

  orderLinks.forEach(el => {
    el.classList.remove('order__nav-link--active');
  });
  orderLinks[1].classList.add('order__nav-link--active');
  orderTabs[0].classList.add('disabled');
  orderTabs[1].classList.remove('disabled');
});

// move forward 2 => 3 tab
payForm.addEventListener('submit', e => {
  e.preventDefault();
  orderForm.reset();
  orderImage.style.display = 'none';

  orderLinks.forEach(el => {
    el.classList.remove('order__nav-link--active');
  });
  orderLinks[2].classList.add('order__nav-link--active');
  orderTabs[1].classList.add('disabled');
  orderTabs[2].classList.remove('disabled');
});

// move forward 3 => mainpage
completeButton.addEventListener('click', e => {
  orderImage.style.display = 'block';
});

// move to ORDER tabs
mainBuyButton.addEventListener('click', e => {
  orderImage.style.display = 'block';

  orderLinks.forEach(el => {
    el.classList.remove('order__nav-link--active');
  });
  orderLinks[0].classList.add('order__nav-link--active');
  orderTabs[0].classList.remove('disabled');
  orderTabs[1].classList.add('disabled');
  orderTabs[2].classList.add('disabled');
});

// order tabs titles clickable (only for DEVELOP)
// orderLinks.forEach((el, i) => {
//   el.addEventListener('click', event => {
//     if (el === orderLinks[2]) {
//       orderImage.style.display = 'none';
//     } else {
//       orderImage.style.display = 'block';
//     }

//     orderLinks.forEach(elem => {
//       elem.classList.remove('order__nav-link--active');
//     });
//     el.classList.add('order__nav-link--active');

//     orderTabs.forEach((item) => {
//       if (!item.classList.contains('disabled')) {
//         item.classList.add('disabled');
//       }
//     });
//     orderTabs[i].classList.remove('disabled');
//   });
// });
