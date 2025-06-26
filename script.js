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
});
