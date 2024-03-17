const auth=new Auth()
document.addEventListener("DOMContentLoaded", async ()=> {
    // Retrieve URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const titleInput = document.getElementById('blogTitle');
    const contentInput = document.getElementById('blogContent');

    // Pre-fill form fields if URL parameters exist
    if (urlParams.has('title') && urlParams.has('content')) {
        titleInput.value = decodeURIComponent(urlParams.get('title'));
        contentInput.value = decodeURIComponent(urlParams.get('content'));
    }

    // Add event listener to the submit button
    document.getElementById('submitBtn').addEventListener('click', addOrUpdateBlogPost);

    async function addOrUpdateBlogPost() {
    const title = titleInput.value;
    const content = contentInput.value;
    const urlParams = new URLSearchParams(window.location.search);
    const updatingPost = urlParams.has('id');

    if (title && content) {
        try {
            const url = updatingPost ? `http://127.0.0.1:5000/blogs/post/${urlParams.get('id')}` : 'http://127.0.0.1:5000/blogs/post';
            const method = updatingPost ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    body: content
                })
            });

            if (!response.ok) {
                throw new Error('Failed to post blog');
            }

            // Clear input fields
            titleInput.value = '';
            contentInput.value = '';

            // Redirect to another page (replace 'blogs.html' with your desired page)
            window.location.href = 'blogs.html';
        } catch (error) {
            console.error('Error posting blog:', error);
        }
    }
}

    

    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });
});
