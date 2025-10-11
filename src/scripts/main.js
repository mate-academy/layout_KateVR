/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
'use strict';

const body = document.body;
const page = document.documentElement;

const menu = document.getElementById('menu1');
const openMenuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('menu-close');

openMenuButton.addEventListener('click', () => {
  openMenu();
});

closeMenuButton.addEventListener('click', () => {
  closeMenu();
});

function openMenu() {
  menu.classList.add('menu1--open');
  body.style.overflowY = 'hidden';
  // page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeMenu() {
  menu.classList.remove('menu1--open');
  body.style.overflowY = 'auto';
  page.style.paddingRight = 0;
}

// Function to get all href attributes from <a> elements in the document
function getAllHrefLinks() {
  // Use document.querySelectorAll to select all <a> elements
  const parentElement = document.getElementById('menu1');
  const links = parentElement.querySelectorAll('a');

  // Extract the href attributes into an array
  const hrefs = Array.from(links) // Convert NodeList to Array
    .map(link => link.getAttribute('href')) // Get the href attribute
    .filter(href => href !== null && href.trim() !== ''); // Filter out null or empty hrefs

  return hrefs;
}

// Example usage
const allLinks = getAllHrefLinks();

document.addEventListener('click', function(e) {
  const target = e.target;
  const targetId = target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (allLinks.some(
    (element) => element === targetId,
  )
  ) {
    e.preventDefault();
    closeMenu();

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
});

const language = document.getElementById('language');
const openLanguageButton = document.querySelector('.language-link');
const closeLanguageButton = document.getElementById('language-close');

function openLanguage() {
  language.classList.add('language--open');
  body.style.overflowY = 'hidden';
  // page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeLanguage() {
  language.classList.remove('language--open');
  body.style.overflowY = 'auto';
  page.style.paddingRight = 0;
}

openLanguageButton.addEventListener('click', () => {
  openLanguage();
});

closeLanguageButton.addEventListener('click', () => {
  closeLanguage();
});

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
  }
});

const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownContent = document.querySelector('.dropdown__content');
const options = dropdownContent.querySelectorAll('li');

dropdownBtn.addEventListener('click', function() {
  dropdown.classList.toggle('dropdown--active');
});

document.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('dropdown--active');
  }
});

options.forEach((option) => {
  option.addEventListener('click', function() {
    dropdownBtn.textContent = this.textContent;
    dropdown.classList.remove('dropdown--active');
  });
});

const help = document.getElementById('help');
const openHelpButtons = document.querySelectorAll('.help-link');
const closeHelpButton = document.getElementById('help-close');
const helpServiceBtn = help.querySelectorAll('.help__service-btn');

function openHelp() {
  help.classList.add('help--open');
  body.style.overflowY = 'hidden';
  // page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeHelp() {
  help.classList.remove('help--open');
  body.style.overflowY = 'auto';
  page.style.paddingRight = 0;
}

openHelpButtons.forEach(
  (btn) =>
    btn.addEventListener('click', () => {
      openHelp();
      // pageMenuContent;
    }),
  // eslint-disable-next-line function-paren-newline
);

closeHelpButton.addEventListener('click', () => {
  closeHelp();
});

helpServiceBtn.forEach(
  (btn) =>
    btn.addEventListener('click', () => {
      closeHelp();
    }),
  // eslint-disable-next-line function-paren-newline
);

const faq = document.getElementById('faq');
const openFaqButtons = document.querySelectorAll('.faq-link');
const closeFaqButton = document.getElementById('faq-close');

function openFaq() {
  faq.classList.add('faq--open');
  body.style.overflowY = 'hidden';
  // page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeFaq() {
  faq.classList.remove('faq--open');
  body.style.overflowY = 'auto';
  page.style.paddingRight = 0;
}

openFaqButtons.forEach(
  (btn) =>
    btn.addEventListener('click', () => {
      openFaq();
    }),
  // eslint-disable-next-line function-paren-newline
);

