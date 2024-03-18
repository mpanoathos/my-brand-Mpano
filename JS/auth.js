class Auth {
    constructor() {
        // Check if user is authenticated
        const authToken = localStorage.getItem('authToken');
        const isAdmin = this.isAdmin(); // Check if user is admin
        console.log(`Auth token: ${authToken}`);
        if (this.isAuthenticated(authToken) && isAdmin) {
            // If authenticated and admin, redirect away from login/signup pages
            const currentPage = window.location.href;
            if (currentPage.includes('/login') || currentPage.includes('/signup')) {
                window.location.href = 'dashboard.html';
            }
        } else {
            // If not authenticated or not admin, handle access to login/signup pages or redirect to index.html
            const currentPage = window.location.href;
            if (!currentPage.includes('/login') && !currentPage.includes('/signup')) {
                // Redirect to login page if not on login/signup pages
                window.location.href = 'login.html';
            } else {
                // Display the body if on login/signup pages
                document.querySelector('body').style.display = 'block';
            }
        }
    }

    isAuthenticated(authToken) {
        // Implement proper authentication logic (e.g., validate token with server)
        return authToken !== null; // Simply checks if token exists; replace with actual validation
    }

    isAdmin() {
        // Implement logic to check if the user is an admin
        // You may use stored information about the user role, or check with the server
        // For demonstration purposes, let's assume a flag in localStorage indicates admin status
        return localStorage.getItem('isAdmin') === 'true';
    }

    logOut() {
        // Clear authentication information on logout
        localStorage.removeItem('authToken');
        window.location.href = 'login.html'; 
    }
}
