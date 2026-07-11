import { setupDropdownToggle } from './modules/dropdownToggle.js';
import { setupLangSelection } from './modules/langSelection.js';
import { setupHeaderSwiper } from './modules/headerSwiper.js';
import { setupAboutSwiper } from './modules/aboutSwiper.js';
import { setupMenuToggle } from './modules/menuToggle.js';
import { setupPageScroll } from './modules/pageScroll.js';
import { setupHelpToggle } from './modules/helpToggle.js';
import { setupFaqToggle } from './modules/faqToggle.js';
import { setupTechDetailToggle } from './modules/techDetailToggle.js';
import { setupSubmitForm } from './modules/setupSubmitForm.js';

document.addEventListener('DOMContentLoaded', () => {
  setupDropdownToggle();
  setupLangSelection();
  setupHeaderSwiper();
  setupAboutSwiper();
  setupMenuToggle();
  setupPageScroll();
  setupHelpToggle();
  setupFaqToggle();
  setupTechDetailToggle();
  setupSubmitForm();
});
