// Wait for page to fully load
window.onload = function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    // When "Sign Up" link is clicked
    showSignup.addEventListener('click', function(e) {
        e.preventDefault(); // stop the default link behavior
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    // When "Login" link is clicked
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
};
document.querySelector('#login-form button').addEventListener('click', function (e) {
    e.preventDefault(); // prevent form from submitting

    const emailInput = document.querySelector('#login-form input[type="email"]');
    const passwordInput = document.querySelector('#login-form input[type="password"]');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    clearErrors('#login-form');

    if (!email) {
        showError(emailInput, "Email is required!");
    } else if (!validateEmail(email)) {
        showError(emailInput, "Invalid email format.");
    }

    if (!password) {
        showError(passwordInput, "Password is required!");
    } else if (!validatePassword(password)) {
        showError(passwordInput, "Password must be 8–20 characters, include upper, lower, number.");
    }
});

function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;

    // insert after the whole input-wrapper
    const wrapper = input.closest('.input-wrapper');
    wrapper.parentElement.appendChild(error); // goes below label + wrapper
}


function clearErrors(formSelector) {
    document.querySelectorAll(`${formSelector} .error-message`).forEach(e => e.remove());
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/.test(password);
}
