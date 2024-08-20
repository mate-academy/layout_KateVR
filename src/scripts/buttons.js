'use strict';
import { classHtml, query, queryAll, trimString } from "./utils.js";

// #region All for the 'play-video' button

  // moving the dots
    export function movingDots(className, newClass, placing) {

      const quantityDots = 20;
      let distance = 0;

      for(let i=0; i < quantityDots; i++) {

        const dots = document.createElement('div');

        dots.className = `${trimString(className, 1, -5)}${newClass}`;
        dots.style.left = `${i * distance}px`;
        dots.style.animation = `moving-dots 1s linear infinite`;
        dots.style.animationDelay = `${i * 100}ms`;

        dots.style[placing] = `0`;
        distance++;

        query(className).appendChild(dots);
      }
    };

  // click event processing
    export function eventProcessing(nameClass, event, newClass, source) {
      query(nameClass).addEventListener('click', function() {
        classHtml('.video-link', event, newClass);
        classHtml('.body', event, '__lock');
        classHtml('.header__container', event, '--blurred-screen');
        query('.video-link--iframe').src = source;
      });
    };
//#endregion

// #region window opening

// #region opening the menu window
  export function openWindow(nameAddress, event, modifier, nameblock1, nameblock2 = '.default') {
    const item = query(nameAddress);

    item.addEventListener('click', function() {
      classHtml(nameblock1, [event], modifier);
      classHtml(nameblock2, [event], modifier);
      classHtml('.body', [event], '__lock');
    });
  };
// #endregion

// #region click toggle
  export function clickToggle(name) {
    const items = queryAll(name);

    items.forEach(item => {
      item.addEventListener('click', function() {
        item.classList.toggle(`${trimString(name, 1)}--active`);
      });
    }) ;
  };
// #endregion

// #region click on a group of elements
  export function clickGroup(name, event, newClass, className) {
    const container = queryAll(name);

    container.forEach(item => {
      item.addEventListener('click', function() {
        classHtml(className, [event], newClass);
      })
    })
  }
// #endregion

// #region click with add class
  export function clickClass(name, className, event, nameClass) {
    const item = query(name);

    item.addEventListener('click', function() {
      classHtml(className, [event], nameClass);
    });
  };
// #endregion



