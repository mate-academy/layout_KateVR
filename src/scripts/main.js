'use strict';

// MOBILE NAV
const mobileMenuOpen = document.querySelector('#mobile-menu-open');
const mobileMenuClose = document.querySelector('#mobile-menu-close');
const nav = document.querySelector('.nav');

mobileMenuOpen.addEventListener('click', () => {
  nav.classList.add('nav--show');
});

mobileMenuClose.addEventListener('click', () => {
  nav.classList.remove('nav--show');
});

// MOBILE LANG
const mobileLangTrigger = document.querySelector('#mobile-lang-trigger');
const languageMobileClose = document.querySelector('#language-mobile-close');
const language = document.querySelector('.language');

mobileLangTrigger.addEventListener('click', () => {
  language.classList.add('language--show');
});

languageMobileClose.addEventListener('click', () => {
  language.classList.toggle('language--show');
});

// DESKTOP LANG
const languageBtn = document.querySelectorAll('.language__btn');
const languageBack = document.querySelector('.language__back');
const languageBtnActive = document.querySelector('.language__btn--active');
const langInner = () => {
  if (window.innerWidth >= 1280) {
    languageBack.innerHTML = languageBtnActive.getAttribute('data-short');

    languageBtn.forEach(btn => {
      btn.innerText = btn.getAttribute('data-short');
    });
  } else {
    languageBack.innerHTML = '';

    languageBtn.forEach(btn => {
      btn.innerText = btn.getAttribute('data-name');
    });
  }
};

window.addEventListener('load', langInner);
window.addEventListener('resize', langInner);

languageBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const langaugeShow = document.querySelector('.language--show');

    langaugeShow.classList.remove('language--show');
    languageBack.innerHTML = btn.innerText;
  });
});

// FAQ
const modalDesktopBg = document.querySelector('.modal-desktop-bg');
const mobileFaqTrigger = document.querySelectorAll('.faq-modal-trigger');
const faq = document.querySelector('.faq');
const faqClose = document.querySelectorAll('.faq__close');

mobileFaqTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    faq.classList.add('faq--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

faqClose.forEach(close => {
  close.addEventListener('click', () => {
    faq.classList.remove('faq--show');
    modalDesktopBg.classList.remove('modal-desktop-bg--show');
  });
});

// ACCORDION
const faqQuestion = document.querySelectorAll('.faq__question');
const faqAnswer = document.querySelectorAll('.faq__answer');
const faqUpdate = document.querySelectorAll('.faq__update');

faqQuestion.forEach((q, index) => {
  q.addEventListener('click', () => {
    faqAnswer[index].classList.toggle('faq__answer--show');
    faqUpdate[index].classList.toggle('faq__update--show');
  });
});

// HELP
const mobileHelpTrigger = document.querySelectorAll('.help-modal-trigger');
const help = document.querySelector('.help');
const helpClose = document.querySelectorAll('.help__close');

mobileHelpTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    help.classList.add('help--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

helpClose.forEach(close => {
  close.addEventListener('click', () => {
    help.classList.remove('help--show');
    modalDesktopBg.classList.remove('modal-desktop-bg--show');
  });
});

// Out of modal
modalDesktopBg.addEventListener('click', () => {
  faq.classList.remove('faq--show');
  help.classList.remove('help--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
  ytVideo.classList.remove('yt-video--show');
  // eslint-disable-next-line max-len
  ytFrame.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});

// TECH
const techItemBtn = document.querySelectorAll('.tech__item-btn');

techItemBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const text = btn.closest('.tech__item').querySelector('.tech__item-text');

    btn.classList.toggle('tech__item-btn--active');
    text.classList.toggle('tech__item-text--active');
  });
});

// Contact

const contactBtn = document.querySelector('.contact__btn');
const cItems = document.querySelectorAll('.contact__input, .contact__textarea');

contactBtn.addEventListener('click', () => {
  cItems.forEach(item => {
    if (item.value === '') {
      item.classList.add('failed');
    } else {
      item.classList.remove('failed');
    }
  });

  if (document.querySelectorAll('.failed').length === 0) {
    contactBtn.closest('form').reset();
  }
});

// Youtube Play

const playBtn = document.querySelectorAll('.play-btn');
const ytVideo = document.querySelector('.yt-video');
const ytFrame = document.querySelector('.yt-video__iframe');
const ytVideoClose = document.querySelector('.yt-video__close');

playBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    ytVideo.classList.add('yt-video--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

ytVideoClose.addEventListener('click', () => {
  ytVideo.classList.remove('yt-video--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
  // eslint-disable-next-line max-len
  ytFrame.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});

// Slider
const sliderPrev = document.querySelectorAll('.slider-prev');
const sliderNext = document.querySelectorAll('.slider-next');
const sliderBtn = document.querySelectorAll('.slider__btn');

sliderNext.forEach(next => {
  next.addEventListener('click', () => {
    const countSlides = next.closest('.slider').querySelector('.slider__count');
    const slides = next.closest('.slider').querySelectorAll('.slider__slide');
    const slide = next.closest('.slider').querySelector('.slider__slide--show');
    const ac = next.closest('.slider').querySelector('.slider__change--active');

    if (slide.nextElementSibling) {
      const slidei = slide.nextElementSibling.getAttribute('data-index');

      slide.classList.remove('slider__slide--show');
      slide.nextElementSibling.classList.add('slider__slide--show');
      countSlides.innerText = `${slidei}/${slides.length}`;
    }

    if (slides[slides.length - 1].classList.contains('slider__slide--show')) {
      ac.classList.remove('slider__change--active');
      next.classList.add('slider__change--active');
    } else {
      ac.classList.remove('slider__change--active');
      next.previousElementSibling.classList.add('slider__change--active');
    }
  });
});

sliderPrev.forEach(prev => {
  prev.addEventListener('click', () => {
    const countSlides = prev.closest('.slider').querySelector('.slider__count');
    const slides = prev.closest('.slider').querySelectorAll('.slider__slide');
    const slide = prev.closest('.slider').querySelector('.slider__slide--show');
    const ac = prev.closest('.slider').querySelector('.slider__change--active');

    if (slide.previousElementSibling) {
      const slidei = slide.previousElementSibling.getAttribute('data-index');

      slide.classList.remove('slider__slide--show');
      slide.previousElementSibling.classList.add('slider__slide--show');
      countSlides.innerText = `${slidei}/${slides.length}`;
    }

    if (slides[0].classList.contains('slider__slide--show')) {
      ac.classList.remove('slider__change--active');

      prev.classList.add('slider__change--active');
    } else {
      ac.classList.remove('slider__change--active');
      prev.nextElementSibling.classList.add('slider__change--active');
    }
  });
});

sliderBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const slides = btn.closest('.slider').querySelectorAll('.slider__slide');
    const ac = btn.closest('.slider').querySelector('.slider__slide--show');
    const cb = btn.closest('.slider').querySelector('.slider__btn--active');

    ac.classList.remove('slider__slide--show');
    slides[btn.getAttribute('data-index')].classList.add('slider__slide--show');

    cb.classList.remove('slider__btn--active');
    btn.classList.add('slider__btn--active');
  });
});

const allInputs = document.querySelectorAll('input, textarea');

allInputs.forEach(input => {
  input.addEventListener('change', () => {
    input.classList.remove('failed');
  });
});
