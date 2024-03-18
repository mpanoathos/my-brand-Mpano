const auth = new Auth();

document.addEventListener("DOMContentLoaded", async ()=> {
    const blogPostsContainer = document.getElementById('blogs');
    try{
    const result = await fetch('http://127.0.0.1:5000/blogs');
        if (!result.ok) {
            throw new Error('Failed to fetch Blogs')
        }
        const blogData = await result.json();
        renderBlogs(blogData);
    }catch (error) {
        console.error(error);
    }

    // let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    // function displayBlogPosts() {
    //     blogPosts.forEach((post, index) => {
    //         const postElement = document.createElement('div');
    //         postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p> <div class="buttons">
    //                                  <button class="delete-button" data-index="${index}"></button>
    //                                  <button class="update-button" data-index="${index}"></button></div>`
    //         postElement.style.border = "1px solid rgb(255, 187, 59)";
    //         postElement.style.borderRadius = "20px";
    //         postElement.style.margin = "20px 0px";
    //         postElement.style.padding = "20px";
    //         postElement.style.width = "1000px";
    //         blogPostsContainer.appendChild(postElement);
    //     });
    // }

    // blogPostsContainer.addEventListener('click', function (event) {
    //     if (event.target.classList.contains('delete-button')) {
    //         const indexToDelete = parseInt(event.target.getAttribute('data-index'), 10);
    //         blogPosts.splice(indexToDelete, 1);
    //         localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    //         blogPostsContainer.innerHTML = '';
    //         displayBlogPosts();
    //     } else if (event.target.classList.contains('update-button')) {
    //         const indexToUpdate = parseInt(event.target.getAttribute('data-index'), 10);
    //         const blogPostToUpdate = blogPosts[indexToUpdate];
    //         window.location.href = `create-blog.html?title=${encodeURIComponent(blogPostToUpdate.title)}&content=${encodeURIComponent(blogPostToUpdate.content)}`;
    //     }
    // });

    // Call the function to display blog posts
    // displayBlogPosts();

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
function renderBlogs(posts) {
    const blogContainer = document.getElementById("blogs");
    if (!blogContainer) return; // Check if element exists

    // Clear existing content
    blogContainer.innerHTML = "";

    // Loop through each blog post and create HTML elements for them
    posts.forEach(post => {
        // Create list item for the blog post
        const postElement = document.createElement("li");
        
        // Create anchor element for the blog post with href linking to the details page
        const postLink = document.createElement("a");
        postLink.href = `post.html?postId=${post._id}`; // Assuming each blog post has an 'id' property
        postLink.textContent = post.title; // Assuming each blog post has a 'title' property
        postLink.classList.add('post-link'); // Add a class for styling
        
        // Create anchor element for deleting the blog post
        const deleteLink = document.createElement("a");
        deleteLink.href = `#`; // Set the href attribute to '#' for now
        deleteLink.textContent = 'Delete';
        deleteLink.classList.add('btn'); // Add a class for styling
        deleteLink.addEventListener('click', async function(event) {
            event.preventDefault();
            // Call a function to handle delete action for the specific blog post
            try {
                const response = await fetch(`http://127.0.0.1:5000/blogs/post/${post._id}`, {
                    method: 'DELETE',
                });
                console.log(post);
                if (!response.ok) {
                    throw new Error('Failed to delete blog post');
                }
                // Remove the blog post element from the UI
                postElement.remove();
            } catch (error) {
                console.error(error);
            }
        });
        // Create anchor element for editing the blog post
        const editLink = document.createElement("a");
        editLink.href = `post.html?postId=${post._id}`; // Assuming each blog post has an 'id' property
        editLink.textContent = 'Edit';
        editLink.classList.add('btn'); // Add a class for styling
        editLink.addEventListener('click', async function(event) {
            event.preventDefault();
            window.location.href = `create-blog.html?postId=${post._id}&title=${encodeURIComponent(post.title)}&content=${encodeURIComponent(post.body)}`;          
        });
        
        // Append the anchor elements to the list item
        postElement.appendChild(postLink);
        postElement.appendChild(deleteLink);
        postElement.appendChild(editLink);
        
        // Append the list item to the blog container
        blogContainer.appendChild(postElement);
    });
}

