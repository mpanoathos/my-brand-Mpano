const auth = new Auth();

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        toggleNavbar();
        toggleHamburgerMenu();
    });

    // Retrieve and display form data from localStorage
    displayStoredFormData();
});

// Function to toggle the visibility of the navigation bar
function toggleNavbar() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("show-navbar");
}

// Function to toggle the appearance of the hamburger menu icon
function toggleHamburgerMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle("active");
}

// Function to retrieve and display form data from localStorage
function displayStoredFormData() {
    var jsonData = localStorage.getItem('formData');

    if (jsonData) {
        // Parse JSON data
        var formData = JSON.parse(jsonData);

        // Display the form data in the comments section
        displayComment(formData);
    }
}

// Function to display the comment
function displayComment(formData) {
    var commentSection = document.getElementById('comment-section');
    var commentDiv = document.createElement('div');
    commentDiv.innerHTML = `
        <strong>Name:</strong> ${formData.name}<br>
        <strong>Email:</strong> ${formData.email}<br>
        <strong>Message:</strong> ${formData.message}<br><br>
    `;

    commentSection.appendChild(commentDiv);
}