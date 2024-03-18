document.addEventListener("DOMContentLoaded", async () => {
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const titleInput = document.getElementById('blogTitle');
    const contentInput = document.getElementById('blogContent');
    const submitBtn = document.getElementById('submitBtn');
    
    // Pre-fill form fields if URL parameters exist
    if (urlParams.has('title') && urlParams.has('content')) {
        titleInput.value = decodeURIComponent(urlParams.get('title'));
        contentInput.value = decodeURIComponent(urlParams.get('content'));
    }

    // Add event listener to the submit button
    submitBtn.addEventListener('click', function() {
        const postId = urlParams.get('postId');
        const title = titleInput.value;
        const content = contentInput.value;
        
        if (postId) {
            // If postId exists, it's an update operation
            updateBlogPost(postId, title, content);
        } else {
            // Otherwise, it's a creation operation
            createBlogPost(title, content);
        }
    });

    // Function to update a blog post
    async function updateBlogPost(postId, title, content) {
        try {
            const response = await fetch(`http://127.0.0.1:5000/blogs/post/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    body: content
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update blog post');
            }

            // Redirect to the view-blogs page after updating
            window.location.href = 'view-blogs.html';
        } catch (error) {
            console.error('Error updating blog post:', error);
        }
    }

    // Function to create a new blog post
    async function createBlogPost(title, content) {
        try {
            const response = await fetch('http://127.0.0.1:5000/blogs/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    body: content
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create blog post');
            }

            // Redirect to the view-blogs page after creating
            window.location.href = 'view-blogs.html';
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    }

    // Add event listener for the hamburger menu
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });
});
