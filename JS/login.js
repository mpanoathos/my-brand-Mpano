
const auth = new Auth();

 class Login{
constructor(form,fields){
    this.form=form;
    this.fields=fields;
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
            const usernameInput = document.querySelector("#username");
            if (usernameInput.value.trim() === 'mpano') {
                // Perform login API here
                localStorage.setItem('auth', 'mpano');
                this.form.submit();
            } else {
                // Username is not 'mpano', show an error
                const usernameField = this.form.querySelector("#username");
                this.setStatus(
                    usernameField,
                    'Invalid user',
                    'error'
                );
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
 
const form=document.querySelector(".loginForm")
if (form){
    const fields=['username','password'];
    const validator=new Login(form,fields)
}