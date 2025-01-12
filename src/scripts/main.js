'use strict';

import { videoPlayer } from './utils/videoPlayer';
import { burgerMenu } from './utils/burgerMenu';
import { languageSelector } from './utils/languageSelector';
import { languageNavMenu } from './utils/languageNavMenu';
import { modalTemplate } from './utils/modals';
import { faqAccordion } from './utils/faq-accordion';
import { fullSizeModal } from './utils/fullSizeModal';
import {
  aboutUsSliderConfig,
  headerSliderConfig,
  slider,
} from './utils/slider';

const HELP_LINK_SELECTOR = 'a[href="#help"]';
const HELP_MODAL_SELECTOR = '#modal-help';
const FAQ_LINK_SELECTOR = 'a[href="#faq"]';
const FAQ_MODAL_SELECTOR = '#modal-faq';
const ORDER_MODAL_SELECTOR = '.order-modal';
const ORDER_LINK_SELECTOR = 'a[href="#buy-now"]';

document.addEventListener('DOMContentLoaded', () => {
  videoPlayer();
  burgerMenu();
  languageSelector();
  languageNavMenu();
  slider(aboutUsSliderConfig);
  slider(headerSliderConfig);
  modalTemplate(HELP_LINK_SELECTOR, HELP_MODAL_SELECTOR);
  modalTemplate(FAQ_LINK_SELECTOR, FAQ_MODAL_SELECTOR);
  modalTemplate(ORDER_LINK_SELECTOR, ORDER_MODAL_SELECTOR);
  faqAccordion();
  fullSizeModal();
});
