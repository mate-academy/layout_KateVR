'use strict';

export function configureDropdown(
  root,
  dropdownName,
  datasetName,
  defaultValue = '',
  callbacks = [],
) {
  const optionsContainer = root.querySelector(
    `.${dropdownName}-dropdown__options`,
  );
  const selectedLabel = root.querySelector(
    `.${dropdownName}-dropdown__selected-label`,
  );

  root.addEventListener('click', () => {
    root.classList.toggle('dropdown__opened');
    root.classList.toggle(`dropdown__opened-${dropdownName}`);
  });

  if (dropdownName === 'quantity' || dropdownName === 'country') {
    syncUIDropdown(dropdownName, datasetName, defaultValue, root);
  }

  optionsContainer.addEventListener('click', (e) => {
    e.stopPropagation();

    const option = e.target.closest(`.${dropdownName}-dropdown__option`);
    if (!option) return;

    const value = option.dataset[datasetName];

    selectedLabel.textContent = option.textContent;
    selectedLabel.dataset[datasetName] = value;

    [...optionsContainer.children].forEach((opt) => {
      opt.hidden = opt === option;
    });

    root.classList.remove('dropdown__opened');
    root.classList.remove(`dropdown__opened-${dropdownName}`);
    callbacks.forEach((cb) => cb(value));
  });

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) {
      root.classList.remove('dropdown__opened');
      root.classList.remove(`dropdown__opened-${dropdownName}`);
    }
  });
}

export function syncUIDropdown(dropdownName, datasetName, defaultValue, root) {
  const label = root.querySelector(`.${dropdownName}-dropdown__selected-label`);

  const options = root.querySelectorAll(`.${dropdownName}-dropdown__option`);

  for (const option of options) {
    const isSelected = option.dataset[datasetName] === defaultValue;
    option.hidden = isSelected;

    if (isSelected) {
      label.textContent = option.textContent;
      label.dataset[datasetName] = option.dataset[datasetName];
    }
  }
}
