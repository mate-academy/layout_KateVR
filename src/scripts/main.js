'use strict';

const body = document.body;
const page = document.documentElement;

const menu = document.getElementById('menu');
const openMenuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('menu-close');

openMenuButton.addEventListener('click', () => {
  openMenu()
})

closeMenuButton.addEventListener('click', () => {
  closeMenu();
})

function openMenu() {
  menu.classList.add('menu--open');
  body.style.overflowY = "hidden";
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeMenu() {
  menu.classList.remove('menu--open');
  body.style.overflowY = "auto";
  page.style.paddingRight = 0;
}

document.addEventListener('click', function(e) {
  const target = e.target;

  if (target.tagName === 'A' && target.href.includes('#')) {
    e.preventDefault();
    closeMenu()

      const targetId = target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
        });
      }
  }
});


const language = document.getElementById('language');
const openLanguageButton = document.querySelector('.language-link');
const closeLanguageButton = document.getElementById('language-close');

function openLanguage() {
  language.classList.add('language--open');
  body.style.overflowY = "hidden";
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeLanguage() {
  language.classList.remove('language--open');
  body.style.overflowY = "auto";
  page.style.paddingRight = 0;
}

openLanguageButton.addEventListener('click', () => {
  openLanguage();
})

closeLanguageButton.addEventListener('click', () => {
  closeLanguage();
})


language.addEventListener('click', (e) => {
  if (e.target.closest('li')) {
    closeLanguage();
  }

  e.stopPropagation();
});


document.addEventListener('click', (e) => {
  if (
    !language.contains(e.target)
    && language.classList.contains('language--open')
    && e.target !== openLanguageButton
  ) {
    closeLanguage();
    return;
  }
});

const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown__btn");
const dropdownContent = document.querySelector(".dropdown__content");
const options = dropdownContent.querySelectorAll("li");

dropdownBtn.addEventListener("click", function () {
    dropdown.classList.toggle("dropdown--active");
});

document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("dropdown--active");
    }
});

options.forEach(option => {
    option.addEventListener("click", function () {
        dropdownBtn.textContent = this.textContent;
        dropdown.classList.remove("dropdown--active");
    });
});

const help = document.getElementById('help');
const openHelpButtons = document.querySelectorAll('.help-link');
const closeHelpButton = document.getElementById('help-close');
const helpServiceBtn = help.querySelectorAll('.help__service-btn')

function openHelp() {
  help.classList.add('help--open');
  body.style.overflowY = "hidden";
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeHelp() {
  help.classList.remove('help--open');
  body.style.overflowY = "auto";
  page.style.paddingRight = 0;
}

openHelpButtons.forEach(btn => btn.addEventListener('click', () => {
  openHelp();pageMenuContent
}));

closeHelpButton.addEventListener('click', () => {
  closeHelp();
})

helpServiceBtn.forEach(btn => btn.addEventListener('click', () => {
  closeHelp();
}));

const faq = document.getElementById('faq');
const openFaqButtons = document.querySelectorAll('.faq-link');
const closeFaqButton = document.getElementById('faq-close');

function openFaq() {
  faq.classList.add('faq--open');
  body.style.overflowY = "hidden";
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeFaq() {
  faq.classList.remove('faq--open');
  body.style.overflowY = "auto";
  page.style.paddingRight = 0;
}

openFaqButtons.forEach(btn => btn.addEventListener('click', () => {
  openFaq();
}));

closeFaqButton.addEventListener('click', () => {
  closeFaq();
})

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", function () {
      this.classList.toggle("accordion--open");
  });
});



if (window.innerWidth >= 1280) {
  const swiper = new Swiper('.swiper-header', {
    loop: true,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      prevEl: '.slider__navigation--prev',
      nextEl: '.slider__navigation--next',
    },

    scrollbar: {
      el: ".header__swiper-scrollbar",
      dragClass:"header__swiper-scrollbar-drag",
    },
  });
}

const swiper = new Swiper('.about__swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  navigation: {
    prevEl: '.slider__navigation--prev',
    nextEl: '.slider__navigation--next',
  },

  scrollbar: {
    el: ".about__swiper-scrollbar",
    dragClass:"about__swiper-scrollbar-drag",
  },

  pagination: {
    el: ".about__swiper-pagination--bullet",
    clickable: true,
    bulletActiveClass:"about__swiper-pagination-bullet-active",
    bulletClass:"about__swiper-pagination-bullet",
  },

  breakpoints: {
    1280: {
      pagination: {
        el: '.about__slider-pagination--fraction',
        type: 'fraction',
        currentClass: 'pagination-current',
        totalClass: 'pagination-total'
      }
    },
  }
})

const techSpecButtons = document.querySelectorAll(".tech__spec-button");

techSpecButtons.forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.closest(".tech__spec");
      const info = parent.querySelector(".tech__spec-info");
      info.classList.toggle("tech__spec-info--show");
      this.classList.toggle("tech__spec-button--active");
    });
});

const frm = document.forms.contact__form;

const name = frm.name;
const nameLabel = document.querySelector('label[for="name"]');
const nameLabelText = nameLabel.innerText;

const email = frm.email;
const emailLabel = document.querySelector('label[for="email"]');
const emailLabelText = emailLabel.innerText;

const phone = frm.phone;
const phoneLabel = document.querySelector('label[for="phone"]');
const phoneLabelText = phoneLabel.innerText;

const submitBtn = document.querySelector('.form__submit-btn');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
  let err = false;

  if (!name.value) {
    nameField.setError(nameField.msg);
    err = true;
  }

  if (!email.value) {
    emailField.setError(emailField.msg);
    err = true;
  }

  if (!phone.value) {
    phoneField.setError(phoneField.msg);
    err = true;
  }

  if (err) {
    return;
  }

  const elements = [...frm.elements];

  elements.forEach(element => {
    element.disabled = true;
  })

  const btnText = submitBtn.firstElementChild;

  const text = btnText.innerText;

  btnText.innerText = '';

  wait()
    .then(() => {
      frm.reset();
    })
    .finally(() => {
      elements.forEach(element => {
        element.disabled = '';
      })
      btnText.innerText = text;
    })
});

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

class Field {
  constructor(input, label, labelText, msg) {
    this.input = input;
    this.label = label;
    this.labelText = labelText;
    this.errMsg = '';
    this.msg = msg;
  }

  setError(msg) {
    this.label.innerText = msg;
    this.label.style.color = '#860404';
    this.input.style.borderBottomColor = '#860404';
  };

  clearError() {
    this.label.innerText = this.labelText;
    this.label.style.color = '';
    this.input.style.borderBottomColor = '';
  };
}

const nameField = new Field(name, nameLabel, nameLabelText, 'Please, fill your name*');
const emailField = new Field(email, emailLabel, emailLabelText, 'Please, fill your email*');
const phoneField = new Field(phone, phoneLabel, phoneLabelText, 'Please, fill your phone*');

const createHandlers = (field) => {
  field.input.addEventListener('blur', (e) => {
    if (!e.target.value.trim()) {
      field.setError(field.msg);
    }
  });

  field.input.addEventListener('input', () => {
    field.clearError();
  });
}

createHandlers(nameField);
createHandlers(emailField);
createHandlers(phoneField);
