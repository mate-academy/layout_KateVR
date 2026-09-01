'use strict';

// ==========================================================================
// APPLICATION ENTRY POINT
// ==========================================================================

// 1. Global Styles
import '../styles/main.scss';

// 2. Feature Modules
import { initLangDropdown } from './modules/lang-dropdown.js';
import { initHotspots } from './modules/hotspots.js';
import { initMobileMenu } from './modules/mobile-menu.js';
import { initFaq } from './modules/faq.js';
import { initModals } from './modules/modal.js';
import { initHero } from './modules/hero.js';
import { initOrderSteps } from './modules/order-steps.js';

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLangDropdown();
  initHotspots();
  initMobileMenu();
  initFaq();
  initModals();
  initHero();
  initOrderSteps();
});
