'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let widthScreen = window.innerWidth;
  let currentScroll = window.scrollY;
  let documentHeight = document.body.scrollHeight;
  let totalScroll = window.scrollY + window.innerHeight;
  const burgerButtonHeader = document.querySelector('.header__burger');
  const crossButtonMenu = document.querySelectorAll('.menu__cross');
  const body = document.querySelector('.body');
  const menuHeader = document.querySelector('.header__menu');
  const menuItemHasSub = document.querySelectorAll('.menu__link--has-sub');
  const menuItemSubArrow = document.querySelectorAll('.arrow-back');

  window.addEventListener('resize', () => {
    widthScreen = window.innerWidth;
    showBuyButton(widthScreen, currentScroll, totalScroll, documentHeight);
  });

  window.addEventListener('scroll', () => {
    currentScroll = window.scrollY;
    documentHeight = document.body.scrollHeight;
    totalScroll = window.scrollY + window.innerHeight;
    showBuyButton(widthScreen, currentScroll, totalScroll, documentHeight);
  });

  // Header menu

  burgerButtonHeader.addEventListener('click', () => {
    body.classList.add('lock');
    menuHeader.classList.add('active');
  });

  crossButtonMenu.forEach(cross => {
    cross.addEventListener('click', () => {
      if (window.location.hash) {
        window.location.hash = '';
      }

      if (cross.closest('.active')) {
        body.classList.remove('lock');
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

  // Video modal
  const videoModal = document.querySelector('.video-modal');
  const videoButtonOpen = document.querySelectorAll('.open-video-modal');
  const frameYoutube = document.querySelector('#youtube');
  const videoButtonClose = document.querySelector('.video-modal-close');
  const videoYouTubeAutoPlay = '?autoplay=1';
  const videoYouTubeNoRelated = '&rel=0';
  const videoYouTubeShowInfo = '&showinfo=0';

  function closeModal() {
    body.classList.remove('lock');
    videoModal.classList.remove('active');
    frameYoutube.setAttribute('src', '');
  };

  function openModalVideo(src) {
    frameYoutube.setAttribute('src', src);
    videoModal.classList.add('active');
    body.classList.add('lock');
  }

  videoButtonOpen.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();

      const linkYoutube = button.getAttribute('href')
        + videoYouTubeAutoPlay + videoYouTubeNoRelated + videoYouTubeShowInfo;

      openModalVideo(linkYoutube);
    });
  });

  videoButtonClose.addEventListener('click', e => {
    e.preventDefault();
    closeModal();
  });

  // Listening clicks on body

  body.addEventListener('click', e => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  });

  body.addEventListener('keyup', e => {
    if (e.keyCode === 27) {
      if (window.location.hash) {
        window.location.hash = '';
      };
      closeModal();
    }
  });
});
