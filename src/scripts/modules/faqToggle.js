export const setupFaqToggle = () => {
  const faq = document.querySelector('.faq');
  const faqContent = document.querySelector('.faq__content');
  const closeFaqBtn = document.querySelector('.faq__close');
  const faqMoreBtn = document.querySelector('.faq__more');
  const openFaqBtns = document.querySelectorAll('.faq-btn');

  const resetAccordion = () => {
    [...accordions].forEach(accordion => {
      console.log(accordion);

      if (accordion.classList.contains('accordion--open')) {
        accordion.classList.remove('accordion--open');
      }
    })
  }

  const openFaq = () => {
    faq.classList.add('page__aside--active');
  }

  const closeFaq = () => {
    faq.classList.remove('page__aside--active');
    resetAccordion();
  }

  [...openFaqBtns].forEach(btn => btn.addEventListener('click', openFaq));

  closeFaqBtn.addEventListener('click', () => {
    closeFaq();
  })

  const articles = document.querySelector('.faq__articles');
  const accordions = document.querySelectorAll('.accordion');

  faqMoreBtn.addEventListener('click', () => {
    closeFaq();
  });


  articles.addEventListener('click', (e) => {
    const article = e.target.closest('article');

    if (!article.classList.contains('accordion--open')) {
      article.classList.add('accordion--open');
    } else {
      article.classList.remove('accordion--open');
    }
  });

  document.addEventListener('click', (e) => {
    const en = e.target;

    if (!faqContent.contains(en)) {
      if (faq.classList.contains('page__aside--active') && [...openFaqBtns].every(btn => btn !== en)) {
        closeFaq();
      }
    }
  });
}
