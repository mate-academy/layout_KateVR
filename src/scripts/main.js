'use strict';

import headerImage1 from '../images/header-images/image-mobile-1.png';
import headerImage2 from '../images/header-images/image-mobile-2.png';
import headerImage3 from '../images/header-images/image-mobile-3.png';

import aboutImage1 from '../images/about-us/image.jpg';
import aboutImage2 from '../images/about-us/image-2.jpg';
import aboutImage3 from '../images/about-us/image-3.jpg';
import aboutImage4 from '../images/about-us/image-4.jpg';
import aboutImage5 from '../images/about-us/image-5.jpg';

/* =========================
   MODAL SCROLL LOCK
========================= */

function updateScrollLock() {
  const modalIsOpen = document.querySelector(
    '#videoModal.is-open, #faqModal.is-open, #helpModal.is-open',
  );

  const burgerIsOpen = document.querySelector('.header__burger.is-open');

  document.body.classList.toggle(
    'no-scroll',
    Boolean(modalIsOpen || burgerIsOpen),
  );
}

/* =========================
   VIDEO MODAL
========================= */

const playButtons = document.querySelectorAll('.play-button');
const videoModal = document.querySelector('#videoModal');
const closeVideo = document.querySelector('#closeVideo');
const youtubeVideo = document.querySelector('#youtubeVideo');

const videoUrl =
  'https://www.youtube.com/embed/YmUjK9dtYoQ?list=PLsguMOzLnA8wG4637ZqY8ydi2gFCjM3ZG';

const openVideo = () => {
  if (!videoModal || !youtubeVideo) return;

  youtubeVideo.src = videoUrl;
  videoModal.classList.add('is-open');

  updateScrollLock();
};

const closeVideoModal = () => {
  if (!videoModal || !youtubeVideo) return;

  videoModal.classList.remove('is-open');
  youtubeVideo.src = '';

  updateScrollLock();
};

playButtons.forEach((button) => {
  button.addEventListener('click', openVideo);
});

closeVideo?.addEventListener('click', closeVideoModal);

videoModal?.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});

/* =========================
   FAQ MODAL
========================= */

const faqModal = document.querySelector('#faqModal');

const openFaq = (e) => {
  e?.preventDefault();

  faqModal?.classList.add('is-open');

  updateScrollLock();
};

const closeFaq = () => {
  faqModal?.classList.remove('is-open');

  updateScrollLock();
};

document.querySelectorAll('[href="#faqModal"]').forEach((item) => {
  item.addEventListener('click', openFaq);
});

document.querySelector('#faqClose')?.addEventListener('click', closeFaq);

faqModal?.addEventListener('click', (e) => {
  if (e.target.classList.contains('faq-modal__overlay')) {
    closeFaq();
  }
});

/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq__question');

  if (!question) return;

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    faqItems.forEach((faqItem) => {
      faqItem.classList.remove('is-open');
    });

    if (!isOpen) {
      item.classList.add('is-open');
    }
  });
});

/* =========================
   HELP MODAL
========================= */

const helpModal = document.querySelector('#helpModal');

const openHelp = (e) => {
  e?.preventDefault();

  helpModal?.classList.add('is-open');

  updateScrollLock();
};

const closeHelp = () => {
  helpModal?.classList.remove('is-open');

  updateScrollLock();
};

document.querySelectorAll('#helpOpen, #helpOpenMobile').forEach((item) => {
  item.addEventListener('click', openHelp);
});

document.querySelector('#helpClose')?.addEventListener('click', closeHelp);

helpModal?.addEventListener('click', (e) => {
  if (e.target.classList.contains('help-modal__overlay')) {
    closeHelp();
  }
});

/* =========================
   MOBILE MENU
========================= */

const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger?.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  mobileMenu?.classList.toggle('is-open');

  updateScrollLock();
});

// Закриття меню при кліку на посилання

const mobileLinks = document.querySelectorAll('.header__link--mobile');

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger?.classList.remove('is-open');
    mobileMenu?.classList.remove('is-open');

    updateScrollLock();
  });
});

