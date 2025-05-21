// GSAP animations module
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Header animations
  gsap.to(".title-mask", {
    scaleX: 0,
    duration: 1.5,
    ease: "power4.inOut"
  });
  
  gsap.to(".header-subtitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
    ease: "power3.out"
  });
  
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
      
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });
  
  // Back to top button
  document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // About section animations
  gsap.to(".about-content", {
    scrollTrigger: {
      trigger: ".about-content",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
  });
  
  // Education and Experience items animations
  gsap.utils.toArray(".education-item, .experience-item").forEach(item => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });
  
  // Certifications items animations
  gsap.utils.toArray("#certifications .experience-item").forEach(item => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });
  
  // Project cards animations
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power3.out"
    });
  });
  
  // Skills tags animations
  gsap.from(".skill-tag", {
    scrollTrigger: {
      trigger: ".skills-container",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "back.out(1.7)"
  });
  
  // Contact section animations
  gsap.to(".contact-info", {
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
  });
  
  gsap.to(".contact-form", {
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
  });
  
  // Fade up elements
  gsap.utils.toArray(".fade-up").forEach(element => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });
  
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  
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