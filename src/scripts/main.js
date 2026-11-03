'use strict';

function createSlider({
  items,
  slides,
  onChange,
  autoplay = false,
  interval = 3000,
}) {
  const total = slides.length;
  let current = 0;
  let timer = null;

  function goTo(index) {
    current = (index + total) % total;

    items.style.transform = `translateX(-${current * 100}%)`;

    onChange?.(current, total);
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function startAutoplay() {
    stopAutoplay();

    if (autoplay && window.innerWidth < 1280) {
      timer = setInterval(next, interval);
    }
  }

  function stopAutoplay() {
    clearInterval(timer);
    timer = null;
  }

  // Свайп для мобільних пристроїв
  let startX = 0;

  items.addEventListener(
    'touchstart',
    (event) => {
      startX = event.touches[0].clientX;
    },
    { passive: true },
  );

  items.addEventListener(
    'touchend',
    (event) => {
      const diff = event.changedTouches[0].clientX - startX;

      if (Math.abs(diff) > 50) {
        goTo(diff < 0 ? current + 1 : current - 1);
        startAutoplay();
      }
    },
    { passive: true },
  );

  // Початковий слайд
  goTo(0);
  startAutoplay();

  return {
    goTo,
    next,
    prev,
    startAutoplay,
    stopAutoplay,
  };
}

// ---------- HERO ----------

const heroItems = document.querySelector('.hero-slider__items');
const heroSlides = document.querySelectorAll('.hero-slider__item');
const heroPrev = document.querySelector('.hero-slider__btn--prev');
const heroNext = document.querySelector('.hero-slider__btn--next');
const heroControls = document.querySelector('.hero-slider__controls');
const heroSlider = createSlider({
  items: heroItems,
  slides: heroSlides,
  autoplay: true,
  interval: 3000,
  onChange: (index, total) => {
    heroControls.style.setProperty('--indicator-position', `${index * 69}px`);
    heroPrev.disabled = index === 0;
    heroNext.disabled = index === total - 1;
  },
});
heroPrev.addEventListener('click', () => {
  heroSlider.prev();
  heroSlider.stopAutoplay();
});
heroNext.addEventListener('click', () => {
  heroSlider.next();
  heroSlider.stopAutoplay();
}); // Автоматичне перемикання залежно від ширини екрана function updateHeroSlider() { if (window.innerWidth >= 1280) { heroSlider.stopAutoplay(); } else { heroSlider.startAutoplay(); } } updateHeroSlider(); window.addEventListener('resize', updateHeroSlider);

/* ---------- ABOUT ---------- */

const aboutItems = document.querySelector('.about__slider-items');
const aboutSlides = document.querySelectorAll('.about__slider-item');
const aboutCounter = document.querySelector('.about__slider-counter');
const aboutDots = document.querySelectorAll('.about__slider-dot');
const aboutPrev = document.querySelector('.about__slider-btn--prev');
const aboutNext = document.querySelector('.about__slider-btn--next');
const aboutControls = document.querySelector('.about__slider-controls');
const aboutCounterCurrent = document.querySelector('.about__slider-current');
const aboutCounterTotal = document.querySelector('.about__slider-total');

const aboutSlider = createSlider({
  items: aboutItems,
  slides: aboutSlides,
  onChange: (index, total) => {
    aboutCounterCurrent.textContent = index + 1;
    aboutCounterTotal.textContent = total;

    const indicatorWidth = 207 / total;

    aboutControls.style.setProperty(
      '--about-indicator-position',
      `${index * indicatorWidth}px`,
    );

    aboutPrev.disabled = index === 0;
    aboutNext.disabled = index === total - 1;

    aboutDots.forEach((dot, i) => {
      dot.classList.toggle('about__slider-dot--active', i === index);
    });
  },
});

aboutDots.forEach((dot, i) => {
  dot.addEventListener('click', () => aboutSlider.goTo(i));
});

aboutPrev.addEventListener('click', () => aboutSlider.prev());
aboutNext.addEventListener('click', () => aboutSlider.next());

$(function () {
  const $items = $('.questions__item');

  // Початковий стан: усі відповіді закриті
  $items.removeClass('questions__item--active');
  $('.questions__item-text, .questions__item-note').hide();

  $('.questions__item-link').on('click', function (e) {
    e.preventDefault();

    const $link = $(this);
    const $item = $link.closest('.questions__item');
    const $text = $link.find('.questions__item-text');
    const $note = $link.find('.questions__item-note');

    if ($item.hasClass('questions__item--active')) {
      // Закриваємо поточне запитання
      $item.removeClass('questions__item--active');
      $text.stop(true, true).slideUp(300);
      $note.stop(true, true).slideUp(300);
    } else {
      // Закриваємо всі інші запитання
      $items.removeClass('questions__item--active');

      $('.questions__item-text, .questions__item-note')
        .stop(true, true)
        .slideUp(300);

      // Відкриваємо вибране запитання
      $item.addClass('questions__item--active');
      $text.stop(true, true).slideDown(300);
      $note.stop(true, true).slideDown(300);
    }
  });
});

const techButtons = document.querySelectorAll('.tech__button');
const techPopups = document.querySelectorAll('.tech__popup');

techButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = button.dataset.target;
    const targetPopup = document.getElementById(targetId);
    const isActive = button.classList.contains('tech__button--active');

    techButtons.forEach((item) => {
      item.classList.remove('tech__button--active');
      item.setAttribute('aria-expanded', 'false');
    });

    techPopups.forEach((popup) => {
      popup.classList.remove('tech__popup--active');
    });

    if (!isActive && targetPopup) {
      button.classList.add('tech__button--active');
      button.setAttribute('aria-expanded', 'true');
      targetPopup.classList.add('tech__popup--active');
    }
  });
});

