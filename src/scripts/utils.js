'use strict';

// #region requests and properties
  export function query(name) {
    return document.querySelector(name);
  };

  export function queryAll(name) {
    return document.querySelectorAll(name);
  };

  export function queryID(idName) {
    return document.getElementById(idName);
  };

  export function breakpoint(media) {
    return getComputedStyle(document.documentElement)
          .getPropertyValue(media)
          .slice(0, -2);
  };

  export function showString(nameString, variable) {
    if(variable.length <= 0) {
      return '';
    }
    return nameString;
  };
// #endregion

// #region tirm string
  export function trimString(string,from, to) {
    return string.slice(from, to);
  }
// #endregion

// #region copy element
  export function copyElement(container, insert, copies = '1') {

    for(let i=0; i < copies; i++) {

      const img = document.createElement('img');
      img.className = ".about-product__text-image";
      img.src = insert;
      img.alt = "katvr-games";

      query(container).appendChild(img);
      animationText(img, i);
    }
  };

  export function animationText(name, index) {
    name.style.animation = 'bright 2s ease-in-out alternate infinite';
    name.style.animationDelay = `${index * 300}ms`;
  };

// #endregion

// #region creating and deleting classes

  // create and delete class
  export function classHtml(className, event, newClass) {
    return query(className).classList[event](`${trimString(className, 1)}${newClass}`);
  };

  export function classicClassHtml(className, event, newClass) {
    return query(className).classList[event](newClass);
  };

  // click with add or delete class
  export function clickClass(name, className, event, nameClass) {
    const item = query(name);

    item.addEventListener('click', function() {
      classHtml(className, [event], nameClass);
    });
  };

  // click with add or delete new class
    export function clickNewClass(name, blockName, event, newClass ) {
      const item = query(name);

      item.addEventListener('click', function() {
        classicClassHtml(blockName, [event], newClass);
      })
    };

  // click with add or delete new class to the parther element
    // export function clickNewClassParthnerElement(nameClick, nameClass, event, newClass) {
    //   const item = query(nameClick);

    //   item.addEventListener('click', function() {
    //     query(nameClass).nextElementSibling.classList[event](newClass);
    //   })
    // };

  // click with add or delete class clone
    export function clickClassClone(clone, className, event, nameClass) {
      const item = clone;

      item.addEventListener('click', function() {
        classHtml(className, [event], nameClass);
      });
    };

  // create or delete a class contained in a container
    export function classContains(className, event, newClass) {
      const container = query(className);

      if(container.classList.contains(newClass)) {
        container.classList[event](newClass);
      }
    };

  // click on a group of elements
    export function clickGroup(name, event, newClass, className) {
      const container = queryAll(name);

      container.forEach(item => {
        item.addEventListener('click', function() {
          classHtml(className, [event], newClass);
        })
      })
    };

  // class tracking to create or delete
    export function classTracking(icon, event, newClass) {

      const nameClass = `${trimString(icon, 1, -6)}`;
      const container =  query(`${trimString(icon, 0, -6)}`);
      const button = query(icon);

      button.addEventListener('click', function() {

        setTimeout(() => {
          if(container.classList.contains(`${nameClass}${newClass}`)) {
            container.classList[event](`${nameClass}${newClass}`);
          };
        }, 1000);
      })
    };

  // group classes tracking to create or delete
    export function classTrackingAll(items, event, newClass, nameClass) {
      const groupItems = queryAll(items);
      const container = query(nameClass);
      const className = `${trimString(nameClass, 1)}${newClass}`;

      groupItems.forEach(item => {
        item.addEventListener('click', function() {
          setTimeout(() => {
            if(container.classList.contains(className)) {
              container.classList[event](className);
            };
          }, 1000);
        });
      });
    };
// #endregion

// #region resizing the window with the mouse
  export function resizingWindow(cont, resizer) {
    const container = query(cont);

    query(resizer).addEventListener('mousedown', initResize);

    function initResize() {
      window.addEventListener('mousemove', startResize);
      window.addEventListener('mouseup', stopResize);

      function startResize(e) {
        container.style.width = (e.clientX - container.getBoundingClientRect().left) + 'px';
        container.style.height = (e.clientY - container.getBoundingClientRect().top) + 'px';
      }

      function stopResize() {
        window.removeEventListener('mousemove', startResize);
        window.removeEventListener('mouseup', stopResize);
      }
    }
  }
// #endregion

// #region chinging the location of elements
  export function changePositionElement(sizeScreen, container, item, newContainer) {

    if(window.innerWidth >= breakpoint(sizeScreen)) {
      query(newContainer).appendChild(queryID(item));
    } else {
      query(container).appendChild(queryID(item));
    }
  };

  export function changePositionItem(sizeScreen, item, event, newContainer, previousContainer) {

    if(window.innerWidth >= breakpoint(sizeScreen)) {
      query(newContainer)[event](query(item));
    } else {
      query(previousContainer)[event](query(item));
    }
  };

  export function changePositionTeg(sizeScreen, item, eventFirst, newContainer, eventLast, previousContainer) {

    if(window.innerWidth >= breakpoint(sizeScreen)) {
      query(newContainer)[eventFirst](query(item));
    } else {
      query(previousContainer)[eventLast](query(item));
    }
  };
// #endregion

// #region display of current information

  export function displayCurrent(elem, display, displayPrice, event, price, currency) {
    const list =  query(elem);

      list.querySelectorAll('LI').forEach(item => {

        item.addEventListener('click', function() {

          list.querySelectorAll('LI').forEach(item => {
            item.classList.remove('active');
          });

          this.classList.add('active');

          const dateValue = this.getAttribute('data-value');

          query(display).textContent = dateValue;
          query(display).dataset.value = dateValue;

          query(displayPrice).textContent = calculatePrice(dateValue, event, price, currency);

        });
      });
  };
// #endregion

// #region hide element

  export function hideElement(btn, elem, options) {
    const element = query(elem);
    const elements = queryAll(options);
    const button = query(`${trimString(elem, 0, -8)}${btn}`);

    button.addEventListener('click', function() {

      elements.forEach(elem => {

          if(element.dataset.value === elem.dataset.value) {
            elem.style.display = 'none';
          } else {
            elem.style.display = 'block';
          }
      });

      elements.forEach(elem => {
        elem.addEventListener('click', function() {

          if(element.dataset.value === elem.dataset.value) {
            elem.style.display = 'none';
          } else {
            elem.style.display = 'block';
          }
        })
      });
    });
  };
// #endregion

// #region calculate
  export function calculatePrice(quantity, event, price, currency='$') {

    const a = price;
    const b = quantity;

    switch (event) {

      case '*':
        return `${a * b}${currency}`;

      case '/':
        return  `${a / b}${currency}`;

      case '+':
        return  `${a + b}${currency}`;

      case '-':
        return  `${a - b}${currency}`;

      default:
        return result = 0;
    }
  };
// #endregion
