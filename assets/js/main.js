/**
 * BLACK LAB AGENCY
 * Main JavaScript File
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('.header');

  // Mobile menu functionality
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');

      // Animate menu toggle icon
      const spans = menuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Category list dropdown functionality
  const categoryItems = document.querySelectorAll('.category-item');

  categoryItems.forEach(item => {
    const header = item.querySelector('.category-header');
    const toggle = item.querySelector('.category-toggle');
    const url = item.getAttribute('data-url');

    // Toggle dropdown when clicking the toggle button
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();

      // Close other open categories (accordion behavior)
      categoryItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current category
      item.classList.toggle('active');
    });

    // Navigate to page when clicking the header (but not the toggle button)
    header.addEventListener('click', function(e) {
      // Only navigate if we didn't click on the toggle button
      if (!toggle.contains(e.target) && url) {
        window.location.href = url;
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or if it's calling a JavaScript function
      if (href === '#' || href.startsWith('#javascript') || this.getAttribute('onclick')) {
        return;
      }

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Keep observing to allow re-animation if user scrolls back up
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in');
  animatedElements.forEach(element => {
    scrollObserver.observe(element);
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const heroContent = hero.querySelector('.hero-content');
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
      }
    });
  }

  // 3D tilt effect for cards on mouse move
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });

  // Initialize Calendly inline widgets
  const calendlyWidgets = document.querySelectorAll('.calendly-inline-widget');
  calendlyWidgets.forEach(widget => {
    const url = widget.getAttribute('data-url');
    if (url && window.Calendly) {
      Calendly.initInlineWidget({
        url: url,
        parentElement: widget
      });
    }
  });

  // Form validation (if forms are added later)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = 'red';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!valid) {
        e.preventDefault();
        alert('Please fill out all required fields.');
      }
    });
  });

  // Console branding (Easter egg)
  console.log('%c🐕 BLACK LAB AGENCY', 'font-size: 24px; font-weight: bold; color: #0d0d0d;');
  console.log('%cFull-service advertising built for measurable growth.', 'font-size: 14px; color: #737373;');
  console.log('%cVisit us at: https://blacklabagency.com', 'font-size: 12px; color: #a3a3a3;');
});

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Initialize counter animations when stats come into view
document.addEventListener('DOMContentLoaded', function() {
  const stats = document.querySelectorAll('.stat-value');

  if (stats.length > 0) {
    const statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const value = entry.target.textContent;
          const numericValue = parseInt(value.replace(/\D/g, ''));

          if (!isNaN(numericValue) && numericValue > 0) {
            entry.target.textContent = '0';
            setTimeout(() => {
              animateCounter(entry.target, numericValue);
            }, 200);
          }

          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
      statsObserver.observe(stat);
    });
  }
});

// Prevent default on empty links
document.addEventListener('DOMContentLoaded', function() {
  const emptyLinks = document.querySelectorAll('a[href="#"]');
  emptyLinks.forEach(link => {
    if (!link.getAttribute('onclick')) {
      link.addEventListener('click', (e) => e.preventDefault());
    }
  });
});
