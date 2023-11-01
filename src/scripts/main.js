'use strict';

// Custom-select-language
const customSelects = document.getElementsByClassName('custom-select');

for (let i = 0; i < customSelects.length; i++) {
  const selectElement = customSelects[i].getElementsByTagName('select')[0];
  const options = selectElement.options;

  const selectedDiv = document.createElement('DIV');

  selectedDiv.setAttribute('class', 'select-selected');
  selectedDiv.innerHTML = options[selectElement.selectedIndex].innerHTML;
  customSelects[i].appendChild(selectedDiv);

  const optionListDiv = document.createElement('DIV');

  optionListDiv.setAttribute('class', 'select-items select-hide');

  for (let j = 1; j < options.length; j++) {
    const optionDiv = document.createElement('DIV');

    optionDiv.innerHTML = options[j].innerHTML;

    optionDiv.addEventListener('click', function() {
      const clickedOptionText = this.innerHTML;

      selectElement.value = clickedOptionText;
      selectedDiv.innerHTML = clickedOptionText;

      const selectedItems
        = optionListDiv.getElementsByClassName('same-as-selected');

      for (let k = 0; k < selectedItems.length; k++) {
        selectedItems[k].classList.remove('same-as-selected');
      }
      this.classList.add('same-as-selected');
      selectedDiv.click();
    });

    optionListDiv.appendChild(optionDiv);
  }

  customSelects[i].appendChild(optionListDiv);

  selectedDiv.addEventListener('click', function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    optionListDiv.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}

function closeAllSelect(clickedSelect) {
  const selectItems = document.getElementsByClassName('select-items');
  const selectedItems = document.getElementsByClassName('select-selected');

  for (let i = 0; i < selectedItems.length; i++) {
    if (clickedSelect === selectedItems[i]) {
      continue;
    }
    selectedItems[i].classList.remove('select-arrow-active');
  }

  for (let i = 0; i < selectItems.length; i++) {
    if (selectItems[i].style.display !== 'none'
      && selectItems[i].previousSibling !== clickedSelect) {
      selectItems[i].classList.add('select-hide');
    }
  }
}

document.addEventListener('click', function() {
  closeAllSelect();
});

// End of custom-select-language

// Background-image change

// let p = 0;
// const images = [];
// const slideTime = 3000; // 3 seconds

// images[0] = '../images/header-large-background-1.svg';
// images[1] = '../images/header-large-background-2.svg';
// images[2] = 'https://via.placeholder.com/150/AAA300';

// function changePicture()
// {
//   const header = document.getElementById('home');

//   header.style.backgroundImage = 'url(' + images[p] + ')';

//   if (p < images.length - 1)
//   {
//     p++;
//   } else
//   {
//     p = 0;
//   }
//   setTimeout(changePicture, slideTime);
// }

// window.onload = changePicture;
