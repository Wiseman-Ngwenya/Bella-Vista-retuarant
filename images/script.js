// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Menu Tab Switching
const tabButtons = document.querySelectorAll('.tab-btn');
const menuCategories = document.querySelectorAll('.menu-category');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and categories
        tabButtons.forEach(btn => btn.classList.remove('active'));
        menuCategories.forEach(category => category.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show the corresponding category
        const categoryId = button.getAttribute('data-category');
        document.getElementById(categoryId).classList.add('active');
    });
});

// Reservation Form Submission
const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const partySize = this.querySelector('select').value;
        const date = this.querySelector('input[type="date"]').value;
        const time = this.querySelector('input[type="time"]').value;
        
        // Simple validation
        if (!name || !email || !phone || !partySize || !date || !time) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Format date for display
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Show success message (in a real app, you would send this to a server)
        const confirmationMessage = `
            Thank you, ${name}! Your table reservation has been received.
            
            Reservation Details:
            • Date: ${formattedDate}
            • Time: ${time}
            • Party Size: ${partySize} ${partySize === '1' ? 'person' : 'people'}
            • Contact: ${phone}
            
            We will contact you shortly to confirm your reservation.
        `;
        
        alert(confirmationMessage);
        
        // Reset form
        this.reset();
    });
}

// Set minimum date for reservation to today
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Set default to 3 days from now
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 3);
    const defaultDateStr = defaultDate.toISOString().split('T')[0];
    dateInput.value = defaultDateStr;
}

// Set default time to 7:00 PM
const timeInput = document.querySelector('input[type="time"]');
if (timeInput) {
    timeInput.value = '19:00';
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert(`Thank you! You've been subscribed to our newsletter with email: ${email}`);
        this.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');}
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
   }
