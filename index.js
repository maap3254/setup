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
  
  // Add hover effects to privacy cards
  const privacyCards = document.querySelectorAll('.privacy-link-card');
  privacyCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add click animation to download button
  const downloadBtns = document.querySelectorAll('.btn-download');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Real links are valid, but we keep behavior
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

  // Add smooth scroll to privacy section
  const privacyLinks = document.querySelectorAll('a[href="#privacy-section"]');
  privacyLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#privacy-section').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Add keyboard support for modal close (ESC key)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closePrivacyModal();
    }
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('privacy-modal');
    if (e.target === modal) {
      closePrivacyModal();
    }
  });
});

// Global functions for modal
function openPrivacyModal(type) {
  const modal = document.getElementById('privacy-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  // Set content based on type
  switch(type) {
    case 'privacy':
      modalTitle.textContent = 'Privacy Policy';
      modalBody.innerHTML = getPrivacyPolicyContent();
      break;
    case 'terms':
      modalTitle.textContent = 'Terms of Service';
      modalBody.innerHTML = getTermsContent();
      break;
    case 'dpa':
      modalTitle.textContent = 'Data Processing Agreement';
      modalBody.innerHTML = getDPAContent();
      break;
    case 'gdpr':
      modalTitle.textContent = 'GDPR Compliance';
      modalBody.innerHTML = getGDPRContent();
      break;
    case 'ccpa':
      modalTitle.textContent = 'CCPA Compliance';
      modalBody.innerHTML = getCCPAContent();
      break;
    case 'cookies':
      modalTitle.textContent = 'Cookie Policy';
      modalBody.innerHTML = getCookiePolicyContent();
      break;
    default:
      modalTitle.textContent = 'Privacy Policy';
      modalBody.innerHTML = getPrivacyPolicyContent();
  }
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePrivacyModal() {
  const modal = document.getElementById('privacy-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Content generators
function getPrivacyPolicyContent() {
  return `
    <h3>Privacy Policy</h3>
    <p>Last Updated: March 2025</p>
    
    <h4>1. Information We Collect</h4>
    <p><strong>Personal Information:</strong></p>
    <ul>
      <li><strong>Email address:</strong> Collected during registration for account identification and password recovery</li>
      <li><strong>Phone number:</strong> Collected for account verification and fraud prevention</li>
      <li><strong>Extension ID:</strong> A unique identifier generated for each installation</li>
    </ul>
    
    <p><strong>Passport Data:</strong></p>
    <ul>
      <li>MRZ (Machine Readable Zone) text extracted from uploaded images</li>
      <li>Passport number, name, date of birth, nationality, expiry date</li>
      <li>Images are processed temporarily and not stored permanently</li>
    </ul>
    
    <p><strong>Usage Data:</strong></p>
    <ul>
      <li>IP address: Collected for security and fraud prevention</li>
      <li>Form submission history: Stored locally on your device</li>
      <li>Settings and preferences: Stored in Chrome sync storage</li>
    </ul>
    
    <h4>2. How We Use Information</h4>
    <ul>
      <li>Process passport images to extract MRZ data</li>
      <li>Fill appointment forms on wafid.com automatically</li>
      <li>Manage user points and referral program</li>
      <li>Provide customer support</li>
      <li>Improve service accuracy and performance</li>
      <li>Detect and prevent fraudulent activity</li>
    </ul>
    
    <h4>3. Data Storage and Security</h4>
    <ul>
      <li>Chrome sync storage: Settings and preferences</li>
      <li>Chrome local storage: Form history</li>
      <li>Server databases: User accounts and points</li>
      <li>All data is encrypted during transmission and at rest</li>
    </ul>
    
    <h4>4. Data Sharing</h4>
    <p>We do not sell or rent your personal data to third parties. Data is shared only with:</p>
    <ul>
      <li>Our secure processing servers</li>
      <li>Wafid.com (for form filling only)</li>
      <li>Legal authorities when required by law</li>
    </ul>
    
    <h4>5. Your Rights</h4>
    <ul>
      <li>View your data in extension settings</li>
      <li>Export your data using the export feature</li>
      <li>Delete your account by contacting support</li>
      <li>Opt out of non-essential data collection</li>
    </ul>
    
    <h4>6. Contact Us</h4>
    <p>Privacy concerns: wafidformflow@gmail.com</p>
  `;
}

function getTermsContent() {
  return `
    <h3>Terms of Service</h3>
    <p>Last Updated: March 2025</p>
    
    <h4>1. Acceptance of Terms</h4>
    <p>By installing and using the Passport Scanner Extension, you agree to be bound by these Terms of Service.</p>
    
    <h4>2. Description of Service</h4>
    <p>The extension provides automated form filling functionality for wafid.com by extracting data from passport images.</p>
    
    <h4>3. User Accounts</h4>
    <p>You are responsible for maintaining the security of your account credentials. You must provide accurate and complete information during registration.</p>
    
    <h4>4. Points System</h4>
    <ul>
      <li>Points are non-refundable and non-transferable except through the official transfer feature</li>
      <li>1 point = 1 passport processing</li>
      <li>Points expire after 12 months of inactivity</li>
    </ul>
    
    <h4>5. Acceptable Use</h4>
    <p>You agree not to:</p>
    <ul>
      <li>Use the service for any illegal purpose</li>
      <li>Attempt to bypass or manipulate the points system</li>
      <li>Share your account credentials</li>
      <li>Use automated scripts to interact with the extension</li>
      <li>Reverse engineer the extension code</li>
    </ul>
    
    <h4>6. Intellectual Property</h4>
    <p>The extension, including all code, design, and branding, is owned by Passport Scanner and protected by copyright laws.</p>
    
    <h4>7. Termination</h4>
    <p>We reserve the right to terminate accounts for violations of these terms or for any other reason at our discretion.</p>
    
    <h4>8. Limitation of Liability</h4>
    <p>The extension is provided "as is" without warranties. We are not liable for any damages arising from use of the extension.</p>
    
    <h4>9. Contact Information</h4>
    <p>For questions about these terms, contact wafidformflow@gmail.com</p>
  `;
}

function getDPAContent() {
  return `
    <h3>Data Processing Agreement</h3>
    <p>Last Updated: March 2025</p>
    
    <h4>1. Scope and Purpose</h4>
    <p>This Data Processing Agreement (DPA) governs the processing of personal data by Passport Scanner on behalf of the Customer.</p>
    
    <h4>2. Processing Details</h4>
    <ul>
      <li><strong>Subject matter:</strong> Passport MRZ data extraction and form filling</li>
      <li><strong>Duration:</strong> Until termination of services</li>
      <li><strong>Nature:</strong> Automated data processing</li>
      <li><strong>Purpose:</strong> Providing form filling services</li>
      <li><strong>Personal data types:</strong> Names, passport numbers, dates, contact information</li>
    </ul>
    
    <h4>3. Obligations of Passport Scanner</h4>
    <ul>
      <li>Process data only on documented instructions</li>
      <li>Ensure confidentiality of personnel</li>
      <li>Implement appropriate security measures</li>
      <li>Assist with data subject rights</li>
      <li>Notify of personal data breaches</li>
      <li>Delete or return data after services end</li>
    </ul>
    
    <h4>4. Sub-processors</h4>
    <p>List of authorized sub-processors:</p>
    <ul>
      <li>Cloud hosting provider</li>
      <li>Database service provider</li>
      <li>Email service provider</li>
    </ul>
    
    <h4>5. Data Subject Rights</h4>
    <p>Passport Scanner will assist the Customer in responding to data subject requests.</p>
    
    <h4>6. Security Measures</h4>
    <ul>
      <li>Encryption of data in transit and at rest</li>
      <li>Access controls and authentication</li>
      <li>Regular security assessments</li>
      <li>Incident response procedures</li>
      <li>Business continuity and disaster recovery</li>
    </ul>
    
    <h4>7. Breach Notification</h4>
    <p>Notification within 72 hours of becoming aware of a breach.</p>
  `;
}

function getGDPRContent() {
  return `
    <h3>GDPR Compliance</h3>
    <p>Last Updated: March 2025</p>
    
    <h4>Your Rights Under GDPR</h4>
    
    <h4>Right to Access</h4>
    <p>You have the right to request a copy of all personal data we hold about you.</p>
    
    <h4>Right to Rectification</h4>
    <p>You can request correction of inaccurate or incomplete data.</p>
    
    <h4>Right to Erasure (Right to be Forgotten)</h4>
    <p>You can request deletion of your personal data under certain circumstances.</p>
    
    <h4>Right to Restrict Processing</h4>
    <p>You can request restriction of processing your data.</p>
    
    <h4>Right to Data Portability</h4>
    <p>You can request your data in a machine-readable format.</p>
    
    <h4>Right to Object</h4>
    <p>You can object to processing of your data for certain purposes.</p>
    
    <h4>Lawful Basis for Processing</h4>
    <ul>
      <li><strong>Consent:</strong> Obtained during registration</li>
      <li><strong>Contract:</strong> Necessary for service provision</li>
      <li><strong>Legal obligation:</strong> When required by law</li>
      <li><strong>Legitimate interests:</strong> Fraud prevention</li>
    </ul>
    
    <h4>Data Protection Officer</h4>
    <p>Contact our DPO at dpo@passportscanner.com for any GDPR-related inquiries.</p>
    
    <h4>Supervisory Authority</h4>
    <p>You have the right to lodge a complaint with your local data protection authority.</p>
  `;
}

function getCCPAContent() {
  return `
    <h3>CCPA Compliance</h3>
    <p>Last Updated: March 2025</p>
    
    <h4>Notice to California Residents</h4>
    <p>This section applies to California residents under the California Consumer Privacy Act (CCPA).</p>
    
    <h4>Categories of Personal Information Collected</h4>
    <ul>
      <li><strong>Identifiers:</strong> Email, phone number, IP address, extension ID</li>
      <li><strong>Personal information:</strong> Name, passport number, date of birth</li>
      <li><strong>Commercial information:</strong> Points balance, transaction history</li>
      <li><strong>Internet activity:</strong> Extension usage patterns</li>
    </ul>
    
    <h4>Sources of Personal Information</h4>
    <ul>
      <li>Directly from you during registration</li>
      <li>Automatically collected through extension usage</li>
      <li>Passport images you upload</li>
    </ul>
    
    <h4>Business Purposes</h4>
    <ul>
      <li>Providing the form filling service</li>
      <li>Security and fraud prevention</li>
      <li>Service improvement and debugging</li>
      <li>Customer support</li>
    </ul>
    
    <h4>Your CCPA Rights</h4>
    
    <p><strong>Right to Know:</strong> You can request disclosure of:</p>
    <ul>
      <li>Categories of personal information collected</li>
      <li>Specific pieces of personal information collected</li>
      <li>Sources of personal information</li>
      <li>Business purposes for collection</li>
      <li>Third parties with whom we share information</li>
    </ul>
    
    <p><strong>Right to Delete:</strong> You can request deletion of your personal information.</p>
    
    <p><strong>Right to Opt-Out:</strong> We do not sell your personal information.</p>
    
    <p><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</p>
    
    <h4>How to Exercise Your Rights</h4>
    <p>Email wafidformflow@gmail.com with "CCPA Request" in the subject line. We may need to verify your identity.</p>
    
    <h4>Authorized Agent</h4>
    <p>You can designate an authorized agent to make requests on your behalf with written permission.</p>
  `;
}

function getCookiePolicyContent() {
  return `
    <h3>Cookie Policy</h3>
    <p>Last Updated: March 2025</p>
    
    <h4>What Are Cookies</h4>
    <p>Cookies are small text files stored on your device when you visit websites. Our extension uses similar technologies for functionality.</p>
    
    <h4>How We Use Cookies</h4>
    <p>The Passport Scanner extension uses:</p>
    <ul>
      <li><strong>Essential cookies:</strong> Required for extension operation, storing your preferences and settings</li>
      <li><strong>Local storage:</strong> Chrome's storage API to save your form history and tab preferences</li>
      <li><strong>Session data:</strong> Temporary data during passport processing</li>
    </ul>
    
    <h4>Third-Party Cookies</h4>
    <p>We do not use third-party tracking cookies. Wafid.com may set its own cookies when you visit their site.</p>
    
    <h4>Cookie Duration</h4>
    <ul>
      <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
      <li><strong>Persistent cookies:</strong> Stored until you clear Chrome storage or uninstall the extension</li>
    </ul>
    
    <h4>Managing Cookies</h4>
    <p>You can control cookies through Chrome settings:</p>
    <ol>
      <li>Click the three dots menu in Chrome</li>
      <li>Go to Settings > Privacy and security</li>
      <li>Select Cookies and other site data</li>
      <li>Adjust your preferences</li>
    </ol>
    
    <h4>Consequences of Disabling Cookies</h4>
    <p>Disabling essential cookies may prevent the extension from saving your settings and preferences. The extension will still function but may not remember your choices between sessions.</p>
    
    <h4>Updates to This Policy</h4>
    <p>We may update this Cookie Policy occasionally. We will notify you of material changes through the extension.</p>
    
    <h4>Contact Us</h4>
    <p>For questions about our Cookie Policy: wafidformflow@gmail.com</p>
  `;
}


