export const setupLangSelector = () => {
  const triggerDropdown = document.querySelector('.dropdown__trigger');
  const dropdownLangList = document.querySelector('.dropdown__list');
  const langMenu = document.querySelector('.menu__lang');
  const langMenuList = langMenu.querySelector('.menu__list');

  const updateLangSelector = (selectedLang) => {
    const prevActiveHeader = dropdownLangList?.querySelector('.dropdown__item--active');
    const prevActiveMenu = langMenuList?.querySelector('.menu__item--active');

    prevActiveHeader?.classList.remove('dropdown__item--active');
    prevActiveMenu?.classList.remove('menu__item--active');

    const newActiveHeader = dropdownLangList?.querySelector(`.dropdown__item[data-lang="${selectedLang}"]`);
    const newActiveMenu = langMenuList?.querySelector(`.menu__item[data-lang="${selectedLang}"]`);

    if (newActiveHeader) {
      triggerDropdown.textContent = selectedLang;
      newActiveHeader.classList.add('dropdown__item--active');
    }

    newActiveMenu?.classList.add('menu__item--active');
  }

  const handlLangListClick = (e) => {
    const closestLi = e.target.closest('li');

    if (closestLi) {
      const selectedLang = closestLi.dataset.lang;
      updateLangSelector(selectedLang);
    }
  }

  dropdownLangList?.addEventListener('click', handlLangListClick);
  langMenuList?.addEventListener('click', handlLangListClick);
}
