const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('name-error').innerText = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').innerText = 'Invalid email';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').innerText = 'Password must be at least 8 characters, contain uppercase, lowercase, numbers and special characters';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('password-error').style.display = 'none';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
        document.getElementById('confirm-password-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('confirm-password-error').style.display = 'none';
    }

    // Submit form if valid
    if (isValid) {
        form.submit();
        alert('Form submitted successfully!');
    }
});

