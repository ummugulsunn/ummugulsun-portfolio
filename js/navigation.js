// Navigation module
window.initNavigation = function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  const body = document.body;
  
  function toggleMenu() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('nav-active');
    navOverlay.classList.toggle('nav-overlay-active');
    body.classList.toggle('nav-open');
  }
  
  navToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav-active');
        navOverlay.classList.remove('nav-overlay-active');
        body.classList.remove('nav-open');
      }
    }, 250);
  });
  
  // Touch event handling for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0 && touchStartX < 50) {
        // Swipe right from left edge - open menu
        if (!navLinks.classList.contains('nav-active')) {
          toggleMenu();
        }
      } else if (swipeDistance < 0 && navLinks.classList.contains('nav-active')) {
        // Swipe left with menu open - close menu
        toggleMenu();
      }
    }
  }
  
  // Image loading optimization
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      lazyImageObserver.observe(img);
    });
  }

  // Add blur-up loading effect
  const images = document.querySelectorAll('.about-image img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
  });
} 