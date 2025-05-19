// EmailJS integration for form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Collect form data
      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value
      };
      
      // EmailJS integration would go here
      // Example structure for EmailJS:
      
      emailjs.send('service_4majgp5', 'template_44hpg0i', formData, 'c1sPbZMyL5VaUGIVg')
        .then(function(response) {
          showFormStatus('success', 'Your message has been sent successfully!');
          contactForm.reset();
        }, function(error) {
          showFormStatus('error', 'Failed to send message. Please try again later.');
          console.error('EmailJS error:', error);
        })
        .finally(() => {
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
        });
      
      
      // For demonstration purposes (remove this in production)
      setTimeout(() => {
        showFormStatus('success', 'Your message has been sent successfully!');
        contactForm.reset();
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }, 1500);
    });
  }
  
  function showFormStatus(type, message) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    
    // Hide status message after 5 seconds
    setTimeout(() => {
      formStatus.className = 'form-status';
    }, 5000);
  }
});