closeFaqButton.addEventListener('click', () => {
  closeFaq();
});

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function() {
    this.classList.toggle('accordion--open');
  });
});

if (window.innerWidth >= 1280) {
  // eslint-disable-next-line no-shadow
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
      el: '.header__swiper-scrollbar',
      dragClass: 'header__swiper-scrollbar-drag',
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
    el: '.about__swiper-scrollbar',
    dragClass: 'about__swiper-scrollbar-drag',
  },

  pagination: {
    el: '.about__swiper-pagination--bullet',
    clickable: true,
    bulletActiveClass: 'about__swiper-pagination-bullet-active',
    bulletClass: 'about__swiper-pagination-bullet',
  },

  breakpoints: {
    1280: {
      pagination: {
        el: '.about__slider-pagination--fraction',
        type: 'fraction',
        currentClass: 'pagination-current',
        totalClass: 'pagination-total',
      },
    },
  },
});

const techSpecButtons = document.querySelectorAll('.tech__spec-button');

techSpecButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.tech__spec');
    const info = parent.querySelector('.tech__spec-info');
    const specButton = parent.querySelector('.tech__spec-button');

    info.classList.toggle('tech__spec-info--show');
    specButton.classList.toggle('tech__spec-button--active');
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

  elements.forEach((element) => {
    element.disabled = true;
  });

  const btnText = submitBtn.firstElementChild;

  const text = btnText.innerText;

  btnText.innerText = '';

  wait()
    .then(() => {
      frm.reset();
    })
    .finally(() => {
      elements.forEach((element) => {
        element.disabled = '';
      });
      btnText.innerText = text;
    });
});

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
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
  }

  clearError() {
    this.label.innerText = this.labelText;
    this.label.style.color = '';
    this.input.style.borderBottomColor = '';
  }
}

const nameField = new Field(
  name,
  nameLabel,
  nameLabelText,
  'Please, fill your name*',
);
const emailField = new Field(
  email,
  emailLabel,
  emailLabelText,
  'Please, fill your email*',
);
const phoneField = new Field(
  phone,
  phoneLabel,
  phoneLabelText,
  'Please, fill your phone*',
);

const createHandlers = (field) => {
  field.input.addEventListener('blur', (e) => {
    if (!e.target.value.trim()) {
      field.setError(field.msg);
    }
  });

  field.input.addEventListener('input1', () => {
    field.clearError();
  });
};

createHandlers(nameField);
createHandlers(emailField);
createHandlers(phoneField);

// Get references to the video and button elements

const playButton = document.getElementById('playButton');
const buttonsPlay = document.querySelectorAll('.my-button-play');
const existingIframe = document.getElementById('myIframe');
const closeButton = document.getElementById('close-button');
const videoContainer = document.getElementById('video-container');

// Add a click event listener to the button
buttonsPlay.forEach((button, index) => {
  button.addEventListener('click', () => {
    videoContainer.append(existingIframe);
    videoContainer.style.display = 'block';

    if (index === 0) {
      videoContainer.style.top = '130px';
    } else if (index === 1) {
      if (window.innerWidth > 1280) {
        videoContainer.style.top = '1380px';
      } else if (window.innerWidth > 768) {
        videoContainer.style.top = '1130px';
      } else if (window.innerWidth <= 768) {
        videoContainer.style.top = '1530px';
      }
    }
  });
});

// playButton.addEventListener('click', () => {
//  videoContainer.append(existingIframe);
// Check if the video is paused
/*
  const newIframe = document.createElement('iframe'); // Create new iframe

  newIframe.id = 'myIframe';

  newIframe.src
      = 'https://www.youtube.com/embed/SvTbB19bvIw?si=l7gxztTxlRT-R5oJ'; // Set iframe source
  newIframe.title = 'YouTube video player';
  newIframe.className = 'video';

  newIframe.allow
      = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  newIframe.referrerPolicy = 'strict-origin-when-cross-origin';
  newIframe.allowFullscreen = 'true';

  videoContainer.appendChild(newIframe); */
// videoContainer.style.display = 'block';
// });

