export function initSpecsShown() {
  const techElem = document.querySelector('.tech');
  const buttons = [...techElem.querySelectorAll('.tech__button')];
  const contents = [...techElem.querySelectorAll('.tech__specs')];

  function setActive(button) {
    const feature = button.dataset.feature;
    const isActive = button.classList.contains('tech__button--active');

    buttons.forEach((btn) =>
      btn.classList.toggle('tech__button--active', !isActive && btn === button),
    );

    contents.forEach((content) =>
      content.classList.toggle(
        'tech__specs--active',
        !isActive && content.dataset.featureContent === feature,
      ),
    );
  }

  techElem.addEventListener('click', (e) => {
    const button = e.target.closest('.tech__button');

    if (!button) {
      return;
    }

    setActive(button);
  });
}
