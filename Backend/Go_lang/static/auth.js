// auth.js

// Function to handle form submission and authentication
function authenticate() {
    // Get the username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Create an object with the credentials
    var credentials = {
        username: username,
        password: password
    };

    // Send a POST request to the server to authenticate
    fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        // Check if the response indicates successful authentication
        if (response.ok) {
            // Redirect to the dashboard or protected page
            window.location.href = '/dashboard';
        } else {
            // Display an error message
            alert('Invalid username or password. Please try again.');
        }
    })
    .catch(error => {
        // Handle any network or server errors
        console.error('Error:', error);
    });
}

// Add event listener to the login form submit button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        authenticate(); // Call the authenticate function to handle authentication
    });
});
