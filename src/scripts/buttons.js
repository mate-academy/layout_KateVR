'use strict';
import { classHtml, query, trimString } from "./utils.js";

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

// open window menu
  export function openMenu(menu, event, nameblock) {
    const item = query(menu);

    item.addEventListener('click', function() {
      classHtml(nameblock, [event], '--active');
      classHtml('.drop-down-menu', [event], '__active');
      classHtml('.body', [event], '__lock');
    });
  };

// opening the menu window
    export function openWindow(name, event, nameblock) {
      const item = query(name);

      item.addEventListener('click', function() {
        classHtml(nameblock, [event], '__active');
        classHtml('.body', [event], '__lock');
        classHtml('.body', [event], '--active');
      });
    };
// #endregion


