// RHOBS - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && navLinks) {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Ignore empty anchors or just "#"
            if (href === '#' || href.length <= 1) {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Validate form
            if (!validateForm(data)) {
                return;
            }

            // Simulate form submission (in production, this would send to a server)
            // For now, we'll create a mailto link and show success
            const mailtoLink = createMailtoLink(data);

            // Open mail client
            window.location.href = mailtoLink;

            // Show success modal
            showModal('Votre message a bien été transmis');

            // Reset form after modal is closed
            document.getElementById('successModal').addEventListener('click', function(e) {
                if (e.target.classList.contains('modal') || e.target.classList.contains('btn')) {
                    contactForm.reset();
                }
            }, { once: true });
        });
    }

    // Form Validation
    function validateForm(data) {
        const requiredFields = ['nom', 'prenom', 'email', 'entreprise', 'message'];
        let isValid = true;

        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (!data[field] || data[field].trim() === '') {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        // Email validation
        if (data.email && !isValidEmail(data.email)) {
            document.getElementById('email').classList.add('error');
            isValid = false;
        }

        if (!isValid) {
            alert('Veuillez remplir tous les champs obligatoires.');
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function createMailtoLink(data) {
        const subject = encodeURIComponent(`Contact RHOBS - ${data.entreprise}`);
        const body = encodeURIComponent(
            `Nom: ${data.nom}\n` +
            `Prénom: ${data.prenom}\n` +
            `Email: ${data.email}\n` +
            `Téléphone: ${data.telephone || 'Non renseigné'}\n` +
            `Entreprise: ${data.entreprise}\n` +
            `Fonction: ${data.fonction || 'Non renseigné'}\n\n` +
            `Message:\n${data.message}`
        );
        return `mailto:contact@rhobs.fr?subject=${subject}&body=${body}`;
    }

    // Modal Functions
    function showModal(message) {
        const modal = document.getElementById('successModal');
        const modalMessage = modal.querySelector('p');
        if (modalMessage) {
            modalMessage.textContent = message;
        }
        modal.classList.add('show');
    }

    window.closeModal = function() {
        const modal = document.getElementById('successModal');
        modal.classList.remove('show');
    };

    // Close modal when clicking outside
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .info-card, .module-card, .stat-item').forEach(el => {
        observer.observe(el);
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(29, 60, 112, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(29, 60, 112, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
});

// Google Calendar popup function (called from onclick)
function openCalendly() {
    // Wait for Google Calendar API to be loaded
    if (typeof calendar !== 'undefined' && calendar.schedulingButton) {
        // Create a temporary container for the button
        const tempContainer = document.createElement('div');
        tempContainer.style.display = 'none';
        document.body.appendChild(tempContainer);

        // Load the Google Calendar button and trigger click
        calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3VqDVwZRdcYalfQ-64aIwJCYTqahJA5esXUjDqzBugTcaf1-Umz9SHAwUIBierElTKKxeyepsD?gv=true',
            color: '#EC7D05',
            label: 'Réserver un rendez-vous',
            target: tempContainer,
        });

        // Simulate click on the generated button
        setTimeout(() => {
            const gcalButton = tempContainer.querySelector('button');
            if (gcalButton) {
                gcalButton.click();
            }
        }, 100);
    } else {
        // Fallback: open in new window
        window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ3VqDVwZRdcYalfQ-64aIwJCYTqahJA5esXUjDqzBugTcaf1-Umz9SHAwUIBierElTKKxeyepsD?gv=true', '_blank');
    }
    return false;
}
