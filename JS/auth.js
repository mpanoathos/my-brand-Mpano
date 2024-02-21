class Auth {
    constructor() {
        // Check if user is authenticated
        const auth = localStorage.getItem('auth');
        const currentPage = window.location.pathname;

        if (!this.isAuthenticated(auth)) {
            // Redirect to login page if not authenticated
            if (currentPage !== '/login.html' && currentPage !== '/signup.html') {
                this.redirectTo('login.html');
            }
        } else {
            // Redirect to dashboard if already authenticated and trying to access login or signup
            if (currentPage === '/login.html' || currentPage === '/signup.html') {
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
