'use strict';

function overlayOn(elementId) {
  document.getElementById(elementId).style.display = "grid";
  document.documentElement.style.overflow = 'hidden';
  document.body.scroll = "no";
}

function overlayOff(elementId) {
  document.getElementById(elementId).style.display = "none";
  document.documentElement.style.overflow = 'scroll';
  document.body.scroll = "yes";
}
