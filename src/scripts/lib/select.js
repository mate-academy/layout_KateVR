export const customSelect = function () {
  const selects = document.querySelectorAll('.select');
  let activeSelect = null;

  selects.forEach(select => {
    const currentList = select.querySelector('.select__list');
    const currentValue = select.querySelector('.select__current');

    select.addEventListener('click', (e) => {
      e.preventDefault();

      const prevEl = select.previousElementSibling;

      if (select.classList.contains('_active')) {
        select.classList.remove('_active');
        if (prevEl && prevEl.classList.value.startsWith('aside-buy-order')) {
          prevEl.classList.remove('blue');
        }
        activeSelect = null;
        return;
      }

      selects.forEach(rem => {
        rem.classList.remove('_active');
        const remPrevEl = rem.previousElementSibling;
        if (remPrevEl && prevEl.classList.value.startsWith('aside-buy-order')) {
          remPrevEl.classList.remove('blue');
        }
      });

      select.classList.add('_active');
      if (prevEl && prevEl.classList.value.startsWith('aside-buy-order')) {
        prevEl.classList.add('blue');
      }

      activeSelect = select;
    });

    if (currentList) {
      currentList.addEventListener('click', (e) => {
        const link = e.target.closest('.select__item > a');
        if (link) {
          const value = link.textContent;
          currentValue.textContent = value;

          e.stopPropagation();
          select.classList.remove('_active');
          const prevEl = select.previousElementSibling;
          if (prevEl && prevEl.classList.value.startsWith('aside-buy-order')) {
            prevEl.classList.remove('blue');
          }
          e.preventDefault();
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.select') && activeSelect) {
      const prevEl = activeSelect.previousElementSibling;
      activeSelect.classList.remove('_active');
      if (prevEl && prevEl.classList.value.startsWith('aside-buy-order')) {
        prevEl.classList.remove('blue');
      }
      activeSelect = null;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && activeSelect) {
      const prevEl = activeSelect.previousElementSibling;
      activeSelect.classList.remove('_active');
      if (prevEl && prevEl.classList.value.startsWith('aside-buy-order')) {
        prevEl.classList.remove('blue');
      }
      activeSelect = null;
    }
  });
}

customSelect();
