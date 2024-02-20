const auth = new Auth();

document.querySelector('.logout').addEventListener('click', (e) => {
    auth.logOut();
});

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const titleInput = document.getElementById('blogTitle');
    const contentInput = document.getElementById('blogContent');

    // Pre-fill form fields if URL parameters exist
    if (urlParams.has('title') && urlParams.has('content')) {
        titleInput.value = decodeURIComponent(urlParams.get('title'));
        contentInput.value = decodeURIComponent(urlParams.get('content'));
    }

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

    // Function to add a new blog post or update an existing one
    function addOrUpdateBlogPost() {
        const title = titleInput.value;
        const content = contentInput.value;

        if (title && content) {
            // Check if updating an existing post by checking for URL parameters
            const updatingPost = urlParams.has('title') && urlParams.has('content');

            if (updatingPost) {
                // If updating, find the index of the post to update
                const indexToUpdate = blogPosts.findIndex(post =>
                    post.title === decodeURIComponent(urlParams.get('title')) &&
                    post.content === decodeURIComponent(urlParams.get('content'))
                );

                // Update the existing post
                if (indexToUpdate !== -1) {
                    blogPosts[indexToUpdate] = { title, content };
                }
            } else {
                // If creating a new post, add it to the array
                blogPosts.push({ title, content });
            }

            // Save the updated array to local storage
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

            // Clear input fields
            titleInput.value = '';
            contentInput.value = '';

            // Redirect to another page (replace 'another-page.html' with your desired page)
            window.location.href = 'view-blogs.html';
        }
    }

    document.getElementById('submitBtn').addEventListener('click', addOrUpdateBlogPost);
});
