'use strict';

function showHideTechInfo(btn, elementId) {
  const element = document.getElementById(elementId);

  const elementStyle = window.getComputedStyle(element);

  if (elementStyle.display == "none") {
    btn.classList.replace("screen-4__info-btn--plus", "screen-4__info-btn--minus");
    element.style.display = "block";
  } else {
    btn.classList.replace("screen-4__info-btn--minus", "screen-4__info-btn--plus");
    element.style.display = "none";
  }
}
