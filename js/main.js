/* ============================================
   Main.js — Shared across all pages
   ============================================ */

(function () {
  "use strict";

  /* --- Mobile Navigation --- */

  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (
        mobileMenu.classList.contains("is-open") &&
        !mobileMenu.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        mobileMenu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Scroll Reveal --- */

  var revealTargets = document.querySelectorAll(
    "main section, .hero-copy, .hero-visual, .card-numbered, .service-card, .product-card"
  );

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* --- Copyright Year --- */

  var yearEl = document.querySelector(".copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
