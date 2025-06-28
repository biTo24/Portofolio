document.addEventListener("DOMContentLoaded", () => {
  // Header click color change
  const header = document.querySelector("header");
  if (header) {
    header.addEventListener("click", () => {
      header.style.transition = "background-color 0.3s ease";
      header.style.backgroundColor = "#007bff";
    });
  }

  // Smooth scroll to center the element vertically in viewport
  function smoothScrollToCenter(element, duration = 700) {
    const elementRect = element.getBoundingClientRect();
    const elementCenterY = elementRect.top + window.pageYOffset + elementRect.height / 2;
    const viewportCenterY = window.innerHeight / 2;
    const targetPosition = elementCenterY - viewportCenterY;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }

  // Fix selector to target sidebar nav links
  const navLinks = document.querySelectorAll("aside nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScrollToCenter(targetElement, 800);
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
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }
});
