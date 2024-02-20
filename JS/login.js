// login.js
const auth = new Auth();

class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let error = 0;

      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (!self.validateFields(input)) {
          error++;
        }
      });

      if (error === 0) {
        const emailInput = document.querySelector("#email"); // Change here from #username to #email
        if (self.validateEmail(emailInput.value.trim())) { // Change the sample email
          const authenticatedEmail='mpano@gmail.com'
          if(emailInput.value.trim()===authenticatedEmail){
          localStorage.setItem('auth',authenticatedEmail)
          this.form.submit();
        } else {
          // Email is not 'mpano@example.com', show an error
          const emailField = this.form.querySelector("#email");
          this.setStatus(emailField,'Invalid email','error');
        }
      }else{
      this.setStatus(emailField, 'Invalid email format', 'error')
      }
    }
    });
  }
validateFields(field) {
    if (field.value.trim() === '') {
        this.setStatus(
            field,
            'Cannot be blank',
            'error'
        );
        return false;
    } else {
        const previousElement = field.previousElementSibling;
        const fieldName = previousElement ? previousElement.innerText : 'Field';

        if (field.type === 'password') {
            if (field.value.length < 8) {
                this.setStatus(
                    field,
                    `${fieldName} must be at least 8 characters`,
                    'error'
                );
                return false;
            } else {
                this.setStatus(field, null, 'success');
                return true;
            }
        } else {
            this.setStatus(field, null, 'success');
            return true;
        }
    }
}
validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
setStatus(field,message,status){
     const errorMessage=field.parentElement.querySelector(".error-message");
     if(status=='success'){
        if(errorMessage){
            errorMessage.innerText='';
        }
        field.classList.remove('input-error')
        }
    
     if(status=='error'){
        errorMessage.innerText=message;
        field.classList.add("input-error");
     }
}

}
// main.js (or any other entry point for your application)
const form = document.querySelector(".loginForm");
if (form) {
  const fields = ['email', 'password']; // Update the field name here
  const validator = new Login(form, fields);
}