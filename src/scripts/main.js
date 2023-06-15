'use-strict';

// Tippy
import tippy from 'tippy.js';

import '../styles/blocks/libs/tippy.scss';

// Swiper
import Swiper, { Navigation, Pagination } from 'swiper';

// SimpleBar is a plugin that replaces the appearance of the scrollbar.
// https://www.npmjs.com/package/simplebar

// Підключення плагіна з node_modules
import SimpleBar from 'simplebar';
// or 'import SimpleBar from 'simplebar';' if you want to use it manually.
// Підключення стилів з node_modules
import 'simplebar/dist/simplebar.css';

const body = document.querySelector('.page__body');

// Menu
const iconsMenu = document.querySelectorAll('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

iconsMenu.forEach(element => {
  const iconMenu = element;

  function menuClose() {
    iconMenu.classList.remove('_menu-open');
    menuBody.classList.remove('_menu-open');
    body.classList.remove('_lock');
  }

  function menuOpen() {
    menuBody.classList.add('_menu-open');
    body.classList.add('_lock');
  }

  if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
      iconMenu.classList.toggle('_menu-open');

      if (iconMenu.classList.contains('_menu-open')) {
        menuOpen();

        if (menuLinks.length > 0) {
          menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function() {
              menuClose();
            });
          });
        }
      } else {
        menuClose();
      }
    });
  }

  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('[data-action]')) {
      e.preventDefault();

      const subMenuId = targetElement.dataset.action
        ? targetElement.dataset.action : null;
      const subMenu = document.querySelector(`[data-submenu='${subMenuId}']`);

      if (subMenu) {
        const backToMenu = document.querySelector('.menu__arrow-back');

        subMenu.classList.add('_sub-menu-open');
        body.classList.add('_lock');

        if (backToMenu) {
          backToMenu.addEventListener('click', function() {
            subMenu.classList.remove('_sub-menu-open');

            if (iconMenu.classList.contains('_menu-open')) {
              iconMenu.classList.remove('_menu-open');
            }

            iconMenu.classList.add('_menu-open');
            menuOpen();
          });
        }

        if (menuLinks.length > 0) {
          menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function(elem) {
              subMenu.classList.remove('_sub-menu-open');
            });
          });
        }

        if (subMenu.classList.contains('_sub-menu-open')) {
          const closeMenuBtns = document.querySelectorAll('.close-help');

          if (!(iconMenu.classList.contains('_menu-open'))) {
            iconMenu.classList.add('_menu-open');
          }

          closeMenuBtns.forEach(closeMenuBtn => {
            closeMenuBtn.addEventListener('click', function(el) {
              const targetEl = el.target;

              if (targetEl === closeMenuBtn) {
                subMenu.classList.remove('_sub-menu-open');
                menuClose();
              }
            });
          });

          iconMenu.addEventListener('click', () => {
            subMenu.classList.remove('_sub-menu-open');
          });
        }
      }
    }
  }
});

const buttopPlay = document.querySelector('.button-play');

if (buttopPlay) {
  buttopPlay.addEventListener('click', function(e) {
    const videoModal = document.querySelector('.video');
    const closeModal = document.querySelector('.video__icon-cross');

    if (videoModal && !videoModal.classList.contains('_active')) {
      document.querySelector('iframe').setAttribute(
        'src', 'https://www.youtube.com/embed/qGGpmqBHKEA'
      );
      videoModal.classList.add('_active');
      body.classList.add('_lock');
    } else {
      videoModal.classList.remove('_active');
      body.classList.remove('_lock');
    }

    closeModal.addEventListener('click', function() {
      videoModal.classList.remove('_active');
      body.classList.remove('_lock');
      document.querySelector('iframe').setAttribute('src', '');
    });
  });
}

// Додаємо до блоку атрибут data-simplebar

// Також можна ініціалізувати наступним кодом, застосовуючи налаштування

if (document.querySelectorAll('[data-simplebar]').length) {
  document.querySelectorAll('[data-simplebar]').forEach(scrollBlock => {
    return new SimpleBar(scrollBlock, {
      autoHide: false,
    });
  });
}

// Spollers

spollers();

function spollers() {
  const spoller = document.querySelector('[data-spollers]');

  if (spoller) {
    initSpollers(spoller);
  }

  function initSpollers(spollerBlock) {
    if (spollerBlock) {
      spollerBlock.classList.add('_spoller-init');
      initSpollerBody(spollerBlock);
      spollerBlock.addEventListener('click', setSpollerAction);
    } else {
      spollerBlock.classList.remove('_spoller-init');
      initSpollerBody(spollerBlock, false);
      spollerBlock.removeEventListener('click', setSpollerAction);
    }
  }

  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');

    if (spollerTitles.length) {
      spollerTitles = Array.from(spollerTitles).filter(
        item => item.closest('[data-spollers]') === spollersBlock
      );

      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');

          if (!spollerTitle.classList.contains('_spoller-active')) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }

  function setSpollerAction(e) {
    const el = e.target;

    if (el.closest('[data-spoller]')) {
      const spollerTitle = el.closest('[data-spoller]');
      const spollersBlock = spollerTitle.closest('[data-spollers]');
      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
      const spollerSpeed = spollersBlock.dataset.spollersSpeed
        ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;

      if (!spollersBlock.querySelectorAll('._slide').length) {
        if (
          oneSpoller && !spollerTitle.classList.contains('_spoller-active')
        ) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle('_spoller-active');
        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
      }
      e.preventDefault();
    }
  }

  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector(
      '[data-spoller]._spoller-active'
    );
    const spollerSpeed = spollersBlock.dataset.spollersSpeed
      ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;

    if (spollerActiveTitle
      && !spollersBlock.querySelectorAll('._slide').length
    ) {
      spollerActiveTitle.classList.remove('_spoller-active');
      _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
    }
  }
}

