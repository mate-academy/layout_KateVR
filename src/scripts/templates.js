'use strict';

// #region template for block 'more'
  export const templateHtml = (name) => {
    return `<article class="experience__content">
              <img
                class="experience__image"
                src="${name['image']}"
                alt="education KatVR"
              >

              <h3 class="experience__subtitle">${name.title}</h3>
              <p class="experience__description">${name.text}</p>
            </article>`;
  };
// #endregion
