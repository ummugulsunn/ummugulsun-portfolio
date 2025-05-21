// Form handling module
window.initForm = function() {
  const form = document.getElementById('contactForm');
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
  form.addEventListener('submit', async (e) => {
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
    
    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        showToast('Message sent successfully!');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      btnText.style.opacity = '1';
      btnLoader.style.display = 'none';
    }
  });
} 