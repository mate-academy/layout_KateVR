function accordeon() {
  const showMoreButton = document.getElementById('show-more-acc');
  const accordeonBlock = document.querySelector('.accordion');
  const accordeonItems = document.querySelectorAll('.accordion__item');

  let blocksToShow = +accordeonBlock.dataset.initToShow;

  const accordeonHeight = 60;
  let gap = 15 * (blocksToShow - 1);
  let visibleAccordeons = (accordeonHeight * blocksToShow) + gap;

  accordeonBlock.style.height = `${visibleAccordeons}px`;

  function closeAccordeon() {
    accordeonItems.forEach(item => {
      item.classList.remove('_acc-open');
      accordeonBlock.style.height = `${visibleAccordeons}px`;
      item.style.height = `${accordeonHeight}px`;
    })
  }

  showMoreButton.addEventListener('click', (e) => {
    blocksToShow += 1;

    if (blocksToShow === accordeonItems.length) {
      showMoreButton.classList.add('_less');
    }

    if (blocksToShow <= accordeonItems.length) {
      gap = 15 * (blocksToShow - 1);
      visibleAccordeons = (accordeonHeight * blocksToShow) + gap;
      accordeonBlock.style.height = `${visibleAccordeons}px`;

      closeAccordeon()
    } else {
      const visibleInit = +accordeonBlock.dataset.initToShow;

      gap = 15 * (visibleInit - 1);
      visibleAccordeons = (accordeonHeight * visibleInit) + gap;
      accordeonBlock.style.height = `${visibleAccordeons}px`;

      blocksToShow = visibleInit;
      showMoreButton.classList.remove('_less');
      closeAccordeon();
    }
  })

  accordeonBlock.addEventListener('click', (e) => {
    if (e.target.closest('.accordion__button')) {
      openAccordeon(e.target.closest('.accordion__item'));
    }
  });

  function openAccordeon(acc) {
    const accordeonContent = acc.querySelector('.accordion__content');
    const contentHeight = accordeonContent.getBoundingClientRect().height;
    let activeAccordeon = null;

    accordeonItems.forEach(item => {
      if (item.classList.contains('_acc-open')) {
        activeAccordeon = item;
      }
    });

    acc.classList.toggle('_acc-open');
    accordeonBlock.style.height = `${visibleAccordeons + contentHeight}px`;

    if (activeAccordeon) {
      activeAccordeon.classList.remove('_acc-open');
      accordeonBlock.style.height = `${visibleAccordeons}px`;
      activeAccordeon.style.height = `${accordeonHeight}px`;
    }

    if (!acc.classList.contains('_acc-open')) {
      accordeonBlock.style.height = `${visibleAccordeons}px`;
      acc.style.height = `${accordeonHeight}px`;
    } else {
      accordeonBlock.style.height = `${visibleAccordeons + contentHeight}px`;
      acc.style.height = `${contentHeight + accordeonHeight}px`;
    }
  }
}

accordeon();
