document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#1a1a1a'; /* Preto */
            link.style.backgroundColor = '#66b3ff'; /* Azul claro */
        });
        
        link.addEventListener('mouseout', function() {
            link.style.color = '#66b3ff'; /* Azul claro */
            link.style.backgroundColor = '';
        });
    });

    // Toggle theme button
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        document.querySelector('header').classList.toggle('light-mode');
        document.querySelector('footer').classList.toggle('light-mode');
        document.querySelectorAll('.content').forEach(content => content.classList.toggle('light-mode'));
    });
});