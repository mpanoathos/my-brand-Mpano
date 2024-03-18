document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Retrieve the blog post ID from the URL query parameters
        const params = new URLSearchParams(window.location.search);
        const postId = params.get('postId');

        // Fetch blog post data using the ID
        const response = await fetch(`http://127.0.0.1:5000/blogs/${postId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch post data');
        }
        const postData = await response.json();

        // Display the blog post content
        displayPostContent(postData);

        // Get the like button and attach a click event listener
        const likeBtn = document.querySelector('.likeimg');
        likeBtn.addEventListener('click', async () => {
            // Check if a token exists in local storage
            const authToken = localStorage.getItem('authToken');
            if (!authToken) {
                // If no token exists, show an alert to the user
                alert('Please log in to like the post.');
                return;
            }

            try {
                // Send a POST request to increment the likes count
                const likeResponse = await fetch(`http://127.0.0.1:5000/blogs/${postId}/like`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${authToken}` // Include the token in the request headers
                    }
                });
                
                if (!likeResponse.ok) {
                    throw new Error('Failed to increment likes');
                }

                // Update the like count displayed on the page
                const likesContainer = document.querySelector('.likes span');
                const likesCount = parseInt(likesContainer.textContent.trim());
                likesContainer.textContent = (likesCount + 1).toString();
            } catch (error) {
                console.error('Error:', error);
            }
        });

        // Fetch comments and display them
        await fetchComments(postId);
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

// Function to fetch comments for a specific blog
// async function fetchComments(postId) {
    
//     // const postId = "post._id"; // Replace "YOUR_BLOG_ID" with the actual ID of the blog
//     try {
//         const response = await fetch(`http://127.0.0.1:5000/blogs/${postId}/comments`,{
//             method: 'GET',
//             headers:{
//                 'Content-Type': 'application/json',
//             }
//         });
//         if (!response.ok) {
//             throw new Error('Failed to fetch comments');
//         }
//         const data = await response.json();
//         const comments = data.comments;
//         const commentList = document.getElementById("commentList");
//         commentList.innerHTML = ""; // Clear previous comments
//         comments.forEach(comment => {
//             const li = document.createElement("li");
//             li.textContent = comment.text;
//             commentList.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error fetching comments:', error);
//     }
// }

// // Function to post a comment
// async function postComment() {
//     const commenterName = document.getElementById("commenterName").value;
//     const commentText = document.getElementById("commentText").value;

//     try {
//         const response = await fetch(`/blogs/${postId}/comment`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ commentText })
//         });

//         if (response.ok) {
//             // If comment posted successfully, fetch and display updated comments
//             await fetchComments(postId);
//         } else {
//             console.error('Failed to post comment:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error posting comment:', error);
//     }
// }

// Event listener for submitting comment
document.getElementById("submitMessage").addEventListener("click", postComment);