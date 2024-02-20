class Auth {
    constructor() {
        // Check if user is authenticated
        const auth = localStorage.getItem('auth');
        if (!this.isAuthenticated(auth)) {
            // Redirect to login page if not authenticated
            window.location.replace('login.html');
        } else {
            // Check if the user is trying to access the login or signup page
            const currentPage = window.location.pathname;
            if (currentPage === '/login.html' || currentPage === '/signup.html') {
                // Redirect to dashboard if already authenticated
                window.location.replace('dashboard.html');
            } else {
                // Display the body if authenticated and not on login/signup pages
                document.querySelector('body').style.display = 'block';
            }
        }
    }

    isAuthenticated(auth) {
        // Implement proper authentication logic (e.g., check if the token is valid)
        if (auth === 'mpano') {
            return true;
        } else {
            return false;
        }
    }

    logOut() {
        // Clear authentication information on logout
        localStorage.removeItem('auth');
        window.location.replace('login.html'); 
    }
}

