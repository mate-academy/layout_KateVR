'use strict';

// #region template for block 'experience'
  export const templateHtml = (name) => {
    return `<article class="${name.nameObject}__article">

              <div class="${name.nameObject}__image">
                <img
                  class="${name.nameObject}__img"
                  src="${name['image']}"
                  alt="education KatVR"
                >
              </div>

              <h3 class="${name.nameObject}__subtitle">${name.title}</h3>
              <p class="${name.nameObject}__description">${name.text}</p>
            </article>`;
  };
// #endregion
