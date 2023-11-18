function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop
    });
}

function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('YOUR_GOOGLE_SHEETS_PUBLISHED_LINK', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('submitting form. Thankyou.');
        }
    })
    .catch(error => {
        alert('Error submitting form. Please try again.');
    });
}