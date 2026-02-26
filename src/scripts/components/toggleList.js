
const langButton = document.querySelector('.lang__button');
const langList = document.querySelector('.lang__list');
const countList = document.querySelector('.count__list');
const countButton = document.querySelector('.count__select');
const countriesButton = document.querySelector('.countries__select');
const countriesList = document.querySelector('.countries__list');
const citiesButton = document.querySelector('.cities__select');
const citiesList = document.querySelector('.cities__list');


export function toggleList() {
  toggleListHandler(langButton, langList, 'lang__list--active');
  toggleListHandler(countButton, countList, 'count__list--active');
  toggleListHandler(countriesButton, countriesList, 'countries__list--active');
  toggleListHandler(citiesButton, citiesList, 'cities__list--active');
}

function toggleListHandler(elementClick, elementList, activeClass) {
  elementClick.addEventListener('click', () => {
    elementList.classList.toggle(activeClass);
  });
}
