const auth = new Auth();

document.addEventListener("DOMContentLoaded", function () {
const navbar = document.querySelector('nav');
const hamburgerMenu = document.getElementById('hamburger-menu');
const form = document.forms['form'];
const name = form['name'];  
const password = form['password'];
const newPassword=form['new-password']
const name_error = document.querySelector('.name-error');
const pass_error = document.querySelector('.pass-error');
const pass2_error=document.querySelector('.pass2-error')
const newPass_error=document.querySelector('.new-pass-error')

document.addEventListener('click', function () {
    navbar.classList.toggle('show-navbar');
    hamburgerMenu.classList.toggle('active');
});

// Add input event listener for real-time validation
name.addEventListener('input', () => {
    name.style.border = '';  
    name_error.style.display = 'none';
});

password.addEventListener('input', () => {
    password.style.border = '';  
    pass_error.style.display = 'none';
});
newPassword.addEventListener('input',()=>{
    newPassword.style.border='';
    pass2_error.style.display='none';
})

function validated() {
    if (name.value.trim() === "") {
        name.style.border = "1px solid red";
        name_error.style.display = 'block';
        name.focus();
        return false;
    }

    if (password.value.length < 9 && password.value.length>0) {
        password.style.border = '1px solid red';
        pass2_error.style.display = 'block';
        password.focus();
        return false;
    }
    if(password.value.trim() == ""){
        password.style.border = '1px solid red';
        pass_error.style.display = 'block';
        password.focus();
        return false;
    }
    if (newPassword.value!==password.value){
        newPass_error.style.display='block'
        return false
    }

    return true;
}

form.addEventListener('submit', function (e) {
    if (!validated()) {
        e.preventDefault();
    }
});
});
