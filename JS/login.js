class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let error = 0;

      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (!self.validateFields(input)) {
          error++;
        }
      });

      if (error === 0) {
        const emailInput = document.querySelector("#email");
        const passwordInput = document.querySelector("#password");
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (self.validateEmail(email)) {
          await self.login(email, password);
        } else {
          self.setStatus(emailInput, 'Invalid email format', 'error');
        }
      }
      // try {
      //     const { authToken} = await self.login(email, password);
      //     console.log(authToken)
      //     // Save token and userRole in local storage
      //     localStorage.setItem('authToken', authToken);
      //   } catch (error) {
      //     // Handle login failure
      //     alert("Invalid credentials");
      //     console.error("Login failed:", error.message);
      //   }
    });
  }

  validateFields(field) {
    // Validation logic for fields
    if (field.value.trim() === '') {
      this.setStatus(
        field,
        'Cannot be blank',
        'error'
      );
      return false;
    } else {
      const previousElement = field.previousElementSibling;
      const fieldName = previousElement ? previousElement.innerText : 'Field';

      if (field.type === 'password') {
        if (field.value.length < 8) {
          this.setStatus(
            field,
            `${fieldName} must be at least 8 characters`,
            'error'
          );
          return false;
        } else {
          this.setStatus(field, null, 'success');
          return true;
        }
      } else {
        this.setStatus(field, null, 'success');
        return true;
      }
    }
  }

  validateEmail(email) {
    // Validation logic for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  setStatus(field, message, status) {
    // Set status for fields
    const errorMessage = field.parentElement.querySelector(".error-message");
    if (status == 'success') {
      if (errorMessage) {
        errorMessage.innerText = '';
      }
      field.classList.remove('input-error')
    }

    if (status == 'error') {
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
  }

  async login(email, password) {
    try {
      const response = await fetch("http://127.0.0.1:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        // Save token in local storage
        localStorage.setItem('authToken', responseData.token);
        localStorage.setItem('isAdmin', responseData.isAdmin);
        // Log isAdmin value to debug
        console.log("Is Admin:", responseData.isAdmin);
  
        // Check isAdmin flag and redirect accordingly
        if (responseData.isAdmin && responseData.token) {
          // Redirect to admin dashboard
          window.location.href = "dashboard.html";
        } else {
          // Redirect to regular user dashboard
          window.location.href = "index.html";
        }
      } else {
        // Handle login failure
        alert("Invalid credentials")
        console.error("Login failed:", responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  }


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".loginForm");
  if (form) {
    const fields = ['email', 'password'];
    new Login(form, fields);
  }
});

