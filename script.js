
  // Smooth scroll to center the element
  function smoothScrollToCenter(element, baseDuration = 700) {
    const rect = element.getBoundingClientRect();
    const targetY = rect.top + window.pageYOffset + rect.height / 2 - window.innerHeight / 2;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = distance > 0 ? baseDuration * 1.8 : baseDuration * 0.8;
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScrollToCenter(targetElement);
      }
    });
  });

  // Typed.js typing effect
  if (typeof Typed !== "undefined") {
    new Typed("#typed-text", {
      strings: [
        "Crafting mobile-first software",
        "Building smart automation tools",
        "Exploring AI and Cloud",
        "Solving real-world problems with code"
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  }

  // Back to Top button
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Add 'nav-faded' class on scroll (throttled)
  if (header) {
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener("scroll", () => {
      lastScroll = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          if (lastScroll > 60) {
            header.classList.add("nav-faded");
          } else {
            header.classList.remove("nav-faded");
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }