document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });
  // Check if the user is authenticated
        const user = JSON.parse(localStorage.getItem('user'));
    
        if (!user) {
            // Redirect or perform actions for unauthenticated users
            window.location.href = 'login.html';
        }
    });

