'use strict';

const languagesOpener = document.querySelector('.header__languages-opener');
const languagesList = document.querySelector('.header__languages-list');
const languagesItems = document.querySelectorAll('.header__language');
const currentLanguage = document.querySelector('.header__current-language');
const headerSlider = document.querySelector('.header__slider');
const headerSlides = document.querySelector('.header__slides');
const headerPreviousButton = document.querySelector(
  '.header .slider-buttons__button--previous'
);
const headerNextButton = document.querySelector(
  '.header .slider-buttons__button--next'
);
const aboutSlider = document.querySelector('.about__slider');
const aboutSlides = document.querySelector('.about__slides');
const aboutPreviousButton = document.querySelector(
  '.about .slider-buttons__button--previous'
);
const aboutNextButton = document.querySelector(
  '.about .slider-buttons__button--next'
);
const aboutSlidesIndicators = document.querySelector(
  '.about__slides-indicators'
);
const aboutCurrentSlide = document.querySelector(
  '.about__current-slide'
);
const aboutTotalSlides = document.querySelector(
  '.about__total-slides'
);
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = menu.querySelector('.icon--cross');
const menuLanguages = document.querySelector('.menu--languages');
const menuLanguagesOpener = document.querySelector('.menu__languages-opener');
const menuLanguagesBack = menuLanguages.querySelector('.icon--back');
const menuLanguagesItems = menuLanguages.querySelectorAll('.menu__link');
const faq = document.querySelector('.faq');
const headerFaqOpener = document.querySelector('.header__link--faq');
const menuFaqOpener = document.querySelector('.menu__link--faq');
const helpFaqOpener = document.querySelector('.help__link--faq');
const faqCross = faq.querySelector('.icon--cross');
const faqItems = document.querySelectorAll('.faq__item');
const help = document.querySelector('.help');
const headerHelpOpener = document.querySelector('.header__link--help');
const menuHelpOpener = document.querySelector('.menu__link--help');
const helpCross = help.querySelector('.icon--cross');
const dropDownListWrappers = document.querySelectorAll(
  '.order__drop-down-list-wrapper'
);
const buyButton = document.querySelector('.header__top .button');
const order = document.querySelector('.order');
const orderCross = document.querySelector('.order__top .icon--cross');
const orderTabs = document.querySelectorAll('.order__tab');
const orderTabsCross = document.querySelector('.order__tabs-cross');
const orderFieldsWrappers = document.querySelectorAll('.order__field-wrapper');
const orderFields = document.querySelectorAll('.order__field');
const orderForm = document.querySelector('.order__form');
const orderComplete = document.querySelector('.order__complete');
const competeButton = orderComplete.querySelector('.button');

const sliderHandler = (slider, slides, previousButton, nextButton) => {
  const slidesCount = slides.childElementCount;
  const slidesTranslateStep = 100 / slidesCount;
  const slidesIndicators = [];
  let activeSlide = 0;
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;

  if (slider === aboutSlider) {
    for (let i = 0; i < slidesCount; i++) {
      const slideIndicator = document.createElement('div');

      slidesIndicators.push(slideIndicator);

      slideIndicator.classList.add('about__slide-indicator');

      if (i === activeSlide) {
        slideIndicator.classList.add('about__slide-indicator--active');
      }

      aboutSlidesIndicators.appendChild(slideIndicator);
    }

    aboutCurrentSlide.innerText = activeSlide + 1;
    aboutTotalSlides.innerText = slidesCount;
  }

  const moveSlides = () => {
    slides.style.transform = `
      translateX(-${activeSlide * slidesTranslateStep}%)
    `;

    if (slider === aboutSlider) {
      aboutCurrentSlide.innerText = activeSlide + 1;

      slidesIndicators.forEach((item, index) => {
        if (index === activeSlide) {
          item.classList.add('about__slide-indicator--active');
        } else {
          item.classList.remove('about__slide-indicator--active');
        }
      });
    }
  };

  previousButton.addEventListener('click', () => {
    activeSlide--;

    moveSlides();

    nextButton.classList.remove('slider-buttons__button--not-active');

    if (activeSlide === 0) {
      previousButton.classList.add('slider-buttons__button--not-active');
    }
  });

  nextButton.addEventListener('click', () => {
    activeSlide++;

    moveSlides();

    previousButton.classList.remove('slider-buttons__button--not-active');

    if (activeSlide === slidesCount - 1) {
      nextButton.classList.add('slider-buttons__button--not-active');
    }
  });

  slider.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  });

  slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
      if (startX > endX) {
        if (activeSlide === slidesCount - 1) {
          return;
        }

        activeSlide++;
      }

      if (startX < endX) {
        if (activeSlide === 0) {
          return;
        }

        activeSlide--;
      }

      moveSlides();
    }
  });
};

sliderHandler(
  headerSlider,
  headerSlides,
  headerPreviousButton,
  headerNextButton
);

sliderHandler(
  aboutSlider,
  aboutSlides,
  aboutPreviousButton,
  aboutNextButton
);

const closeMenuLanguages = () => {
  menuLanguages.classList.remove('menu--open');
  menu.classList.add('menu--open');
};

const openFaq = () => {
  document.body.classList.add('page__body--with-menu');
  faq.classList.add('faq--open');
  help.classList.remove('help--open');
};

const openHelp = () => {
  document.body.classList.add('page__body--with-menu');
  help.classList.add('help--open');
  faq.classList.remove('faq--open');
};

