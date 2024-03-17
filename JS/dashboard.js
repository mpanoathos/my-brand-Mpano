const auth = new Auth();
document.querySelector('.logout').addEventListener('click', (e) => {
    auth.logOut();
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/users");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();
        renderUsers(userData.users);

        // Navigation bar and hamburger menu handling
        const navbar = document.querySelector("nav");
        const hamburgerMenu = document.getElementById("hamburger-menu");

        hamburgerMenu.addEventListener("click", function () {
            // Toggle the visibility of the navigation bar
            navbar.classList.toggle("show-navbar");

            // Toggle the appearance of the hamburger menu icon
            hamburgerMenu.classList.toggle("active");
            const titleofUsers=usersContainer.createElement('h4')
            titleofUsers.textContent='Users'
            usersContainer.prepend(titleOfUsers);
        });
}
catch(error){
    console.log(error);
}
});

function renderUsers(users) {

    const usersContainer = document.getElementById('blogs');
    if (!usersContainer) return; // Check if element exists

    // Clear existing content
    usersContainer.innerHTML = "";
    // Loop through each user and create HTML elements for them
    users.forEach(user => {
        const userElement = document.createElement("li");
        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        userElement.appendChild(emailElement);
        usersContainer.appendChild(userElement);
    });
}
