document.addEventListener("DOMContentLoaded", function () {
    // Event listener for hamburger menu
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.addEventListener("click", toggleNavbar);

    // Event listener for downloading CV
    document.querySelector('.cv').addEventListener('click', downloadCV);

    // Form validation and submission
    const form = document.forms['form'];
    const name = form['name'];
    const email = form['email'];
    const name_error = document.querySelector('.name-error');
    const email_error = document.querySelector('.email-error');
    name.addEventListener('input', nameVerify);
    email.addEventListener('input', emailVerify);
    form.addEventListener('submit', submitForm);

    // Functions
    function toggleNavbar() {
        navbar.classList.toggle("show-navbar");
        hamburgerMenu.classList.toggle("active");
    }

    function downloadCV() {
        let link = document.createElement('a');
        link.href = './images/CV.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function nameVerify() {
        name.style.border = '';
        name_error.style.display = 'none';
    }

    function emailVerify() {
        email.style.border = '';
        email_error.style.display = 'none';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

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

    function submitForm(e) {
        if (!validated()) {
            e.preventDefault();
        } else {
            storeFormData();
            redirectToCommentsPage();
        }
    }

    function storeFormData() {
        var formData = {
            name: document.forms["form"]["name"].value,
            email: document.forms["form"]["email"].value,
            message: document.forms["form"]["Message"].value
        };
        var jsonData = JSON.stringify(formData);
        localStorage.setItem('formData', jsonData);
    }

    function redirectToCommentsPage() {
        window.location.href = 'comments.html';
        return false; // Prevent the form from submitting through the traditional way
    }
});
