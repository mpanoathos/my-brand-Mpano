document.addEventListener("DOMContentLoaded", async () => {
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
    const message = form['Message']; // Corrected the capitalization of 'Message'
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

    async function submitForm(e) {
        e.preventDefault(); // Prevent form submission

        if (!validated()) {
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/messages', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: message.value
                })
            });

            if (response.ok) {
                // Redirect to the comments page
                window.location.href = 'comments.html';
            } else {
                console.error('Failed to send message:', response.status);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
});
