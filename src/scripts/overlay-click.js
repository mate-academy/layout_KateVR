'use strict';

import { uiState } from './uiState';
import { closeMenu } from './menu';
import { closeModals } from './modal';

const overlay = document.querySelector('.overlay');

export function configureOverlay() {
  overlay.addEventListener('click', () => {
    if (uiState.menuOpen) {
      closeMenu();
    } else if (uiState.modalOpen) {
      closeModals();
    }
  });
}
