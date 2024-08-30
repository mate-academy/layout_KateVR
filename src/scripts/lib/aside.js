function aside() {
  const asideItems = document.querySelectorAll('.aside');
  const backButtons = document.querySelectorAll('.back-aside');
  const page = document.documentElement;

  asideItems.forEach(item => {
    const itemId = item.getAttribute('id');
    const asideItem = document.getElementById(itemId);
    let relatedElement = null;

    if (asideItem.classList.contains('aside-buy')) {
      relatedElement = document.querySelectorAll(`[data-aside="${itemId}"]`);
    } else {
      relatedElement = document.querySelectorAll(`[href="#${itemId}"]`);
    }

    relatedElement.forEach(link => {
      link.addEventListener('click', (e) => {
        asideItems.forEach(el => {
          if (el.classList.contains('_aside-open')) {
            el.classList.remove('_aside-open')
          }
        })

        page.classList.add('stop-scroll');
        asideItem.classList.add('_aside-open');

        e.preventDefault();
      })
    })

    asideItem.addEventListener('click', (e) => {
      if (e.target.closest('.menu__item') || e.target.closest('.item-close')) {
        asideItem.classList.remove('_aside-open');
      }
    });
  });

  backButtons.forEach(back => {
    back.addEventListener('click', (e) => {
      const activeAside = document.querySelector('.aside._aside-open');

      if (activeAside.classList.contains('aside-buy')) {
        page.classList.remove('stop-scroll');
      }

      if (activeAside) {
        activeAside.classList.remove('_aside-open');
      }
    })
  })

}

aside();
