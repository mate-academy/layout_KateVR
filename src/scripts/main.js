'use strict';
import { setupDropdownToggle } from './modules/dropdownToggle.js';
import { setupLangSelector } from './modules/langSelector.js';
import { setupMenu } from './modules/menu.js';
import { setupFaqToggle } from './modules/faqToggle.js';
import { setupFaqMenu } from './modules/faqMenu.js';
import { setupHelpToggle } from './modules/helpToggle.js';
import { setupHeaderSwiper } from './modules/headerSwiper.js';
import { setupAboutSwiper } from './modules/aboutSwiper.js';
import { setupTechToggle } from './modules/techToggle.js';
import { setupForm } from './modules/form.js';
import { setupBuyToggle } from './modules/buyToggle.js';
import { setupQuantitySelect } from './modules/quantitySelect.js';
import { setupFormBuy } from './modules/formBuy.js';


document.addEventListener('DOMContentLoaded', () => {
  setupDropdownToggle();
  setupLangSelector();
  setupMenu();
  setupFaqToggle();
  setupFaqMenu();
  setupHelpToggle();
  setupHeaderSwiper();
  setupAboutSwiper();
  setupTechToggle();
  setupForm();
  setupBuyToggle();
  setupQuantitySelect();
  setupFormBuy();
});
