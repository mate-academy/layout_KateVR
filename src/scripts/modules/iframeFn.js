export const iframeFn = () => {
  const popup = document.querySelector('.popup');
  const iframe = popup.querySelector('iframe');
  const closePopup = document.querySelector('.popup__close-button');
  const opensButtonPopup = document.querySelectorAll('.play-button__button');
  const bodyElem = document.querySelector('body');
  opensButtonPopup.forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      if (!bodyElem.classList.contains('page__body--lock')) {
        bodyElem.classList.add('page__body--lock');
      }
      popup.classList.add('popup--shown');
      iframe.src =
        'https://www.youtube.com/embed/Cl_eHeom-RI?si=eheZvOS9j3TfBt70?rel=0?autoplay=1';
    });
  });
  closePopup.addEventListener('click', () => {
    if (bodyElem.classList.contains('page__body--lock')) {
      bodyElem.classList.remove('page__body--lock');
    }
    popup.classList.remove('popup--shown');
    iframe.src = '';
  });
};