(() => {
  const PRICE = 1200;
  const CITIES = {
    Ukraine: ['Kyiv', 'Lviv', 'Odesa', 'Kharkiv', 'Dnipro'],
    Poland: ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw'],
    Germany: ['Berlin', 'Munich', 'Hamburg', 'Cologne'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston'],
  };

  const modal = document.getElementById('order');
  if (!modal) return;

  const panel = modal.querySelector('.order__panel');
  const steps = modal.querySelectorAll('.order__step');
  const summary = modal.querySelector('[data-summary]');
  const forms = {
    1: modal.querySelector('[data-form="1"]'),
    2: modal.querySelector('[data-form="2"]'),
    3: modal.querySelector('[data-form="3"]'),
  };
  const qty = modal.querySelector('#order-qty');
  const price = modal.querySelector('#order-price');
  const country = modal.querySelector('#country');
  const city = modal.querySelector('#city');
  const cardParts = [...modal.querySelectorAll('.card-number__part')];
  const expiry = modal.querySelector('#expiry');
  const cvv = modal.querySelector('#cvv');

  let lastFocused = null;

  /* ---------- Відкриття / закриття ---------- */

  function openModal() {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('is-locked');
    goToStep(1);
    modal.querySelector('.order__close').focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    resetAll();
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-order-open]')) {
      e.preventDefault();
      openModal();
    }
    if (e.target.closest('[data-order-close]') && !modal.hidden) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;

    if (e.key === 'Escape') closeModal();

    // фокус не виходить за межі вікна
    if (e.key === 'Tab') {
      const items = [
        ...panel.querySelectorAll('button, input, select, a[href]'),
      ].filter(
        (el) => !el.closest('[hidden]') && !el.disabled && el.tabIndex !== -1,
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ---------- Кроки ---------- */

  function goToStep(n) {
    Object.entries(forms).forEach(([key, el]) => {
      el.hidden = Number(key) !== n;
    });

    steps.forEach((el, i) => {
      el.classList.toggle('is-active', i + 1 === n);
      el.classList.toggle('is-done', i + 1 < n);
    });

    panel.dataset.screen = n;
    summary.hidden = n === 3;
    panel.scrollTop = 0;
  }

  function resetAll() {
    forms[1].reset();
    forms[2].reset();
    modal
      .querySelectorAll('.is-invalid')
      .forEach((el) => el.classList.remove('is-invalid'));
    fillCities();
    updatePrice();
  }

  /* ---------- Ціна ---------- */

  function updatePrice() {
    price.textContent = `${PRICE * Number(qty.value)}$`;
  }
  qty.addEventListener('change', updatePrice);

  /* ---------- Країна → міста ---------- */

  function fillCities() {
    const list = CITIES[country.value] || [];
    city.innerHTML =
      '<option value="" selected disabled hidden></option>' +
      list.map((name) => `<option value="${name}">${name}</option>`).join('');
  }
  country.addEventListener('change', fillCities);
  fillCities();

  /* ---------- Картка: 4 групи цифр ---------- */

  const onlyDigits = (str) => str.replace(/\D/g, '');

  cardParts.forEach((input, i) => {
    input.addEventListener('input', () => {
      input.value = onlyDigits(input.value).slice(0, 4);
      if (input.value.length === 4 && cardParts[i + 1])
        cardParts[i + 1].focus();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && cardParts[i - 1]) {
        cardParts[i - 1].focus();
      }
    });

    // вставлення повного номера в будь-яке поле
    input.addEventListener('paste', (e) => {
      const digits = onlyDigits(e.clipboardData.getData('text')).slice(0, 16);
      if (digits.length <= 4) return;
      e.preventDefault();
      cardParts.forEach((part, idx) => {
        part.value = digits.slice(idx * 4, idx * 4 + 4);
      });
      cardParts[Math.min(Math.floor(digits.length / 4), 3)].focus();
    });
  });

  /* ---------- Термін дії: MM / YY ---------- */

  expiry.addEventListener('input', () => {
    let digits = onlyDigits(expiry.value).slice(0, 4);
    if (digits.length > 2)
      digits = `${digits.slice(0, 2)} / ${digits.slice(2)}`;
    expiry.value = digits;
  });

  cvv.addEventListener('input', () => {
    cvv.value = onlyDigits(cvv.value).slice(0, 3);
  });

  /* ---------- Валідація ---------- */

  function setInvalid(el, invalid) {
    const wrapper = el.closest('.field');
    if (wrapper) wrapper.classList.toggle('is-invalid', invalid);
    return !invalid;
  }

  const isFilled = (el) => el.value.trim().length > 0;

  function validateExpiry(value) {
    const match = value.match(/^(\d{2}) \/ (\d{2})$/);
    if (!match) return false;
    const month = Number(match[1]);
    const year = 2000 + Number(match[2]);
    if (month < 1 || month > 12) return false;
    const now = new Date();
    return (
      year > now.getFullYear() ||
      (year === now.getFullYear() && month >= now.getMonth() + 1)
    );
  }

  function validateStep1() {
    const f = forms[1].elements;
    const results = [
      setInvalid(f.firstName, !isFilled(f.firstName)),
      setInvalid(f.lastName, !isFilled(f.lastName)),
      setInvalid(
        f.email,
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim()),
      ),
      setInvalid(f.phone, onlyDigits(f.phone.value).length < 9),
      setInvalid(f.city, !f.city.value),
      setInvalid(f.address1, !isFilled(f.address1)),
    ];
    return results.every(Boolean);
  }

  function validateStep2() {
    const f = forms[2].elements;
    const cardNumber = cardParts.map((p) => p.value).join('');
    const results = [
      setInvalid(cardParts[0], cardNumber.length !== 16),
      setInvalid(f.holder, !isFilled(f.holder)),
      setInvalid(f.expiry, !validateExpiry(f.expiry.value)),
      setInvalid(f.cvv, f.cvv.value.length !== 3),
    ];
    return results.every(Boolean);
  }

  // прибираємо помилку, коли користувач починає виправляти поле
  modal.addEventListener('input', (e) => {
    const wrapper = e.target.closest('.field');
    if (wrapper) wrapper.classList.remove('is-invalid');
  });
  modal.addEventListener('change', (e) => {
    const wrapper = e.target.closest('.field');
    if (wrapper) wrapper.classList.remove('is-invalid');
  });

  /* ---------- Відправка ---------- */

  forms[1].addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep1()) {
      forms[1]
        .querySelector('.is-invalid input, .is-invalid .dropdown__toggle')
        ?.focus();
      return;
    }
    goToStep(2);
  });

  forms[2].addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep2()) {
      forms[2].querySelector('.is-invalid input')?.focus();
      return;
    }

    const order = {
      quantity: Number(qty.value),
      total: PRICE * Number(qty.value),
      customer: Object.fromEntries(new FormData(forms[1])),
      // дані картки на сервер напряму не надсилаємо — тут має бути платіжний провайдер
    };
    console.log('Order:', order);

    goToStep(3);
  });

  /* ---------- Кастомні дропдауни ---------- */

  function initDropdown(select) {
    const wrapper = document.createElement('div');

    wrapper.className = 'dropdown';

    if (select.classList.contains('order__select--qty')) {
      wrapper.classList.add('dropdown--qty');
    }

    if (select.classList.contains('header__language-select')) {
      wrapper.classList.add('header__language-dropdown');
    }

    // кнопка бере вигляд звичайного селекта (клас order__select)
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = `${select.className} dropdown__toggle`;
    toggle.setAttribute('aria-haspopup', 'listbox');
    toggle.setAttribute('aria-expanded', 'false');

    const list = document.createElement('ul');
    list.className = 'dropdown__list';
    list.setAttribute('role', 'listbox');
    list.hidden = true;

    select.before(wrapper);
    wrapper.append(toggle, select, list);
    select.className = 'dropdown__native';
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');

    let items = [];
    let activeIndex = -1;

    function sync() {
      const selected = select.selectedOptions[0];
      toggle.textContent =
        selected && !selected.disabled ? selected.textContent : '';

      items.forEach((li) => {
        const isSelected = li.dataset.value === select.value;
        li.classList.toggle('is-selected', isSelected);
        li.setAttribute('aria-selected', String(isSelected));
      });
    }

    function build() {
      const options = [...select.options].filter(
        (o) => !o.hidden && !o.disabled,
      );
      list.innerHTML = '';
      items = options.map((option) => {
        const li = document.createElement('li');
        li.className = 'dropdown__item';
        li.setAttribute('role', 'option');
        li.dataset.value = option.value;
        li.textContent = option.textContent;
        list.append(li);
        return li;
      });
      sync();
    }

    function setActive(index) {
      activeIndex = index;
      items.forEach((li, i) => li.classList.toggle('is-active', i === index));
      if (items[index]) items[index].scrollIntoView({ block: 'nearest' });
    }

    function open() {
      list.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      setActive(
        Math.max(
          items.findIndex((li) => li.classList.contains('is-selected')),
          0,
        ),
      );
    }

    function close() {
      list.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      setActive(-1);
    }

    function choose(index) {
      const li = items[index];
      if (!li) return;
      select.value = li.dataset.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      close();
      toggle.focus();
    }

    toggle.addEventListener('click', () => (list.hidden ? open() : close()));

    list.addEventListener('click', (e) => {
      e.preventDefault(); // щоб <label> навколо не клікнув по кнопці вдруге
      const li = e.target.closest('.dropdown__item');
      if (li) choose(items.indexOf(li));
    });

    toggle.addEventListener('keydown', (e) => {
      const isOpen = !list.hidden;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!isOpen) return open();
        const step = e.key === 'ArrowDown' ? 1 : -1;
        setActive((activeIndex + step + items.length) % items.length);
      } else if (e.key === 'Enter' && isOpen) {
        e.preventDefault();
        choose(activeIndex);
      } else if (e.key === 'Escape' && isOpen) {
        e.stopPropagation(); // закриваємо лише список, а не всю форму
        close();
      } else if (e.key === 'Tab') {
        close();
      }
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) close();
    });

    // зміни в справжньому select: міста за країною, reset форми, автозаповнення
    new MutationObserver(build).observe(select, { childList: true });
    select.addEventListener('change', sync);
    select.form?.addEventListener('reset', () => setTimeout(sync));

    // клік по підпису веде на кнопку, а не на прихований select
    const label =
      select.id && document.querySelector(`label[for="${select.id}"]`);
    if (label) {
      label.addEventListener('click', (e) => {
        e.preventDefault();
        toggle.focus();
      });
    }

    build();
  }

  modal.querySelectorAll('select[data-dropdown]').forEach(initDropdown);

  document
    .querySelectorAll('.header__top-language select[data-dropdown]')
    .forEach(initDropdown);
})();

