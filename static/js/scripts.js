// static/js/scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Elements to animate in sequence
    const elements = [
        document.querySelector('.terminal-header'),
        document.querySelector('.output-content'),
        document.getElementById('profile-pic'),
        document.getElementById('profile-section'),
        document.getElementById('skills-section'),
        document.getElementById('os-section'),
        document.getElementById('editors-section'), // Added editors section
        document.getElementById('specs-section'),
        document.getElementById('projects-section'),
        document.getElementById('games-section')
    ];
    
    // Add hidden class to all sections except header
    for (let i = 2; i < elements.length; i++) {
        if (elements[i]) {
            elements[i].classList.add('hidden');
        }
    }
    
    // Animate elements sequentially with improved timing
    elements.forEach((el, index) => {
        setTimeout(() => {
            if (el) {
                el.classList.add('animate');
                if (el.id === 'profile-pic') {
                    el.classList.remove('animate');
                    el.classList.add('animate');
                }
            }
        }, index * 300); // Reduced delay for smoother flow
    });
    
    // Typing animation for text with better timing
    setTimeout(() => {
        const textElements = document.querySelectorAll('.info-value');
        textElements.forEach((el, index) => {
            setTimeout(() => {
                if (el.getAttribute('data-text')) {
                    // Set the text content first
                    el.textContent = el.getAttribute('data-text');
                    // Then add the typing animation
                    el.classList.add('typing');
                }
            }, index * 80); // Faster typing animation
        });
    }, 800); // Start typing animation sooner
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme or default to light (white)
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme + '-theme');
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-adjust';
        } else {
            icon.className = 'fas fa-adjust';
        }
    }
    
    // Progress bar animation with smoother effect
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 100);
        });
    }, 1500);
    
    // Add progress bar animation for editor preferences
    setTimeout(() => {
        const editorBars = document.querySelectorAll('.chart-bar');
        editorBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 100);
        });
    }, 2000);
    
    // Ensure all content is visible after animations complete
    // Remove the typing animation overlay but keep the content
    setTimeout(() => {
        const infoValues = document.querySelectorAll('.info-value');
        infoValues.forEach(el => {
            if (el.getAttribute('data-text')) {
                // Keep the text content and remove the typing animation
                el.classList.remove('typing');
                // The text content remains as it was set earlier
            }
        });
    }, 3000); // Ensure all animations complete before removing overlays
});