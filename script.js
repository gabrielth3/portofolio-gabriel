/* ============================================================
   THEME TOGGLE
============================================================ */
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "◑ Light Mode";
  } else {
    themeBtn.textContent = "◐ Dark Mode";
  }
});

/* ============================================================
   ACTIVE NAV LINK ON SCROLL
============================================================ */
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

/* ============================================================
   SKILL BAR ANIMATION ON SCROLL
============================================================ */
const skillBars = document.querySelectorAll(".skill-bar");

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

skillBars.forEach((bar) => barObserver.observe(bar));