const getHeight = (element) => {
  if (element) {
    return element.offsetHeight;
  }

  return 0;
};

const _slideUp = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    const heightElement = getHeight(target);

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = heightElement + 'px';

    getHeight(target);
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
const _slideDown = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (target.hidden) {
      target.hidden = false;
    }

    const heightElement = getHeight(target);

    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;

    getHeight(target);

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = heightElement + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');

    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
const _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

// Form
const forms = document.querySelectorAll('.form');
const icons = document.getElementsByClassName('card-form__image');

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    const clickedIconId = this.id;

    this.classList.add('_hidden');

    switch (clickedIconId) {
      case 'visa':
        document.getElementById('master-card').classList.remove('_hidden');
        break;
      case 'master-card':
        document.getElementById('visa').classList.remove('_hidden');
        break;
    }
  });
}

function validateEmail(email) {
  // const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
  const re
    = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  return re.test(String(email).toLowerCase());
}

function addError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');

  const inputErrorText = input.getAttribute('data-error');

  if (inputErrorText
    && inputErrorText !== '' && input.hasAttribute('required')
  ) {
    if (input.nextElementSibling
      && input.nextElementSibling.classList.toString().includes('__label')
    ) {
      input.nextElementSibling.textContent = inputErrorText;
    }
  } else {
    removeError(input);
  }
}

function removeError(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');

  input.value = '';
  input.classList.remove('_complete');
}

forms.forEach(function(form) {
  const formInputs = form.querySelectorAll('.form__input');
  const cardFormInputs = form.querySelectorAll('.card-form__input');
  const inputEmail = form.querySelector('.form__input--email');

  formInputs.forEach(function(input) {
    const inputPlaceholder = input.getAttribute('data-placeholder');

    input.nextElementSibling.textContent = inputPlaceholder;

    input.onfocus = function() {
      const inputErrorText = input.getAttribute('data-error');

      if (inputErrorText) {
        input.nextElementSibling.textContent = inputPlaceholder;
      }

      if (this.classList.contains('_error')) {
        removeError(this);
        this.value = '';
      }
    };

    input.onblur = function() {
      if (input.value !== '') {
        input.classList.add('_complete');
      } else {
        input.classList.remove('_complete');
      }
    };
  });

  cardFormInputs.forEach(function(input) {
    input.onfocus = function() {
      if (input.closest('.card-form--number')) {
        this.parentNode.classList.add('_active');
      }

      if (this.classList.contains('_error')) {
        removeError(this);
        // this.value = '';
      }
    };

    input.onblur = function() {
      this.parentNode.classList.remove('_active');

      if (input.value !== '') {
        input.classList.add('_complete');
      } else {
        input.classList.remove('_complete');
      }
    };
  });

  form.onsubmit = function(e) {
    e.preventDefault();

    const emptyInputs = Array.from(formInputs).filter(
      input => input.value === ''
    );

    const emptyCardFormInputs = Array.from(cardFormInputs).filter(
      input => input.value === ''
    );

    formInputs.forEach(function(input) {
      if (input.value === '' && emptyInputs.length > 0) {
        addError(input);

        return false;
      } else {
        removeError(input);
      }
    });

    cardFormInputs.forEach(function(input) {
      if (input.value === '' && emptyCardFormInputs.length > 0) {
        addError(input);

        return false;
      } else {
        removeError(input);
      }
    });

    if (inputEmail && inputEmail.value) {
      const emailVal = inputEmail.value;

      if (validateEmail && !validateEmail(emailVal)) {
        addError(inputEmail);

        return false;
      } else {
        removeError(inputEmail);
      }
    }

    if (form.closest('.order__card')) {
      const hasError = form.querySelector('input._error');

      if (hasError) {
        form.closest('.order__card').classList.add('_error');
      } else {
        form.closest('.order__card').classList.remove('_error');
      }
    }
  };
});

// Place order
const order = document.querySelector('.order');
const iconMenuOrder = document.querySelector('.icon-menu--order');
const orderHeadButtons = document.querySelectorAll('.steps-order__link');
const orderCards = document.querySelectorAll('.order__card');
const nextButtons = document.querySelectorAll('[data-next]');
const closeButton = document.querySelector('[data-close]');

function openOrder() {
  order.classList.add('_open');
  body.classList.add('_lock');
  iconMenuOrder.classList.add('_menu-open');
}

function closeOrder() {
  order.classList.remove('_open');
  body.classList.remove('_lock');
}