// Get references to the video player and close button

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the video container

  // Call the function to pause the video
  // closeIFrame();
  // existingIframe.remove();
  if (player) {
    stopVideo(); // Stops the video
  }
  closeIFrame();
  videoContainer.style.display = 'none';
});

function closeIFrame() {
  if (existingIframe) {
    existingIframe.remove();
  }
}

// Dynamically load the YouTube Iframe API script
const tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
// document.head.appendChild(tag);

const firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Load the YouTube Iframe API
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('myIframe', {
    videoId: 'SvTbB19bvIw?si=l7gxztTxlRT-R5oJ',
    playerVars: {
      'playsinline': 1,
      'autoplay': 1,
      'controls': 1,
    },
    events: {
      'onReady': onPlayerReady(),
      'onStateChange': onPlayerStateChange(),
    },
  });
}

function onPlayerReady(event) {
  videoContainer.style.borderColor = '#0760c5ff';
  event.target.playVideo();

  if (event.data === YT.PlayerState.PLAYING) {
    videoContainer.style.borderColor = '#dfee0dff';
  }
}

// let done = false;

function onPlayerStateChange(event) {
  /* if (event.data === YT.PlayerState.PLAYING && !done) {
    done = true;
    stopVideo();
  } */
  if (event.data === YT.PlayerState.PLAYING) {
    videoContainer.style.borderColor = '#dfee0dff';
  }
  // const embedCode = event.target.getVideoEmbedCode();
  // const state = player.getPlayerState();

  // const statusText = getPlayerStateText(state);
  const st = event.data;

  changeBorderColor(st);
}

function changeBorderColor(status) {
  let color;

  if (status === -1) {
    color = '#37474F'; // unstarted = gray
  } else if (status === 0) {
    color = '#FFFF00'; // ended = yellow
  } else if (status === 1) {
    color = '#33691E'; // playing = green
  } else if (status === 2) {
    color = '#DD2C00'; // paused = red
  } else if (status === 3) {
    color = '#AA00FF'; // buffering = purple
  } else if (status === 5) {
    color = '#FF6DOO'; // video cued = orange
  }

  if (color) {
    videoContainer.style.borderColor
        = color;
  }
}

function stopVideo() {
  player.stopVideo();
}

document
  .getElementById('form-pay')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('pay').scrollIntoView({ behavior: 'smooth' });

    const formData = new FormData(this);

    fetch('/submit-url', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        // eslint-disable-next-line no-console
        console.log('Form sent succesfully!');
      }
    });
  });

document
  .getElementById('go-to-pay')
  .addEventListener('click', function(e) {
    const form = document.getElementById('form-place-order');

    if (form.checkValidity()) {
      window.location.href = '#pay';
    } else {
      form.reportValidity();
    }

    e.preventDefault();
  });

const quantityPay = document.getElementById('quantity-pay');
const quantityPlace = document.getElementById('quantity-place-order');

quantityPay.addEventListener('change', () => {
  quantityPlace.value = quantityPay.value;
});

quantityPlace.addEventListener('change', () => {
  quantityPay.value = quantityPlace.value;
});

if (quantityPay && quantityPlace) {
  quantityPay.addEventListener('change', () => {
    quantityPlace.value = quantityPay.value;
  });

  quantityPlace.addEventListener('change', () => {
    quantityPay.value = quantityPlace.value;
  });
}

const inputs = document.querySelectorAll('.form__input--card');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '');

    if (input.value.length === 4 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

const expiryInput = document.getElementById('expiry');

expiryInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/[^\d]/g, ''); // digits only
  const cursorPosition = expiryInput.selectionStart;

  if (value.length > 4) {
    value = value.slice(0, 4); // 4 digits max
  }

  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }

  expiryInput.value = value;

  if (cursorPosition === 3 && !value.includes('/')) {
    expiryInput.setSelectionRange(4, 4); // after insert "/"
  }
});

const cvvInput = document.getElementById('cvv');

cvvInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, ''); // digits only
});
