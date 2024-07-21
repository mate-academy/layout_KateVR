'use strict';

// #region requests and properties
  export function query(selector) {
    return document.querySelector(`.${selector}`);
  }

  export function queryAll(selector) {
    return document.querySelectorAll(`.${selector}`);
  }

// #endregion

// #region creating and deleting classes
  export function classHtml(className, event, newClass) {
    return query(className).classList[event](newClass);
  }
// #endregion

// #region moving dots
  export function movingDots(queryName, className, placing) {

    const quantityDots = 20;
    let distance = 0;

    for(let i=0; i < quantityDots; i++) {

      const dots = document.createElement('div');

      dots.className = className;
      dots.style.left = `${i * distance}px`;
      dots.style.animation = `moving-dots 1s linear infinite`;
      dots.style.animationDelay = `${i * 100}ms`;

      dots.style[placing] = `0`;
      distance++;

      query(queryName).appendChild(dots);
    }
  }
//#endregion