document.addEventListener('click', function(elem) {
  const targetElement = elem.target;

  if (targetElement.classList.contains('buy-now')) {
    openOrder();

    orderHeadButtons.forEach(orderHeadButton => {
      if (orderHeadButton.dataset.target === 'order') {
        orderHeadButton.parentElement.classList.add('_active');
      }

      orderHeadButton.addEventListener('click', function(e) {
        const targetCard = document.querySelector(
          `[data-card='${orderHeadButton.dataset.target}']`
        );

        orderCards.forEach(ordeCard => ordeCard.classList.remove('_active'));

        orderHeadButtons.forEach(
          el => el.parentElement.classList.remove('_active')
        );

        targetCard.classList.add('_active');
        orderHeadButton.parentElement.classList.add('_active');
      });
    });

    orderCards.forEach(orderCard => {
      if (orderCard.dataset.card === 'order') {
        orderCard.classList.add('_active');
      }

      nextButtons.forEach(nextButton => {
        nextButton.addEventListener('click', function(e) {
          const nextStep = nextButton.getAttribute('data-next');

          if (nextStep) {
            const nextCard = document.querySelector(
              `[data-card='${nextButton.dataset.next}']`
            );

            if (
              orderCard.classList.contains('_active')
                && !orderCard.classList.contains('_error')
            ) {
              orderCard.classList.remove('_active');
              nextCard.classList.add('_active');

              orderHeadButtons.forEach(orderHeadButton => {
                if (orderHeadButton.getAttribute('data-target') === nextStep) {
                  orderHeadButton.parentNode.classList.add('_active');
                } else {
                  orderHeadButton.parentNode.classList.remove('_active');
                }
              });
            }
          }
        });
      });
    });
  }

  if (targetElement === iconMenuOrder || targetElement === closeButton) {
    closeOrder();

    orderHeadButtons.forEach(orderHeadButton => {
      if (orderHeadButton.parentElement.classList.contains('_active')) {
        orderHeadButton.parentElement.classList.remove('_active');
      }
    });

    orderCards.forEach(orderCard => {
      if (orderCard.classList.contains('_active')) {
        orderCard.classList.remove('_active');
      }
    });
  }
});

/*
// Налаштування
Для селекту (select):
class='ім'я класу' - модифікатор до конкретного селекту
multiple - мультивибір
data-class-modif= 'ім'я модифікатора'
data-tags - режим тегів, тільки для (тільки для multiple)
data-scroll - увімкнути прокручування для списку, що випадає,
додатково можна підключити кастомний скролл
simplebar в app.js.
Зазначене число для атрибуту обмежить висоту
data-checkbox - стилізація елементів
по checkbox (тільки для multiple)
data-show-selected - вимикає приховування вибраного елемента
data-search - дозволяє шукати по списку, що випадає
data-open - селект відкритий відразу
data-submit - відправляє форму при зміні селекту

data-one-select -
селекти всередині оболонки з атрибутом показуватимуться лише по одному
data-pseudo-label -
додає псевдоелемент до заголовка селекту із зазначеним текстом

Для плейсхолдера (Плейсхолдер – це option з value=''):
data-label для плейсхолдера, додає label до селекту
data-show для плейсхолдера, показує його у списку (тільки для одиничного вибору)

Для елемента (option):
data-class='ім'я класу' - додає клас
data-asset='шлях до картинки або текст' - додає структуру 2х колонок та даними
data-href='адреса посилання' - додає посилання в елемент списку
data-href-blank - відкриє посилання у новому вікні
*/

// Select
const selectLanguages = {};

