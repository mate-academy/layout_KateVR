'use strict';

/**
 * Hotspots Module
 * Handles interactive tech-specs hotspots, popup toggling, and outside-click/keyboard dismissal.
 */
export const initHotspots = () => {
  const hotspotsPopup = document.querySelector('#tech-specs-popup');
  const hotspotButtons = document.querySelectorAll('.tech-specs__hotspot');
  const popupTexts = document.querySelectorAll('[data-popup]');

  // Early exit if core elements are missing
  if (!hotspotsPopup || !hotspotButtons.length) return;

  const closePopup = () => {
    hotspotsPopup.classList.remove('is-open');

    // Reset all buttons to closed state for ARIA and animation
    hotspotButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));

    // Clear text selection to prevent blinking cursor artifacts
    window.getSelection().removeAllRanges();
  };

  // Toggle hotspot popup on button click
  hotspotButtons.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      const hotspotName = hotspot.dataset.hotspot;
      const wasOpen = hotspot.getAttribute('aria-expanded') === 'true';

      if (wasOpen) {
        closePopup();
      } else {
        hotspotsPopup.classList.add('is-open');

        // Show only the text matching the clicked hotspot
        popupTexts.forEach(text => {
          text.hidden = text.dataset.popup !== hotspotName;
        });

        // Update ARIA states
        hotspotButtons.forEach(btn => {
          btn.setAttribute('aria-expanded', btn === hotspot ? 'true' : 'false');
        });
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', event => {
    if (!hotspotsPopup.classList.contains('is-open')) return;

    const clickedInsideHotspots = event.target.closest('.tech-specs__hotspots');
    const clickedInsidePopup = event.target.closest('#tech-specs-popup');

    // Prevent closing if clicking inside the order modal
    const clickedInsideOrderModal = event.target.closest('#order-modal');

    if (
      !clickedInsideHotspots &&
      !clickedInsidePopup &&
      !clickedInsideOrderModal
    ) {
      closePopup();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && hotspotsPopup.classList.contains('is-open')) {
      closePopup();
    }
  });
};
