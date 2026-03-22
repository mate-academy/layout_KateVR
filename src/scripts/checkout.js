export function initCheckoutToggle() {
  const checkoutSection = document.getElementById('checkout');
  const buyButtons = document.querySelectorAll('.header__button, .top-bar__button');
  const closeButton = document.querySelector('.stepper__close');
  const pageBody = document.querySelector('.page__body');

  if (!checkoutSection) return;

  const openCheckout = (e) => {
    e.preventDefault();
    checkoutSection.classList.add('is-visible');
    pageBody.classList.add('no-scroll');
  };

  const closeCheckout = (e) => {
    e.preventDefault();
    checkoutSection.classList.remove('is-visible');
    pageBody.classList.remove('no-scroll');
  };

  buyButtons.forEach(btn => {
    btn.addEventListener('click', openCheckout);
  });

  closeButton?.addEventListener('click', closeCheckout);

  document.querySelector('.complete__button').addEventListener('click', () => {
    window.location.href = window.location.origin + '#home';
    window.location.reload();
  });
}