const closeOrder = () => {
  order.classList.add('order--hide');
  document.body.classList.remove('page__body--with-menu');
  orderForm.reset();

  orderFields.forEach(field => {
    const label = field.parentNode.querySelector('.order__field-label');

    field.classList.remove(
      'order__field--focused',
      'order__field--invalid'
    );

    if (label) {
      label.classList.remove(
        'order__field-label--focused-field',
        'order__field-label--invalid'
      );
    }
  });
};

languagesOpener.addEventListener('click', (e) => {
  e.stopPropagation();
  languagesList.classList.toggle('header__languages-list--open');
  languagesOpener.classList.toggle('header__languages-opener--opened-list');
});

document.addEventListener('click', () => {
  languagesList.classList.remove('header__languages-list--open');
  languagesOpener.classList.remove('header__languages-opener--opened-list');
});

languagesItems.forEach(item => item.addEventListener('click', (e) => {
  currentLanguage.innerText = e.target.innerText;
}));

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page__body--with-menu');
});

menuCross.addEventListener('click', () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--with-menu');
});

menuLanguagesOpener.addEventListener('click', () => {
  menuLanguages.classList.add('menu--open');
  menu.classList.remove('menu--open');
});

menuLanguagesBack.addEventListener('click', closeMenuLanguages);

menuLanguagesItems.forEach(item =>
  item.addEventListener('click', closeMenuLanguages)
);

headerFaqOpener.addEventListener('click', () => {
  faq.classList.add('faq--open');
});

headerFaqOpener.addEventListener('click', openFaq);
menuFaqOpener.addEventListener('click', openFaq);
helpFaqOpener.addEventListener('click', openFaq);

faqCross.addEventListener('click', () => {
  faq.classList.remove('faq--open');

  if (!menu.classList.contains('menu--open')) {
    document.body.classList.remove('page__body--with-menu');
  }
});

faqItems.forEach(item => item.querySelector('.faq__item-title')
  .addEventListener('click', (e) => {
    e.target.classList.toggle('faq__item-title--item-opened');

    item.querySelector('.faq__text-wrapper')
      .classList.toggle('faq__text-wrapper--open');
  })
);

headerHelpOpener.addEventListener('click', () => {
  help.classList.add('help--open');
});

headerHelpOpener.addEventListener('click', openHelp);
menuHelpOpener.addEventListener('click', openHelp);

helpCross.addEventListener('click', () => {
  help.classList.remove('help--open');

  if (!menu.classList.contains('menu--open')) {
    document.body.classList.remove('page__body--with-menu');
  }
});

buyButton.addEventListener('click', () => {
  order.classList.remove('order--hide');
  document.body.classList.add('page__body--with-menu');
});

orderCross.addEventListener('click', closeOrder);
orderTabsCross.addEventListener('click', closeOrder);
competeButton.addEventListener('click', closeOrder);

dropDownListWrappers.forEach(wrapper => {
  const listOpener = wrapper.querySelector('.order__drop-down-list-opener');
  const list = wrapper.querySelector('.order__drop-down-list');
  const listItems = wrapper.querySelectorAll('.order__drop-down-list-item');

  listOpener.addEventListener('click', (e) => {
    e.stopPropagation();

    listOpener.parentNode.classList.toggle(
      'order__drop-down-list-opener-wrapper--opened-list'
    );

    if (list.classList.contains('order__drop-down-list--quantity')) {
      list.classList.toggle('order__drop-down-list--open-quantity');
    } else {
      list.classList.toggle('order__drop-down-list--open');
    }
  });

  listItems.forEach(item => item.addEventListener('click', () => {
    listOpener.value = item.innerText;

    list.classList.remove(
      'order__drop-down-list--open',
      'order__drop-down-list--open-quantity'
    );

    listOpener.parentNode.classList.remove(
      'order__drop-down-list-opener-wrapper--opened-list',
    );
  }));
});

orderFields.forEach(item => {
  const label = item.parentNode.querySelector('.order__field-label');

  item.addEventListener('focus', () => {
    if (!item.classList.contains('order__field--invalid')) {
      item.classList.add('order__field--focused');
    }

    if (label) {
      label.classList.add('order__field-label--focused-field');
    }
  });

  item.addEventListener('blur', () => {
    if (!item.checkValidity()) {
      item.classList.add('order__field--invalid');

      if (label) {
        label.classList.add('order__field-label--invalid');
      }
    } else {
      item.classList.remove('order__field--invalid');

      if (label) {
        label.classList.remove('order__field-label--invalid');

        if (item.value === '') {
          label.classList.remove('order__field-label--focused-field');
        }
      }
    }
  });
});

orderTabs.forEach(tab => tab.addEventListener('click', () => {
  orderTabs.forEach(item => item.classList.remove('order__tab--active'));
  tab.classList.add('order__tab--active');

  if (tab.dataset.type === 'complete') {
    orderForm.classList.add('order__form--hide');
    orderComplete.classList.add('order__complete--show');

    return;
  }

  orderForm.classList.remove('order__form--hide');
  orderComplete.classList.remove('order__complete--show');

  orderFieldsWrappers.forEach(wrapper => {
    if (wrapper.dataset.type === tab.dataset.type) {
      wrapper.classList.remove('order__field-wrapper--hide');
    } else {
      wrapper.classList.add('order__field-wrapper--hide');
    }
  });
}));

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  orderForm.reset();
});
