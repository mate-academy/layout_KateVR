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
};

const closeVideoModal = () => {
  if (!videoModal || !youtubeVideo) return;

  videoModal.classList.remove('is-open');

  youtubeVideo.src = '';
};

// працює для всіх .play-button
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
};

const closeFaq = () => {
  faqModal?.classList.remove('is-open');
};

document
  .querySelectorAll('[href="#faqModal"]')
  .forEach((item) => item.addEventListener('click', openFaq));

document.querySelector('#faqClose')?.addEventListener('click', closeFaq);

faqModal?.addEventListener('click', (e) => {
  if (e.target.classList.contains('faq-modal__overlay')) {
    closeFaq();
  }
});

/* =========================
   HELP MODAL
========================= */

const helpModal = document.querySelector('#helpModal');

const openHelp = (e) => {
  e?.preventDefault();
  helpModal?.classList.add('is-open');
};

const closeHelp = () => {
  helpModal?.classList.remove('is-open');
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
});

// Закриття меню при кліку на посилання

const mobileLinks = document.querySelectorAll('.header__link--mobile');

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger?.classList.remove('is-open');

    mobileMenu?.classList.remove('is-open');
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

    progress.style.transform = `translateX(${index * 100}%)`;
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
   FAQ ACCORDION
========================= */

document.querySelectorAll('.faq__question').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.faq__item')?.classList.toggle('is-open');
  });
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
  }
});

/* =========================
   LANG
========================= */

document.addEventListener('DOMContentLoaded', () => {
  const lang = document.querySelector('.lang');
  if (!lang) return;

  const btn = lang.querySelector('.lang__btn');
  const dropdown = lang.querySelector('.lang__dropdown');
  const options = Array.from(lang.querySelectorAll('.lang__option'));
  const hidden = lang.querySelector('input');
  const indicator = lang.querySelector('.lang__indicator');

  let current = hidden?.value || 'en';

  const updateLang = () => {
    const activeOption = options.find((opt) => opt.dataset.value === current);

    if (!activeOption) return;

    // кнопка зверху
    btn.innerHTML = `
      <span class="lang__current">
        ${activeOption.textContent}
      </span>
      <span class="lang__arrow"></span>
    `;

    // ховаємо вибрану мову з dropdown
    options.forEach((opt) => {
      opt.classList.toggle('is-active', opt.dataset.value === current);

      opt.style.display = opt.dataset.value === current ? 'none' : 'block';
    });

    // позиція бігунка напроти вибраної
    const visibleOptions = options.filter(
      (opt) => opt.dataset.value !== current,
    );

    const index = visibleOptions.indexOf(activeOption);

    if (indicator) {
      indicator.style.transform = `translateY(${index * 100}%)`;
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

    btn.addEventListener('click', () => {
      const isOpen = point.classList.contains('is-active');

      // закриваємо всі відкриті
      points.forEach((p) => {
        p.classList.remove('is-active');
        p.querySelector('button').setAttribute('aria-expanded', 'false');
      });

      // відкриваємо тільки натиснутий
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

  text.querySelector('.more-dots').addEventListener('click', () => {
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
});

document.querySelectorAll('.footer__field').forEach((field) => {
  const input = field.querySelector('.footer__input, .footer__textarea');
  const label = field.querySelector(
    '.footer__label:not(.footer__label--error)',
  );
  const error = field.querySelector('.footer__label--error');

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
  const footer = document.querySelector('footer'); // або '.footer'

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
