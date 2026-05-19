export const dropdowns = () => {
  const menus = document.querySelectorAll(
    '.dropdown',
  ) as NodeListOf<HTMLElement>;

  menus.forEach((menu) => {
    const list = menu.querySelector('.dropdown__list') as HTMLElement;
    const trigger = menu.querySelector('.dropdown__trigger') as HTMLElement;
    const itemButtons = menu.querySelectorAll(
      '.dropdown__item-button',
    ) as NodeListOf<HTMLElement>;

    let selected = [...itemButtons].find(
      (item) => item.hasAttribute('selected') || itemButtons[0],
    );

    const setSelected = (element: HTMLElement) => {
      selected.classList.remove('dropdown__item-button--selected');
      selected = element;
      trigger.textContent = element.textContent;
      selected.classList.add('dropdown__item-button--selected');

      const event = new CustomEvent('setSelected', {
        detail: { selected: element.textContent },
      });

      menu.dataset.value = element.textContent;

      menu.dispatchEvent(event);
    };

    setSelected(selected);

    // dropdown__item-button--selected
    const updateItemButtons = () => {
      const itemButtons = menu.querySelectorAll(
        '.dropdown__item-button',
      ) as NodeListOf<HTMLElement>;

      itemButtons.forEach((itemButon) => {
        itemButon.addEventListener('click', () => {
          setSelected(itemButon);
          menu.classList.toggle('dropdown--active');
        });
      });

      setSelected(itemButtons[0]);
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        updateItemButtons();
      });
    });

    observer.observe(list, {
      childList: true,
      characterData: true,
    });

    updateItemButtons();

    list.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();

        list.scrollTop += event.deltaY * 0.25;
      },
      { passive: false },
    );

    trigger.addEventListener('click', () => {
      menu.classList.toggle('dropdown--active');

      document.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).closest('.dropdown__list') === list) {
          return;
        }

        if (
          (event.target as HTMLElement).closest('.dropdown__trigger') ===
          trigger
        ) {
          return;
        }

        menu.classList.remove('dropdown--active');
      });
    });
  });

  const priceEl = document.getElementById('price');
  const priceDropdownEl = document.getElementById('price-dropdown');

  const setPrice = () => {
    priceEl.textContent = `${1200 * +priceDropdownEl.dataset.value}$`;
  };

  setPrice();
  priceDropdownEl.addEventListener('setSelected', setPrice);

  const countriesCities = {
    Ukraine: ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Lviv', 'Zaporizhzhia'],

    'United Kingdom': [
      'London',
      'Manchester',
      'Birmingham',
      'Liverpool',
      'Leeds',
      'Glasgow',
    ],

    Morocco: ['Casablanca', 'Rabat', 'Marrakesh', 'Fes', 'Tangier', 'Agadir'],

    China: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'],

    France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes'],

    Germany: [
      'Berlin',
      'Hamburg',
      'Munich',
      'Cologne',
      'Frankfurt',
      'Stuttgart',
    ],

    Italy: ['Rome', 'Milan', 'Naples', 'Turin', 'Florence', 'Bologna'],

    Spain: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Malaga'],

    Poland: ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw', 'Poznan', 'Gdansk'],
  };

  const dropdownCountry = document.getElementById('dropdown-country');
  const dropdownCity = document.getElementById('dropdown-city');

  const setCityDropdown = () => {
    let innerHTML = '';
    countriesCities[dropdownCountry.dataset.value.trim()].forEach((city) => {
      innerHTML += `<li class="dropdown__item"> <button type="button" class="dropdown__item-button">${city}</button></li>`;
    });

    const list = dropdownCity.querySelector('.dropdown__list') as HTMLElement;
    list.innerHTML = innerHTML;
  };

  setCityDropdown();

  dropdownCountry.addEventListener('setSelected', setCityDropdown);
};
