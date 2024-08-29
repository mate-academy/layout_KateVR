'use strict';

// #region template for block 'experience'
  export const templateHtml_1 = (name) => {
    return `<article class="experience__article">
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

// #region template for "tech-spes"
  export const templateHtml_2 = (name) => {
    return `<article class="tech-specs__block">
              <h2 class="tech-specs__block--title">${name.title}</h2>
              <p class="tech-specs__block--text">${name.text}</p>
            </article>`;
  };
// #endregion
