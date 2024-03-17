document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/blogs");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        renderBlogPosts(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

function renderBlogPosts(posts) {
    const blogContainer = document.querySelector(".article-ul"); // Corrected selector

    // Clear existing content
    blogContainer.innerHTML = "";

    // Loop through each blog post and create HTML elements for them
    posts.forEach(post => {
        const postId = post._id; // Access _id property of individual post
        const postElement = document.createElement("li"); // Create a new list item for each post
        const titleElement = document.createElement("p");
        titleElement.textContent = post.title;

        titleElement.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = `post.html?postId=${postId}`; // Corrected URL parameter
        });

        postElement.appendChild(titleElement);
        blogContainer.appendChild(postElement);
    });
}
