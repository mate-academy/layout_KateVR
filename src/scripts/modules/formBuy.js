export const setupFormBuy = () => {
  const frm = document.forms['contact__form-buy'];

  const firstname = frm['firstname'];
  const firstnameLabel = document.querySelector('label[for="firstname"]');
  const firstnameLabelText = firstnameLabel.innerText;

  const lastname = frm['lastname'];
  const lastnameLabel = document.querySelector('label[for="lastname"]');
  const lastnameLabelText = lastnameLabel.innerText;

  const emailBuy = frm['email-buy'];
  const emailBuyLabel = document.querySelector('label[for="email-buy"]');
  const emailBuyLabelText = emailBuyLabel.innerText;

  const phoneBuy = frm['phone-buy'];
  const phoneBuyLabel = document.querySelector('label[for="phone-buy"]');
  const phoneBuyLabelText = phoneBuyLabel.innerText;

  const shippingAdress = frm['shipping-adress'];
  const shippingAdressLabel = document.querySelector('label[for="shipping-adress"]');
  const shippingAdressLabelText = shippingAdressLabel.innerText;

  const shippingAdress2 = frm['shipping-adress-2'];
  const shippingAdress2Label = document.querySelector('label[for="shipping-adress-2"]');
  const shippingAdress2LabelText = shippingAdress2Label.innerText;



  const submitBtn = document.querySelector('.form-buy__button');

  frm.addEventListener('submit', (e) => {
    e.preventDefault();
    let err = false;

    if (!firstname.value.trim()) {
      firstnameField.setError(firstnameField.msg);
      err = true;
    }

    if (!lastname.value.trim()) {
      lastnameField.setError(lastnameField.msg);
      err = true;
    }

    if (!emailBuy.value.trim()) {
      emailBuyField.setError(emailBuyField.msg);
      err = true;
    }

    if (!phoneBuy.value.trim()) {
      phoneBuyField.setError(phoneBuyField.msg);
      err = true;
    }

    if (!shippingAdress.value.trim()) {
      shippingAdressField.setError(shippingAdressField.msg);
      err = true;
    }

    if (!shippingAdress2.value.trim()) {
      shippingAdress2Field.setError(shippingAdress2Field.msg);
      err = true;
    }

    if (err) {
      return;
    }

    const elements = [...frm.elements];

    elements.forEach((element) => {
      element.disabled = true;
    });

    const btnText = submitBtn.firstElementChild;
    const btnLoader = submitBtn.lastElementChild;

    const text = btnText.innerText;

    btnText.innerText = '';
    btnLoader.classList.add('form-buy__loader--active');


    frm.reset();

    elements.forEach((element) => {
      element.disabled = false;
    });
    btnText.innerText = text;
    btnLoader.classList.remove('form-buy__loader--active');
  });

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
    }

    clearError() {
      this.label.innerText = this.labelText;
      this.label.style.color = '';
      this.input.style.borderBottomColor = '';
    }
  }

  const firstnameField = new Field(firstname, firstnameLabel, firstnameLabelText, 'Please, fill your first name*');
  const lastnameField = new Field(lastname, lastnameLabel, lastnameLabelText, 'Please, fill your last name*');
  const emailBuyField = new Field(emailBuy, emailBuyLabel, emailBuyLabelText, 'Please, fill your email*');
  const phoneBuyField = new Field(phoneBuy, phoneBuyLabel, phoneBuyLabelText, 'Please, fill your phone*');
  const shippingAdressField = new Field(shippingAdress, shippingAdressLabel, shippingAdressLabelText, 'Please, fill your shippingAdress*');
  const shippingAdress2Field = new Field(shippingAdress2, shippingAdress2Label, shippingAdress2LabelText, 'Please, fill your shippingAdress 2*');

  const createHandlers = (field) => {
    field.input.addEventListener('blur', (e) => {
      if (!e.target.value.trim()) {
        field.setError(field.msg);
      }
    });

    field.input.addEventListener('input', () => {
      field.clearError();
    });
  };

  createHandlers(firstnameField);
  createHandlers(lastnameField);
  createHandlers(emailBuyField);
  createHandlers(phoneBuyField);
  createHandlers(shippingAdressField);
  createHandlers(shippingAdress2Field);
};
