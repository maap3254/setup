document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const steps = document.querySelectorAll('.step-card');
    const progressFill = document.getElementById('progressFill');
    const stepDots = document.querySelectorAll('.step-dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadProgress = document.getElementById('downloadProgress');
    const openExtensionsBtn = document.getElementById('openExtensions');
    const confettiContainer = document.getElementById('confettiContainer');

    let currentStep = 1;
    const totalSteps = 6;

    // Initialize
    updateSteps();
    updateProgress();
    createConfetti();

    // Navigation Functions
    function goToStep(step) {
        if (step < 1 || step > totalSteps) return;
        currentStep = step;
        updateSteps();
        updateProgress();
        animateStep();
    }

    function nextStep() {
        if (currentStep < totalSteps) {
            goToStep(currentStep + 1);
        } else {
            // Celebrate completion
            celebrateCompletion();
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            goToStep(currentStep - 1);
        }
    }

    // Update UI
    function updateSteps() {
        steps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
                step.style.animationDelay = `${index * 0.1}s`;
            } else {
                step.classList.remove('active');
            }
        });

        stepDots.forEach((dot, index) => {
            if (index + 1 <= currentStep) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update button states
        prevBtn.disabled = currentStep === 1;
        nextBtn.textContent = currentStep === totalSteps ? 'Complete!' : `Next <i class="fas fa-arrow-right"></i>`;
    }

    function updateProgress() {
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = `${progress}%`;
    }

    function animateStep() {
        const currentStepElement = steps[currentStep - 1];
        currentStepElement.style.animation = 'none';
        setTimeout(() => {
            currentStepElement.style.animation = 'slideIn 0.6s ease forwards';
        }, 10);
    }

    // Download Simulation
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show progress
        downloadBtn.classList.add('hidden');
        downloadProgress.classList.remove('hidden');
        
        // Simulate download progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                // Complete download
                setTimeout(() => {
                    downloadProgress.querySelector('.progress-fill-small').style.width = '100%';
                    downloadProgress.querySelector('span').textContent = 'Download Complete!';
                    
                    // Auto-advance to next step after 1 second
                    setTimeout(() => {
                        if (currentStep === 1) {
                            nextStep();
                        }
                    }, 1000);
                }, 300);
            } else {
                downloadProgress.querySelector('.progress-fill-small').style.width = `${progress}%`;
            }
        }, 200);
    });

    // Open Extensions Page
    openExtensionsBtn.addEventListener('click', function() {
        // Create a fake Chrome extensions page experience
        const step3 = steps[2];
        const browserWindow = step3.querySelector('.browser-window');
        
        // Animate the browser window
        browserWindow.style.transform = 'scale(1.05)';
        browserWindow.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            browserWindow.style.transform = 'scale(1)';
            
            // Simulate loading
            const extensionCard = step3.querySelector('.extension-card');
            extensionCard.style.opacity = '0';
            extensionCard.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                extensionCard.style.opacity = '1';
                extensionCard.style.transform = 'translateX(0)';
                extensionCard.style.transition = 'all 0.5s ease';
                
                // Auto-advance to next step
                setTimeout(() => {
                    if (currentStep === 3) {
                        nextStep();
                    }
                }, 800);
            }, 300);
        }, 300);
    });

    // Navigation Events
    prevBtn.addEventListener('click', prevStep);
    nextBtn.addEventListener('click', nextStep);

    // Step dot click events
    stepDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const step = parseInt(this.dataset.step);
            goToStep(step);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextStep();
        } else if (e.key === 'ArrowLeft') {
            prevStep();
        }
    });

    // Create floating confetti
    function createConfetti() {
        const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -20px;
                left: ${Math.random() * 100}%;
                border-radius: 2px;
                opacity: 0;
                z-index: 9999;
                pointer-events: none;
            `;
            confettiContainer.appendChild(confetti);
        }
    }

    // Celebration function
    function celebrateCompletion() {
        // Show all confetti
        const confetti = document.querySelectorAll('.confetti');
        confetti.forEach((piece, index) => {
            piece.style.opacity = '0.8';
            piece.style.transform = 'rotate(45deg)';
            piece.style.animation = `fall ${1 + Math.random() * 2}s ease-in forwards`;
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.animationDelay = `${index * 0.05}s`;
        });

        // Add CSS for falling animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                0% {
                    transform: translateY(-20px) rotate(0deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Show completion message
        setTimeout(() => {
            alert('🎉 Setup Complete! You can now start using Passport Scanner!');
        }, 1000);
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for scroll animations
    document.querySelectorAll('.step-card, .benefit-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Smooth scroll to steps
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Initialize tooltips
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.left = rect.left + rect.width / 2 + 'px';
            tooltip.style.top = rect.top - 40 + 'px';
            tooltip.style.transform = 'translateX(-50%)';
            
            this.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        });
    });
});