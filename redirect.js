function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'pass') {
        window.location.replace('main.html');
    } else {
        alert('Invalid username or password');
    }
    return false; // Prevent the form from submitting
}
