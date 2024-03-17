const auth = new Auth();

document.addEventListener("DOMContentLoaded", async ()=> {
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        toggleNavbar();
        toggleHamburgerMenu();
    });

    // Retrieve and display form data from localStorage
    // displayStoredFormData();
    const response= await fetch('http://127.0.0.1:5000/messages',{
        method: 'GET',
    })
    if(!response.ok){
        throw new Error('Failed to fetch data');
    }
    try{
    const data = await response.json();
        renderMessages(data);
    } catch (error) {
        console.error('Error:', error);
    }
});

// Function to toggle the visibility of the navigation bar
function toggleNavbar() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("show-navbar");
}

// Function to toggle the appearance of the hamburger menu icon
function toggleHamburgerMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle("active");
}

// Function to retrieve and display form data from localStorage
// function displayStoredFormData() {
//     var jsonData = localStorage.getItem('formData');

//     if (jsonData) {
//         // Parse JSON data
//         var formData = JSON.parse(jsonData);

//         // Display the form data in the comments section
//         displayComment(formData);
//     }
// }

// Function to display the comment
// function displayComment(formData) {
//     var commentSection = document.getElementById('comment-section');
//     var commentDiv = document.createElement('div');
//     commentDiv.innerHTML = `
//         <strong>Name:</strong> ${formData.name}<br>
//         <strong>Email:</strong> ${formData.email}<br>
//         <strong>Message:</strong> ${formData.message}<br><br>
//     `;

//     commentSection.appendChild(commentDiv);
function renderMessages(messages) {
    const commentSection = document.querySelector('#comment-section');
    commentSection.innerHTML = '';

    if (Array.isArray(messages)) {
        // If messages is an array, render each message
        messages.forEach(message => {
            renderMessage(message);
        });
    } else if (typeof messages === 'object') {
        // If messages is an object, assume it contains messages
        // Extract messages and render them accordingly
        if (messages.hasOwnProperty('messages')) {
            messages.messages.forEach(message => {
                renderMessage(message);
            });
        } else {
            // Handle other types of object responses as needed
            console.error('Unexpected object format:', messages);
        }
    } else {
        // Handle other types of responses (e.g., string)
        // Parse the response and render messages if applicable
        console.error('Unexpected response format:', messages);
    }
}

function renderMessage(message) {
    const commentSection = document.querySelector('#comment-section');
    const eachMessage = document.createElement('li');
    eachMessage.innerHTML = `
        <strong>Name:</strong> ${message.name}<br>
        <strong>Email:</strong> ${message.email}<br>
        <strong>Message:</strong> ${message.message}<br><br>
    `;
    commentSection.appendChild(eachMessage);
}
