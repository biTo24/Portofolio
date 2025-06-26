document.addEventListener("DOMContentLoaded", () => {
  // Header click color change with smooth transition
  const header = document.querySelector("header");
  header.addEventListener("click", () => {
    header.style.transition = "background-color 0.3s ease";
    header.style.backgroundColor = "#007bff";
  });

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

  // Sidebar toggle button for mobile
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarContent = document.querySelector(".sidebar-content");

  sidebarToggle.addEventListener("click", () => {
    const isExpanded = sidebarToggle.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      sidebarContent.style.transform = "translateX(-100%)";
      sidebarToggle.setAttribute("aria-expanded", "false");
    } else {
      sidebarContent.style.transform = "translateX(0)";
      sidebarToggle.setAttribute("aria-expanded", "true");
    }
  });

  // Optional: Close sidebar when a nav link is clicked (mobile)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebarContent.style.transform = "translateX(-100%)";
        sidebarToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // On window resize, reset sidebar styles for desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebarContent.style.transform = "translateX(0)";
      sidebarToggle.setAttribute("aria-expanded", "true");
    } else {
      sidebarContent.style.transform = "translateX(-100%)";
      sidebarToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Initialize sidebar state based on screen size
  if (window.innerWidth <= 768) {
    sidebarContent.style.transform = "translateX(-100%)";
    sidebarToggle.setAttribute("aria-expanded", "false");
  } else {
    sidebarContent.style.transform = "translateX(0)";
    sidebarToggle.setAttribute("aria-expanded", "true");
  }
});
