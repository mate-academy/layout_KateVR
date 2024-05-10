export const asides = (
  switcherRef,
  bodyRef,
  closeButtonRef,
  classOnOpenRef,
) => {
  const languageSwitcher = document.querySelector(`.${switcherRef}`);
  const languageBody = document.querySelector(`.${bodyRef}`);
  const languageClose = document.querySelector(`.${closeButtonRef}`);
  const bodyElem = document.querySelector('body');
  languageSwitcher.addEventListener('click', () => {
    languageBody.classList.add(classOnOpenRef);
  });
  languageClose.addEventListener('click', () => {
    if (languageBody.classList.contains(classOnOpenRef)) {
      languageBody.classList.remove(classOnOpenRef);
    }
  });
};
