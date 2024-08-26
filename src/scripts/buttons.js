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
        classHtml('.header__link-video--arrow', event, newClass);
        classHtml('.body', event, '__lock');
        classHtml('.body-wrapper', event, '--blurred-screen');
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

// #region click toggle class
  export function clickToggleClass(classClick, newClass) {
    const item = query(classClick);

    item.addEventListener('click', function() {
      query(newClass).classList.toggle(`${trimString(newClass, 1)}--active`);
    });
  }

  export function clickToggleAll(name) {
    const items = queryAll(name);

    items.forEach(item => {
      item.addEventListener('click', function() {
        item.classList.toggle(`${trimString(name, 1)}--active`);
      });
    }) ;
  };
// #endregion

// #region display of current information
  export function displayCurrent(elem, display) {
    const list =  query(elem);

    list.querySelectorAll('LI').forEach(item => {

      item.addEventListener('click', function() {

        list.querySelectorAll('LI').forEach(item => {
          item.classList.remove('active');
        });

        this.classList.add('active');

        const selectedValue = this.getAttribute('data-value');
        query(display).textContent = selectedValue;
      });
    });
  }
// #endregion

// #region disable click
  export function disableClick(name, button) {
    const item = query(name);
    const buttons = queryAll(button);


    item.addEventListener('click', function() {

      buttons.forEach((btn) => {
        btn.classList.toggle('disabled');
      });

      item.classList.remove('disabled');
    });
  }

  export function disableClickAll(name, button) {
    const items = queryAll(name);
    const buttons = queryAll(button);

    items.forEach((btn) => {
      btn.addEventListener('click', function() {

        buttons.forEach((btn) => {
          btn.classList.remove('disabled');
        })
      })
    })
  }
// #endregion



