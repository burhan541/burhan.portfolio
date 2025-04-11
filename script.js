// Refresh button functionality
let refreshButton = document.querySelector('.home');
refreshButton.onclick = () => {
    location.reload();
};

// Toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjusted to trigger earlier for better visibility
        let height = sec.offsetHeight; // Correctly use section height
        let id = sec.getAttribute('id');

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            // Active navbar link
            navlinks.forEach(links => links.classList.remove('active'));
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');

            // Show animation for section
            sec.classList.add('show-animate');
        } else {
            // Remove animation if section is out of view
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY >= 100);

    // Remove toggle icon and navbar links on scroll
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation for footer
    footer.classList.toggle(
        'show-animate',
        window.innerHeight + window.scrollY >= document.body.offsetHeight
    );
};

// Trigger animation for the first section (home) on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('show-animate');
    }
});
