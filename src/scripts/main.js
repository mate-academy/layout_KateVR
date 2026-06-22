  'use strict';

  const menuOpen = document.querySelector('.header__menu--open');
  const menuClose = document.querySelectorAll('.menu-btn--close');
  const asideMenu = document.querySelector('.menu');
  const menuLanguage = document.querySelector('.language');
  const linkLanguage = document.querySelector('.language-link');
  const backBtn = document.querySelector('.menu-btn--back');
  const faqMenu = document.querySelector('.faq-box');
  const faqLink = document.querySelector('.faq-link');
  const helpMenu = document.querySelector('.help');
  const helpLink = document.querySelector('.help-link');
  const btnBuy = document.querySelectorAll('.btn-buy');
  const buyMenu = document.querySelector('.buy-now');

  function openMenu() {
    asideMenu.classList.add('menu--open');
    document.body.classList.add('menu-overlay');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuLanguage.classList.remove('language--open')
    document.body.classList.remove('menu-overlay');
    buyMenu.classList.remove('buy-now--open');
    helpMenu.classList.remove('help--open');
    faqMenu.classList.remove('faq-box--open');
    asideMenu.classList.remove('menu--open');
    document.body.style.overflow = '';
  }

  function openFaq() {
    faqMenu.classList.add('faq-box--open');
    document.body.classList.add('menu-overlay');
    document.body.style.overflow = 'hidden';
  }

  menuOpen.addEventListener('click', () => {
    openMenu();
  });


  menuClose.forEach(btn => {
    btn.addEventListener('click', () => {
      closeMenu();
    });
  });

  asideMenu.addEventListener('click', (e) => {
    const link = e.target.closest('.nav__link');

    if (!link) return;

    if (
      link.classList.contains('language-link') ||
      link.classList.contains('faq-link') ||
      link.classList.contains('help-link')
    ) {
      return;
    }

    const href = link.getAttribute('href');

    if (href && href.length > 1 && href.startsWith('#')) {
      const target = document.querySelector(href);

      closeMenu();

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else {
      closeMenu();
    }
  });


  linkLanguage.addEventListener('click', () => {
    menuLanguage.classList.add('language--open');
    document.body.classList.add('menu-overlay');
    document.body.style.overflow = 'hidden';
  });

  backBtn.addEventListener('click', () => {
    menuLanguage.classList.remove('language--open');
    document.body.style.overflow = '';
  })


  faqLink.addEventListener('click', () => {
    openFaq();
  });


  helpLink.addEventListener('click', () => {
    helpMenu.classList.add('help--open');
    document.body.classList.add('menu-overlay');
    document.body.style.overflow = 'hidden';
  })


  btnBuy.forEach(btn => {
    btn.addEventListener('click', () => {
      buyMenu.classList.add('buy-now--open');
      document.body.style.overflow = 'hidden';
    });
  });

  const tabs = document.querySelectorAll('.buy-now__tab');
  const forms = document.querySelectorAll('.buy-now__form');
  const buyNowImage = document.querySelector('.buy-now__imgage');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('buy-now__tab--active'));
      forms.forEach(f => f.classList.remove('buy-now__form--visible'));
      tab.classList.add('buy-now__tab--active');

      const target = tab.dataset.tab;

      document.querySelector(`.buy-now__form--${target}`)
        .classList.add('buy-now__form--visible');

      if (target === 'complete') {
        buyNowImage.style.display = 'none';
      } else {
        buyNowImage.style.display = '';
      }
    });
  });

  const btnHome = document.querySelector('.buy-now__btn--home');

  btnHome.addEventListener('click', () => {
    closeMenu();
  });

  const btnLanguage = document.querySelector('.header__language');

  btnLanguage.addEventListener('click', () => {
    menuLanguage.classList.add('language--open');
    document.body.classList.add('menu-overlay');
    document.body.style.overflow = 'hidden';
  });

  const linkFaq = document.querySelector('.hero__box-links--faq');
  const linkHelp = document.querySelector('.hero__box-links--help');

  linkFaq.addEventListener('click', () => {
    openFaq();
  });

  linkHelp.addEventListener('click', () => {
    helpMenu.classList.add('help--open');
    document.body.classList.add('menu-overlay');
    document.body.style.overflow = 'hidden';
  });

  document.querySelectorAll('.about-product__slider').forEach((sliderEl) => {

  const wallpapers = sliderEl.querySelector('.about-product__slider-wallpapers');
  const slides = sliderEl.querySelectorAll('.about-product__slider-images');
  const dots = sliderEl.querySelectorAll('.about-product__slider-dot');
  const prevBtn = sliderEl.querySelector('.about-product__p--prev');
  const nextBtn = sliderEl.querySelector('.about-product__p--next');

  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index > slides.length - 1) index = slides.length - 1;

    slides[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }

  function setActiveDot(index) {
    currentIndex = index;

    dots.forEach((dot, i) => {
      dot.classList.toggle('about-product__slider-dot--active', i === index);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(slides).indexOf(entry.target);
          setActiveDot(index);
        }
      });
    },
    {
      root: wallpapers,
      threshold: 0.6,
    }
  );

  slides.forEach((slide) => observer.observe(slide));
});

const faqLinkMore = document.querySelector('.faq-box__link');

faqLinkMore.addEventListener('click', () => {
  closeMenu();
})

document.querySelectorAll('.help__text-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    closeMenu();
    setTimeout(() => {
      if (href === '#') {
        openFaq();
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  });
});

const heroSlides = document.querySelectorAll('.hero__img');
const prevHero = document.querySelector('.hero__box-links--pad:first-child');
const nextHero = document.querySelector('.hero__box-links--pad:last-child');
const heroTrack = document.querySelector('.hero__slider-images');

let heroIndex = 0;

function goToHeroSlide(index) {
  if (index < 0) index = 0;
  if (index > heroSlides.length - 1) index = heroSlides.length - 1;
  heroIndex = index;
  heroSlides[heroIndex].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
}

prevHero.addEventListener('click', () => goToHeroSlide(heroIndex - 1));
nextHero.addEventListener('click', () => goToHeroSlide(heroIndex + 1));