class SelectConstructor {
  constructor(props, data = null) {
    const defaultConfig = {
      init: true,
      logging: false,
    };

    this.config = Object.assign(defaultConfig, props);

    this.selectClasses = {
      classSelect: 'select',
      classSelectBody: 'select__body',
      classSelectTitle: 'select__title',
      classSelectValue: 'select__value',
      classSelectLabel: 'select__label',
      classSelectInput: 'select__input',
      classSelectText: 'select__text',
      classSelectLink: 'select__link',
      classSelectOptions: 'select__options',
      classSelectOptionsScroll: 'select__scroll',
      classSelectOption: 'select__option',
      classSelectContent: 'select__content',
      classSelectRow: 'select__row',
      classSelectData: 'select__asset',
      classSelectDisabled: '_select-disabled',
      classSelectTag: '_select-tag',
      classSelectOpen: '_select-open',
      classSelectActive: '_select-active',
      classSelectFocus: '_select-focus',
      classSelectMultiple: '_select-multiple',
      classSelectCheckBox: '_select-checkbox',
      classSelectOptionSelected: '_select-selected',
      classSelectPseudoLabel: '_select-pseudo-label',
    };
    this._this = this;

    if (this.config.init) {
      const selectItems = data
        ? document.querySelectorAll(data) : document.querySelectorAll('select');

      if (selectItems.length) {
        this.selectsInit(selectItems);
      }
    }
  }
  // Конструктор CSS класу
  getSelectClass(className) {
    return `.${className}`;
  }
  // Геттер елементів псевдоселекту
  getSelectElement(selectItem, className) {
    return {
      originalSelect: selectItem.querySelector('select'),
      selectElement: selectItem.querySelector(this.getSelectClass(className)),
    };
  }
  // Функція ініціалізації всіх селектів
  selectsInit(selectItems) {
    selectItems.forEach((originalSelect, index) => {
      this.selectInit(originalSelect, index + 1);
    });

    // Обробники подій...
    // ...при кліку
    document.addEventListener('click', function(e) {
      this.selectsActions(e);
    }.bind(this));

    // ...при натисканні клавіші
    document.addEventListener('keydown', function(e) {
      this.selectsActions(e);
    }.bind(this));

    // ...при фокусі
    document.addEventListener('focusin', function(e) {
      this.selectsActions(e);
    }.bind(this));

    // ...при втраті фокусу
    document.addEventListener('focusout', function(e) {
      this.selectsActions(e);
    }.bind(this));
  }
  // Функція ініціалізації конкретного селекту
  selectInit(originalSelect, index) {
    const _this = this;
    // Створюємо оболонку
    const selectItem = document.createElement('div');

    selectItem.classList.add(this.selectClasses.classSelect);
    // Виводимо оболонку перед оригінальним селектом
    originalSelect.parentNode.insertBefore(selectItem, originalSelect);
    // Поміщаємо оригінальний селект в оболонку
    selectItem.appendChild(originalSelect);
    // Приховуємо оригінальний селект
    originalSelect.hidden = true;
    // Привласнюємо унікальний ID
    // index ? originalSelect.dataset.id = index : null;

    // Робота з плейсхолдером
    if (this.getSelectPlaceholder(originalSelect)) {
      // Запам'ятовуємо плейсхолдер
      originalSelect.dataset.placeholder
        = this.getSelectPlaceholder(originalSelect).value;

      // Якщо увімкнено режим label
      if (this.getSelectPlaceholder(originalSelect).label.show) {
        const selectItemTitle = this.getSelectElement(
          selectItem, this.selectClasses.classSelectTitle
        ).selectElement;

        selectItemTitle.insertAdjacentHTML(
          'afterbegin', `<span class='${this.selectClasses.classSelectLabel}'>
          ${this.getSelectPlaceholder(originalSelect).label.text
    ? this.getSelectPlaceholder(originalSelect).label.text
    : this.getSelectPlaceholder(originalSelect).value}</span>`);
      }
    }

    // Конструктор основних елементів
    selectItem.insertAdjacentHTML(
      'beforeend', `<div class='${this.selectClasses.classSelectBody}'>
      <div hidden class='${this.selectClasses.classSelectOptions}'></div></div>`
    );
    // Запускаємо конструктор псевдоселекту
    this.selectBuild(originalSelect);

    // Запам'ятовуємо швидкість
    originalSelect.dataset.speed
      = originalSelect.dataset.speed ? originalSelect.dataset.speed : '150';

    // Подія при зміні оригінального select
    originalSelect.addEventListener('change', function(e) {
      _this.selectChange(e);
    });
  }
  // Конструктор псевдоселекту
  selectBuild(originalSelect) {
    const selectItem = originalSelect.parentElement;

    // Додаємо ID селекту
    selectItem.dataset.id = originalSelect.dataset.id;
    getSelect();

    // Отримуємо клас оригінального селекту,
    // створюємо модифікатор та додаємо його
    function getSelect() {
      return originalSelect.dataset.classModif
        ? selectItem.classList.add(
          `select--${originalSelect.dataset.classModif}`
        ) : null;
    }

    // Якщо множинний вибір, додаємо клас
    originalSelect.multiple
      ? selectItem.classList.add(
        this.selectClasses.classSelectMultiple
      ) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);

    // Cтилізація елементів під checkbox (тільки для multiple)
    originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple
      ? selectItem.classList.add(this.selectClasses.classSelectCheckBox)
      : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
    // Сеттер значення заголовка селекту
    this.setSelectTitleValue(selectItem, originalSelect);
    // Сеттер елементів списку (options)
    this.setOptions(selectItem, originalSelect);

    // Якщо увімкнено опцію пошуку data-search, запускаємо обробник
    // originalSelect.hasAttribute('data-search')
    //   ? this.searchActions(selectItem) : null;

