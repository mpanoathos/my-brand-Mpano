const auth = new Auth();

document.querySelector('.logout').addEventListener('click', (e) => {
    auth.logOut();
});

document.addEventListener("DOMContentLoaded", function () {
    // Navigation bar and hamburger menu handling
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });
});
