// Retrieve existing blog posts from local storage or initialize an empty array
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Function to display blog posts on another page
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blogs');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postElement.style.border="1px solid rgb(255, 187, 59)";
        postElement.style.borderRadius="20px";
        postElement.style.margin="20px 0px";
        postElement.style.padding="20px"
        postElement.style.width="1000px"
        blogPostsContainer.appendChild(postElement);
    });
}

// Initial display of blog posts on page load
document.addEventListener("DOMContentLoaded", function () {
    // Call the function to display blog posts
    displayBlogPosts();

    // Rest of your existing code for event listeners, etc.
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const readMoreButtons = document.querySelectorAll('.read-more');

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });

    readMoreButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const target = btn.getAttribute('data-target');
            const paragraph = document.querySelector(`.${target} .blogs-paragraph`);

            paragraph.style.display = (paragraph.style.display === 'none' || paragraph.style.display === '') ? 'block' : 'none';
            btn.innerText = (paragraph.style.display === 'none') ? 'Read More' : 'Read Less';
        });
    });
});
