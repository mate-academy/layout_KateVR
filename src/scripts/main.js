'use strict';

import {
  query,
  queryID,
  queryAll,
  resizingWindow,
  changePositionItem,
  changePositionElement,
  classTracking,
  clickClass,
  clickGroup,
  classTrackingAll,
  breakpoint,
  clickNewClass,
  changePositionTeg,
  showString,
  copyElement,
  displayCurrent,
  hideElement,
  classHtml,
  resetAction
} from './utils.js';

import {
  eventProcessing,
  movingDots,
  openWindow,
  clickToggleClass,
  clickToggleAll,
  disableClick,
  disableClickAll,
} from './buttons.js';

import { navigation_1, navigation_2, navigation_3 } from './slider.js';
import { benefits, experience } from './array_of_data.js';
import { templateHtml } from './templates.js';

import {
  FORM__ERROR_TEXT,
  FORM_FILLING_ERROR_TEXT,
  MESSAGE_EMAIL,
  MESSAGE_PHONE,
  MESSAGE_TEXT,
  onlyLetters,
  onlyNumbers,
  validateInput,
  validField,
  validForm,
  validCreditCard,
  validateInputAnother,
  validSelection
} from './validator.js';

import {
  cardExpiry,
  cardNumberCVVfield,
  cardNumberEntryFields,
  focusInputField,
  paymentSystem
} from './credit-card.js';

import { citySelect, countrySelect } from './drop-down_lists.js';

// import pictures
  import imgText from '../icon/about_us.svg';

  import favicon_1 from '../icon/favicons/favicon1.svg';
  import favicon_2 from '../icon/favicons/favicon2.svg';
  import favicon_3 from '../icon/favicons/favicon3.svg';

// #region animate favicon

  const favicons = [favicon_1, favicon_2, favicon_3];
  let currentIndex = 0;

  function animateFavicon() {
    const favicon = queryID('animate-favicon');
    favicon.href = favicons[currentIndex];
    currentIndex = (currentIndex + 1) % favicons.length;
  };

  setInterval(animateFavicon, 1000);
// #endregion

// #region window "language"
  openWindow('.link-language', 'add', '--active', '.language-page');

  openWindow('.language-page__icon', 'add', '--close', '.language-page');
  openWindow('.language-page__icon', 'remove', '--active', '.language-page');
  classTracking('.language-page__icon','remove', '--close');


  disableClickAll('.language-page__item', '.button');
  clickGroup('.language-page__item', 'remove', '--active', '.language-page');
  clickGroup('.language-page__item', 'remove', '__lock', '.body');
  classTrackingAll('.language-page__item', 'remove', '--close', '.language-page');

  window.addEventListener('DOMContentLoaded', () => {
    clickGroup('.language-page__item', 'remove', '--active', '.language-page__list');
    clickGroup('.language-page__item', 'remove', '--blurred-screen', '.header__container');

    (window.innerWidth < breakpoint('--desktop'))
      ? clickGroup('.language-page__item', 'add', '--close', '.language-page')
      : clickGroup('.language-page__item', 'remove', '--close', '.language-page');
  });

  window.addEventListener('resize', () => {

    (window.innerWidth < breakpoint('--desktop'))
      ? clickGroup('.language-page__item', 'add', '--close', '.language-page')
      : clickGroup('.language-page__item', 'remove', '--close', '.language-page');
  });

  clickClass('.language-page__button', '.body', 'toggle', '__lock');
  clickClass('.language-page__button', '.body-wrapper', 'toggle', '--blurred-screen');
  clickClass('.language-page__button', '.language-page__icon-arrow', 'toggle', '--active');
  clickToggleClass('.language-page__button', '.language-page__list');
  disableClick('.language-page__button', '.button');

  clickGroup('.language-page__item', 'remove', '--active', '.language-page__icon-arrow');
  clickGroup('.language-page__item', 'remove', '--active', '.language-page__list');
  clickGroup('.language-page__item', 'remove', '--blurred-screen', '.body-wrapper');

  displayCurrent('.language-page__list', '.language-page__current-language');
