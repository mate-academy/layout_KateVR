'use strict';

import { uiState } from './uiState';

const overlay = document.querySelector('.overlay');

export function syncOverlay() {
  const shouldBeShown = uiState.menuOpen || uiState.modalOpen;
  if (shouldBeShown) {
    overlay.classList.add('overlay--active');
  } else {
    overlay.classList.remove('overlay--active');
  }
}
