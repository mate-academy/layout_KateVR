'use strict';

/**
 * Mobile Menu Module
 * Handles opening/closing, internal screen transitions, and anchor scrolling.
 */
export const initMobileMenu = () => {
  const menu = document.querySelector('.mobile-menu');
  const burgerBtn = document.querySelector('.header__burger');

  // Early exit if core elements are missing
  if (!menu || !burgerBtn) return;

  const screens = menu.querySelectorAll('.mobile-menu__screen');

  /**
   * Switches the active screen within the mobile menu.
   * @param {string} targetScreen - The target screen name (e.g., 'main', 'lang', 'faq').
   */
  const showScreen = targetScreen => {
    if (!screens.length) return;

    screens.forEach(screen => {
      if (screen.dataset.screen === targetScreen) {
        screen.classList.add('is-active');
      } else {
        screen.classList.remove('is-active');
      }
    });
  };

  const openMenu = () => {
    menu.classList.add('mobile-menu--open');
    document.documentElement.classList.add('no-scroll');
  };

  const closeMenu = () => {
    menu.classList.remove('mobile-menu--open');
    document.documentElement.classList.remove('no-scroll');
    showScreen('main');
  };

  burgerBtn.addEventListener('click', openMenu);

  // Unified delegated event listener for all menu interactions
  menu.addEventListener('click', event => {
    const target = event.target;

    // 1. Navigate to sub-screens (Language, FAQ, Help)
    const triggerBtn = target.closest('[data-target]');
    if (triggerBtn) {
      const screenName = triggerBtn.dataset.target;
      const hasTargetScreen = Array.from(screens).some(
        s => s.dataset.screen === screenName,
      );

      if (hasTargetScreen) {
        showScreen(screenName);
        return;
      }
    }

    // 2. Return to main screen
    if (target.closest('[data-action="back"]')) {
      showScreen('main');
      return;
    }

    // 3. Close menu
    if (target.closest('[data-action="close"], [data-action="close-menu"]')) {
      closeMenu();
      return;
    }

    // 4. Internal navigation: Help -> FAQ
    const faqLink = target.closest('[data-action="open-faq"]');
    if (faqLink) {
      event.preventDefault();
      showScreen('faq');
      return;
    }

    // 5. Internal navigation: Help -> Contact Us (Close + Smooth Scroll)
    const contactLink = target.closest('[data-action="scroll-to-contacts"]');
    if (contactLink) {
      event.preventDefault();
      closeMenu();

      const targetSection =
        document.querySelector('#contacts') || document.querySelector('footer');

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // 6. Standard anchor navigation (About, Tech, Benefits, etc.)
    const navLink = target.closest('.mobile-menu__link');
    if (navLink) {
      const href = navLink.getAttribute('href');
      closeMenu();

      if (href && href.startsWith('#') && href !== '#') {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  });
};