// #endregion

// #region window "FAQ"
  openWindow('.link-faq', 'add', '--active', '.faq-page');
  disableClick('.link-faq', '.button');
  clickClass('.link-faq', '.body-wrapper', 'add', '--blurred-screen');

  query('.faq-page__link').innerHTML = query('.header__bottom__link').innerHTML;
  clickToggleAll('.faq-page__block');

  disableClick('.faq-page__icon', '.button');
  openWindow('.faq-page__icon', 'remove', '--active', '.faq-page');
  openWindow('.faq-page__icon', 'remove', '--active', '.help-page');
  openWindow('.faq-page__icon', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');
  clickClass('.faq-page__icon', '.body-wrapper', 'remove', '--blurred-screen');

  disableClick('.faq-page__link', '.button');
  openWindow('.faq-page__link', 'remove', '--active', '.faq-page');
  openWindow('.faq-page__link', 'remove', '--active', '.help-page');
  openWindow('.faq-page__link', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');
  clickClass('.faq-page__link', '.body-wrapper', 'remove', '--blurred-screen');
// #endregion

// #region window "help"
  openWindow('.link-help', 'add', '--active', '.help-page');
  clickClass('.link-help', '.body-wrapper', 'add', '--blurred-screen');
  disableClick('.link-help', '.button');
  openWindow('.help-page__text--link-faq', 'add', '--active', '.faq-page');

  disableClick('.help-page__icon', '.button');
  openWindow('.help-page__icon', 'remove', '--active', '.help-page');
  clickClass('.help-page__icon', '.body-wrapper', 'remove', '--blurred-screen');
  openWindow('.help-page__icon', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');

  disableClick('.help-page__text--link-contact', '.button');
  openWindow('.help-page__text--link-contact', 'remove', '--active', '.help-page');
  clickClass('.help-page__text--link-contact', '.body-wrapper', 'remove', '--blurred-screen');
  openWindow('.help-page__text--link-contact', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');
// #endregion

// #region section "top-bar"

  // animate logo
    document.addEventListener('DOMContentLoaded', () => {
      const letters = queryAll('.top-bar__logo--letter');

      letters.forEach((letter, index) => {
        letter.style.setProperty('--index', index);
      });
    });
// #endregion

// #region section "menu"

  // icon open menu
    openWindow('.top-bar__menu', 'add', '--active', '.top-bar__menu', '.drop-down-menu');
    openWindow('.drop-down-menu__icon', 'remove', '--active', '.top-bar__menu', '.drop-down-menu');

    // menu list
    window.addEventListener('DOMContentLoaded', () => {
      changePositionItem('--desktop', '.menu', 'appendChild', '.top-bar__container', '.drop-down-menu');

      changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
      changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
    });

    window.addEventListener('resize', () => {
      changePositionItem('--desktop', '.menu', 'appendChild', '.top-bar__container', '.drop-down-menu');

      changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
      changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
    });

    clickGroup('.menu__link', 'remove', '__lock', '.body');
    clickGroup('.menu__link', 'remove', '--active', '.drop-down-menu');
    clickGroup('.menu__link', 'remove', '--active', '.top-bar__menu');
// #endregion

// #region section "purchase-payment"

// duplicatin logo
  const clLogo = query('.top-bar__box-logo').cloneNode(true);
  const box = query('.purchase-payment__top');
  box.prepend(clLogo);

  clLogo.classList.add('purchase-payment__box-logo');

  // event at the top of the window
    clickClass('.purchase-payment__icon', '.purchase-payment', 'remove', '--active');
    clickClass('.purchase-payment__icon', '.body', 'remove', '__lock');

    query('.purchase-payment__icon').addEventListener('click', function() {
      resetAction('span');
      resetAction('input');
      resetAction('select');
    });

    clickClass('.purchase-payment__box-logo', '.purchase-payment', 'remove', '--active');
    clickClass('.purchase-payment__box-logo', '.body', 'remove', '__lock');

    query('.purchase-payment__box-logo').addEventListener('click', function() {
      resetAction('input');
      resetAction('span');
    });

  // the area of the number of services
    clickClass('.purchase-payment__quantity-window', '.purchase-payment__icon-arrow', 'toggle', '--active');
    clickClass('.purchase-payment__quantity-window', '.purchase-payment__quantity-window', 'toggle', '--active');
    clickClass('.purchase-payment__quantity-window', '.purchase-payment__selection-list', 'toggle', '--active');

  // display the numter of services
    window.addEventListener('DOMContentLoaded', function() {

      if(query('.purchase-payment__quantity').dataset.value > 0) {

        query('.purchase-payment__price').textContent = '1200$';
        query('.purchase-payment__quantity').textContent = '1';
      }
    });

  // the drop-down list the numbers of services
    clickGroup('.purchase-payment__option', 'remove', '--active', '.purchase-payment__icon-arrow');
    clickGroup('.purchase-payment__option', 'remove', '--active', '.purchase-payment__quantity-window');
    clickGroup('.purchase-payment__option', 'remove', '--active', '.purchase-payment__selection-list');

    hideElement('quantity-window', '.purchase-payment__quantity', '.purchase-payment__option');

  // calculation area and price display
    displayCurrent('.purchase-payment__selection', '.purchase-payment__quantity',
      '.purchase-payment__price', '*', '1200');

  // slider at the top of the section "purchase-payment__form"
    query('input[id="switch-pay_1"]').addEventListener('click', function() {

      queryAll('input[name="switch-pay"]').forEach(radio => {
        radio.nextElementSibling.classList.remove('purchase-payment__label--active');

        if(radio.checked) {
          radio.checked = true;
        }
      });

      query('.purchase-payment__form').style.transform = 'translateX(0%)';
    });

    query('input[id="switch-pay_2"]').addEventListener('click', function() {

      queryAll('input[name="switch-pay"]').forEach(radio => {
        radio.nextElementSibling.classList.remove('purchase-payment__label--active');

        if(radio.checked) {
          radio.checked = true;
        }
      });

      query('.purchase-payment__form').style.transform = 'translateX(-100%)';
    });

  // button event ".purchase-payment__user-data--btn"
    query('.purchase-payment__user-data--btn').addEventListener('click', function() {

      queryAll('input[name="switch-pay"]').forEach(radio => {
        radio.nextElementSibling.classList.remove('purchase-payment__label--active');

        if(radio.checked) {
          radio.checked = false;
        }
      });

      query('input[id="switch-pay_2"]').nextElementSibling.classList.add('purchase-payment__label--active');
      query('.purchase-payment__form').style.transform = 'translateX(-100%)';
    });

  // button event ".purchase-payment__credit-card--btn"
    query('.purchase-payment__credit-card--btn').addEventListener('click', function() {

      const elements = queryAll('.purchase-payment-input');
      let dataValue = [];

        elements.forEach(elem => {
          dataValue += elem.dataset.role;
        });

      let totalSum = dataValue.split('').map(Number).reduce((acc, num) => acc + num, 0);

      if(totalSum >= 1) {
        validForm('.purchase-payment-input');
        return;
      } else {

        queryAll('input[name="switch-pay"]').forEach(radio => {
          radio.nextElementSibling.classList.remove('purchase-payment__label--active');

          if(radio.checked) {
            radio.checked = false;
          }
        });

        query('input[id="switch-pay_1"]').nextElementSibling.style.pointerEvents = 'none';
        query('input[id="switch-pay_2"]').nextElementSibling.style.pointerEvents = 'none';
        query('input[id="switch-pay_3"]').nextElementSibling.classList.add('purchase-payment__label--active');

        classHtml('.purchase-payment__content', 'add', '--active');
        query('.purchase-payment__form').style.transform = 'translateX(-200%)';
      };
    });

  // button event ".purchase-payment__complete--btn"
    query('.purchase-payment__complete--btn').addEventListener('click', function() {

      queryAll('input[name="switch-pay"]').forEach(radio => {
        radio.nextElementSibling.classList.remove('purchase-payment__label--active');

        if(radio.checked) {
          radio.checked = false;
        }
      });

      query('input[id="switch-pay_1"]').nextElementSibling.style.pointerEvents = 'all';
      query('input[id="switch-pay_2"]').nextElementSibling.style.pointerEvents = 'all';

      query('input[id="switch-pay_1"]').checked = true;
      query('.purchase-payment__form').style.transform = 'translateX(0%)';

      classHtml('.body', 'remove', '__lock');
      classHtml('.purchase-payment', 'remove', '--active');
      classHtml('.purchase-payment__content', 'remove', '--active');

      resetAction('span');
      resetAction('input');
      resetAction('select');
    });

  // #region validation of forms

    // section "purchase-payment__user-data"
      onlyLetters('input[name="first-name"]');
      validateInput('first-name');
      validField('first-name', 'isName', MESSAGE_TEXT);

      onlyLetters('input[name="last-name"]');
      validateInput('last-name');
      validField('last-name', 'isName', MESSAGE_TEXT);

      validateInput('e-email');
      validField('e-email', 'isEmail', MESSAGE_EMAIL);

      onlyNumbers('input[name="phone-number"]');
      validateInput('phone-number');
      validField('phone-number', 'isPhone', MESSAGE_PHONE);

      validSelection('country');
      clickClass('select[name="country"]', '.purchase-payment__user-data--country-icon', 'toggle', '--active');
      countrySelect('countrySelect');

      validSelection('city');
      clickClass('select[name="city"]', '.purchase-payment__user-data--city-icon', 'toggle', '--active');
      queryID('countrySelect').addEventListener('change', citySelect);

      validateInput('adress-1');
      validField('adress-1', 'isName', MESSAGE_TEXT);

    // "purchase-payment__credit-card"
      focusInputField('input[name="number-card-field-4"]', '4', 'input[name="holder-name"]');
      focusInputField('input[name="card-data"]', '5', 'input[name="card-cvv"]');

      cardNumberEntryFields('.credit-card-number');
      paymentSystem('input[name="number-card-field-1"]');

      validCreditCard('number-card-field-1', '4');
      validCreditCard('number-card-field-2', '4');
      validCreditCard('number-card-field-3', '4');
      validCreditCard('number-card-field-4', '4');


      validField('holder-name', 'isName', MESSAGE_TEXT);
      onlyLetters('input[name="holder-name"]');

      cardExpiry('input[name="card-data"]');
      validCreditCard('card-data', '5');

      cardNumberCVVfield('input[name="card-cvv"]');
      validCreditCard('card-cvv', '3');
  // #endregion
// #endregion

// #region section "header"

  // button "play-video"
    movingDots('.header__link-video--lines', 'dots', 'top');
    movingDots('.header__link-video--lines', 'dots', 'bottom');
    disableClick('.header__link-video--lines', '.button');

    eventProcessing('.header__link-video', 'add', '--active', 'https://www.youtube.com/embed/SvTbB19bvIw?si=C6jgLg3OL_VWxo8Y');
    eventProcessing('.video-link--icon-close', 'remove', '--active');

    disableClick('.video-link--icon-close', '.button');
    resizingWindow('.video-link', '.video-link--resizer');

  // button "Buy Now"
    clickClass('.top-bar__btn', '.purchase-payment', 'add', '--active');
    clickClass('.top-bar__btn', '.body', 'add', '__lock');

    window.addEventListener('scroll', function() {

      if(window.innerWidth >=breakpoint('--desktop')) {
        return;
      };

      const headerHeight = query('.header').getBoundingClientRect();
      const footerHeight = query('.footer').getBoundingClientRect();

        if (headerHeight.top < 0 && footerHeight.top > 600) {

          query('.top-bar__btn').style.opacity = '1';
          query('.top-bar__btn').classList.add('top-bar__btn--active');

        } else {
          query('.top-bar__btn').style.opacity = '0';

          setTimeout(() => {
            query('.top-bar__btn').classList.remove('top-bar__btn--active');
          }, 300);
        };
    });
// #endregion

// #region section "experience"

  // add a template to a document
    query('.experience__content').innerHTML = experience.map(templateHtml).join('');
//#endregion

// #region section "about product"
    window.addEventListener('DOMContentLoaded', () => {
      changePositionItem('--tablet', '.about-product__title', 'prepend', '.about-product__article-1', '.about-product__container');
    });

    window.addEventListener('resize', () => {
      changePositionItem('--tablet', '.about-product__title', 'prepend', '.about-product__article-1', '.about-product__container');
    });

  // animation text in the "about-product__text-images"
    copyElement('.about-product__text-images', imgText, '5');

  // duplication button "link-video"
    const clone = query('.header__link-video').cloneNode(true);
    query('.about-product__link-video').appendChild(clone);
    eventProcessing('.about-product__link-video', 'add', '--active', 'https://www.youtube.com/embed/SvTbB19bvIw?si=C6jgLg3OL_VWxo8Y');

  // slider buttons

    // slider in the section "header"
      navigation_1('input[name="next"]', 'forward', '.header__images--image');
      navigation_1('input[name="previous"]', 'back', '.header__images--image');

    // slider in the section "about product"
      navigation_2('input[id="slide-1"]', '.about-product__sliders', '0');
      navigation_2('input[id="slide-2"]', '.about-product__sliders', '-100');
      navigation_2('input[id="slide-3"]', '.about-product__sliders', '-200');
      navigation_2('input[id="slide-4"]', '.about-product__sliders', '-300');
      navigation_2('input[id="slide-5"]', '.about-product__sliders', '-400');


    // duplication nagivation
      const cloneNavigation = query('.header__sliders').cloneNode(true);
      const container = query('.about-product__clone-navigation');

      container.appendChild(cloneNavigation);

      navigation_3(cloneNavigation, 'input[name="next"]', 'forward', '.about-product__sliders');
      navigation_3(cloneNavigation, 'input[name="previous"]', 'back', '.about-product__sliders');
// #endregion

// #region section "tech-specs"
  clickToggleAll('.tech-specs__icon');

  clickNewClass('.tech-specs__icon-1', '.tech-specs__article-1', 'toggle', 'tech-specs__article--active');
  clickNewClass('.tech-specs__icon-2', '.tech-specs__article-2', 'toggle', 'tech-specs__article--active');
  clickNewClass('.tech-specs__icon-3', '.tech-specs__article-3', 'toggle', 'tech-specs__article--active');

  clickNewClass('.tech-specs__article-1', '.tech-specs__icon-1', 'remove', 'tech-specs__icon--active');
  clickNewClass('.tech-specs__article-2', '.tech-specs__icon-2', 'remove', 'tech-specs__icon--active');
  clickNewClass('.tech-specs__article-3', '.tech-specs__icon-3', 'remove', 'tech-specs__icon--active');

  clickNewClass('.tech-specs__article-1', '.tech-specs__article-1', 'remove', 'tech-specs__article--active');
  clickNewClass('.tech-specs__article-2', '.tech-specs__article-2', 'remove', 'tech-specs__article--active');
  clickNewClass('.tech-specs__article-3', '.tech-specs__article-3', 'remove', 'tech-specs__article--active');

    // #region canvas for lines

      function updatePath() {
        const canvasWidth = query('.tech-specs__canvas-for-line').clientWidth;

        // line 1
        queryID('line-1').setAttribute('width', canvasWidth / 2);
        queryID('line-1').setAttribute('viewBox', `0 0 ${canvasWidth / 2} 42`);
        queryID('path-1_1').setAttribute('d', `M117.5 3H${(canvasWidth / 2) - 2} V40`);

        // line 2
        queryID('line-2').setAttribute('width', canvasWidth / 2);
        queryID('line-2').setAttribute('viewBox', `0 0 ${canvasWidth / 2} 163`);
        queryID('path-2_1').setAttribute('d', `M220.5 160.5H270V3.5H${canvasWidth / 3}`);
        queryID('path-2_2').setAttribute('cx', canvasWidth / 3);

        // line 3
        queryID('path-3_1').setAttribute('d', `M${(canvasWidth / 2) + (canvasWidth / 5)} 5.5V242H${canvasWidth / 2}`);
        queryID('path-3_2').setAttribute('cx', ((canvasWidth / 2) + (canvasWidth / 5)));
        queryID('path-3_3').setAttribute('cx', canvasWidth / 2);
      }

      window.addEventListener('DOMContentLoaded', updatePath);
      window.addEventListener('resize', updatePath);
    // #endregion

// #endregion

// #region section "benefits"

  // add a template to a document
    query('.benefits__content').innerHTML = benefits.map(templateHtml).join('');
// #endregion

//  #region section "contact"
  window.addEventListener('DOMContentLoaded', () => {
    changePositionTeg(
      '--tablet',
      '.contact__text-info', 'prepend',
      '.contact__top--wrapper-addittion-info',
      'appendChild',
      '.contact__bottom'
    );
  });

  window.addEventListener('resize', () => {
    changePositionTeg(
      '--tablet',
      '.contact__text-info',
      'prepend', '.contact__top--wrapper-addittion-info',
      'appendChild',
      '.contact__bottom'
    );
  });

  // #region form validation
    onlyLetters('input[name="username"]');
    validateInput('username');
    validateInputAnother('username', 'contact-form');
    validField('username', 'isName', MESSAGE_TEXT);

    validateInput('email');
    validateInputAnother('email', 'contact-form');
    validField('email', 'isEmail', MESSAGE_EMAIL);

    onlyNumbers('input[name="phone"]');
    validateInput('phone');
    validateInputAnother('phone', 'contact-form');
    validField('phone', 'isPhone', MESSAGE_PHONE);

    //  button event ".contact__form--btn"
      queryID('btn-form').addEventListener('click', function() {
        const elements = queryAll('.contact-form-input');
        const spanForm = query('span[data-value="error-contact-form"]');

        let dataValue = [];

          elements.forEach(elem => {
            dataValue += elem.dataset.role;
          });

        let totalSum = dataValue.split('').map(Number).reduce((acc, num) => acc + num, 0);

        if(totalSum === 3) {
          spanForm.textContent = FORM__ERROR_TEXT;
          spanForm.style.transform = 'scale(1)';

          query('.contact__form--username').style.color = '#05c2df';
          query('.contact__form--email').style.color = '#05c2df';
          query('.contact__form--phone').style.color = '#05c2df';

          return;

        } else if(totalSum >= 1) {
          spanForm.textContent = FORM_FILLING_ERROR_TEXT;
          spanForm.style.transform = 'scale(1)';

          return;
        };

        const formTemplate = `
                                Please confirm your details:
                                  Username: ${query('input[name="username"]').value}
                                  Email: ${query('input[name="email"]').value}
                                  Phone: ${query('input[name="phone"]').value}
                                  ${showString('Message:', query('textarea[name="message"]').value)} ${query('textarea[name="message"]').value}
                              `;

        const isConfirmed = confirm(formTemplate);
        (isConfirmed) ? alert('Form submitted successfully!') : alert('Form was not submitted.');

        query('.contact__form').reset();
        resetAction('input');
      });
  //#endregion

// #endregion

// #region "footer"

  // duplication items
    const cloneLogo = query('.top-bar__box-logo').cloneNode(true);
    const cloneMenu = query('.menu__list').cloneNode(true);
    const listMenu = cloneMenu.querySelectorAll('Li');
    const itemMenu = cloneMenu.querySelectorAll('Li > A');
    const cloneContact = query('.contact__contacts').cloneNode(true);

    const container1 = query('.footer__top');
    const container2 = query('.footer__content');
    const container3 = query('.footer__contact');

    container1.appendChild(cloneLogo);
    container2.appendChild(cloneMenu);
    container3.appendChild(cloneContact);

    cloneMenu.classList.add('footer__menu-list');

    listMenu.forEach(item => {
      item.classList.add('footer__menu-item');
    });

    itemMenu.forEach(link => {
      link.classList.add('footer__menu-link');
    });
// #endregion
