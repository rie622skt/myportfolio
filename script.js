// FILE: script.js

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the form element
    const contactForm = document.querySelector('#contact form');

    // Listen for the form submission event
    contactForm.addEventListener('submit', (event) => {
        // Prevent the form from being submitted to the server
        event.preventDefault();

        // Get the form data
        const formData = new FormData(contactForm);

        // Log the form data to the console
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    });
});