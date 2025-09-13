// ====== VARIABLES ======
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("header nav ul li a");
const backToTopButton = document.getElementById("backToTop");
const sections = document.querySelectorAll("main section");

// ====== SMOOTH SCROLL TO CENTER ======
function smoothScrollToCenter(element, baseDuration = 700) {
  const rect = element.getBoundingClientRect();
  const targetY = rect.top + window.pageYOffset + rect.height / 2 - window.innerHeight / 2;
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const duration = Math.abs(distance) > 0 ? baseDuration * 1.5 : baseDuration * 0.8;
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
    if (progress < 1) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// ====== NAV LINK SCROLL ======
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) smoothScrollToCenter(targetElement);
  });
});

// ====== TYPED.JS ======
if (typeof Typed !== "undefined") {
  new Typed("#typed-text", {
    strings: [
      "Crafting mobile-first software",
      "Building smart automation tools",
      "Exploring AI and Cloud",
      "Solving real-world problems with code"
    ],
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1800,
    loop: true,
    fadeOut: true,
    fadeOutDelay: 300
  });
}

// ====== BACK TO TOP BUTTON ======
if (backToTopButton) {
  window.addEventListener("scroll", () => {
    backToTopButton.style.opacity = window.scrollY > 300 ? "1" : "0";
    backToTopButton.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ====== HEADER FADE ON SCROLL ======
let lastScroll = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  lastScroll = window.scrollY;
  if (!ticking) {
    requestAnimationFrame(() => {
      header.classList.toggle("nav-faded", lastScroll > 60);
      ticking = false;
    });
    ticking = true;
  }
});

// ====== ACTIVE NAV HIGHLIGHT ======
function setActiveNav() {
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`header nav ul li a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);
setActiveNav(); // run once on page load

// ====== SECTION FADE-IN ON SCROLL ======
function revealSections() {
  const revealPoint = window.innerHeight * 0.85; // trigger a bit before section is fully in view
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < revealPoint) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections(); // run once on page load
