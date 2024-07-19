document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('ctaButton');
    const contactForm = document.getElementById('contactForm');

    ctaButton.addEventListener('click', () => {
        alert('Button clicked!');
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });
});
