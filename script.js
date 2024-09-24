function generateEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the email subject and body
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Create the mailto link
    const mailtoLink = `mailto:worldwidebrowsing@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Optionally, clear the form
    document.getElementById('contact-form').reset();
}
