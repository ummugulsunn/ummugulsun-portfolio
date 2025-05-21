// Legacy animations module for older browsers
(function() {
  // Simple fade in animation
  function fadeIn(element, duration = 1000) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = null;
    function animate(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      element.style.opacity = Math.min(progress / duration, 1);
      
      if (progress < duration) {
        window.requestAnimationFrame(animate);
      }
    }
    
    window.requestAnimationFrame(animate);
  }
  
  // Simple scroll animation
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (!element) return;
    
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  // Initialize animations
  function initAnimations() {
    // Header animations
    const titleMask = document.querySelector('.title-mask');
    const headerSubtitle = document.querySelector('.header-subtitle');
    
    if (titleMask) {
      setTimeout(() => {
        titleMask.style.transform = 'scaleX(0)';
      }, 100);
    }
    
    if (headerSubtitle) {
      setTimeout(() => {
        headerSubtitle.style.opacity = '1';
        headerSubtitle.style.transform = 'translateY(0)';
      }, 1000);
    }
    
    // Navigation scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav');
      const backToTop = document.querySelector('.back-to-top');
      
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
        backToTop.classList.add('visible');
      } else {
        nav.classList.remove('scrolled');
        backToTop.classList.remove('visible');
      }
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        smoothScroll(targetId);
      });
    });
    
    // Back to top button
    document.querySelector('.back-to-top').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-up, .about-content, .contact-info, .contact-form');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fadeIn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
      
      document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      });
      
      document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})(); 