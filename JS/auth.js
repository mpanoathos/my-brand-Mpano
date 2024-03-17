class Auth {
    constructor() {
        // Check if user is authenticated
        const authToken = localStorage.getItem('authToken');
        console.log(`Auth token: ${authToken}`);
        if (!this.isAuthenticated(authToken)) {
            // Redirect to login page if not authenticated
            window.location.href = 'login.html';
        } else {
            // Check if the user is trying to access the login or signup page
            const currentPage = window.location.href;
            if (currentPage.includes('/login') | currentPage.includes('/signup')) {
                // Redirect to dashboard if authenticated and not on login/signup pages
                window.location.href = 'dashboard.html';
            } else {
                // Display the body if authenticated and on login/signup pages
                document.querySelector('body').style.display = 'block';
            }
        }
    }

    isAuthenticated(authToken) {
        // Implement proper authentication logic (e.g., validate token with server)
        return authToken !== null; // Simply checks if token exists; replace with actual validation
    }

    logOut() {
        // Clear authentication information on logout
        localStorage.removeItem('authToken');
        window.location.href = 'login.html'; 
    }
}

// Initialize authentication check on page load
document.addEventListener('DOMContentLoaded', () => {
    new Auth();
});
