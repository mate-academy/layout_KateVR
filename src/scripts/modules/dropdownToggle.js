export const setupDropdownToggle = () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownTrigger = document.querySelector('.dropdown__trigger');
  const dropdownContent = document.querySelector('.dropdown__content');

  if (!dropdown || !dropdownTrigger || !dropdownContent) return;

  const closeDropdown = () => {
    dropdownTrigger.classList.remove('dropdown__trigger--active');
    dropdownContent.classList.remove('dropdown__content--active');
  }

  const toggleDropdown = () => {
    const isActive = dropdownTrigger.classList.toggle('dropdown__trigger--active');
    dropdownContent.classList.toggle('dropdown__content--active', isActive);
  };

  dropdownTrigger.addEventListener('click', toggleDropdown);

  dropdown.addEventListener('click', (e) => {
    const target = e.target.closest('.dropdown__item');

    if (target) {
      closeDropdown();
    }
  })

  document.addEventListener('click', (e) => {
    if (
      dropdownTrigger.classList.contains('dropdown__trigger--active')
      && !dropdown.contains(e.target)
    ) {
      closeDropdown();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1280 && dropdownTrigger.classList.contains('dropdown__trigger--active')) {
      closeDropdown();
    }
  });
}
