function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy validation for demonstration purposes
    if (username === 'user' && password === 'pass') {
        // Redirect to the main page
        console.log("muie");
        window.location.replace('./main.html');
    } else {
        alert('Invalid username or password');
    }
    return false; // Prevent the form from submitting
}