    // Якщо вказано налаштування data-open, відкриваємо селект
    // originalSelect.hasAttribute('data-open')
    //   ? this.selectAction(selectItem) : null;
    // Обробник disabled
    this.selectDisabled(selectItem, originalSelect);
  }
  // Функція реакцій на події
  selectsActions(e) {
    const targetElement = e.target;
    const targetType = e.type;

    if (targetElement.closest(this.getSelectClass(
      this.selectClasses.classSelect))
      || targetElement.closest(
        this.getSelectClass(this.selectClasses.classSelectTag))) {
      const selectItem = targetElement.closest('.select')
        ? targetElement.closest('.select')
        : document.querySelector(
          `.${this.selectClasses.classSelect}[data-id='
            ${targetElement.closest(
    this.getSelectClass(
      this.selectClasses.classSelectTag)).dataset.selectId}']`);
      const originalSelect
        = this.getSelectElement(selectItem).originalSelect;

      if (targetType === 'click') {
        if (!originalSelect.disabled) {
          if (targetElement.closest(this.getSelectClass(
            this.selectClasses.classSelectTag)
          )) {
            // Обробка кліка на тег
            const targetTag = targetElement.closest(
              this.getSelectClass(this.selectClasses.classSelectTag)
            );
            const optionItem = document.querySelector(
              `.${this.selectClasses.classSelect}
              [data-id='${targetTag.dataset.selectId}']
              .select__option[data-value='${targetTag.dataset.value}']`);

            this.optionAction(selectItem, originalSelect, optionItem);
          } else if (targetElement.closest(this.getSelectClass(
            this.selectClasses.classSelectTitle)
          )) {
            // Обробка кліка на заголовок селекту
            this.selectAction(selectItem);
          } else if (
            targetElement.closest(this.getSelectClass(
              this.selectClasses.classSelectOption)
            )) {
            // Обробка кліка на елемент селекту
            const optionItem = targetElement.closest(this.getSelectClass(
              this.selectClasses.classSelectOption)
            );

            this.optionAction(selectItem, originalSelect, optionItem);
          }
        }
      } else if (targetType === 'focusin' || targetType === 'focusout') {
        if (targetElement.closest(this.getSelectClass(
          this.selectClasses.classSelect)
        )) {
          targetType === 'focusin'
            ? selectItem.classList.add(this.selectClasses.classSelectFocus)
            : selectItem.classList.remove(this.selectClasses.classSelectFocus);
        }
      } else if (targetType === 'keydown' && e.code === 'Escape') {
        this.selectsСlose();
      }
    } else {
      this.selectsСlose();
    }
  }
  // Функція закриття всіх селектів
  selectsСlose(selectOneGroup) {
    const selectsGroup = selectOneGroup || document;
    const selectActiveItems = selectsGroup.querySelectorAll(
      `${this.getSelectClass(this.selectClasses.classSelect
      )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);

    if (selectActiveItems.length) {
      selectActiveItems.forEach(selectActiveItem => {
        this.selectСlose(selectActiveItem);
      });
    }
  }
  // Функція закриття конкретного селекту
  selectСlose(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(
      selectItem, this.selectClasses.classSelectOptions
    ).selectElement;

    if (!selectOptions.classList.contains('_slide')) {
      selectItem.classList.remove(this.selectClasses.classSelectOpen);
      _slideUp(selectOptions, originalSelect.dataset.speed);
    }
  }
  // Функція відкриття/закриття конкретного селекту
  selectAction(selectItem) {
    const originalSelect = this.getSelectElement(selectItem).originalSelect;
    const selectOptions = this.getSelectElement(
      selectItem, this.selectClasses.classSelectOptions
    ).selectElement;

    // Якщо селективи розміщені в елементі з дата атрибутом data-one-select
    // закриваємо усі відкриті селекти
    if (originalSelect.closest('[data-one-select]')) {
      const selectOneGroup = originalSelect.closest('[data-one-select]');

      this.selectsСlose(selectOneGroup);
    }

    if (!selectOptions.classList.contains('_slide')) {
      selectItem.classList.toggle(this.selectClasses.classSelectOpen);
      _slideToggle(selectOptions, originalSelect.dataset.speed);
    }
  }
  // Сеттер значення заголовка селекту
  setSelectTitleValue(selectItem, originalSelect) {
    const selectItemBody = this.getSelectElement(
      selectItem, this.selectClasses.classSelectBody
    ).selectElement;
    const selectItemTitle = this.getSelectElement(
      selectItem, this.selectClasses.classSelectTitle
    ).selectElement;

    if (selectItemTitle) {
      selectItemTitle.remove();
    }

    selectItemBody.insertAdjacentHTML(
      'afterbegin', this.getSelectTitleValue(selectItem, originalSelect)
    );

    // originalSelect.hasAttribute('data-search')
    //   ? this.searchActions(selectItem) : null;
  }
  // Конструктор значення заголовка
  getSelectTitleValue(selectItem, originalSelect) {
    // Отримуємо вибрані текстові значення
    let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;

    // Обробка значень мультивибору
    // Якщо увімкнено режим тегів (вказано налаштування data-tags)
    if (originalSelect.multiple
      && originalSelect.hasAttribute('data-tags')) {
      selectTitleValue
        = this.getSelectedOptionsData(originalSelect).elements.map(
          option =>
            `<span role='button' data-select-id='${selectItem.dataset.id}'
            data-value='${option.value}' class='_select-tag'>
            ${this.getSelectElementContent(option)}</span>`).join('');

      // Якщо виведення тегів у зовнішній блок
      if (originalSelect.dataset.tags
        && document.querySelector(originalSelect.dataset.tags)) {
        document.querySelector(
          originalSelect.dataset.tags
        ).innerHTML = selectTitleValue;

        if (originalSelect.hasAttribute('data-search')) {
          selectTitleValue = false;
        }
      }
    }

    // Значення або плейсхолдер
    selectTitleValue = selectTitleValue.length
      ? selectTitleValue : (originalSelect.dataset.placeholder
        ? originalSelect.dataset.placeholder : '');

    // Якщо увімкнено режим pseudo
    let pseudoAttribute = '';
    let pseudoAttributeClass = '';

    if (originalSelect.hasAttribute('data-pseudo-label')) {
      pseudoAttribute = originalSelect.dataset.pseudoLabel
        ? ` data-pseudo-label='${originalSelect.dataset.pseudoLabel}'`
        : ` data-pseudo-label='Заповніть атрибут'`;
      pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
    }

    // Якщо є значення, додаємо клас
    this.getSelectedOptionsData(originalSelect).values.length
      ? selectItem.classList.add(this.selectClasses.classSelectActive)
      : selectItem.classList.remove(
        this.selectClasses.classSelectActive
      );

    // Повертаємо поле введення для пошуку чи текст
    if (originalSelect.hasAttribute('data-search')) {
      // Виводимо поле введення для пошуку
      return `<div class='${this.selectClasses.classSelectTitle}'>
        <span${pseudoAttribute}
        class='${this.selectClasses.classSelectValue}'>
        <input autocomplete='off' type='text'
        placeholder='${selectTitleValue}'
        data-placeholder='${selectTitleValue}'
        class='${this.selectClasses.classSelectInput}'></span></div>`;
    } else {
      // Якщо вибрано елемент зі своїм класом
      const customClass
        = this.getSelectedOptionsData(originalSelect).elements.length
          && this.getSelectedOptionsData(
            originalSelect
          ).elements[0].dataset.class
          ? ` ${this.getSelectedOptionsData(
            originalSelect
          ).elements[0].dataset.class}` : '';

      // Виводимо текстове значення
      return `<button type='button'
        class='${this.selectClasses.classSelectTitle}'>
        <span${pseudoAttribute}
        class='${this.selectClasses.classSelectValue}${pseudoAttributeClass}'>
        <span
        class='${this.selectClasses.classSelectContent}${customClass}'>
        ${selectTitleValue}</span></span></button>`;
    }
  }
  // Конструктор даних для значення заголовка
  getSelectElementContent(selectOption) {
    // Якщо для елемента вказано виведення картинки чи тексту,
    // перебудовуємо конструкцію
    const selectOptionData = selectOption.dataset.asset
      ? `${selectOption.dataset.asset}` : '';
    const selectOptionDataHTML = selectOptionData.indexOf('img') >= 0
      ? `<img src='${selectOptionData}' alt=''>` : selectOptionData;
    let selectOptionContentHTML = ``;

    selectOptionContentHTML += selectOptionData
      ? `<span class='${this.selectClasses.classSelectRow}'>` : '';

    selectOptionContentHTML += selectOptionData
      ? `<span class='${this.selectClasses.classSelectData}'>` : '';
    selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : '';
    selectOptionContentHTML += selectOptionData ? `</span>` : '';

    selectOptionContentHTML += selectOptionData
      ? `<span class='${this.selectClasses.classSelectText}'>` : '';
    selectOptionContentHTML += selectOption.textContent;
    selectOptionContentHTML += selectOptionData ? `</span>` : '';
    selectOptionContentHTML += selectOptionData ? `</span>` : '';

    return selectOptionContentHTML;
  }
  // Отримання даних плейсхолдера
  getSelectPlaceholder(originalSelect) {
    const selectPlaceholder
      = Array.from(originalSelect.options).find(option => !option.value);

    if (selectPlaceholder) {
      return {
        value: selectPlaceholder.textContent,
        show: selectPlaceholder.hasAttribute('data-show'),
        label: {
          show: selectPlaceholder.hasAttribute('data-label'),
          text: selectPlaceholder.dataset.label,
        },
      };
    }
  }
  // Отримання даних із вибраних елементів
  getSelectedOptionsData(originalSelect, type) {
    // Отримуємо всі вибрані об'єкти з select
    let selectedOptions = [];

    if (originalSelect.multiple) {
      // Якщо мультивибір
      // Забираємо плейсхолдер, отримуємо решту вибраних елементів
      selectedOptions = Array.from(
        originalSelect.options
      ).filter(
        option => option.value
      ).filter(option => option.selected);
    } else {
      // Якщо одиничний вибір
      selectedOptions.push(
        originalSelect.options[originalSelect.selectedIndex]
      );
    }

    return {
      elements: selectedOptions.map(option => option),
      values: selectedOptions.filter(
        option => option.value).map(option => option.value),
      html: selectedOptions.map(
        option => this.getSelectElementContent(option)),
    };
  }
  // Конструктор елементів списку
  getOptions(originalSelect) {
    // Налаштування скролла елементів
    const selectOptionsScroll
      = originalSelect.hasAttribute('data-scroll') ? `data-simplebar` : '';
    const selectOptionsScrollHeight = originalSelect.dataset.scroll
      ? `style='max-height:${originalSelect.dataset.scroll}px'` : '';
    // Отримуємо елементи списку
    let selectOptions = Array.from(originalSelect.options);

    if (selectOptions.length > 0) {
      let selectOptionsHTML = ``;

      // Якщо вказано налаштування data-show, показуємо плейсхолдер у списку
      if ((this.getSelectPlaceholder(originalSelect)
        && !this.getSelectPlaceholder(originalSelect).show)
        || originalSelect.multiple) {
        selectOptions = selectOptions.filter(option => option.value);
      }

      // Будуємо та виводимо основну конструкцію
      selectOptionsHTML += selectOptionsScroll
        ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight}
          class='${this.selectClasses.classSelectOptionsScroll}'>` : '';

      selectOptions.forEach(selectOption => {
        // Отримуємо конструкцію конкретного елемента списку
        selectOptionsHTML += this.getOption(
          selectOption, originalSelect
        );
      });
      selectOptionsHTML += selectOptionsScroll ? `</div>` : '';

      return selectOptionsHTML;
    }
  }
  // Конструктор конкретного елемента списку
  getOption(selectOption, originalSelect) {
    // Якщо елемент вибрано та увімкнено режим мультивибору, додаємо клас
    const selectOptionSelected = selectOption.selected
      && originalSelect.multiple
      ? ` ${this.selectClasses.classSelectOptionSelected}` : '';
    // Якщо елемент вибраний і немає налаштування data-show-selected,
    // приховуємо елемент
    const selectOptionHide
      = selectOption.selected
        && !originalSelect.hasAttribute('data-show-selected')
        && !originalSelect.multiple ? `hidden` : ``;
    // Якщо для елемента зазначений клас додаємо
    const selectOptionClass = selectOption.dataset.class
      ? ` ${selectOption.dataset.class}` : '';
    // Якщо вказано режим посилання
    const selectOptionLink = selectOption.dataset.href
      ? selectOption.dataset.href : false;
    const selectOptionLinkTarget
      = selectOption.hasAttribute('data-href-blank')
        ? `target='_blank'` : '';
    // Будуємо та повертаємо конструкцію елемента
    let selectOptionHTML = ``;

    selectOptionHTML += selectOptionLink
      ? `<a ${selectOptionLinkTarget} ${selectOptionHide}
      href='${selectOptionLink}' data-value='${selectOption.value}'
      class='${this.selectClasses.classSelectOption}
      ${selectOptionClass}${selectOptionSelected}'>`
      : `<button ${selectOptionHide}
        class='${this.selectClasses.classSelectOption}
        ${selectOptionClass}${selectOptionSelected}'
        data-value='${selectOption.value}' type='button'>`;
    selectOptionHTML += this.getSelectElementContent(selectOption);
    selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;

    return selectOptionHTML;
  }
  // Сеттер елементів списку (options)
  setOptions(selectItem, originalSelect) {
    // Отримуємо об'єкт тіла псевдоселекту
    const selectItemOptions = this.getSelectElement(
      selectItem, this.selectClasses.classSelectOptions
    ).selectElement;

    // Запускаємо конструктор елементів списку (options)
    // та додаємо в тіло псевдоселекту
    selectItemOptions.innerHTML
      = this.getOptions(originalSelect);
  }
  // Обробник кліку на пункт списку
  optionAction(selectItem, originalSelect, optionItem) {
    if (originalSelect.multiple) { // Якщо мультивибір
      // Виділяємо класом елемент
      optionItem.classList.toggle(
        this.selectClasses.classSelectOptionSelected
      );

      // Очищаємо вибрані елементи
      const originalSelectSelectedItems
        = this.getSelectedOptionsData(originalSelect).elements;

      originalSelectSelectedItems.forEach(originalSelectSelectedItem => {
        originalSelectSelectedItem.removeAttribute('selected');
      });

      // Вибираємо елементи
      const selectSelectedItems = selectItem.querySelectorAll(
        this.getSelectClass(this.selectClasses.classSelectOptionSelected)
      );

      selectSelectedItems.forEach(selectSelectedItem => {
        originalSelect.querySelector(
          `option[value='${selectSelectedItem.dataset.value}']`
        ).setAttribute('selected', 'selected');
      });
    } else { // Якщо одиничний вибір
      // Якщо не вказано налаштування data-show-selected,
      // приховуємо вибраний елемент
      if (!originalSelect.hasAttribute('data-show-selected')) {
        // Спочатку все показати
        if (selectItem.querySelector(
          `${this.getSelectClass(
            this.selectClasses.classSelectOption
          )}[hidden]`
        )) {
          selectItem.querySelector(`${this.getSelectClass(
            this.selectClasses.classSelectOption)
          }[hidden]`).hidden = false;
        }
        // Приховуємо вибрану
        optionItem.hidden = true;
      }

      originalSelect.value = optionItem.hasAttribute('data-value')
        ? optionItem.dataset.value : optionItem.textContent;
      this.selectAction(selectItem);
    }
    // Оновлюємо заголовок селекту
    this.setSelectTitleValue(selectItem, originalSelect);
    // Викликаємо реакцію на зміну селекту
    this.setSelectChange(originalSelect);
  }
  // Реакція на зміну оригінального select
  selectChange(e) {
    const originalSelect = e.target;

    this.selectBuild(originalSelect);
    this.setSelectChange(originalSelect);
  }
  // Обробник зміни у селекті
  setSelectChange(originalSelect) {
    // Миттєва валідація селекту
    // if (originalSelect.hasAttribute('data-validate')) {
    //   formValidate.validateInput(originalSelect);
    // }

    // При зміні селекту надсилаємо форму
    if (originalSelect.hasAttribute('data-submit') && originalSelect.value) {
      const tempButton = document.createElement('button');

      tempButton.type = 'submit';
      originalSelect.closest('form').append(tempButton);
      tempButton.click();
      tempButton.remove();
    }

    const selectItem = originalSelect.parentElement;

    // Виклик коллбек функції
    this.selectCallback(selectItem, originalSelect);
  }
  // Обробник disabled
  selectDisabled(selectItem, originalSelect) {
    if (originalSelect.disabled) {
      selectItem.classList.add(this.selectClasses.classSelectDisabled);

      this.getSelectElement(
        selectItem, this.selectClasses.classSelectTitle
      ).selectElement.disabled = true;
    } else {
      selectItem.classList.remove(
        this.selectClasses.classSelectDisabled
      );

      this.getSelectElement(
        selectItem, this.selectClasses.classSelectTitle
      ).selectElement.disabled = false;
    }
  }
  // Обробник пошуку за елементами списку
  searchActions(selectItem) {
    // const originalSelect
    //   = this.getSelectElement(selectItem).originalSelect;
    const selectInput
      = this.getSelectElement(
        selectItem, this.selectClasses.classSelectInput
      ).selectElement;
    const selectOptions
      = this.getSelectElement(
        selectItem, this.selectClasses.classSelectOptions
      ).selectElement;
    const selectOptionsItems
      = selectOptions.querySelectorAll(
        `.${this.selectClasses.classSelectOption}`
      );
    // const _this = this;

    selectInput.addEventListener('input', function() {
      selectOptionsItems.forEach(selectOptionsItem => {
        if (selectOptionsItem.textContent.toUpperCase().includes(
          selectInput.value.toUpperCase())
        ) {
          selectOptionsItem.hidden = false;
        } else {
          selectOptionsItem.hidden = true;
        }
      });

      // Якщо список закритий відкриваємо
      // selectOptions.hidden === true
      //   ? _this.selectAction(selectItem) : null;
    });
  }
  // Коллбек функція
  // selectCallback(selectItem, originalSelect) {
  //   document.dispatchEvent(new CustomEvent('selectCallback', {
  //     detail: {
  //       select: originalSelect,
  //     },
  //   }));
  // }
}

