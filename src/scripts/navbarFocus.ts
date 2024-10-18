document.addEventListener("touchstart", function () {}, true);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function onScroll() {
    let currentSection: string | null = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove(
        "text-secondary",
        "sm:opacity-100",
        "font-semibold"
      );
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("text-secondary", "sm:opacity-100", "font-semibold");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});
