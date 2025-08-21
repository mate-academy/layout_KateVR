document.addEventListener('DOMContentLoaded', () => {
  const cross = document.querySelector('.aside__back--cross');
  const homepage = document.querySelector('.aside-buy-complete__button');
  const stepsContainer = document.querySelector('.aside-buy__steps');
  const dot = stepsContainer.querySelector('.dot');
  const buttons = stepsContainer.querySelectorAll('.aside-buy__step-btn');

  window.updateDotPosition = function () {
    const activeButton = stepsContainer.querySelector('.aside-buy__step-btn--active');

    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = stepsContainer.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();

      const buttonWidth = buttonRect.width;
      dot.style.width = (window.innerWidth <= 768) ? `${buttonWidth}px` : '4px';

      const buttonOffset = buttonRect.left - containerRect.left + (buttonRect.width / 2) - (dotRect.width / 2);
      dot.style.left = `${buttonOffset}px`;
    } else {
      const firstButton = buttons[0];
      const firstButtonRect = firstButton.getBoundingClientRect();
      const containerRect = stepsContainer.getBoundingClientRect();

      const firstButtonWidth = firstButtonRect.width;
      dot.style.width = (window.innerWidth <= 768) ? `${firstButtonWidth}px` : '4px';
      dot.style.left = `${firstButtonRect.left - containerRect.left + (firstButtonRect.width / 2) - (dot.getBoundingClientRect().width / 2)}px`;
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('aside-buy__step-btn--active'));
      button.classList.add('aside-buy__step-btn--active');
      updateDotPosition();
    });
  });

  function setInitialPosition() {
    buttons.forEach(btn => btn.classList.remove('aside-buy__step-btn--active'));
    updateDotPosition();
  }

  cross.addEventListener('click', setInitialPosition);
  homepage.addEventListener('click', setInitialPosition);

  updateDotPosition();

  if (window.innerWidth <= 768) {
    dot.style.left = '0px';
  }

  window.addEventListener('resize', updateDotPosition);
});
