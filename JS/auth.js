class Auth {
    constructor() {
        // Check if user is authenticated
        const auth = localStorage.getItem('auth');
        if (!this.isAuthenticated(auth)) {
            // Redirect to login page if not authenticated
            window.location.replace('login.html');
        } else {
            // Display the body if authenticated
            document.querySelector('body').style.display = 'block';
        }
    }

    isAuthenticated(auth) {
        // Implement proper authentication logic (e.g., check if the token is valid)
        if (auth === 'mpano') {
            // Allow access to authenticated users
            const currentPage = window.location.pathname;
            if (currentPage === '/signup.html') {
                // Redirect away from the signup page if already authenticated
                window.location.replace('dashboard.html');
                return false;
            }
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

