(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#navlinks");

  if (!toggle || !nav) return;

  // Toggle mobile menu
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu AFTER navigation (do not block links)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Footer year
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
