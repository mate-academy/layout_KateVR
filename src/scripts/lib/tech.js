document.addEventListener('click', (e) => {
  const button = e.target.closest('.tech-specs__button');

  if (button) {
    const isOpen = button.classList.contains('_open');
    const techInfo = button.nextElementSibling;

    document.querySelectorAll('.tech-specs__button').forEach(btn => {
      const techInfoBtn = btn.nextElementSibling;
      btn.classList.remove('_open');
      techInfoBtn.classList.add('_invisible');
    });

    if (!isOpen) {
      techInfo.classList.remove('_invisible');
      button.classList.add('_open');
    }
  } else {
    document.querySelectorAll('.tech-specs__button').forEach(btn => {
      const techInfoBtn = btn.nextElementSibling;
      btn.classList.remove('_open');
      techInfoBtn.classList.add('_invisible');
    });
  }
});
