
        // Predefined users for the login system
        const users = [
            { username: "sam", password: "sam123" },
            { username: "om", password: "pm123" },
            { username: "ram", password: "ram123" },
            { username: "prem", password: "prem123" },
            { username: "sai", password: "sai123" }
        ];

        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert("Login successful!");
                // You can redirect to another page after successful login
                window.location.href = "index.html"; // Example redirection
            } else {
                alert("Invalid username or password!");
            }
        }

        function showRegistration() {
            document.getElementById("loginContainer").style.display = "none";
            document.getElementById("registrationForm").style.display = "block";
        }

        function cancelRegistration() {
            document.getElementById("loginContainer").style.display = "block";
            document.getElementById("registrationForm").style.display = "none";
        }

        function skipLogin() {
            alert("Skipping login...");
            // You can add actions here if skipping login should redirect the user
            window.location.href = "index.html"; // Example redirection
        }

        function register() {
            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (newPassword === confirmPassword) {
                users.push({ username: newUsername, password: newPassword });
                alert("Registration successful!");
                cancelRegistration(); // Hide registration form and show login form
            } else {
                alert("Passwords do not match.");
            }
        }
    