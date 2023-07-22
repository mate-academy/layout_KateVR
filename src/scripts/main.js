'use strict';

const fetch = require('node-fetch');

require('regenerator-runtime/runtime');

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.body');
  let widthScreen = window.innerWidth;
  let bodyWidth = body.offsetWidth;
  let currentScroll = window.scrollY;
  let documentHeight = document.body.scrollHeight;
  let totalScroll = window.scrollY + window.innerHeight;
  const paddingLock = (widthScreen - bodyWidth) + 'px';
  let locked = false;

  window.addEventListener('resize', () => {
    widthScreen = window.innerWidth;
    bodyWidth = body.offsetWidth;
    showBuyButton(widthScreen, currentScroll, totalScroll, documentHeight);

    if (widthScreen > 1023) {
      heroSliderInit();
    }

    sliderBreakpointChecker(widthScreen, swiperHeroText);
    sliderBreakpointChecker(widthScreen, swiperHeroImage);
  });

  window.addEventListener('scroll', () => {
    currentScroll = window.scrollY;
    documentHeight = document.body.scrollHeight;
    totalScroll = window.scrollY + window.innerHeight;
    showBuyButton(widthScreen, currentScroll, totalScroll, documentHeight);
  });

  function lockBody(lockBodyTrigger = false) {
    body.style.paddingRight = paddingLock;
    body.classList.add('lock');
  }

  function unlockBody(unlockBodyTrigger = true) {
    body.classList.remove('lock');
    body.style.paddingRight = '';
  }

  // Header menu

  const header = document.querySelector('.header');
  const burgerButtonHeader = document.querySelector('.header__burger');
  const crossButtonMenu = document.querySelectorAll('.menu__cross');
  const menuHeader = document.querySelector('.header__menu');
  const menuItemHasSub = document.querySelectorAll('.menu__link--has-sub');
  const menuItemSubArrow = document.querySelectorAll('.arrow-back');
  const menuItem = document.querySelectorAll('.menu__link');

  burgerButtonHeader.addEventListener('click', () => {
    locked = true;
    lockBody(locked);
    header.classList.add('active');
    menuHeader.classList.add('active');
  });

  crossButtonMenu.forEach(cross => {
    cross.addEventListener('click', () => {
      if (window.location.hash) {
        window.location.hash = '';
      }

      if (cross.closest('.active')) {
        locked = false;
        unlockBody(!locked);
        header.classList.remove('active');
        cross.closest('.active').classList.remove('active');
      }
    });
  });

  menuItem.forEach(item => {
    if (!item.classList.contains('menu__link--has-sub')
      && !item.classList.contains('modal-link')) {
      item.addEventListener('click', (e) => {
        header.classList.remove('active');
        menuHeader.classList.remove('active');
        unlockBody(!locked);
      });
    }
  });

  menuItemHasSub.forEach(item => {
    item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('active');
    });
  });

  menuItemSubArrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
      arrow.closest('.active').classList.remove('active');
    });
  });

  //  Show fixed BUY button on mobiles and Tablet
  const floatingBuyButton = document.querySelector('.hero__button');

  function showBuyButton(windowWidth, currScroll, totScroll, docHeight) {
    if (windowWidth < 768 && totScroll + 220 < docHeight) {
      floatingBuyButton.classList.add('active');
    } else if (windowWidth >= 768
              && windowWidth < 1024 && totScroll + 50 < docHeight) {
      // eslint-disable-next-line max-len
      const buttonShowSectionOffsetTop = document.querySelector('#more').offsetTop;
      // eslint-disable-next-line max-len
      const buttonShowSectionOffsetHeight = document.querySelector('#more').offsetHeight;

      // eslint-disable-next-line max-len
      if (currScroll > (buttonShowSectionOffsetTop - buttonShowSectionOffsetHeight / 2)
      ) {
        floatingBuyButton.classList.add('active');
      } else {
        floatingBuyButton.classList.remove('active');
      }
    } else {
      floatingBuyButton.classList.remove('active');
    }
  };

  showBuyButton(widthScreen, currentScroll, totalScroll, documentHeight);

  // Slider Hero Section

  let swiperHeroText;
  let swiperHeroImage;

  function sliderBreakpointChecker(screenWidth, swiperBlock) {
    if (screenWidth < 1024 && swiperBlock !== undefined
        && !swiperBlock.destroyed) {
      const swiperContainer
        = document.querySelector(swiperBlock.originalParams.el);

      swiperContainer.querySelector('.swiper-wrapper').removeAttribute('style');
      swiperContainer.querySelector('.swiper-slide').removeAttribute('style');
      swiperBlock.destroy(true, true);
    }

    if (screenWidth > 1023 && swiperBlock !== undefined) {
      swiperBlock.init();
    }
  }

  function heroSliderInit() {
    const heroSection = document.querySelector('.hero');
    const swiperHeroImageNext
      = heroSection.querySelector('.swiper-button-next');
    const swiperHeroImagePrev
      = heroSection.querySelector('.swiper-button-prev');
    const swiperHeroPaginationBar
      = heroSection.querySelector('.swiper-pagination--progress-bar');

    // eslint-disable-next-line no-undef
    swiperHeroText = new Swiper('.swiper-hero-text', {
      effect: 'slide',
      autoHeight: true,
      direction: 'vertical',
      loop: false,
      allowTouchMove: false,
      // init: false,
    });

    // eslint-disable-next-line no-undef
    swiperHeroImage = new Swiper('.swiper-hero-image', {
      loop: false,
      watchSlidesProgress: true,
      parallax: true,
      lazy: {
        loadPrevNext: true,
      },
      navigation: {
        nextEl: swiperHeroImageNext,
        prevEl: swiperHeroImagePrev,
      },
      pagination: {
        el: swiperHeroPaginationBar,
        type: 'progressbar',
      },
      // init: false,
    });
    swiperHeroImage.controller.control = swiperHeroText;
  };

  heroSliderInit();
  sliderBreakpointChecker(widthScreen, swiperHeroText);
  sliderBreakpointChecker(widthScreen, swiperHeroImage);

  // Slider About

  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper-about', {
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1024: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination--progress-bar',
          type: 'progressbar',
        },
      },
    },
  });

  swiper.on('slideChange', () => {
    const currentSlideNumber = swiper.activeIndex + 1;

    showSlidesNumbers(currentSlideNumber);
  });

  function showSlidesNumbers(currentSlide = 1) {
    const totalSlides = document.querySelector('.swiper-counter__total');
    const currentSlides = document.querySelector('.swiper-counter__current');

    currentSlides.textContent = currentSlide;
    totalSlides.textContent = swiper.slides.length;
  }

  showSlidesNumbers();

  // Specs show
  const plusSpec = document.querySelectorAll('.spec__plus');
  let specOpened = false;

  plusSpec.forEach(plus => {
    plus.addEventListener('click', (e) => {
      const targetPlus = e.target;

      if (!specOpened) {
        openSpec(targetPlus);
      }

      if (specOpened) {
        if (targetPlus.classList.contains('active')) {
          closeSpec(targetPlus);
        } else {
          const activePlus = document.querySelector('.plus.active');

          closeSpec(activePlus);
          specOpened = !specOpened;
          openSpec(targetPlus);
        }
      }
      specOpened = !specOpened;
    });
  });

  function closeSpec(specButton) {
    specButton.classList.remove('active');
    specButton.parentElement.classList.remove('active');
  }

  function openSpec(specButton) {
    specButton.classList.add('active');
    specButton.parentElement.classList.add('active');
  }

  // Validation forms
  function validateWholeForm(form) {
    const inputFieldsRequired = form.querySelectorAll('[data-req="required"]');
    let incorrectInputs = 0;

    for (let i = 0; i < inputFieldsRequired.length; i++) {
      if (!validateFormRequiredInput(inputFieldsRequired[i])) {
        incorrectInputs++;
      }
    }

    if (incorrectInputs > 0) {
      return false;
    } else {
      return true;
    }
  }

  function validateFormRequiredInput(input) {
    if (input.value.length === 0 || !input.checkValidity()) {
      input.classList.add('no-valid');

      return false;
    }

    if (input.value.length > 0 && input.classList.contains('no-valid')) {
      input.classList.remove('no-valid');

      return true;
    }

    if (input.value.length > 0 && input.checkValidity()) {
      return true;
    }
  }

  function textAreaAdjustHeight(textArea) {
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + 'px';
  }

  // Contact Form
  const contactForm = document.querySelector('.contact__form');
  const messageContactForm = document.querySelector('#contact-message');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    if (validateWholeForm(contactForm)) {
      contactForm.reset();
    }
  });

  messageContactForm.addEventListener('input', e => {
    textAreaAdjustHeight(e.target);
  });

  // Purchase form

  const purchaseForm = document.getElementById('purchaseFrom');
  const purchaseFormTabs
    = purchaseForm.querySelectorAll('.purchase-form__carousel-item');

  function validatePurchaseFormTab(tab) {
    const tabRequiredInputs = tab.querySelectorAll('[data-req="required"]');
    let notValidInput = 0;

    tabRequiredInputs.forEach(input => {
      if (input.value.length === 0 || !input.checkValidity()) {
        notValidInput += 1;
      }
    });

    if (notValidInput === 0) {
      return true;
    }
  }

  purchaseFormTabs.forEach(tab => {
    const tabRequiredInputs = tab.querySelectorAll('[data-req="required"]');
    const tabButton = tab.querySelector('.purchase__button');

    tabRequiredInputs.forEach(input => {
      input.addEventListener('input', e => {
        if (validatePurchaseFormTab(tab)) {
          tabButton.disabled = false;
        } else {
          tabButton.disabled = true;
        };
      });
    });
  });

  purchaseForm.addEventListener('submit', e => {
    e.preventDefault();
  });

  // Credit card validation
  const creditCard = document.querySelector('.credit-card__number');
  const creditCardNumberInputs
    = document.querySelectorAll('[data-card="number"]');
  const creditCardCvv = document.getElementById('purchase-card-cvv');
  const creditCardDate = document.getElementById('purchase-card-date');
  const cardNumber = [];

  for (let i = 0; i < creditCardNumberInputs.length; i++) {
    creditCardNumberInputs[i].addEventListener('input', e => {
      const cardNumImage = creditCard.querySelector('.credit-card__logo');
      const currentNumber = e.target.value;

      if (currentNumber.length === 4) {
        cardNumber[i] = parseInt(currentNumber);

        if (i === 0) {
          if (currentNumber[0] === '2' || currentNumber[0] === '5') {
            cardNumImage.classList.add('master');
          }

          if (currentNumber[0] === '4') {
            cardNumImage.classList.add('visa');
          }
        }

        if (i < creditCardNumberInputs.length - 1) {
          e.target.nextElementSibling.focus();
        }

        if (i === creditCardNumberInputs.length - 1) {
          e.target.blur();
        }
      }
    });
  };

  creditCardCvv.addEventListener('input', e => {
    const currentCvv = e.target.value;

    if (currentCvv.length === 3) {
      e.target.blur();
    }
  });

  creditCardDate.addEventListener('input', e => {
    const currentDate = e.target.value;

    if (currentDate.length === 2) {
      e.target.value += '/';
    }

    if (currentDate.length === 5) {
      e.target.blur();
    }
  });

  // Scroll to Top Button

  const buttonToTop = document.querySelector('.button-up');

  buttonToTop.addEventListener('click', e => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // SVG icon fill
  const svgIcons = document.querySelectorAll('.svg-icon');

  svgIcons.forEach(icon => {
    // eslint-disable-next-line no-undef
    SVGInjector(icon);
  });

  // Modal windows (faq, help, etc)

  function openModalWindow(modal) {
    if (!locked) {
      lockBody(true);
    }
    modal.style.paddingRight = paddingLock;
    modal.classList.add('opened');

    modal.addEventListener('click', (e) => {
      if (!e.target.closest('.modal__wrapper')) {
        closeModalWindow(modal);
      }
    });
  };

  function closeModalWindow(modal) {
    if (modal.classList.contains('modal-video')) {
      frameVideo.setAttribute('src', '');
    }
    modal.style.paddingRight = '0px';
    modal.classList.remove('opened');

    if (!locked) {
      unlockBody(true);
    }
  };

  const openModalLinks = document.querySelectorAll('.modal-link');
  const openModalLinksVideo = document.querySelectorAll('.modal-link-video');
  const closeModalIcons = document.querySelectorAll('.modal__cross-close');
  const frameVideo = document.querySelector('#youtube');
  const videoYouTubeAutoPlay = '?autoplay=1';
  const videoYouTubeNoRelated = '&rel=0';
  const videoYouTubeShowInfo = '&showinfo=0';

  openModalLinks.forEach(openModalLink => {
    openModalLink.addEventListener('click', (e) => {
      const modalLink = openModalLink.getAttribute('href').replace('#', '');
      const targetModalWindow = document.getElementById(modalLink);

      openModalWindow(targetModalWindow);
      e.preventDefault();
    });
  });

  openModalLinksVideo.forEach(openModalLinkVideo => {
    openModalLinkVideo.addEventListener('click', (e) => {
      e.preventDefault();

      const linkVideo = openModalLinkVideo.getAttribute('href')
        + videoYouTubeAutoPlay + videoYouTubeNoRelated + videoYouTubeShowInfo;

      frameVideo.setAttribute('src', linkVideo);

      const targetModalWindowVideo = document.getElementById('modal-video');

      openModalWindow(targetModalWindowVideo);
    });
  });

  closeModalIcons.forEach(closeModalIcon => {
    closeModalIcon.addEventListener('click', (e) => {
      const currentOpenedModal = closeModalIcon.closest('.modal');

      closeModalWindow(currentOpenedModal);
    });
  });

  // Accordion
  const accordion = document.querySelector('.accordion');
  const accordionItem = document.querySelectorAll('.accordion__item');
  let accordionItemOpened = false;

  accordionItem.forEach(accordItem => {
    accordItem.addEventListener('click', (e) => {
      const currentItem = e.target.closest('.accordion__item');
      let activeItem = accordion.querySelector('.accordion__item.opened');

      if (activeItem !== currentItem && accordionItemOpened) {
        closeAccordion(activeItem);
        openAccordion(currentItem);
      }

      if (activeItem === currentItem) {
        closeAccordion(accordItem);
        activeItem = currentItem;
        accordionItemOpened = false;
      }

      if (!activeItem && !accordionItemOpened) {
        openAccordion(accordItem);
        accordionItemOpened = true;
      }
    });
  });

  function openAccordion(item) {
    const itemContent = item.querySelector('.accordion__item-content');

    item.classList.add('opened');
    itemContent.style.maxHeight = itemContent.scrollHeight + 'px';
  };

  function closeAccordion(item) {
    const itemContent = item.querySelector('.accordion__item-content');

    item.classList.remove('opened');
    itemContent.style.maxHeight = null;
  }

  // Tabs
  const tabsProgressItems = document.querySelectorAll('.tabs__progress-item');
  const tabsCarouselItem = document.querySelectorAll('.tabs__carousel-item');
  const tabsButtonsNext = document.querySelectorAll('.tabs__button-next');

  function offsetCarousel(n) {
    const tabsCarousel = document.querySelector('.tabs__carousel-inner');
    // eslint-disable-next-line no-unused-vars
    const targetTab = tabsCarouselItem[n];

    tabsCarousel.style.transform
      = `translateX(-${100 * n}%)`;
  }

  function showCurrentProgressPosition(n) {
    const targetProgressItem = tabsProgressItems[n];

    targetProgressItem.classList.add('active');
  }

  function hidePrevProgressPosition(n) {
    const targetProgressItem = tabsProgressItems[n];

    targetProgressItem.classList.remove('active');
  }

  for (let i = 0; i < tabsButtonsNext.length; i++) {
    tabsButtonsNext[i].addEventListener('click', (e) => {
      if (i === tabsButtonsNext.length - 1) {
        hidePrevProgressPosition(i);
        showCurrentProgressPosition(0);
        e.preventDefault();
      };

      if (i < tabsButtonsNext.length - 1) {
        hidePrevProgressPosition(i);
        offsetCarousel(i + 1);
        showCurrentProgressPosition(i + 1);
        e.preventDefault();
      };
    });
  }

  // Purchase Form Tabs

  const purchaseTabs = document.querySelector('.purchase__tabs');
  const staticPartToHide = purchaseTabs.querySelector('.tabs__static');
  const purchaseTabButtons
    = purchaseTabs.querySelectorAll('.tabs__button-next');
  const purchaseTabLastButton
    = purchaseTabButtons[purchaseTabButtons.length - 1];
  const purchaseTabPreLastButton
    = purchaseTabButtons[purchaseTabButtons.length - 2];
  const purchaseTabsCarousel
    = purchaseTabs.querySelector('.tabs__carousel');
  const aligmentBlockToHide
    = purchaseTabs.querySelector('.purchase__tabs-align');

  purchaseTabPreLastButton.addEventListener('click', (e) => {
    staticPartToHide.classList.add('hidden');
    aligmentBlockToHide.classList.add('hidden-card');
    purchaseTabsCarousel.classList.add('overflow');
  });

  purchaseTabLastButton.addEventListener('click', (e) => {
    const openedModalBuy = purchaseTabLastButton.closest('.modal');

    closeModalWindow(openedModalBuy);
    offsetCarousel(0);

    if (validateWholeForm(purchaseForm)) {
      purchaseForm.reset();
    };
    staticPartToHide.classList.remove('hidden');
    aligmentBlockToHide.classList.remove('hidden-card');
    purchaseTabsCarousel.classList.remove('overflow');
  });

  // Dropdown options

  function initializationDropDownIcons() {
    const dropdownIconOpen = document.querySelectorAll('.dropdown__input-icon');

    dropdownIconOpen.forEach(icon => {
      icon.addEventListener('click', e => {
        const parentDropdown = e.target.closest('.dropdown');

        openCloseDropdown(parentDropdown);
      });
    });
  };

  function initializationDropDownOptions() {
    const dropdownOptions = document.querySelectorAll('.dropdown__option');

    dropdownOptions.forEach(option => {
      option.addEventListener('click', e => {
        const selectedValue = e.target.textContent.trim();
        const selectedValueRelatedInput
          = e.target.closest('.dropdown').querySelector('.dropdown__input');

        pasteSelectedValue(selectedValueRelatedInput, selectedValue);
      });
    });
  }

  function openCloseDropdown(targetDropdown) {
    targetDropdown.classList.toggle('opened');
  };

  function pasteSelectedValue(targetInput, inputValue) {
    targetInput.value = inputValue;

    // fix first loading
    if (targetInput.closest('.dropdown.opened')) {
      openCloseDropdown(targetInput.closest('.dropdown'));
    }
  };

  initializationDropDownIcons();
  initializationDropDownOptions();

  // Paste initial values into dropdowns

  function initialValuesInDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const dropdownInput = dropdown.querySelector('.dropdown__input');
      let dropdownInitialValue = '';
      const dropdownFirstItem = dropdown.querySelector('.dropdown__option');

      if (dropdownFirstItem) {
        dropdownInitialValue = dropdownFirstItem.textContent.trim();
      }

      pasteSelectedValue(dropdownInput, dropdownInitialValue);
    });
  }

  initialValuesInDropdowns();

  // Calc item price in purchase menu
  const purchaseItemQty = document.getElementById('purchase-item-qty');
  const purchaseItemQtySelected
    = document.querySelectorAll('.purchase-item-selected');
  const puchaseTotalPrice
    = document.getElementById('purchase-item__info-price');

  const basePrice = 1200;

  purchaseItemQty.addEventListener('input', e => {
    if (!e.target.value) {
      pasteTotalPrice(0);
    } else {
      pasteTotalPrice(e.target.value);
    }
  });

  purchaseItemQtySelected.forEach(selected => {
    selected.addEventListener('click', e => {
      const selectedQty = e.target.textContent.trim();

      pasteTotalPrice(selectedQty);
      e.preventDefault();
    });
  });

  function pasteTotalPrice(qty) {
    puchaseTotalPrice.textContent = parseInt(qty) * basePrice;
  }

  // Inital base price in purchase card

  pasteTotalPrice(1);

  // Get country and towns list for purchase

  async function getAllCountries() {
    // eslint-disable-next-line max-len
    const url = 'https://gist.githubusercontent.com/bhatmand/507c38d37dff071c4f658863b919d2c3/raw/36bd83546b295de77338d93e778f548a86d53517/all-countries-cities-object.json';
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  getAllCountries().then((data) => {
    const countriesCitiesDB = {};

    for (const [key, value] of Object.entries(data)) {
      countriesCitiesDB[key] = value;
    }

    //  Find list for Cities and Countries
    const countriesListDB
      = document.querySelector('[data-purchase="countries"]');
    const citiesListDB = document.querySelector('[data-purchase="cities"]');

    // Adding list of cities to list
    for (const country in countriesCitiesDB) {
      countriesListDB.innerHTML
        += `<li class="dropdown__option">${country}</li>`;
    };

    // Updated list for dropdown
    initializationDropDownOptions();

    const countriesList
      = document.querySelectorAll('[data-purchase="countries"] li');

    countriesList.forEach(country => {
      country.addEventListener('click', e => {
        const selectedCountry = e.target.textContent;
        const relatedCities = countriesCitiesDB[selectedCountry];
        const citiesList = [];

        citiesListDB.innerHTML = '';

        relatedCities.forEach(city => {
          const cityToPaste = `<li class="dropdown__option">${city}</li>`;

          citiesList.push(cityToPaste);
        });

        citiesListDB.innerHTML = citiesList.join('');
        initializationDropDownOptions();
      });
    });
  });

  // Listening clicks on body

  body.addEventListener('keyup', e => {
    if (e.keyCode === 27) {
      if (window.location.hash) {
        window.location.hash = '';
      };
    }
  });
});

