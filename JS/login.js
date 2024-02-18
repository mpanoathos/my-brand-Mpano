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
    const pass2_error=document.querySelector('.pass2-error')

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

        if (password.value.length === 0) {
            password.style.border = '1px solid red';
            pass_error.style.display = 'block';
            password.focus();
            return false;
        }
        if(password.value.length < 9){
            password.style.border = '1px solid red';
            pass2_error.style.display = 'block';
            password.focus();
            return false
        }
        return true;
    }

    form.addEventListener('submit', function (e) {
        if (!validated()) {
            e.preventDefault();
        }
    });
        const loginForm = document.forms.form;
    
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const username = loginForm.elements.name.value;
            const password = loginForm.elements.password.value;
    
            // Perform simple authentication
            if (authenticateUser(username, password)) {
                // Save user information in local storage
                localStorage.setItem('user', JSON.stringify({ username }));
    
                // Redirect to the dashboard or perform actions for successful authentication
                window.location.href = 'dashboard.html';
            } else {
                // Handle authentication failure
                alert('Authentication failed. Please check your credentials.');
            }
        });
    
        function authenticateUser(username, password) {
            // Replace this with your actual authentication logic
            
            // For simplicity, let's assume a hardcoded set of valid credentials
            const validCredentials = [
                { username: 'mpano', password: 'barera0009' },
                
            ];
        
            // Check if the provided username and password match any valid credentials
            const isValidUser = validCredentials.some(cred => cred.username === username && cred.password === password);
        
            return isValidUser;
        }
        

    // Check if the provided username and password match any valid credentials
    const isValidUser = validCredentials.some(cred => cred.username === username && cred.password === password);

    return isValidUser;
})