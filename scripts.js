<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration - Hospital Management System</title>
    <link rel="stylesheet" href="regstyles.css"> <!-- Link to external CSS file -->
</head>
<body>
    <div class="container">
        <h2 class="title">Register</h2>
        <form id="registrationForm">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Register</button>
            <p id="register-error-message" class="text-danger text-center"></p>
            <a href="login.html" class="btn btn-secondary btn-block">Back to Login</a>
        </form>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
