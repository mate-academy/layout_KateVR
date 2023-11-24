'use strict';

// function tabMenu(evt, tabContent) {
//   const content = document.getElementsByClassName('tabs__content');

//   for (let j = 0; j < content.length; j++) {
//     content[j].style.display = 'none';
//   }

//   const links = document.getElementsByClassName('nav__item');

//   for (let j = 0; j < links.length; j++) {
//     links[j].className = links[j].className.replace(' active', '');
//   }

//   document.getElementById(tabContent).style.display = 'grid';
//   evt.currentTarget.className += ' active';
// };
// document.getElementById('default').click();

const links = document.getElementsByClassName('nav__item');

links.onclick = function tabMenu(evt, tabContent) {
  for (let i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(' active', '');
  }

  document.getElementById(tabContent).style.display = 'grid';
  evt.currentTarget.className += ' active';
};
document.getElementById('default').click();
