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
    languageBack.innerHTML = btn.innerText;
  });
});

// FAQ
const modalDesktopBg = document.querySelector('.modal-desktop-bg');
const mobileFaqTrigger = document.querySelectorAll('.faq-modal-trigger');
const faq = document.querySelector('.faq');
const faqClose = document.querySelector('.faq__close');

mobileFaqTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    faq.classList.add('faq--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

faqClose.addEventListener('click', () => {
  faq.classList.remove('faq--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
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
const helpClose = document.querySelector('.help__close');

mobileHelpTrigger.forEach(trigger => {
  trigger.addEventListener('click', () => {
    help.classList.add('help--show');
    modalDesktopBg.classList.add('modal-desktop-bg--show');
  });
});

helpClose.addEventListener('click', () => {
  help.classList.remove('help--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
});

modalDesktopBg.addEventListener('click', () => {
  faq.classList.remove('faq--show');
  help.classList.remove('help--show');
  modalDesktopBg.classList.remove('modal-desktop-bg--show');
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
