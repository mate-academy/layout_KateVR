const buttons = document.querySelectorAll('.specs__button');
const container = document.querySelector('.specs__content');
const infoBlocks = document.querySelectorAll('.specs__info');

container.addEventListener('click', (event) => {
  const button = event.target.closest('.specs__button');

  if (!button) {
    return;
  }

  const isActive = button.classList.contains('specs__button--active');
  const dataInfo = button.getAttribute('data-info');
  const infoBlock = document.querySelector(`.specs__info--${dataInfo}`);

  buttons.forEach((buttonEl) =>
    buttonEl.classList.remove('specs__button--active'),
  );
  infoBlocks.forEach((block) => block.classList.remove('specs__info--active'));

  if (!isActive) {
    button.classList.add('specs__button--active');
    infoBlock.classList.add('specs__info--active');
  }
});
