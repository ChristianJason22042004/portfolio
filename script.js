/* ============================================
   Modern, Lightweight JavaScript - No 3D Libraries
   ============================================ */

/* ============================================
   Initialization
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeScrollEffects();
  initializeFormHandling();
  initializeAcccessibility();
  initializeDynamicRoles();
});

/* ============================================
   Navigation & Scroll Effects
   ============================================ */

const navbar = document.querySelector(".navbar");

function initializeNavigation() {
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Close mobile menu
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            const navbarToggler = document.querySelector(".navbar-toggler");
            navbarToggler.click();
          }
        }
      }
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const activeNavLink = () => {
    let length = sections.length;

    while (--length && window.scrollY + 100 < sections[length].offsetTop) {}

    navLinks.forEach((li) => {
      li.classList.remove("active");
    });

    const activeLink = document.querySelector(
      `.nav-link[href="#${sections[length].id}"]`,
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  window.addEventListener("scroll", activeNavLink);
  activeNavLink();
}

/* ============================================
   Scroll Effects & Animations
   ============================================ */

function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(".project-card, .skill-category, .stat, .cert-card")
    .forEach((el) => {
      el.style.opacity = "0";
      observer.observe(el);
    });

  // Parallax effect for hero section
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      const heroSection = document.querySelector(".hero-section");
      const offset = scrolled * 0.5;

      if (scrolled < heroSection.offsetHeight) {
        heroContent.style.transform = `translateY(${offset}px)`;
        heroContent.style.opacity = Math.max(
          1 - scrolled / heroSection.offsetHeight,
          0,
        );
      }
    });
  }

  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll(".progress-fill");
  const animateProgressBars = () => {
    progressBars.forEach((bar) => {
      const rect = bar.getBoundingClientRect();
      if (
        rect.top < window.innerHeight &&
        !bar.classList.contains("animated")
      ) {
        bar.classList.add("animated");
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 10);
      }
    });
  };

  window.addEventListener("scroll", animateProgressBars);
  animateProgressBars();
}

/* ============================================
   Dynamic Roles Animation
   ============================================ */

function initializeDynamicRoles() {
  const roleTexts = document.querySelectorAll(".role-text");
  if (roleTexts.length === 0) return;

  let currentIndex = 0;

  // Ensure first role is visible on load
  roleTexts[0].classList.add("active");

  // Optional: Add a click interaction to manually cycle through roles
  document.querySelector(".dynamic-roles").addEventListener("click", () => {
    const roles = document.querySelectorAll(".role-text");
    roles.forEach((r) => r.classList.remove("active"));
    currentIndex = (currentIndex + 1) % roles.length;
    roles[currentIndex].classList.add("active");
  });
}

/* ============================================
   Form Handling & Validation
   ============================================ */

function initializeFormHandling() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Get form data for validation
      const formData = new FormData(contactForm);
      const emailValue = formData.get("email");

      // Validate email
      if (!isValidEmail(emailValue)) {
        e.preventDefault();
        showNotification("Please enter a valid email address.", "danger");
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // The form will submit to FormSubmit.co after validation
      // No need to preventDefault - let it submit naturally
    });

    // Show success notification after form submission (optional - comment out for redirect behavior)
    // Note: FormSubmit redirects after successful submission
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ============================================
   Notification System
   ============================================ */

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `alert alert-${type} position-fixed`;
  notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 2000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
  notification.textContent = message;
  notification.setAttribute("role", "alert");

  document.body.appendChild(notification);

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = "fadeOut 0.3s ease-out forwards";
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

/* ============================================
   Accessibility Features
   ============================================ */

function initializeAcccessibility() {
  // Skip to main content link
  const skipLink = document.createElement("a");
  skipLink.href = "#projects";
  skipLink.className = "skip-to-content";
  skipLink.textContent = "Skip to main content";
  skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary);
        color: white;
        padding: 8px;
        z-index: 100;
    `;
  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "0";
  });
  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
  });
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Close menu on Escape
    if (e.key === "Escape") {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        document.querySelector(".navbar-toggler").click();
      }
    }
  });
}

/* ============================================
   Theme & Utilities
   ============================================ */

// Welcome message
console.log(
  "%cWelcome to Jason's Portfolio! 🚀",
  "font-size: 20px; font-weight: bold; color: #6366f1;",
);
console.log(
  "%cFull-Stack Developer | Building Amazing Web Experiences",
  "font-size: 14px; color: #ec4899;",
);

// Lazy loading support
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}
