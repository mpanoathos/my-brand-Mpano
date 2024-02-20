document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const readMoreButtons = document.querySelector('.read-more');
    const messageInput = document.querySelector('.messageInput');
    const submitButton = document.getElementById('submitMessage');
    const displayMessage = document.getElementById('commentList');
    const errorMessage = document.getElementById('error-message');
    const commenterNameInput = document.getElementById('commenterName');

    // Hamburger menu toggle
    hamburgerMenu.addEventListener("click", function () {
        navbar.classList.toggle("show-navbar");
        hamburgerMenu.classList.toggle("active");
    });

    // Read more button logic
    readMoreButtons.addEventListener('click', function () {
        const paragraph = document.querySelector('.blogs-paragraph');
        paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
        readMoreButtons.innerText = (paragraph.style.display === 'none') ? 'Read More' : 'Read Less';
    });

    // Load messages from localStorage if available
    let comments2 = JSON.parse(localStorage.getItem('comments2')) || [];

    // Display existing comments
    displayComments();

    function displayComments() {
        displayMessage.innerHTML = comments2.map(comment => `<li><strong>${comment.name}:</strong> ${comment.message}</li>`).join('');
    }

    // Submit button logic with added validations
    submitButton.addEventListener('click', function () {
        const newMessage = messageInput.value.trim();
        const commenterName = commenterNameInput.value.trim();

        // Validate inputs
        if (newMessage && commenterName) {
            // Add the new comment to the array
            comments2.push({ name: commenterName, message: newMessage });
            // Update the displayed comments
            displayComments();
            // Save comments to localStorage
            localStorage.setItem('comments', JSON.stringify(comments));
            // Clear the input fields
            messageInput.value = '';
            commenterNameInput.value = '';
            // Hide error message
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
    });
});

