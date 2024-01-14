'use strict';

document.addEventListener('scroll', function(e) {
  const body = document.getElementsByTagName('body')[0];
  const topBtn = document.getElementsByClassName('main__to-top')[0];

  if (body.getBoundingClientRect().y === 0) {
    topBtn.style.opacity = 0;
  } else if (body.getBoundingClientRect().y !== 0) {
    topBtn.style.opacity = 1;
  }
});

connectEvents('main');
connectEvents('buy');

const langs = document.getElementsByClassName('menu__link--lang')[0];
const back = document.getElementsByClassName('menu__back')[0];

langs.addEventListener('click', function(e) {
  const icon = document.getElementsByClassName('menu__close')[0];

  icon.classList.add('menu__close--hidden');

  back.classList.add('menu__back--show');
});

back.addEventListener('click', function(e) {
  const icon = document.getElementsByClassName('menu__close')[0];

  icon.classList.remove('menu__close--hidden');

  back.classList.remove('menu__back--show');
});

const faqAdds = document.getElementsByClassName('faq__question-title');

for (const faqAdd of faqAdds) {
  faqAdd.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const faqQuestion = e.target.closest('.faq__question');

    if (faqQuestion.classList.contains('faq__question--active')) {
      faqQuestion.classList.remove('faq__question--active');
    } else {
      faqQuestion.classList.add('faq__question--active');
    }
  });
}

// function closestBySuffix(element, suffix) {
//   const regex = new RegExp(suffix + '$');
//   let item = element;

//   while (item && regex.test(item.className)) {
//     item = item.parentElement;
//   }

//   return item;
// }

function connectEvents(className) {
  const formItems = document.getElementsByClassName(className + '__form-input');

  for (const formItem of formItems) {
    formItem.addEventListener('focus', function(e) {
      const item = e.target;

      let placeholder = item
        .closest('.' + className + '__form-group')
        .querySelector('.' + className + '__form-placeholder');

      const plac = item.closest('.buy__form-cvv');

      if (plac) {
        placeholder = plac
          .querySelector('.' + className + '__form-placeholder');
      }

      if (
        placeholder.classList.contains(className + '__form-placeholder--error')
        && item.classList.contains(className + '__form-input--error')
      ) {
        placeholder.classList.remove(className + '__form-placeholder--error');
        item.classList.remove(className + '__form-input--error');
      }

      placeholder.classList.add(className + '__form-placeholder--top');
      item.classList.add(className + '__form-input--focus');
    });

    formItem.addEventListener('blur', function(e) {
      const item = e.target;

      let placeholder = item
        .closest('.' + className + '__form-group')
        .querySelector('.' + className + '__form-placeholder');

      const plac = item.closest('.buy__form-cvv');

      if (plac) {
        placeholder = plac
          .querySelector('.' + className + '__form-placeholder');
      }

      placeholder.classList.remove(className + '__form-placeholder--top');
      item.classList.remove(className + '__form-input--focus');
    });
  }

  const formArea = document.getElementsByClassName(className
    + '__form-area')[0];

  if (formArea) {
    formArea.addEventListener('focus', function(e) {
      const item = e.target;

      const placeholder = item
        .closest('.' + className + '__form-group')
        .querySelector('.' + className + '__area-placeholder');

      if (
        placeholder.classList.contains(className + '__area-placeholder--error')
        && item.classList.contains(className + '__form-area--error')
      ) {
        placeholder.classList.remove(className + '__area-placeholder--error');
        item.classList.remove(className + '__form-area--error');
      }

      placeholder.classList.add(className + '__area-placeholder--top');
      item.classList.add(className + '__form-area--focus');
    });

    formArea.addEventListener('blur', function(e) {
      const item = e.target;

      const placeholder = item
        .closest('.' + className + '__form-group')
        .querySelector('.' + className + '__area-placeholder');

      placeholder.classList.remove(className + '__area-placeholder--top');

      item.classList.remove(className + '__form-area--focus');
    });
  }

  const form = document.getElementsByClassName(className + '__form');

  for (const formItem of form) {
    connectToTheSubmit(formItem, className);
  }
}

