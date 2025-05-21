// Legacy form handling module for older browsers
(function() {
  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const formStatus = form.querySelector('.form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const toast = document.getElementById('toast');
    
    // Show toast notification
    function showToast(message, type = 'success') {
      const toastContent = toast.querySelector('.toast-content');
      toastContent.textContent = message;
      toast.className = `toast toast-${type} toast-show`;
      
      setTimeout(() => {
        toast.className = 'toast';
      }, 5000);
    }
    
    // Close toast
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.className = 'toast';
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      const errorElement = document.getElementById(`${input.id}-error`);
      
      input.addEventListener('input', () => {
        validateInput(input, errorElement);
      });
      
      input.addEventListener('blur', () => {
        validateInput(input, errorElement);
      });
    });
    
    function validateInput(input, errorElement) {
      let errorMessage = '';
      
      if (input.validity.valueMissing) {
        errorMessage = 'This field is required';
      } else if (input.validity.typeMismatch && input.type === 'email') {
        errorMessage = 'Please enter a valid email address';
      } else if (input.validity.tooShort) {
        errorMessage = `Please enter at least ${input.minLength} characters`;
      } else if (input.validity.tooLong) {
        errorMessage = `Please enter no more than ${input.maxLength} characters`;
      } else if (input.validity.patternMismatch) {
        if (input.id === 'name') {
          errorMessage = 'Please enter only letters and spaces';
        } else if (input.id === 'email') {
          errorMessage = 'Please enter a valid email address';
        }
      }
      
      if (errorMessage) {
        input.classList.add('invalid');
        errorElement.textContent = errorMessage;
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.classList.remove('invalid');
        errorElement.textContent = '';
        input.setAttribute('aria-invalid', 'false');
      }
      
      return !errorMessage;
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate all inputs
      let isValid = true;
      inputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (!validateInput(input, errorElement)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        showToast('Please correct the errors in the form', 'error');
        return;
      }
      
      // Show loading state
      submitBtn.disabled = true;
      btnText.style.opacity = '0';
      btnLoader.style.display = 'block';
      
      // Create form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Submit form using XMLHttpRequest
      const xhr = new XMLHttpRequest();
      xhr.open('POST', form.action, true);
      xhr.setRequestHeader('Accept', 'application/json');
      
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          form.reset();
          showToast('Message sent successfully!');
        } else {
          showToast('Failed to send message. Please try again later.', 'error');
        }
        
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.opacity = '1';
        btnLoader.style.display = 'none';
      };
      
      xhr.onerror = function() {
        showToast('Failed to send message. Please try again later.', 'error');
        
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.opacity = '1';
        btnLoader.style.display = 'none';
      };
      
      xhr.send(formData);
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForm);
  } else {
    initForm();
  }
})(); 