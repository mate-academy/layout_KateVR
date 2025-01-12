export const languageSelector = () => {
  const languageMenu = document.querySelector('.header__language'),
    selectBtn = languageMenu.querySelector('.header__language-btn'),
    options = languageMenu.querySelectorAll('.header__language-option'),
    sBtnText = languageMenu.querySelector('.header__language-btn-text');

  selectBtn.addEventListener('click', () => {
    languageMenu.classList.toggle('header__language--active');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      let selectedOption = option.querySelector(
        '.header__language-option-text',
      ).innerText;
      sBtnText.innerText = selectedOption;
      languageMenu.classList.remove('header__language--active');
    });
  });
};
