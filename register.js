// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const role = document.getElementById('role').value;

//     // Save registration data to local storage
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     localStorage.setItem('role', role);

//     // Redirect to login page
//     window.location.href = 'login.html';
// });

// // Redirect to Google registration (OAuth URL should be configured in your server)
// document.querySelector('.btn-google').addEventListener('click', function() {
//     window.location.href = 'https://your-server-url/auth/google'; // Replace with actual Google OAuth URL
// });

// // Redirect to Facebook registration (OAuth URL should be configured in your server)
// document.querySelector('.btn-facebook').addEventListener('click', function() {
//     window.location.href = 'https://your-server-url/auth/facebook'; // Replace with actual Facebook OAuth URL
// });

// // Redirect to GitHub registration (OAuth URL should be configured in your server)
// document.querySelector('.btn-github').addEventListener('click', function() {
//     window.location.href = 'https://your-server-url/auth/github'; // Replace with actual GitHub OAuth URL
// });

// // Redirect to LinkedIn registration (OAuth URL should be configured in your server)
// document.querySelector('.btn-linkedin').addEventListener('click', function() {
//     window.location.href = 'https://your-server-url/auth/linkedin'; // Replace with actual LinkedIn OAuth URL
// });


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Save registration data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);

    // Redirect to login page
    window.location.href = 'login.html';
});

// Redirect to Google registration (OAuth URL should be configured in your server)
document.querySelector('.btn-google').addEventListener('click', function() {
    window.location.href = 'https://your-server-url/auth/google'; // Replace with actual Google OAuth URL
});

// Redirect to Facebook registration (OAuth URL should be configured in your server)
document.querySelector('.btn-facebook').addEventListener('click', function() {
    window.location.href = 'https://your-server-url/auth/facebook'; // Replace with actual Facebook OAuth URL
});

// Redirect to GitHub registration (OAuth URL should be configured in your server)
document.querySelector('.btn-github').addEventListener('click', function() {
    window.location.href = 'https://your-server-url/auth/github'; // Replace with actual GitHub OAuth URL
});

// Redirect to LinkedIn registration (OAuth URL should be configured in your server)
document.querySelector('.btn-linkedin').addEventListener('click', function() {
    window.location.href = 'https://your-server-url/auth/linkedin'; // Replace with actual LinkedIn OAuth URL
});
