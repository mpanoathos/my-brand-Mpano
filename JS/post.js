document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Retrieve the blog post ID from the URL query parameters
        const params = new URLSearchParams(window.location.search);
        // Assuming 'postId' is the string identifier for the post

        const postId = params.get('postId');

        // Fetch blog post data using the ID
        const response = await fetch(`http://127.0.0.1:5000/blogs/${postId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch post data');
        }
        const postData = await response.json();

        // Display the blog post content
        displayPostContent(postData);
    } catch (error) {
        console.error('Error:', error);
    }
});

function displayPostContent(postData) {
    // Retrieve elements to display post content
    const postContentContainer = document.querySelector(".post-content");

    // Create HTML elements for post content
    const titleElement = document.createElement("h1");
    titleElement.textContent = postData.title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = postData.body;
    bodyElement.classList.add('article')

    // Append post content elements to the container
    postContentContainer.appendChild(titleElement);
    postContentContainer.appendChild(bodyElement);
}
