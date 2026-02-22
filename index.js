// Simple scroll animation
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Platform switching functionality
  const platformBtns = document.querySelectorAll('.platform-btn');
  const setupContents = document.querySelectorAll('.setup-content');
  
  platformBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const platform = this.getAttribute('data-platform');
      
      // Update active button
      platformBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding content
      setupContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${platform}-setup`) {
          content.classList.add('active');
        }
      });
      
      // Scroll to top of content
      const contentSection = document.querySelector('.content-section');
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  // Add hover effects to step cards
  const stepCards = document.querySelectorAll('.step-card');
  stepCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    });
  });
  
  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add hover effects to action cards
  const actionCards = document.querySelectorAll('.action-card');
  actionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add hover effects to benefit cards
  const benefitCards = document.querySelectorAll('.benefit-card');
  benefitCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Add click animation to download button
  const downloadBtns = document.querySelectorAll('.btn-download');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (this.getAttribute('href') === 'YOUR_GOOGLE_DRIVE_ZIP_LINK') {
        e.preventDefault();
        alert('Please update the download link in the HTML file!');
      }
    });
  });
  
  // Add animation to register button text
  const registerBtn = document.querySelector('.register-btn');
  if (registerBtn) {
    setInterval(() => {
      registerBtn.style.animation = 'none';
      setTimeout(() => {
        registerBtn.style.animation = 'pulse 2s infinite';
      }, 10);
    }, 4000);
  }
  
  // Add platform-specific animations
  const platformButtons = document.querySelectorAll('.platform-btn');
  platformButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.transform = 'translateY(-3px)';
      }
    });
    
    btn.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.transform = 'translateY(0)';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animated'); });
      }, { threshold: 0.1 });
      animatedElements.forEach(el => observer.observe(el));

      // platform switching
      const platformBtns = document.querySelectorAll('.platform-btn');
      const setupContents = document.querySelectorAll('.setup-content');
      platformBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const platform = this.getAttribute('data-platform');
          platformBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          setupContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === platform + '-setup') content.classList.add('active');
          });
          document.querySelector('.content-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      // hover effects (already in css, but keep js for extra)
      const cards = document.querySelectorAll('.step-card, .feature-card, .action-card, .benefit-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', function() { this.style.transform = 'scale(1.02)'; });
        card.addEventListener('mouseleave', function() { this.style.transform = 'scale(1)'; });
      });

      // download alert dummy (just for demonstration, not blocking actual links)
      document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
          // real links are valid, but we keep behaviour
        });
      });

      // register btn pulse
      const registerBtn = document.querySelector('.register-btn');
      if (registerBtn) {
        setInterval(() => {
          registerBtn.style.animation = 'none';
          setTimeout(() => registerBtn.style.animation = 'pulse 2s infinite', 10);
        }, 4000);
      }
    });
