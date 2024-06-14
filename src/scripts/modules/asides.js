export const asides = (
  switcherRef,
  bodyRef,
  closeButtonRef,
  classOnOpenRef,
) => {
  const switcherElement = document.querySelector(`.${switcherRef}`);
  const contentBody = document.querySelector(`.${bodyRef}`);
  const closeBtn = document.querySelector(`.${closeButtonRef}`);
  const bodyElem = document.querySelector('body');
  switcherElement.addEventListener('click', () => {
    if (!bodyElem.classList.contains('page__body--lock')) {
      bodyElem.classList.add('page__body--lock');
    }
    contentBody.classList.add(classOnOpenRef);
  });
  closeBtn.addEventListener('click', () => {
    if (bodyElem.classList.contains('page__body--lock')) {
      bodyElem.classList.remove('page__body--lock');
    }
    if (contentBody.classList.contains(classOnOpenRef)) {
      contentBody.classList.remove(classOnOpenRef);
    }
  });
};
