# Username form

## Just for fun

## Codes

``<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Username Form</title>
<style>
    body {
        font-family: Arial, sans-serif;
    }
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }
    label {
        display: block;
        margin-bottom: 5px;
    }
    input[type="text"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .error-message {
        color: red;
        margin-top: 5px;
    }
</style>
</head>
<body>
    <div class="container">
        <h2>Check Username Availability</h2>
        <form id="usernameForm">
            <label for="username">Enter Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your desired username">
            <p id="usernameError" class="error-message"></p>
            <button type="submit">Check Availability</button>
        </form>
        <p id="message"></p>
    </div>

    <script>
        const usernames = ["user1", "user2", "user3"]; // Sample list of existing usernames

        document.getElementById("usernameForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const inputUsername = document.getElementById("username").value;
            const usernameError = document.getElementById("usernameError");
            const messageElement = document.getElementById("message");

            // Reset error messages
            usernameError.textContent = "";
            messageElement.textContent = "";

            // Check for empty username
            if (inputUsername.trim() === "") {
                usernameError.textContent = "Please enter a username";
                return;
            }

            // Check if username is already taken
            if (usernames.includes(inputUsername)) {
                messageElement.textContent = "Sorry, username is already taken";
                return;
            }

            // Username is available
            messageElement.textContent = "Congratulations! Username is available";
        });
    </script>
</body>
</html>``
