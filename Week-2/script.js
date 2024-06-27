document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('All fields are required.');
    } else {
        window.location.href = 'success.html';
    }
});
