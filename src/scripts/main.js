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
const menuNavLinks = menu.querySelectorAll('.menu__link[href^="#"]');
const menuLanguages = document.querySelector('.menu--languages');
const menuLanguagesOpener = document.querySelector('.menu__languages-opener');
const menuLanguagesBack = menuLanguages.querySelector('.icon--back');
const menuLanguagesItems = menuLanguages.querySelectorAll('.menu__link');
const faq = document.querySelector('.faq');
const headerFaqOpener = document.querySelector('.header__link--faq');
const menuFaqOpener = document.querySelector('.menu__link--faq');
const helpFaqOpener = document.querySelector('.help__link--faq');
const helpContactUs = document.querySelector('.help__link[href="#contact"]');
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
const orderForm = document.querySelector('.order__form');
const orderFieldsWrappers = orderForm.querySelectorAll('.field-wrapper');
const orderComplete = document.querySelector('.order__complete');
const competeButton = orderComplete.querySelector('.button');
const formFields = document.querySelectorAll('.field-wrapper__field');
const techButtons = document.querySelectorAll('.tech__button');
const techInfos = document.querySelectorAll('.tech__info');
const contactForm = document.querySelector('.contact__form');
const contactFieldsWrappers = contactForm.querySelectorAll('.field-wrapper');

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

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--with-menu');
};

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

const closeHelp = () => {
  help.classList.remove('help--open');

  if (!menu.classList.contains('menu--open')) {
    document.body.classList.remove('page__body--with-menu');
  }
};

const closeOrder = () => {
  order.classList.add('order--hide');
  document.body.classList.remove('page__body--with-menu');
  orderForm.reset();

  orderTabs.forEach((item, index) => {
    if (index === 0) {
      item.classList.add('order__tab--active');
    } else {
      item.classList.remove('order__tab--active');
    }
  });

  orderFieldsWrappers.forEach(wrapper => {
    const label = wrapper.querySelector('.field-wrapper__label');
    const field = wrapper.querySelector('.field-wrapper__field');

    if (field) {
      field.classList.remove(
        'field-wrapper__field--focused',
        'field-wrapper__field--invalid'
      );
    }

    if (label) {
      label.classList.remove(
        'field-wrapper__label--focused-field',
        'field-wrapper__label--invalid'
      );
    }

    if (wrapper.dataset.type === 'place') {
      wrapper.classList.remove('field-wrapper--hide');
    } else {
      wrapper.classList.add('field-wrapper--hide');
    }
  });

  orderComplete.classList.remove('order__complete--show');
  orderForm.classList.remove('order__form--hide');
};

const clearFields = (wrappers) => {
  wrappers.forEach(wrapper => {
    const label = wrapper.querySelector('.field-wrapper__label');
    const fields = wrapper.querySelectorAll('.field-wrapper__field');

    for (const field of fields) {
      field.classList.remove(
        'field-wrapper__field--focused',
        'field-wrapper__field--invalid'
      );
    }

    if (label) {
      label.classList.remove(
        'field-wrapper__label--focused-field',
        'field-wrapper__label--invalid'
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

menuCross.addEventListener('click', closeMenu);

menuNavLinks.forEach(item => {
  item.addEventListener('click', closeMenu);
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
helpCross.addEventListener('click', closeHelp);

helpContactUs.addEventListener('click', () => {
  closeHelp();
  closeMenu();
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

formFields.forEach(item => {
  const label = item.parentNode.querySelector('.field-wrapper__label');

  item.addEventListener('focus', () => {
    if (!item.classList.contains('field-wrapper__field--invalid')) {
      item.classList.add('field-wrapper__field--focused');
    }

    if (label) {
      label.classList.add('field-wrapper__label--focused-field');
    }
  });

  item.addEventListener('blur', () => {
    if (!item.checkValidity() || (item.dataset.required && item.value === '')) {
      item.classList.add('field-wrapper__field--invalid');

      if (label) {
        label.classList.add('field-wrapper__label--invalid');
      }
    } else {
      item.classList.remove('field-wrapper__field--invalid');

      if (label) {
        label.classList.remove('field-wrapper__label--invalid');

        if (item.value === '') {
          label.classList.remove('field-wrapper__label--focused-field');
          item.classList.remove('field-wrapper__field--focused');
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
      wrapper.classList.remove('field-wrapper--hide');
    } else {
      wrapper.classList.add('field-wrapper--hide');
    }
  });
}));

orderForm.addEventListener('submit', (e) => {
  let flag = 0;

  e.preventDefault();

  for (const wrapper of orderFieldsWrappers) {
    const label = wrapper.querySelector('.field-wrapper__label');
    const fields = wrapper.querySelectorAll('.field-wrapper__field');
    const listOpener = wrapper.querySelector('.order__drop-down-list-opener');

    for (const field of fields) {
      if (field.dataset.required && field.value === '') {
        field.classList.add('field-wrapper__field--focused');

        if (label) {
          label.classList.add('field-wrapper__label--focused-field');
        }

        field.focus();

        flag = 1;

        break;
      }
    }

    if (listOpener) {
      if (listOpener.dataset.required && listOpener.value === '') {
        listOpener.focus();
        flag = 1;
      }
    }

    if (flag) {
      break;
    }
  };

  if (flag) {
    return;
  }

  orderForm.reset();
  orderForm.classList.add('order__form--hide');
  orderComplete.classList.add('order__complete--show');

  orderTabs.forEach(tab => {
    if (tab.dataset.type === 'complete') {
      tab.classList.add('order__tab--active');
    } else {
      tab.classList.remove('order__tab--active');
    }
  });

  clearFields(orderFieldsWrappers);
});

techButtons.forEach(button => {
  button.addEventListener('click', () => {
    techInfos.forEach(info => {
      if (button.dataset.block === info.dataset.type) {
        info.classList.add('tech__info--show');
      } else {
        info.classList.remove('tech__info--show');
      }
    });
  });
});

techInfos.forEach(info => {
  const cross = info.querySelector('.icon--cross');

  cross.addEventListener('click', () => {
    info.classList.remove('tech__info--show');
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.reset();
  clearFields(contactFieldsWrappers);
});