/* =========================
   MORE BUTTON
========================= */

const moreButton = document.querySelector('.header__bottom-more');

moreButton?.addEventListener('click', () => {
  moreButton.classList.toggle('is-active');
});

/* =========================
   HEADER SLIDER
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const images = [headerImage1, headerImage2, headerImage3];

  const image = document.querySelector('.header__image');
  const prev = document.querySelector('.header-slider__prev');
  const next = document.querySelector('.header-slider__next');
  const progress = document.querySelector('.header-slider__active');

  if (!image) return;

  let index = 0;

  function render() {
    image.src = images[index];

    if (progress) {
      progress.style.transform = `translateX(${index * 100}%)`;
    }
  }

  next?.addEventListener('click', () => {
    index++;

    if (index >= images.length) {
      index = 0;
    }

    render();
  });

  prev?.addEventListener('click', () => {
    index--;

    if (index < 0) {
      index = images.length - 1;
    }

    render();
  });

  render();
});

/* =========================
   ABOUT PRODUCT SLIDER
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.about-product');

  if (!section) return;

  const images = [
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4,
    aboutImage5,
  ];

  const image = section.querySelector('.about-product__image');
  const current = section.querySelector('.about-product__current');
  const prev = section.querySelector('.slider-nav-button--prev');
  const next = section.querySelector('.slider-nav-button--next');
  const progress = section.querySelector('.slider-progress-active');
  const dots = [...section.querySelectorAll('.about-product__dot')];

  if (!image || !current) return;

  let index = 0;

  function renderSlider() {
    image.src = images[index];
    current.textContent = index + 1;

    if (progress) {
      progress.style.width = `${100 / images.length}%`;
      progress.style.transform = `translateX(${index * 100}%)`;
    }

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  }

  next?.addEventListener('click', () => {
    index++;

    if (index >= images.length) {
      index = 0;
    }

    renderSlider();
  });

  prev?.addEventListener('click', () => {
    index--;

    if (index < 0) {
      index = images.length - 1;
    }

    renderSlider();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;

      renderSlider();
    });
  });

  function checkMode() {
    const isMobile = window.innerWidth < 1024;
    const controls = section.querySelector('.slider');

    if (isMobile) {
      controls?.classList.add('is-hidden');

      dots.forEach((dot) => {
        dot.style.display = 'block';
      });
    } else {
      controls?.classList.remove('is-hidden');

      dots.forEach((dot) => {
        dot.style.display = 'none';
      });
    }
  }

  renderSlider();
  checkMode();

  window.addEventListener('resize', checkMode);
});

/* =========================
   ESC CLOSE
========================= */

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
    closeFaq();
    closeHelp();

    burger?.classList.remove('is-open');
    mobileMenu?.classList.remove('is-open');

    updateScrollLock();
  }
});

/* =========================
   LANG
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const lang = document.querySelector('.lang');

  if (!lang) return;

  const btn = lang.querySelector('.lang__btn');
  const options = Array.from(lang.querySelectorAll('.lang__option'));
  const hidden = lang.querySelector('input');
  const indicator = lang.querySelector('.lang__indicator');

  if (!btn) return;

  let current = hidden?.value || 'en';

  const updateLang = () => {
    const activeOption = options.find((opt) => opt.dataset.value === current);

    if (!activeOption) return;

    btn.innerHTML = `
      <span class="lang__current">
        ${activeOption.textContent}
      </span>
      <span class="lang__arrow"></span>
    `;

    options.forEach((opt) => {
      opt.classList.toggle('is-active', opt.dataset.value === current);

      opt.style.display = opt.dataset.value === current ? 'none' : 'block';
    });

    if (indicator) {
      const activeIndex = options.indexOf(activeOption);

      indicator.style.transform = `translateY(${activeIndex * 100}%)`;
    }
  };

  const close = () => {
    lang.classList.remove('is-open');
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    updateLang();
    lang.classList.toggle('is-open');
  });

  document.addEventListener('click', close);

  options.forEach((opt) => {
    opt.addEventListener('mouseenter', () => {
      options.forEach((o) => o.classList.remove('is-hover'));

      opt.classList.add('is-hover');
    });

    opt.addEventListener('click', (e) => {
      e.stopPropagation();

      current = opt.dataset.value;

      if (hidden) {
        hidden.value = current;
      }

      options.forEach((o) => o.classList.remove('is-hover'));

      updateLang();
      close();
    });
  });

  updateLang();
});

/* =========================
   SPEC
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const points = document.querySelectorAll('.spec-point');

  points.forEach((point) => {
    const btn = point.querySelector('.spec-point__btn');

    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = point.classList.contains('is-active');

      points.forEach((p) => {
        p.classList.remove('is-active');

        p.querySelector('.spec-point__btn')?.setAttribute(
          'aria-expanded',
          'false',
        );
      });

      if (!isOpen) {
        point.classList.add('is-active');

        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});

/* =========================
   WHY KAT TEXT
========================= */