selectLanguages.select = new SelectConstructor({});

// Button up
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.up');

  window.onscroll = function() {
    if (window.pageYOffset > 580) {
      toTopBtn.classList.add('_up-show');
    } else {
      toTopBtn.classList.remove('_up-show');
    }
  };

  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});

// Dynamic Adapt
class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }
  init() {
    this.оbjects = [];
    this.daClassname = '_dynamic_adapt_';
    this.nodes = [...document.querySelectorAll('[data-da]')];

    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(',');
      const оbject = {};

      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
      оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });

    this.arraySort(this.оbjects);

    this.mediaQueries = this.оbjects
      .map(({ breakpoint }) =>
        `(${this.type}-width: ${breakpoint}px),${breakpoint}`
      )
      .filter((item, index, self) => self.indexOf(item) === index);

    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      const оbjectsFilter = this.оbjects.filter(({ breakpoint }) =>
        breakpoint === mediaBreakpoint);

      matchMedia.addEventListener('change', () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        // оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);

    if (place === 'last' || place >= destination.children.length) {
      destination.append(element);

      return;
    }

    if (place === 'first') {
      destination.prepend(element);

      return;
    }
    destination.children[place].before(element);
  }
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);

    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  arraySort(arr) {
    if (this.type === 'min') {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === 'first' || b.place === 'last') {
            return -1;
          }

          if (a.place === 'last' || b.place === 'first') {
            return 1;
          }

          return 0;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === 'first' || b.place === 'last') {
            return 1;
          }

          if (a.place === 'last' || b.place === 'first') {
            return -1;
          }

          return 0;
        }

        return b.breakpoint - a.breakpoint;
      });
    }
  }
}

