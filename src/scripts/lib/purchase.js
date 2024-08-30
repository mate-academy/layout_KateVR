function purchase() {
  const page = document.documentElement;
  const buyAside = document.getElementById('aside-buy');
  const inputs = buyAside.querySelectorAll('input');
  const buyButtons = document.querySelectorAll('.aside-buy__step-btn');
  const sections = document.querySelectorAll('.aside-buy__section');
  const cross = document.querySelector('.aside__back--cross ');
  const homepageButton = document.querySelector('.aside-buy-complete__button');
  const hiddenClass = '_hidden-section';

  const emptyBuy = document.querySelector('.empty-error--buy');
  const formatBuy = document.querySelector('.format-error--buy');

  cross.addEventListener('click', setUpDefault);
  homepageButton.addEventListener('click', (e) => {
    setUpDefault();
    buyAside.classList.remove('_aside-open');
    page.classList.remove('stop-scroll');
  });

  const sectionMap = {
    'aside-buy__step-btn--order': document.querySelector('.aside-buy-order'),
    'aside-buy__step-btn--pay': document.querySelector('.aside-buy-pay'),
    'aside-buy__step-btn--complete': document.querySelector('.aside-buy-complete')
  };

  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const clickedButton = e.target.closest('.aside-buy__step-btn');

      if (!clickedButton.classList.contains('aside-buy__step-btn--active')) {
        updateSections(clickedButton);
      }
    });
  });

  function updateSections(activeButton) {
    const activeClass = 'aside-buy__step-btn--active';

    buyButtons.forEach(btn => {
      if (btn !== activeButton) {
        btn.classList.remove(activeClass);
        btn.classList.add('aside-buy__step-btn--lock');
      } else {
        btn.classList.add(activeClass);
        btn.classList.remove('aside-buy__step-btn--lock');
      }
    });

    sections.forEach(section => section.classList.add(hiddenClass));

    const targetSection = sectionMap[activeButton.classList[1]];
    if (targetSection) {
      targetSection.classList.remove(hiddenClass);
    }
  }

  function setUpDefault() {
    setTimeout(() => {
      sections.forEach(section => section.classList.add(hiddenClass));
      buyButtons.forEach(btn => btn.classList.add('aside-buy__step-btn--lock'));
      buyButtons.forEach(btn => btn.classList.remove('aside-buy__step-btn--active'));

      buyButtons[0].classList.remove('aside-buy__step-btn--lock');
      buyButtons[0].classList.add('aside-buy__step-btn--active');
      sections[0].classList.remove(hiddenClass);
    }, 500);

    inputs.forEach(input => {
      input.classList.remove('_foc');
      input.classList.remove('_error');
      input.value = '';
    });

    emptyBuy.style.display = 'none';
    formatBuy.style.display = 'none';
  }
}

purchase();
