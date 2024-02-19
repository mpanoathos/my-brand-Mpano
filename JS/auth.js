
class Auth {
    constructor() {
        document.querySelector('body').style.display = 'none';
        const auth = localStorage.getItem('auth');
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        const allowedUser = 'mpano';
        if (auth !== allowedUser) { 
            window.location.replace('login.html');
        } else {
            document.querySelector('body').style.display = 'block';
        }
    }

    logOut() {
        localStorage.removeItem('auth');
        window.location.replace('login.html'); 
    }
}
