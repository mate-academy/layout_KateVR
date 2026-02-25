const order = document.querySelector('.order');

const countSelect = document.querySelector('.count__select');
const countList = document.querySelector('.count__list');
const countItems = document.querySelectorAll('.count__item');
const amount = document.querySelector('.order__amount');

const countriesSelect = document.querySelector('.countries__select');
const countriesList = document.querySelector('.countries__list');
const countriesItems = document.querySelectorAll('.countries__item');

const citiesSelect = document.querySelector('.cities__select');
const citiesList = document.querySelector('.cities__list');
const citiesItems = document.querySelectorAll('.cities__item');

export function closeDropdown() {
  order.addEventListener('click', (e) => {
    if (e.target !== countSelect) {
      countList.classList.remove('count__list--active');
    }

    if (e.target !== countriesSelect) {
      countriesList.classList.remove('countries__list--active');
    }

    if (e.target !== citiesSelect) {
      citiesList.classList.remove('cities__list--active');
    }
  });
}

export function chooseSelect() {
  countItems.forEach((countItem) =>
    countItem.addEventListener('click', () => {
      chooseSelectHandler(countItem, 'count', countSelect, countList);

      amount.textContent = `${+countItem.textContent * 1200}$`;
    }),
  );

  countriesItems.forEach((countriesItem) =>
    countriesItem.addEventListener('click', () => {
      chooseSelectHandler(
        countriesItem,
        'countries',
        countriesSelect,
        countriesList,
      );
    }),
  );

  citiesItems.forEach((citiesItem) =>
    citiesItem.addEventListener('click', () => {
      chooseSelectHandler(citiesItem, 'cities', citiesSelect, citiesList);
    }),
  );
}

export function chooseSelectHandler(chosenItem, className, select, list) {
  const itemActive = document.querySelector(`.${className}__item--active`);

  itemActive.classList.remove(`${className}__item--active`);
  chosenItem.classList.add(`${className}__item--active`);
  select.textContent = chosenItem.textContent;
  list.classList.remove(`${className}__list--active`);
}
