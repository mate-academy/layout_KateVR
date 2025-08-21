function createPopup() {
  const clientWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollWidth = windowWidth - clientWidth;
  const page = document.documentElement;
  const fixedElems = document.querySelectorAll('._avoid-jolt');
  const popup = document.querySelectorAll('.pop-up');

  if (popup.length > 0) {
    popup.forEach(el => {
      const popupId = el.getAttribute('id');
      const popupById = document.getElementById(popupId);
      const elementShowPopup = document.querySelectorAll(`[data-popup="${popupId}"]`);

      elementShowPopup.forEach(btn => {
        btn.addEventListener('click', (e) => {
          openPopup(popupById);

          e.preventDefault();
        })
      })
    })
  }

  function openPopup(el) {
    if (el) {
      el.classList.add('_popup-open');
      page.classList.add('stop-scroll');
      page.style.paddingRight = `${scrollWidth}px`;
      addPadding();

      el.addEventListener('click', (e) => {
        if (!e.target.closest('.pop-up__content')) {
          closePopup(el);
        }

        if (e.target.classList.contains('transition-to')) {
          closePopup(el);
          setTimeout(() => {
            if (e.target.tagName === 'A') {
              page.classList.remove('stop-scroll');
            } else {
              addPadding();
              page.classList.add('stop-scroll');
              page.style.paddingRight = `${scrollWidth}px`;
            }
          }, 300);
        }
      })
    }
  }

  const closePopupIcon = document.querySelectorAll('.close-pop-up');
  closePopupIcon.forEach(el => {
    el.addEventListener('click', (e) => {
      closePopup(e.target.closest('.pop-up'));

      e.preventDefault();
    })
  })

  function closePopup(el) {
    if (el) {
      el.classList.remove('_popup-open');
      setTimeout(() => {
        page.classList.remove('stop-scroll');
        page.style.paddingRight = '0px';
        fixedElems.forEach(el => {
          el.style.paddingRight = '0px';
        })
      }, 300);
    }
  }

  function addPadding() {
    fixedElems.forEach(el => {
      el.style.paddingRight = `${scrollWidth}px`;
    })
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      const activePopup = document.querySelector('.pop-up._popup-open');
      closePopup(activePopup);
    }
  })
}

createPopup();
