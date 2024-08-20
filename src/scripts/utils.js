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
// #endregion

// #region tirm string
  export function trimString(string,from, to) {
    return string.slice(from, to);
  }
// #endregion

// #region creating and deleting classes

  // create and delete class
  export function classHtml(className, event, newClass) {
    return query(className).classList[event](`${trimString(className, 1)}${newClass}`);
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

  export function changePositionItem(sizeScreen, item, newContainer, previousContainer) {

    if(window.innerWidth >= breakpoint(sizeScreen)) {
      query(newContainer).appendChild(query(item));
    } else {
      query(previousContainer).appendChild(query(item));
    }
  };
// #endregion

