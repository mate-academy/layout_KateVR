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
  export function classHtml(className, event, newClass) {
    return query(className).classList[event](`${trimString(className, 1)}${newClass}`);
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

// #region click toggle
  // export function clickToggle(name) {
  //   const items = query(name);

  //   items.forEach(item => {
  //     item.addEventListener('click', function() {
  //       item.classList.toggle(`${trimString(name, 1)}--active`);
  //     });
  //   }) ;
  // };


// #endregion