// Change language

(function() {
  const style = document.createElement('style');

  style.innerHTML = '.unselect-language{display: none;}';
  document.getElementsByTagName('head')[0].appendChild(style);

  function setLanguage(currentLanguage) {
    const notCurrentTagNames = document.querySelectorAll('[data-lang]');

    notCurrentTagNames.forEach(function(tag) {
      if (!tag.classList.contains('unselect-language')) {
        tag.classList.add('unselect-language');
      }
    });

    const currentTagNames
    = document.querySelectorAll(`[data-lang="${currentLanguage}"]`);

    currentTagNames.forEach(function(tag) {
      if (tag.classList.contains('unselect-language')) {
        tag.classList.remove('unselect-language');
      }
    });

    const selectLanguage = document.getElementById('change-language');

    selectLanguage.value = currentLanguage;
  }

  function changeLanguage() {
    const selectLanguage = document.getElementById('change-language');
    const selectLang
    = selectLanguage.options[selectLanguage.selectedIndex].value;

    setLanguage(selectLang);
  }

  function getLanguage() {
    const language = window.navigator.userLanguage || window.navigator.language;
    let lang = language.substr(0, 2).toLowerCase();
    const localLang = null;

    if (localLang !== null) {
      lang = localLang;
    }

    const isExist = document.querySelectorAll(`[data-lang="${lang}"]`);

    if (isExist.length === 0) {
      lang = 'en';
    }

    return lang;
  }

  document.getElementById('change-language')
    .addEventListener('change', function(e) {
      changeLanguage();
    });

  try {
    setLanguage(getLanguage());
  } catch (e) {}
})();
