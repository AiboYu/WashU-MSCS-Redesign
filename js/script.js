/* ============================================================================
   WashU MS in Computer Science — Unofficial Student Redesign
   CSE 2004 Web Development

   NOTE ON AI ASSISTANCE: Authored with the assistance of Claude (Anthropic).
   Vanilla JavaScript only — no framework, no dependencies. All interactions
   degrade gracefully when JavaScript is disabled (the degree-path panels are
   all present in the DOM; the FAQ uses native <details>).
   ============================================================================ */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     1. Mobile navigation toggle
     --------------------------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector(".primary-nav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after choosing a destination on mobile.
    primaryNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------------------------------
     2. Degree-path switcher
     --------------------------------------------------------------------------- */
  var radios = document.querySelectorAll('input[name="path"]');
  var panels = document.querySelectorAll(".path-panel");

  function showPanel(value) {
    panels.forEach(function (panel) {
      // `hidden` keeps the unused panels out of the tab order and accessibility tree.
      panel.hidden = panel.getAttribute("data-path") !== value;
    });
  }

  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (radio.checked) {
        showPanel(radio.value);
      }
    });
  });

  // Ensure the correct panel is visible on first paint (in case of a reload
  // where a radio is pre-checked by the browser).
  var checked = document.querySelector('input[name="path"]:checked');
  if (checked) {
    showPanel(checked.value);
  }

  /* ---------------------------------------------------------------------------
     3. In-page table of contents — scroll spy
     --------------------------------------------------------------------------- */
  var tocLinks = document.querySelectorAll(".toc__list a");

  function setActiveToc(id) {
    tocLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + id;
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window && tocLinks.length) {
    var sections = document.querySelectorAll("section[id]");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveToc(entry.target.id);
          }
        });
      },
      {
        // Trigger when a section crosses the upper-middle of the viewport.
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
