'use strict';

// MOBILE LANG
const mobileLangTrigger = document.querySelector('.mobile-lang-trigger');
const languageMobileClose = document.querySelector('.language-mobile-close');
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

language.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('language__btn')) {
    const langaugeShow = document.querySelector('.language--show');

    langaugeShow.classList.remove('language--show');
    languageBack.innerHTML = target.innerText;
  }
});
