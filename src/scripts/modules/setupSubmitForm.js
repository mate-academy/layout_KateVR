export const setupSubmitForm = () => {
  const frm = document.forms.contact__form;

  const name = frm.name;
  const nameLabel = document.querySelector('label[for="name"]');
  const nameLabelText = nameLabel.innerText;

  const email = frm.email;
  const emailLabel = document.querySelector('label[for="email"]');
  const emailLabelText = emailLabel.innerText;

  const phone = frm.phone;
  const phoneLabel = document.querySelector('label[for="phone"]');
  const phoneLabelText = phoneLabel.innerText;

  const submitBtn = document.querySelector('.form__submit-btn');

  frm.addEventListener('submit', (e) => {
    e.preventDefault();
    let err = false;

    if (!name.value) {
      nameField.setError(nameField.msg);
      err = true;
    }

    if (!email.value) {
      emailField.setError(emailField.msg);
      err = true;
    }

    if (!phone.value) {
      phoneField.setError(phoneField.msg);
      err = true;
    }

    if (err) {
      return;
    }

    const elements = [...frm.elements];

    elements.forEach(element => {
      element.disabled = true;
    })

    const btnText = submitBtn.firstElementChild;
    const btnLoader = submitBtn.lastElementChild;

    const text = btnText.innerText;

    btnText.innerText = '';
    btnLoader.classList.add('form__loader--active');

    wait(2000)
      .then(() => {
        frm.reset();
      })
      .finally(() => {
        elements.forEach(element => {
          element.disabled = '';
        })
        btnText.innerText = text;
        btnLoader.classList.remove('form__loader--active');
      })
  });

  function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  class Field {
    constructor(input, label, labelText, msg) {
      this.input = input;
      this.label = label;
      this.labelText = labelText;
      this.errMsg = '';
      this.msg = msg;
    }

    setError(msg) {
      this.label.innerText = msg;
      this.label.style.color = '#860404';
      this.input.style.borderBottomColor = '#860404';
    };

    clearError() {
      this.label.innerText = this.labelText;
      this.label.style.color = '';
      this.input.style.borderBottomColor = '';
    };
  }

  const nameField = new Field(name, nameLabel, nameLabelText, 'Please, fill your name*');
  const emailField = new Field(email, emailLabel, emailLabelText, 'Please, fill your email*');
  const phoneField = new Field(phone, phoneLabel, phoneLabelText, 'Please, fill your phone*');

  const createHandlers = (field) => {
    field.input.addEventListener('blur', (e) => {
      if (!e.target.value.trim()) {
        field.setError(field.msg);
      }
    });

    field.input.addEventListener('input', () => {
      field.clearError();
    });
  }

  createHandlers(nameField);
  createHandlers(emailField);
  createHandlers(phoneField);
}
