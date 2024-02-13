// This code ensures that the following script runs only after the DOM (Document Object Model) has been fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the <nav> element and store it in the 'navbar' variable
    const navbar = document.querySelector("nav");

    // Select the element with the ID "hamburger-menu" and store it in the 'hamburgerMenu' variable
    const hamburgerMenu = document.getElementById("hamburger-menu");

    // Add a click event listener to the 'hamburgerMenu' element
    hamburgerMenu.addEventListener("click", function () {
        
        // Toggle the visibility of the navigation bar by adding or removing the "show-navbar" class
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon by adding or removing the "active" class
        hamburgerMenu.classList.toggle("active");
    });
});
