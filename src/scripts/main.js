'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const burgerButtonHeader = document.querySelector('.header__burger');
  const crossButtonMenu = document.querySelectorAll('.menu__cross');
  const body = document.querySelector('.body');
  const header = document.querySelector('.header');
  const menuHeader = document.querySelector('.header__menu');
  const menuItemHasSub = document.querySelectorAll('.menu__link--has-sub');
  const menuItemSubArrow = document.querySelectorAll('.arrow-back');
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

  // Slider
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper2', {
    pagination: {
      el: '.swiper-pagination2',
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

  // Contact form
  const contactForm = document.querySelector('.contact__form');
  const contactInputs = document.querySelectorAll('[data-form="input"]');

  function formInputValidate(formInput) {
    let emptyInputs = 0;

    for (let i = 0; i < formInput.length; i++) {
      if (formInput[i].value.length === 0) {
        formInput[i].classList.add('no-valid');
        emptyInputs++;
      }

      if (formInput[i].value.length > 0
         && formInput[i].classList.contains('no-valid')) {
        formInput[i].classList.remove('no-valid');
      }
    }

    if (emptyInputs > 0) {
      return false;
    } else {
      return true;
    }
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formInputValidate(contactInputs)) {
      contactForm.reset();
    }
  });

  // Contact form - text Area adjust height
  const messageContactForm = document.querySelector('#contact-message');

  messageContactForm.addEventListener('input', changeHeightTextArea, false);

  function changeHeightTextArea() {
    messageContactForm.style.height = 'auto';
    messageContactForm.style.height = (messageContactForm.scrollHeight) + 'px';
  }

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
  }

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
    const targetTab = tabsCarouselItem[n];

    tabsCarousel.style.transform
      = `translateX(-${(n) * targetTab.offsetWidth}px)`;
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
        const openedModalBuy = tabsButtonsNext[i].closest('.modal');

        closeModalWindow(openedModalBuy);
        offsetCarousel(0);
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

  // Dropdown options
  const dropdownOptions = document.querySelectorAll('.dropdown__option');
  const dropdownIconOpen = document.querySelectorAll('.dropdown__input-icon');

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

  dropdownIconOpen.forEach(icon => {
    icon.addEventListener('click', e => {
      const parentDropdown = e.target.closest('.dropdown');

      openCloseDropdown(parentDropdown);
    });
  });

  dropdownOptions.forEach(option => {
    option.addEventListener('click', e => {
      const selectedValue = e.target.textContent.trim();
      const selectedValueRelatedInput
        = e.target.closest('.dropdown').querySelector('.dropdown__input');

      pasteSelectedValue(selectedValueRelatedInput, selectedValue);
    });
  });

  // Paste initial values into dropdowns

  function initialValuesInDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdawn => {
      const dropdownInput = dropdawn.querySelector('.dropdown__input');
      const dropdownInitialValue
        = dropdawn.querySelector('.dropdown__option').textContent.trim();

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

  const basePrice = 800;

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

  // Listening clicks on body

  body.addEventListener('keyup', e => {
    if (e.keyCode === 27) {
      if (window.location.hash) {
        window.location.hash = '';
      };
    }
  });
});
