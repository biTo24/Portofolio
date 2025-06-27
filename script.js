document.addEventListener("DOMContentLoaded", () => {
  // Header click color change
  const header = document.querySelector("header");
  if (header) {
    header.addEventListener("click", () => {
      header.style.transition = "background-color 0.3s ease";
      header.style.backgroundColor = "#007bff";
    });
  }

  // Smooth scroll for sidebar nav links
  const navLinks = document.querySelectorAll("#sidebar nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Typed.js effect
  if (typeof Typed !== "undefined") {
    new Typed("#typed-text", {
      strings: [
        "Crafting mobile-first software.",
        "Building smart automation tools.",
        "Exploring AI and Cloud.",
        "Solving real-world problems with code."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  // Dark Mode Toggle
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
    });
  }

  // Apply saved dark mode preference on load
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});