const limit = 70;
const mobileBreakpoint = 1024;

let openedText = null;

function closeText(text) {
  text.innerHTML = `
    ${text.dataset.short}<span class="more-dots">...</span>
  `;

  text.querySelector('.more-dots')?.addEventListener('click', () => {
    openText(text);
  });
}

function openText(text) {
  if (openedText && openedText !== text) {
    closeText(openedText);
  }

  text.textContent = text.dataset.full;
  openedText = text;
}

function initWhyKat() {
  const isMobileOrTablet = window.innerWidth < mobileBreakpoint;

  document.querySelectorAll('.why-kat__item-text').forEach((text) => {
    const full = text.dataset.full || text.textContent.trim();

    text.dataset.full = full;
    text.dataset.short = full.slice(0, limit);

    if (!isMobileOrTablet) {
      text.textContent = full;
      return;
    }

    if (text !== openedText) {
      closeText(text);
    }
  });
}

initWhyKat();

window.addEventListener('resize', () => {
  openedText = null;
  initWhyKat();
});

/* =========================
   FOOTER
========================= */

const footerForm = document.querySelector('.footer__form');

footerForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  footerForm.reset();

  footerForm
    .querySelectorAll('.footer__input, .footer__textarea')
    .forEach((input) => {
      input.classList.remove('touched');

      const field = input.closest('.footer__field');

      if (!field) return;

      const label = field.querySelector(
        '.footer__label:not(.footer__label--error)',
      );

      const error = field.querySelector('.footer__label--error');

      if (label) {
        label.style.display = 'block';
      }

      if (error) {
        error.style.display = 'none';
        error.textContent = '';
      }
    });
});

document.querySelectorAll('.footer__field').forEach((field) => {
  const input = field.querySelector('.footer__input, .footer__textarea');
  const label = field.querySelector(
    '.footer__label:not(.footer__label--error)',
  );
  const error = field.querySelector('.footer__label--error');

  if (!input || !label || !error) return;

  input.addEventListener('blur', () => {
    let message = '';

    if (!input.value.trim()) {
      message = `Please, fill your ${input.name || 'message'}`;
    } else if (input.type === 'email' && !input.checkValidity()) {
      message = 'Incorrect email format';
    }

    if (message) {
      label.style.display = 'none';
      error.textContent = message;
      error.style.display = 'block';

      input.classList.add('touched');
    } else {
      error.style.display = 'none';
      label.style.display = 'block';

      input.classList.remove('touched');
    }
  });

  input.addEventListener('input', () => {
    error.style.display = 'none';
    label.style.display = 'block';
  });
});

/* =========================
   BUY FIXED
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const buyFixed = document.querySelector('.buy-fixed');
  const footer = document.querySelector('footer');

  if (!buyFixed || !footer) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      buyFixed.classList.add('is-hidden');
    } else {
      buyFixed.classList.remove('is-hidden');
    }
  });

  observer.observe(footer);
});

/* =========================
   SCROLL TO TOP
========================= */

const scrollTopButton = document.querySelector('.footer__scroll-top');

scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
