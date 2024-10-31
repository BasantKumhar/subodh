 // Dark Mode Toggle
 const toggleMode = document.getElementById('toggle-mode');
 toggleMode.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
     document.querySelector('.container').classList.toggle('dark-mode');
     toggleMode.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
 });

// Select navbar elements
const navbarToggle = document.getElementById('navbar-toggle');
const navbar = document.getElementById('navbar');

// Toggle Navbar on Click
navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Toggle the 'show' class to apply scale animation
});



 // Placeholder actions for buttons
 document.getElementById('download-cv-btn').addEventListener('click', () => {
     alert('Downloading CV...');
 });