function connectToTheSubmit(form, className) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const inputs = document.getElementsByClassName(className + '__form-input');

    for (const input of inputs) {
      if (input.value === '' && (input.closest('.buy__show')
      || input.closest('#main-form'))) {
        const placeholder = input
          .closest('.' + className + '__form-instance')
          .querySelector('.' + className + '__form-placeholder');

        if (placeholder) {
          placeholder.classList.add(className + '__form-placeholder--error');
          input.classList.add(className + '__form-input--error');

          placeholder.scrollIntoView({ behavior: 'smooth',
            block: 'start',
            inline: 'nearest' });
        }

        return;
      } else {
        const placeholder = input
          .closest('.' + className + '__form-instance')
          .querySelector('.' + className + '__form-placeholder');

        if (placeholder
         && placeholder.classList.contains(className
            + '__form-placeholder--error')
          && input.classList.contains(className + '__form-input--error')
        ) {
          placeholder.classList.remove(className + '__form-placeholder--error');
          input.classList.remove(className + '__form-input--error');
        }
      }
    }

    const quantity = document.getElementsByClassName('buy__form-quantity')[0];
    const tab = document.getElementsByClassName('buy__tab');
    const tabPC = document.getElementsByClassName('buy__nav-tab-item');
    const productImage = document
      .getElementsByClassName('buy__product-wrapper')[0];

    if (e.target.classList.contains('buy__form--first')) {
      const secondForm = document
        .getElementsByClassName('buy__form--second')[0];

      quantity.classList.add('buy__form-quantity--grid');

      e.target.classList.remove('buy__show');
      secondForm.classList.add('buy__show');

      tab[0].classList.remove('buy__tab--active');
      tab[1].classList.add('buy__tab--active');

      tabPC[0].classList.remove('buy__nav-tab-item--active');
      tabPC[1].classList.add('buy__nav-tab-item--active');
    }

    if (e.target.classList.contains('buy__form--second')) {
      const thirdForm = document
        .getElementsByClassName('buy__form--third')[0];

      e.target.classList.remove('buy__show');
      thirdForm.classList.add('buy__show');

      tab[1].classList.remove('buy__tab--active');
      tab[2].classList.add('buy__tab--active');

      tabPC[1].classList.remove('buy__nav-tab-item--active');
      tabPC[2].classList.add('buy__nav-tab-item--active');

      quantity.classList.add('buy__quantity-none');
      quantity.classList.remove('buy__form-quantity--grid');

      productImage.classList.add('buy__wrapper-none');
    }

    if (e.target.classList.contains('buy__form--third')) {
      const firstForm = document
        .getElementsByClassName('buy__form--first')[0];

      e.target.classList.remove('buy__show');
      firstForm.classList.add('buy__show');

      tab[2].classList.remove('buy__tab--active');
      tab[0].classList.add('buy__tab--active');
      tabPC[2].classList.remove('buy__nav-tab-item--active');
      tabPC[0].classList.add('buy__nav-tab-item--active');

      quantity.classList.remove('buy__quantity-none');

      window.location.href = '#';

      productImage.classList.remove('buy__wrapper-none');
      removeAllFields();
    }

    const area = document.getElementsByClassName(className + '__form-area')[0];

    if (area) {
      if (area.value === '') {
        const placeholder = area
          .closest('.' + className + '__form-group')
          .querySelector('.' + className + '__area-placeholder');

        placeholder.classList.add(className + '__area-placeholder--error');
        area.classList.add(className + '__form-area--error');

        return;
      } else {
        const placeholder = area
          .closest('.' + className + '__form-group')
          .querySelector('.' + className + '__area-placeholder');

        if (
          placeholder.classList.contains(
            className + '__area-placeholder--error',
          )
          && area.classList.contains(className + '__form-area--error')
        ) {
          placeholder.classList.remove(className + '__area-placeholder--error');
          area.classList.remove(className + '__form-area--error');
        }
      }

      area.value = '';

      for (const input of inputs) {
        input.value = '';
      }
    } else {
      removeAllFields();
    }
  });
}

function removeAllFields() {
  const items = document.querySelectorAll('.buy__form-input');

  for (const item of items) {
    item.value = '';
  }
}

const informs = document.getElementsByClassName('main__inform-btn');

for (const inform of informs) {
  inform.addEventListener('click', function(e) {
    if (window.innerWidth <= 1280) {
      const infHidden = inform.querySelector('.main__inform-hidden');

      if (infHidden.classList.contains('main__inform-hidden--show')) {
        inform.classList.remove('main__inform-btn--show');
        infHidden.classList.remove('main__inform-hidden--show');
      } else {
        inform.classList.add('main__inform-btn--show');
        infHidden.classList.add('main__inform-hidden--show');
      }
    }
  });
}

const selects = document.getElementsByClassName('buy__select');

for (const select of selects) {
  select.addEventListener('click', function(e) {
    let target = e.target.closest('.buy__form-instance');

    if (!target) {
      target = e.target.closest('.buy__form-quantity-item');
    }

    target = target.querySelector('.buy__select-options');

    if (target.classList.contains('buy__select-options--active')) {
      target.classList.remove('buy__select-options--active');
    } else {
      target.classList.add('buy__select-options--active');
    }
  });
}

const options = document.getElementsByClassName('buy__select-option');

for (const option of options) {
  option.addEventListener('click', function(e) {
    let active = e.target.closest('.buy__form-instance');

    if (!active) {
      active = e.target.closest('.buy__form-quantity-item');
    }

    active = active.querySelector('.buy__option');

    const activeInner = active.innerHTML;

    active.innerHTML = option.innerHTML;
    option.innerHTML = activeInner;

    const opts = option.closest('.buy__select-options');

    opts.classList.remove('buy__select-options--active');

    if (option.getAttribute('data-type') === 'number') {
      sort();
    }
  });
}

function sort() {
  const numbers = document.querySelectorAll('[data-type=\'number\']');

  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;
    let min = parseInt(numbers[i].innerHTML);

    for (let j = i + 1; j < numbers.length; j++) {
      if (min > parseInt(numbers[j].innerHTML)) {
        minIndex = j;
        min = parseInt(numbers[j].innerHTML);
      }
    }

    const temp = parseInt(numbers[i].innerHTML);

    numbers[i].innerHTML = parseInt(numbers[minIndex].innerHTML);

    numbers[minIndex].innerHTML = temp;
  }
}

const langNav = document.getElementsByClassName('header__lang')[0];

langNav.addEventListener('click', function(e) {
  const target = e.target.closest('.header__logo-lang')
    .querySelector('.header__select-options');

  if (target.classList.contains('header__select-options--active')) {
    target.classList.remove('header__select-options--active');
  } else {
    target.classList.add('header__select-options--active');
  }
});

const langOpts = document.getElementsByClassName('header__select-option');

for (const option of langOpts) {
  option.addEventListener('click', function(e) {
    const active = e.target.closest('.header__lang-tool-item')
      .querySelector('.header__lang-title');

    const activeInner = active.innerHTML;

    active.innerHTML = option.innerHTML;
    option.innerHTML = activeInner;

    const opts = option.closest('.header__select-options');

    opts.classList.remove('header__select-options--active');
  });
}
