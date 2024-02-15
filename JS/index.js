document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });

    // Downloading CV
    document.querySelector('.cv').addEventListener('click', () => {
        let link = document.createElement('a');
        link.href = './images/CV.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    const form = document.forms['form'];
    const name = form['name'];
    const email = form['email'];
    const name_error = document.querySelector('.name-error');
    const email_error = document.querySelector('.email-error');

    email.addEventListener('input', email_verify);

    function validated() {
        if (name.value.trim() === "") {
            name.style.border = "1px solid red";
            name_error.style.display = 'block';
            name.focus();
            return false;
        }

        if (email.value.length < 9 || !isValidEmail(email.value)) {
            email.style.border = '1px solid red';
            email_error.style.display = 'block';
            email.focus();
            return false;
        }

        return true;
    }

    form.addEventListener('submit', function (e) {
        if (!validated()) {
            e.preventDefault();
        }
    });

    function email_verify() {
        email_error.style.display = 'none';
    }

    function isValidEmail(email) {
        // Simple email validation, you might want to improve it
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
