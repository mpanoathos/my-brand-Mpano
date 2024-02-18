document.addEventListener("DOMContentLoaded", function () {
    addBlogPost();
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    
    });

// Retrieve existing blog posts from local storage or initialize an empty array
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// Function to add a new blog post
function addBlogPost() {
    const titleInput = document.getElementById('blogTitle');
    const contentInput = document.getElementById('blogContent');
    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        // Create a new blog post object
        const newPost = { title, content };

        // Add the new post to the array
        blogPosts.push(newPost);

        // Save the updated array to local storage
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Clear input fields
        titleInput.value = '';
        contentInput.value = '';

        // Redirect to another page (replace 'another-page.html' with your desired page)
        window.location.href = 'view-blogs.html';
    }
}
document.getElementById('submitBtn').addEventListener('click', addBlogPost);
});
