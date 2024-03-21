'use strict';

// language menu
const lang = () => {
  const home = document.querySelector('#home');
  const htmlLang = document.querySelector('.html');
  const dropdownButton = home.querySelector('.dropdown__button');
  const dropdownList = home.querySelectorAll('.dropdown__list');
  const menuList = document.querySelectorAll('.menu__lang-link');

  let langHref = 'en';
  let langName = 'En';

  const dropdown = () => {
    const dropdownMenu = document.querySelector('.dropdown__menu');

    dropdownButton.addEventListener('click', (event) => {
      event.preventDefault();

      dropdownMenu.classList.toggle('dropdown__menu--active');
      dropdownButton.classList.toggle('dropdown__button--active');
    });

    document.addEventListener('click', (event) => {
      if (!event.target.classList.contains('dropdown__button')) {
        dropdownMenu.classList.remove('dropdown__menu--active');
        dropdownButton.classList.remove('dropdown__button--active');
      }
    });
  };

  const updateDropdown = () => {
    for (let i = 0; i < dropdownList.length; i++) {
      if (langHref === dropdownList[i].children[0].href.match(/#(.*)/)[1]) {
        dropdownButton.textContent = langName;
        dropdownList[i].classList.add('dropdown__list--active');
      } else {
        dropdownList[i].classList.remove('dropdown__list--active');
      }
    }
  };

  const updateMenu = () => {
    for (let i = 0; i < menuList.length; i++) {
      if (langHref === menuList[i].href.match(/#(.*)/)[1]) {
        menuList[i].classList.add('menu__lang-link--active');
      } else {
        menuList[i].classList.remove('menu__lang-link--active');
      }
    }
  };

  const selectLangInDropdown = () => {
    for (let i = 0; i < dropdownList.length; i++) {
      dropdownList[i].addEventListener('click', (event) => {
        langHref = dropdownList[i].children[0].href.match(/#(.*)/)[1];
        langName = dropdownList[i].children[0].textContent;

        htmlLang.lang = langHref;

        updateDropdown();
        updateMenu();
      });
    }
  };

  const selectLangInMenu = () => {
    for (let i = 0; i < menuList.length; i++) {
      menuList[i].addEventListener('click', (event) => {
        langHref = menuList[i].href.match(/#(.*)/)[1];
        langName = menuList[i].name;

        htmlLang.lang = langHref;

        updateDropdown();
        updateMenu();
      });
    }
  };

  dropdown();
  selectLangInDropdown();
  selectLangInMenu();
};

// header navigation
const navigation = () => {
  const link = document.querySelectorAll('.header__right-link');

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', (event) => {
      event.preventDefault();

      for (let j = 0; j < link.length; j++) {
        link[j].classList.remove('header__right-link--active');
      }
      link[i].classList.add('header__right-link--active');
    });
  }
};

// block faq
const faq = () => {
  const questions = document.querySelectorAll('.faq__question');
  const questionsLink = document.querySelectorAll('.faq__question-name');
  const main = document.querySelectorAll('.faq__question-main');
  const more = document.querySelector('.faq__more-button');

  // close other questions
  const closeAll = (notThis) => {
    for (let i = 0; i < questionsLink.length; i++) {
      if (notThis !== i) {
        main[i].classList.remove('faq__question-main--show');
      }
    }
  };

  // open or close questions
  for (let i = 0; i < questionsLink.length; i++) {
    questionsLink[i].addEventListener('click', (event) => {
      event.preventDefault();

      closeAll(i);

      main[i].classList.toggle('faq__question-main--show');
    });
  }

  // show more questions
  more.addEventListener('click', (event) => {
    event.preventDefault();

    for (let i = 0; i < questions.length; i++) {
      questions[i].classList.remove('faq__question--hidden');
      more.classList.add('more--disabled');
    }
  });
};

// block buy
const buy = () => {
  const button = document.querySelectorAll('.buy__button');
  let globalQuantity = 1;

  const flkty = new window.Flickity('.buy__carousel', {
    contain: true,
    draggable: false,
    pageDots: false,
    prevNextButtons: false,
    button: false,
    wrapAround: true,
    adaptiveHeight: true,
  });

  const disabledAll = (notThis) => {
    for (let i = 0; i < button.length; i++) {
      if (i !== notThis) {
        button[i].classList.remove('buy__button--active');
      }
    }
  };

  const quantity = () => {
    const quantityBlock = document.querySelector('.is-selected');
    const toggle = quantityBlock.querySelector('.quantity__quantity-toggle');
    const value = quantityBlock.querySelector('.quantity__quantity-value');
    const value2 = document.querySelector('#quantity2');
    const price = quantityBlock.querySelector('.quantity__price-input');
    const price2 = document.querySelector('#price2');
    const plus = quantityBlock.querySelector(
      '.quantity__quantity-button--plus',
    );
    const minus = quantityBlock.querySelector(
      '.quantity__quantity-button--minus',
    );

    value.value = globalQuantity;
    value2.value = globalQuantity;

    toggle.addEventListener('click', (event) => {
      if (event.target === plus) {
        globalQuantity++;
      } else if (event.target === minus) {
        globalQuantity -= globalQuantity <= 1 ? 0 : 1;
      }

      value.value = globalQuantity;
      value2.value = globalQuantity;
      price.value = globalQuantity * 1200 + '$';
      price2.value = globalQuantity * 1200 + '$';
      price.size = price.value.length - 4;
      price2.size = price.value.length - 4;
    });
  };

  const blockInput = () => {
    const inputs = document.querySelectorAll('.input-block__input');

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value.length > 0) {
          input.classList.add('input-block__input--true');
        } else {
          input.classList.remove('input-block__input--true');
        }
      });
    });
  };

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
      event.preventDefault();

      flkty.select(i);
      disabledAll(i);
      button[i].classList.add('buy__button--active');
    });
  }

  // format card-number
  document.getElementById('card-number').addEventListener('input', (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 16);
    const formattedInput = input.replace(
      /(\d{4})(\d{4})(\d{4})(\d{4})/,
      '$1 $2 $3 $4',
    );

    e.target.value = formattedInput;
  });

  // format date card-number
  document.getElementById('card-date').addEventListener('input', (e) => {
    const input = e.target.value.replace(/[^0-9/]/g, '').substring(0, 5);
    const formattedInput = input.replace(/(\d{2})(\d{2})/, '$1/$2');

    e.target.value = formattedInput;
  });

  // format date card-number
  document.getElementById('card-cvv').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
  });

  blockInput();
  quantity();
};

// block product
const aboutSlider = () => {
  const flkty = new window.Flickity('.product__carousel', {
    contain: true,
    prevNextButtons: true,
    setGallerySize: false,
  });
  const totalSlides = document.querySelector('.product__carousel-index-total');
  const activerSlide = document.querySelector(
    '.product__carousel-index-active',
  );

  totalSlides.textContent = flkty.cells.length;

  document.querySelector('#prev').addEventListener('click', (e) => {
    e.preventDefault();
    flkty.previous(true);
    activerSlide.textContent = flkty.selectedIndex + 1;
  });

  document.querySelector('#next').addEventListener('click', (e) => {
    e.preventDefault();
    flkty.next(true);
    activerSlide.textContent = flkty.selectedIndex + 1;
  });
};

lang();
navigation();
faq();
buy();
aboutSlider();
