function validateForm() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    // Basic client-side validation to ensure both fields are filled
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }

    // Further validation or authentication logic can be added here
    // Example: Check username format, password strength, etc.

    // Simulate a server-side authentication process (replace with actual logic)
    var authenticated = authenticateUser(username, password);

    if (!authenticated) {
        alert("Invalid username or password. Please try again.");
        return false;
    }

    // If all checks pass, form submission proceeds
    return true;
}

// Example function to simulate authentication (replace with actual backend logic)
function authenticateUser(username, password) {
    // Replace this with actual logic to validate credentials against a database or API
    // For demonstration, we'll check against hardcoded values
    var validUsername = "demo"; // Replace with actual valid username
    var validPassword = "password"; // Replace with actual valid password

    return username === validUsername && password === validPassword;
}