const goTop = document.querySelector('.contacts__go-top');
const main = document.querySelector('main');
const contacts = document.querySelector('.contacts');

if (goTop && main && contacts) {
  const updateGoTopVisibility = () => {
    const mainRect = main.getBoundingClientRect();
    const contactsRect = contacts.getBoundingClientRect();

    const isVisible =
      mainRect.top <= 0 && contactsRect.bottom > window.innerHeight;

    goTop.classList.toggle('contacts__go-top--visible', isVisible);
  };

  window.addEventListener('scroll', updateGoTopVisibility);
  window.addEventListener('resize', updateGoTopVisibility);

  updateGoTopVisibility();
}

const headerButton = document.querySelector('.header__button');
const footer = document.querySelector('.footer');

if (headerButton && footer) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const isTablet = window.matchMedia('(min-width: 768px)').matches;

      headerButton.classList.toggle(
        'header__button--hidden',
        isTablet && entry.isIntersecting,
      );
    },
    {
      threshold: 0,
    },
  );

  observer.observe(footer);
}

const videoModal = document.querySelector('[data-video-modal]');
const videoFrame = document.querySelector('[data-video-frame]');
const videoOpenButtons = document.querySelectorAll('[data-video-open]');
const videoClose = document.querySelectorAll('[data-video-close]');

videoOpenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.videoId || 'A3NwsyZB0O8';

    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoModal.classList.add('is-open');
  });
});

const closeVideo = () => {
  videoModal.classList.remove('is-open');
  videoFrame.src = '';
};

videoClose.forEach((button) => {
  button.addEventListener('click', closeVideo);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeVideo();
  }
});
