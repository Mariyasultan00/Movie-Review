const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    alert('Thank you! Your message has been submitted.');
    form.reset(); 
});
