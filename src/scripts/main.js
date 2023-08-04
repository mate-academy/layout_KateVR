'use strict';

// Dropdown Function

function initializeDropdown(dropdown) {
  const selectedOption = dropdown.querySelector('.selected-option');
  const options = dropdown.querySelector('.options');
  const optionItems = dropdown.querySelectorAll('.option');

  // Toggle options visibility
  selectedOption.addEventListener('click', function() {
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
  });

  // Handle option selection
  optionItems.forEach(function(option) {
    option.addEventListener('click', function() {
      selectedOption.textContent = option.textContent;
      options.style.display = 'none';
    });
  });

  // Close options when clicking outside the dropdown
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      options.style.display = 'none';
    }
  });
}

// Initialize each dropdown separately
const dropdowns = document.querySelectorAll('.custom-dropdown');

dropdowns.forEach(function(dropdown) {
  initializeDropdown(dropdown);
});

// Button to the top

// Define the topFunction() function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Get the button:
const myButton = document.querySelector('.contacts__button');

myButton.addEventListener('click', function() {
  topFunction();
});

// When the user scrolls down 700px, show the button
window.onscroll = function() {
  scrollFunction();

  if (window.innerWidth <= 768) {
    fixedBuyButtonScroll();
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 700
    || document.documentElement.scrollTop > 700) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}
// Fixed Tablet Button Disapear when user scrolled to footer

function fixedBuyButtonScroll() {
  const fixedButton = document.querySelector('.header__button--tablet');
  const footer = document.querySelector('.footer');
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerPosition < windowHeight) {
    fixedButton.style.display = 'none';
  } else {
    fixedButton.style.display = 'block';
  }
};

// Modals
const modalFaq = document.querySelector('.modal-faq');
const modalHelp = document.querySelector('.modal-help');
const btnFaq = document.querySelectorAll('.modal-faq-btn');
const btnHelp = document.querySelectorAll('.modal-help-btn');
const modalClose = document.querySelectorAll('.modal__close');
const moreLink = document.querySelectorAll('.bottom-action__show-more');

// When the user clicks on the button, open the modals
btnFaq.forEach((faqBtn) => {
  faqBtn.onclick = function() {
    if (modalHelp.style.display === 'block') {
      modalHelp.style.display = null;
      modalFaq.style.display = 'block';
    } else {
      modalFaq.style.display = 'block';
    }
  };
});

btnHelp.forEach(helpbtn => {
  helpbtn.onclick = function() {
    modalHelp.style.display = 'block';
  };
});

// When the user clicks on <span> (x), close the modals
modalClose.forEach((closeBtn) => {
  closeBtn.onclick = function() {
    modalFaq.style.display = null;
    modalHelp.style.display = null;
  };
});

moreLink.forEach((linkBtn) => {
  linkBtn.onclick = function() {
    modalFaq.style.display = null;
    modalHelp.style.display = null;
  };
});

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target === modalFaq || event.target === modalHelp) {
    modalFaq.style.display = null;
    modalHelp.style.display = null;
  }
};

// Accordion Function
const accordionContent = document.querySelectorAll('.accordion__content');

accordionContent.forEach((item, index) => {
  const header = item.querySelector('.accordion__header');

  header.addEventListener('click', () => {
    item.classList.toggle('open');

    const description = item.querySelector('.accordion__description');
    const info = item.querySelector('.accordion__info');
    const arrowDown = item.querySelector('.accordion__icon--down');
    const arrowRight = item.querySelector('.accordion__icon--right');

    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      description.style.marginBottom = '1rem';
      info.style.height = `${info.scrollHeight}px`;

      arrowRight.style.display = 'none';
      arrowDown.style.display = 'block';
    } else {
      description.style.height = '0';
      description.style.marginBottom = '0';
      info.style.height = '0';

      arrowRight.style.display = 'block';
      arrowDown.style.display = 'none';
    }
  });
});

// Order Modal
const orderModal = document.querySelector('.order');
const orderBtn = document.querySelectorAll('.button-buy-now');
const orderExitBtn = document.querySelector('.order-exit');
const orderCloseBtn
= document.querySelectorAll('.modal__close--order--position');

orderBtn.forEach(btn => {
  btn.onclick = function() {
    orderModal.style.display = 'block';
  };
});

orderExitBtn.onclick = () => {
  orderModal.style.display = null;
};

orderCloseBtn.forEach(btn => {
  btn.onclick = () => {
    orderModal.style.display = null;
  };
});

// Tabs of Order
const tabs = document.querySelectorAll('.order__item');
const tabContents = document.querySelectorAll('.order__tab');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContents.forEach((content) => {
      content.classList.remove('active');
    });

    tabs.forEach((tabElement) => {
      tabElement.classList.remove('active');
    });
    tabContents[index].classList.add('active');
    tabs[index].classList.add('active');
  });
});

const inputs = document.querySelectorAll('.form__input');

inputs.forEach((input) => {
  input.addEventListener('input', function() {
    const label = input.nextElementSibling;

    if (!input.validity.valid) {
      label.textContent = 'Please enter a valid value.';
      label.style.color = '#860404';
    } else {
      label.textContent = input.getAttribute('placeholder');
      label.style.color = '#05C2DF';
    }
  });
});

// TECH DETAILS

const plusTech = document.querySelectorAll('.tech__plus');
let techOpened = false;

plusTech.forEach(plus => {
  plus.addEventListener('click', (e) => {
    const targetPlus = e.target;

    if (!techOpened) {
      openTech(targetPlus);
    }

    if (techOpened) {
      if (targetPlus.classList.contains('active')) {
        closeTech(targetPlus);
      } else {
        const activePlus = document.querySelector('.plus.active');

        closeTech(activePlus);
        techOpened = !techOpened;
        openTech(targetPlus);
      }
    }
    techOpened = !techOpened;
  });
});

function closeTech(techButton) {
  techButton.classList.remove('active');
  techButton.parentElement.classList.remove('active');
}

function openTech(techButton) {
  techButton.classList.add('active');
  techButton.parentElement.classList.add('active');
}

// Video Player

const playerBtn = document.querySelectorAll('.video-play-button');
const videoModal = document.querySelector('.video');
const videoIconCross = document.querySelector('.video__icon-cross');
const videoIframe = document.querySelector('iframe');

playerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    videoModal.classList.add('showed');
    document.body.classList.add('no-scroll');
  });
});

videoIconCross.addEventListener('click', () => {
  videoModal.classList.remove('showed');
  document.body.classList.remove('no-scroll');

  // stops the video when user close the iframe
  const iframeSrc = videoIframe.src;

  videoIframe.src = iframeSrc;
});

// Price & Qunatity

const purchaseItemQtySelected
  = document.querySelectorAll('.option--m');
const puchaseTotalPrice
  = document.querySelectorAll('.price__amount');
const selectedQuntity = document.querySelectorAll('.selected-option--m');
const basePrice = 1200;

purchaseItemQtySelected.forEach(selected => {
  selected.addEventListener('click', e => {
    const selectedQty = e.target.textContent.trim();

    selectedQuntity.forEach(item => {
      item.textContent = selectedQty;
    });
    pasteTotalPrice(selectedQty);
    e.preventDefault();
  });
});

function pasteTotalPrice(qty) {
  puchaseTotalPrice.forEach(e => {
    e.textContent = parseInt(qty) * basePrice + '$';
  });
}

// Inital base price in purchase card

pasteTotalPrice(1);
