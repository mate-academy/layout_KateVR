const langButton = document.querySelector('.lang__button');
const langList = document.querySelector('.lang__list');
const langItems = document.querySelectorAll('.lang__item');
const languageItems = document.querySelectorAll('.language__item');

export function changeLang() {
  langItems.forEach((langItem) => {
    langItem.addEventListener('click', () => {
      changeLangHandler(langItem);

      const languageItemChosen = findChosenLang([...languageItems], langItem);

      languageItemChosen.classList.add('language__item--active');
    });
  });

  languageItems.forEach((langItem) => {
    langItem.addEventListener('click', () => {
      changeLangHandler(langItem);

      const langItemChosen = findChosenLang([...langItems], langItem);

      langItemChosen.classList.add('lang__item--active');
    });
  });
}

function changeLangHandler(langItem) {
  const langItemActive = document.querySelector('.lang__item--active');
  const languageItemActive = document.querySelector('.language__item--active');

  langItemActive.classList.remove('lang__item--active');
  languageItemActive.classList.remove('language__item--active');
  langItem.classList.add('lang__item--active');
  langButton.textContent = langItem.dataset.lang;
  langList.classList.remove('lang__list--active');
}

function findChosenLang(languages, chosenLang) {
  return languages.find((item) => {
    return item.dataset.lang === chosenLang.dataset.lang;
  });
}
