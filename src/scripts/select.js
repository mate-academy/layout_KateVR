export function initSelect() {
  const selects = document.querySelectorAll('.select');

  selects.forEach((select) => {
    const button = select.querySelector('.select__button');
    const items = select.querySelectorAll('.select__item');

    if (!button) return;

    button.addEventListener('click', (e) => {
      e.stopPropagation();

      document.querySelectorAll('.select.is-open').forEach(openSelect => {
        if (openSelect !== select) openSelect.classList.remove('is-open');
      });

      select.classList.toggle('is-open');
    });

    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();

        if (item.classList.contains('select__item--disabled')) return;

        button.textContent = item.textContent;
        select.classList.remove('is-open');

        const changeEvent = new Event('change');
        button.dispatchEvent(changeEvent);
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.select.is-open').forEach(select => {
      select.classList.remove('is-open');
    });
  });
}

