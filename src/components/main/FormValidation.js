


export default class FormValidation {
  constructor(formElement) {
    this.formElement = formElement;
      if(formElement.dataset.validation) {
        formElement.addEventListener("submit", ()=>{});
        var j=0;
        for(j=0;j<formElement.elements.length;j++) {
          console.log(formElement.elements[j])
          // new Validation(document.forms[i].elements[j])
        }
      }
  }
}
