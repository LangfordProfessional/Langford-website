(() => {
  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#navlinks");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu when clicking a link
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
