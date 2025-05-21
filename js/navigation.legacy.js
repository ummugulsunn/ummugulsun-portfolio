// Legacy navigation module for older browsers
(function() {
  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    function toggleMenu() {
      const isOpen = navLinks.classList.contains('nav-active');
      
      if (isOpen) {
        navLinks.classList.remove('nav-active');
        navOverlay.classList.remove('nav-overlay-active');
        body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        navLinks.classList.add('nav-active');
        navOverlay.classList.add('nav-overlay-active');
        body.style.overflow = 'hidden';
        navToggle.setAttribute('aria-expanded', 'true');
      }
    }
    
    // Toggle menu on button click
    navToggle.addEventListener('click', toggleMenu);
    
    // Close menu on overlay click
    navOverlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link (mobile only)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          toggleMenu();
        }
      });
    });
    
    // Reset menu state on window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-active');
        navOverlay.classList.remove('nav-overlay-active');
        body.style.overflow = '';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Touch events for swipe gestures
    navLinks.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    navLinks.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = touchEndX - touchStartX;
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swipe right - open menu
          if (!navLinks.classList.contains('nav-active')) {
            toggleMenu();
          }
        } else {
          // Swipe left - close menu
          if (navLinks.classList.contains('nav-active')) {
            toggleMenu();
          }
        }
      }
    }
    
    // Legacy image loading
    function initImageLoading() {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          });
        });
        
        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        function loadImages() {
          images.forEach(img => {
            if (img.getBoundingClientRect().top <= window.innerHeight) {
              img.src = img.dataset.src;
              img.classList.add('loaded');
            }
          });
        }
        
        window.addEventListener('scroll', loadImages);
        window.addEventListener('resize', loadImages);
        loadImages(); // Load initial visible images
      }
    }
    
    // Initialize image loading
    initImageLoading();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})(); 