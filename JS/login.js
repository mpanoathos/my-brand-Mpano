document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });

    // validate form
    const form = document.forms['form'];
    const name = document.form['name'];
    const password = form['password'];
    const name_error = document.querySelector('.name-error');
    const pass_error = document.querySelector('.pass-error');

    // Add input event listener for real-time validation
    name.addEventListener('input', () => {
        name.style.border = '';  // Reset border style
        name_error.style.display = 'none';
    });

    password.addEventListener('input', () => {
        password.style.border = '';  // Reset border style
        pass_error.style.display = 'none';
    });

    function validated() {
        if (name.value.trim() === "") {
            name.style.border = "1px solid red";
            name_error.style.display = 'block';
            name.focus();
            return false;
        }

        if (password.value.length < 9) {
            password.style.border = '1px solid red';
            pass_error.style.display = 'block';
            password.focus();
            return false;
        }
        return true;
    }
    if(new)

    form.addEventListener('submit', function (e) {
        if (!validated()) {
            e.preventDefault();
        }
    });
});
