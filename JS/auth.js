class Auth {
    constructor() {
        // Check if user is authenticated
        const auth = localStorage.getItem('auth');
        if (!this.isAuthenticated(auth)) {
            // Redirect to login page if not authenticated
            this.redirectTo('login.html');
        } else {
            // Check if the user is trying to access the login or signup page
            const currentPage = window.location.pathname;
            if (currentPage === '/login.html' || currentPage === '/signup.html') {
                // Redirect to dashboard if already authenticated
                this.redirectTo('dashboard.html');
            } else {
                // Display the body if authenticated and not on login/signup pages
                document.querySelector('body').style.display = 'block';
            }
        }
    }

    isAuthenticated(auth) {
        // Implement proper authentication logic (e.g., check if the email is valid)
        const allowedEmail = 'mpano@gmail.com';
        return auth === allowedEmail;
    }

    logOut() {
        // Clear authentication information on logout
        localStorage.removeItem('auth');
        this.redirectTo('login.html');
    }

    redirectTo(path) {
        // Navigate relative to the current page
        const currentPath = window.location.pathname;
        const newPath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1) + path;
        window.location.replace(newPath);
    }
}
