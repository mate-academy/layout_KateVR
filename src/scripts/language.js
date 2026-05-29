const langButton = document.querySelector('.top-bar__lang-button');

const langList = document.querySelector('.top-bar__lang-list');
const asideLangList = document.querySelector('.language__list');

const langItems = document.querySelectorAll('.dropdown__item');
const asideLangItems = document.querySelectorAll('.language__item');

const setActiveLangItem = (collection, language, className) => {
  collection.forEach((item) => {
    const dataLang = item.getAttribute('data-lang');

    if (language === dataLang) {
      item.classList.add(`${className}`);
    } else {
      item.classList.remove(`${className}`);
    }
  });
};

const setListener = (element) => {
  element.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) {
      return;
    }

    if (!li.closest('aside')) {
      langList.classList.toggle('dropdown--open');
    }

    const language = li.getAttribute('data-lang');

    setActiveLangItem(langItems, language, 'dropdown__item--active');
    setActiveLangItem(asideLangItems, language, 'language__item--active');
    langButton.textContent = language;
  });
};

langButton.addEventListener('click', () => {
  langList.classList.toggle('dropdown--open');
});

setListener(langList);
setListener(asideLangList);
