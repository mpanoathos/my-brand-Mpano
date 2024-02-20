const auth = new Auth();

document.addEventListener("DOMContentLoaded", function () {
    const blogPostsContainer = document.getElementById('blogs');
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    function displayBlogPosts() {
        blogPosts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>
                                     <button class="delete-button" data-index="${index}">Delete</button>
                                     <button class="update-button" data-index="${index}">Update</button>`;
            postElement.style.border = "1px solid rgb(255, 187, 59)";
            postElement.style.borderRadius = "20px";
            postElement.style.margin = "20px 0px";
            postElement.style.padding = "20px";
            postElement.style.width = "1000px";
            blogPostsContainer.appendChild(postElement);
        });
    }

    blogPostsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            const indexToDelete = parseInt(event.target.getAttribute('data-index'), 10);
            blogPosts.splice(indexToDelete, 1);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
            blogPostsContainer.innerHTML = '';
            displayBlogPosts();
        } else if (event.target.classList.contains('update-button')) {
            const indexToUpdate = parseInt(event.target.getAttribute('data-index'), 10);
            const blogPostToUpdate = blogPosts[indexToUpdate];
            window.location.href = `create-blog.html?title=${encodeURIComponent(blogPostToUpdate.title)}&content=${encodeURIComponent(blogPostToUpdate.content)}`;
        }
    });

    // Call the function to display blog posts
    displayBlogPosts();

    // Rest of your existing code for event listeners, etc.
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });

});
