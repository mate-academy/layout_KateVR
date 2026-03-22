export function initModals() {
  const faqSection = document.getElementById('faq');
  const helpSection = document.getElementById('help');

  const openFaqBtns = document.querySelectorAll('.header__faq, .menu__faq, .help__faq');
  const openHelpBtns = document.querySelectorAll('.header__help, .menu__help');

  const closeFaqBtn = document.querySelector('.faq__close');
  const moreFaqBtn = document.querySelector('.faq__button');
  const closeHelpBtn = document.querySelector('.help__close');
  const contactHelpBtn = document.querySelector('.help__contact');

  const toggleModal = (modal, action) => {
    if (!modal) return;

    if (action === 'open') {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      modal.classList.remove('is-open');

      const anyOpen = document.querySelectorAll('.is-open').length > 0;
      if (!anyOpen) {
        document.body.style.overflow = '';
      }
    }
  };

  openFaqBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (btn.classList.contains('help__faq')) {
        toggleModal(helpSection, 'close');
      }

      toggleModal(faqSection, 'open');
    });
  });

  openHelpBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleModal(helpSection, 'open');
    });
  });

  closeFaqBtn?.addEventListener('click', () => toggleModal(faqSection, 'close'));
  moreFaqBtn?.addEventListener('click', () => toggleModal(faqSection, 'close'));
  closeHelpBtn?.addEventListener('click', () => toggleModal(helpSection, 'close'));
  contactHelpBtn?.addEventListener('click', () => toggleModal(helpSection, 'close'));
}