const da = new DynamicAdapt('max');

da.init();

// Документація по роботі у шаблоні:
// Документація плагіна: https://atomiks.github.io/tippyjs/
// Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
tippy('.tech__tip', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);

    return template.innerHTML;
  },
  allowHTML: true,
  placement: 'bottom-end',
  duration: 500,
  hideOnClick: 'toggle',
  trigger: 'click mouseenter',
});

function initHomeSliders() {
  if (document.querySelector('.home__slider')) {
    return new Swiper('.home__slider', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 50,
      autoHeight: false,
      simulateTouch: true,
      speed: 800,
      pagination: {
        el: '.home-progressbar',
        type: 'progressbar',
      },

      navigation: {
        prevEl: '.home-prev',
        nextEl: '.home-next',
      },
    });
  }
}

function initAboutSliderMob() {
  if (document.querySelector('.about-product__slider--m')) {
    return new Swiper('.about-product__slider--m', {
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 50,
      autoHeight: false,
      simulateTouch: true,
      speed: 800,

      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 50,
          pagination: {
            el: '.about-product__bullets',
            type: 'bullets',
            clickable: 'true',
          },
        },
      },
    });
  }
}

function initAboutSliderDesk() {
  if (document.querySelector('.about-product__slider--d')) {
    return new Swiper('.about-product__slider--d', {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 50,
      autoHeight: false,
      speed: 800,

      breakpoints: {
        991.98: {
          navigation: {
            prevEl: '.about-prev',
            nextEl: '.about-next',
          },
          pagination: {
            el: '.about-progressbar',
            type: 'progressbar',
          },
        },
      },
      on: {
        init: function(swiper) {
          const allSlides = document.querySelector(
            '.fraction-controll__all'
          );

          const currentSlide = document.querySelector(
            '.fraction-controll__current'
          );

          currentSlide.innerHTML = swiper.activeIndex + 1;

          allSlides.innerHTML = swiper.slides.length;
        },

        slideChange: function(swiper) {
          const currentSlide = document.querySelector(
            '.fraction-controll__current'
          );

          // console.log(swiper);
          currentSlide.innerHTML = swiper.activeIndex + 1;
        },
      },
    });
  }
}

window.addEventListener('load', function(e) {
  initHomeSliders();
  initAboutSliderMob();
  initAboutSliderDesk();
});
