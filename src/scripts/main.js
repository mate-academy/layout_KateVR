'use strict';

const body = document.querySelector('.page__body');
const menuOpenButton = document.querySelector('[data-menu-open]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuNav = document.querySelector('.mobile-menu__nav');
const mobileMenuBuyButton = document.querySelector('.mobile-menu__buy');
const mobileMenuLanguageBackButton = document.querySelector(
  '[data-menu-language-back]',
);
const mobileMenuLanguagePanel = document.querySelector('[data-menu-language-panel]');
const mobileMenuPanelCloseButton = document.querySelector('[data-menu-panel-close]');
const contactForm = document.querySelector('[data-contact-form]');
const floatingBuyButton = document.querySelector('[data-floating-buy]');
const headerMobileBuyButton = document.querySelector('.header__mobile-buy');
const secondSection = document.querySelector('main > section:nth-of-type(1)');
const modalTriggers = document.querySelectorAll('[data-modal-target]');
const headerOrderButtons = document.querySelectorAll(
  '.header__buy-button, .header__mobile-buy, .mobile-menu__buy',
);
const landingNavLinks = document.querySelectorAll(
  '.header__nav .nav__link, .mobile-menu__link, .footer__nav .nav__link',
);
const faqItems = document.querySelectorAll('.faq-modal__item');
const modalVideoFrame = document.querySelector('[data-video-frame]');
const orderModal = document.querySelector('[data-modal="order"]');
const orderDialog = document.querySelector('.order');
const orderSteps = document.querySelectorAll('[data-order-step]');
const orderIndicators = document.querySelectorAll('[data-order-indicator]');
const orderNextButtons = document.querySelectorAll('[data-order-next]');
const orderPrevButtons = document.querySelectorAll('[data-order-prev]');
const orderResetButtons = document.querySelectorAll('[data-order-reset]');
const orderForms = document.querySelectorAll('[data-order-form]');
const orderShippingForm = document.querySelector('[data-order-form="shipping"]');
const orderPaymentForm = document.querySelector('[data-order-form="payment"]');
const orderQuantity = document.querySelector('[data-order-quantity]');
const orderPrice = document.querySelector('[data-order-price]');
const orderCardInputs = Array.from(
  document.querySelectorAll('.order__pay-input--card'),
);

let menuOpen = false;
let activeModal = null;
let currentOrderStep = 1;

const ipadMiniMediaQuery = window.matchMedia(
  '(min-width: 640px) and (max-width: 1023px)',
);
const iphoneSeMediaQuery = window.matchMedia('(max-width: 639px)');
let headerMobileBuyFloating = false;
let headerMobileBuyAnimation = null;

const syncPageLock = () => {
  body.classList.toggle('page__body--locked', menuOpen || Boolean(activeModal));
};

const setMobileMenuView = view => {
  if (!mobileMenu) {
    return;
  }

  const isLanguageView =
    view === 'language' && (ipadMiniMediaQuery.matches || iphoneSeMediaQuery.matches);

  mobileMenu.dataset.view = isLanguageView ? 'language' : 'main';

  if (mobileMenuNav) {
    mobileMenuNav.hidden = isLanguageView;
  }

  if (mobileMenuBuyButton) {
    mobileMenuBuyButton.hidden = isLanguageView;
  }

  if (mobileMenuLanguageBackButton) {
    mobileMenuLanguageBackButton.hidden = !isLanguageView;
  }

  if (mobileMenuLanguagePanel) {
    mobileMenuLanguagePanel.hidden = !isLanguageView;
  }

  if (mobileMenuPanelCloseButton) {
    mobileMenuPanelCloseButton.hidden = isLanguageView;
  }
};

const openMenu = () => {
  if (!mobileMenu || !menuOpenButton) {
    return;
  }

  setMobileMenuView('main');
  mobileMenu.hidden = false;
  menuOpen = true;
  menuOpenButton.setAttribute('aria-expanded', 'true');
  syncPageLock();
  syncHeaderMobileBuyVisibility();
};

const closeMenu = () => {
  if (!mobileMenu || !menuOpenButton) {
    return;
  }

  setMobileMenuView('main');
  mobileMenu.hidden = true;
  menuOpen = false;
  menuOpenButton.setAttribute('aria-expanded', 'false');
  syncPageLock();
  syncHeaderMobileBuyVisibility();
};

const stopVideo = () => {
  if (!modalVideoFrame) {
    return;
  }

  modalVideoFrame.src = '';
};

const playVideo = () => {
  if (!modalVideoFrame) {
    return;
  }

  modalVideoFrame.src = modalVideoFrame.dataset.videoSrc || '';
};

const closeModal = (modal = activeModal) => {
  if (!modal) {
    return;
  }

  if (modal === activeModal) {
    activeModal = null;
  }

  modal.hidden = true;

  if (modal.dataset.modal === 'video') {
    stopVideo();
  }

  syncPageLock();
  syncHeaderMobileBuyVisibility();
};

const setOrderStep = stepNumber => {
  currentOrderStep = stepNumber;

  if (orderDialog) {
    orderDialog.dataset.orderCurrentStep = String(stepNumber);
  }

  for (const step of orderSteps) {
    step.classList.toggle(
      'order__step--active',
      Number(step.dataset.orderStep) === stepNumber,
    );
  }

  for (const indicator of orderIndicators) {
    const indicatorStep = Number(indicator.dataset.orderIndicator);

    indicator.classList.toggle(
      'order__indicator--active',
      indicatorStep === stepNumber,
    );
    indicator.classList.toggle(
      'order__indicator--done',
      indicatorStep < stepNumber,
    );
  }
};

const updateOrderPrice = () => {
  if (!orderQuantity || !orderPrice) {
    return;
  }

  const total = 1200 * Number(orderQuantity.value);

  orderPrice.textContent = `${total}$`;
};

const focusOrderCardInput = input => {
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
};

const distributeOrderCardDigits = (startIndex, digits) => {
  let currentIndex = startIndex;
  let remainingDigits = digits;

  while (currentIndex < orderCardInputs.length) {
    const input = orderCardInputs[currentIndex];
    const chunk = remainingDigits.slice(0, 4);

    input.value = chunk;
    remainingDigits = remainingDigits.slice(4);

    if (!remainingDigits) {
      return input;
    }

    currentIndex += 1;
  }

  return orderCardInputs.at(-1) || null;
};

const resetOrderFlow = () => {
  for (const form of orderForms) {
    form.reset();
  }

  if (orderQuantity) {
    orderQuantity.value = '1';
  }

  updateOrderPrice();
  setOrderStep(1);
};

const openModal = modalName => {
  const modal = document.querySelector(`[data-modal="${modalName}"]`);

  if (!modal) {
    return;
  }

  if (activeModal && activeModal !== modal) {
    closeModal(activeModal);
  }

  closeMenu();
  modal.hidden = false;
  activeModal = modal;

  if (modalName === 'video') {
    playVideo();
  }

  if (modalName === 'order') {
    resetOrderFlow();
  }

  syncPageLock();
  syncHeaderMobileBuyVisibility();
};

const scrollToSection = targetId => {
  const targetSection = document.querySelector(targetId);

  if (!targetSection) {
    return;
  }

  closeMenu();
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const syncFloatingBuyVisibility = () => {
  if (!floatingBuyButton || !secondSection) {
    return;
  }

  const shouldShowForViewport = ipadMiniMediaQuery.matches;
  const reachedSecondSection = window.scrollY >= secondSection.offsetTop - 24;

  floatingBuyButton.hidden = !(
    shouldShowForViewport &&
    reachedSecondSection &&
    !menuOpen &&
    !activeModal
  );
};

const animateHeaderMobileBuyState = shouldFloat => {
  if (!headerMobileBuyButton || headerMobileBuyFloating === shouldFloat) {
    return;
  }

  headerMobileBuyAnimation?.cancel();

  const startRect = headerMobileBuyButton.getBoundingClientRect();

  headerMobileBuyButton.classList.toggle('header__mobile-buy--floating', shouldFloat);
  headerMobileBuyFloating = shouldFloat;

  const endRect = headerMobileBuyButton.getBoundingClientRect();
  const deltaX = startRect.left - endRect.left;
  const deltaY = startRect.top - endRect.top;

  headerMobileBuyAnimation = headerMobileBuyButton.animate(
    [
      {transform: `translate(${deltaX}px, ${deltaY}px)`},
      {transform: 'translate(0, 0)'},
    ],
    {
      duration: 280,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
  );

  headerMobileBuyAnimation.addEventListener(
    'finish',
    () => {
      headerMobileBuyAnimation = null;
    },
    {once: true},
  );
};

const syncHeaderMobileBuyVisibility = () => {
  if (!headerMobileBuyButton) {
    return;
  }

  if (!iphoneSeMediaQuery.matches || menuOpen || Boolean(activeModal)) {
    animateHeaderMobileBuyState(false);

    return;
  }

  animateHeaderMobileBuyState(window.scrollY > 0);
};

if (menuOpenButton) {
  menuOpenButton.addEventListener('click', openMenu);
}

window.addEventListener('scroll', syncFloatingBuyVisibility, {passive: true});
window.addEventListener('scroll', syncHeaderMobileBuyVisibility, {passive: true});
window.addEventListener('resize', syncFloatingBuyVisibility);
window.addEventListener('resize', syncHeaderMobileBuyVisibility);

if (ipadMiniMediaQuery.addEventListener) {
  ipadMiniMediaQuery.addEventListener('change', () => {
    syncFloatingBuyVisibility();
    setMobileMenuView('main');
  });
}

if (iphoneSeMediaQuery.addEventListener) {
  iphoneSeMediaQuery.addEventListener('change', () => {
    syncHeaderMobileBuyVisibility();
  });
}

syncFloatingBuyVisibility();
syncHeaderMobileBuyVisibility();
setMobileMenuView('main');

document.addEventListener('click', event => {
  const languageOpenTarget = event.target.closest('[data-menu-language-open]');

  if (
    languageOpenTarget &&
    mobileMenu &&
    !mobileMenu.hidden &&
    (ipadMiniMediaQuery.matches || iphoneSeMediaQuery.matches)
  ) {
    setMobileMenuView('language');

    return;
  }

  const languageBackTarget = event.target.closest('[data-menu-language-back]');

  if (languageBackTarget && mobileMenu && !mobileMenu.hidden) {
    setMobileMenuView('main');

    return;
  }

  const menuCloseTarget = event.target.closest('[data-menu-close], [data-menu-link]');

  if (menuCloseTarget && mobileMenu && !mobileMenu.hidden) {
    closeMenu();
  }

  const modalTrigger = event.target.closest('[data-modal-target]');

  if (modalTrigger) {
    openModal(modalTrigger.dataset.modalTarget);
  }

  const modalCloseTarget = event.target.closest('[data-modal-close]');

  if (modalCloseTarget) {
    const targetModal = modalCloseTarget.closest('[data-modal]');

    if (targetModal) {
      closeModal(targetModal);
    }
  }
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') {
    return;
  }

  if (activeModal) {
    closeModal();

    return;
  }

  if (menuOpen) {
    closeMenu();
  }
});

for (const item of faqItems) {
  item.addEventListener('toggle', () => {
    if (!item.open) {
      return;
    }

    for (const otherItem of faqItems) {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();

      return;
    }

    event.preventDefault();
    contactForm.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

for (const form of orderForms) {
  form.addEventListener('submit', event => {
    event.preventDefault();
  });
}

for (const button of orderNextButtons) {
  button.addEventListener('click', () => {
    const nextStep = Number(button.dataset.orderNext);

    if (nextStep === 2 && orderShippingForm && !orderShippingForm.checkValidity()) {
      orderShippingForm.reportValidity();

      return;
    }

    if (nextStep === 3 && orderPaymentForm && !orderPaymentForm.checkValidity()) {
      orderPaymentForm.reportValidity();

      return;
    }

    setOrderStep(nextStep);
  });
}

for (const button of orderPrevButtons) {
  button.addEventListener('click', () => {
    setOrderStep(Number(button.dataset.orderPrev));
  });
}

for (const button of orderResetButtons) {
  button.addEventListener('click', () => {
    resetOrderFlow();
  });
}

for (const indicator of orderIndicators) {
  indicator.addEventListener('click', () => {
    const indicatorStep = Number(indicator.dataset.orderIndicator);

    if (indicatorStep < currentOrderStep) {
      setOrderStep(indicatorStep);
    }
  });
}

if (orderQuantity) {
  orderQuantity.addEventListener('change', updateOrderPrice);
  updateOrderPrice();
}

for (const [index, input] of orderCardInputs.entries()) {
  input.addEventListener('input', () => {
    const digits = input.value.replace(/\D/g, '');

    if (digits.length > 4) {
      const lastFilledInput = distributeOrderCardDigits(index, digits);

      if (lastFilledInput) {
        focusOrderCardInput(lastFilledInput);
      }

      return;
    }

    input.value = digits.slice(0, 4);

    if (input.value.length === 4 && index < orderCardInputs.length - 1) {
      focusOrderCardInput(orderCardInputs[index + 1]);
    }
  });

  input.addEventListener('keydown', event => {
    if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
      focusOrderCardInput(orderCardInputs[index - 1]);
    }
  });

  input.addEventListener('paste', event => {
    const pastedDigits = event.clipboardData?.getData('text')?.replace(/\D/g, '');

    if (!pastedDigits) {
      return;
    }

    event.preventDefault();

    const lastFilledInput = distributeOrderCardDigits(index, pastedDigits);

    if (lastFilledInput) {
      focusOrderCardInput(lastFilledInput);
    }
  });
}

if (orderModal) {
  orderModal.addEventListener('click', event => {
    if (event.target === orderModal) {
      closeModal(orderModal);
    }
  });
}

for (const trigger of modalTriggers) {
  trigger.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(trigger.dataset.modalTarget);
    }
  });
}

for (const button of headerOrderButtons) {
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    openModal('order');
  });
}

for (const link of landingNavLinks) {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');

    if (!targetId || !targetId.startsWith('#')) {
      return;
    }

    event.preventDefault();
    scrollToSection(targetId);
  });
}
