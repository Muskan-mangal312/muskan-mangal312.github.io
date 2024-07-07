document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    function setActiveLink() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    }

    navLinks.forEach(link => link.addEventListener('click', setActiveLink));
});