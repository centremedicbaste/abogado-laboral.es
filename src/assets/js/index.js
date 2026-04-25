/**
 * index.js — vanilla, defensivo, sin dependencias externas obligatorias.
 * Si AOS / jQuery / Swiper / PhotoSwipe están cargados (rara vez en este sitio),
 * los usa. Si no, no rompe.
 */

(function () {
  "use strict";

  // ============= 1) Header scroll state =============
  var ticking = false;
  var lastScroll = 0;
  function onScroll() {
    if (ticking) return;
    window.requestAnimationFrame(function () {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      var body = document.body;
      if (y >= 50) body.classList.add("scrolled");
      else body.classList.remove("scrolled");
      if (y > lastScroll) { body.classList.remove("scroll-up"); body.classList.add("scroll-down"); }
      else { body.classList.remove("scroll-down"); body.classList.add("scroll-up"); }
      lastScroll = y;
      ticking = false;
    });
    ticking = true;
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // ============= 2) Menú hamburguesa accesible =============
  function initMenu() {
    var btn = document.getElementById("menu-toggle");
    var drawer = document.getElementById("menu-mobile");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", String(open));
      if (drawer) {
        if (open) drawer.removeAttribute("hidden");
        else drawer.setAttribute("hidden", "");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        document.body.classList.remove("menu-open");
        btn.setAttribute("aria-expanded", "false");
        if (drawer) drawer.setAttribute("hidden", "");
      }
    });
  }

  // ============= 3) Acordeón legacy (.accordion-header click) =============
  // Las nuevas FAQs usan <details>, que ya es nativamente accesible.
  // Esto cubre los acordeones antiguos que usaban .accordion-header > .accordion.
  function initLegacyAccordion() {
    document.querySelectorAll(".accordion-header").forEach(function (header) {
      header.addEventListener("click", function () {
        var parent = header.closest(".accordion");
        if (!parent) return;
        var wrap = parent.parentNode;
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        } else {
          if (wrap) wrap.querySelectorAll(".accordion").forEach(function (a) { a.classList.remove("active"); });
          parent.classList.add("active");
        }
      });
    });
  }

  // ============= 4) Modal de vídeo (action--play) =============
  function initVideoModal() {
    var playButtons = document.querySelectorAll(".action--play");
    var closeButtons = document.querySelectorAll(".action--close");
    var wrap = document.querySelector(".video-wrap");
    var player = document.querySelector(".video-player");
    if (!playButtons.length || !wrap || !player) return;
    playButtons.forEach(function (b) {
      b.addEventListener("click", function () {
        wrap.classList.add("video-wrap--show");
        wrap.classList.remove("video-wrap--hide");
        var src = b.getAttribute("data-src");
        if (src) {
          player.setAttribute("src", src);
          var source = player.querySelector("source");
          if (source) source.setAttribute("src", src);
        }
        if (typeof player.play === "function") player.play().catch(function () {});
      });
    });
    closeButtons.forEach(function (b) {
      b.addEventListener("click", function () {
        wrap.classList.add("video-wrap--hide");
        wrap.classList.remove("video-wrap--show");
        if (typeof player.pause === "function") player.pause();
      });
    });
  }

  // ============= 5) Counters animados (.counter[data-count]) =============
  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;
    function step(t) {
      if (!startTime) startTime = t;
      var progress = Math.min((t - startTime) / duration, 1);
      el.textContent = Math.floor(start + (target - start) * progress);
      if (progress < 1) window.requestAnimationFrame(step);
      else el.textContent = target;
    }
    window.requestAnimationFrame(step);
  }
  function initCounters() {
    var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          var target = parseInt(el.getAttribute("data-count") || el.textContent || "0", 10);
          if (!isNaN(target)) animateCounter(el, target, 1500);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 }) : null;
    document.querySelectorAll(".counter, .animated-counter").forEach(function (el) {
      if (io) io.observe(el);
      else {
        var target = parseInt(el.getAttribute("data-count") || el.textContent || "0", 10);
        if (!isNaN(target)) animateCounter(el, target, 1500);
      }
    });
  }

  // ============= 6) Swiper / PhotoSwipe — solo si están cargados =============
  function initSwiper() {
    if (typeof window.Swiper !== "function") return;
    if (document.querySelector(".swiper-container")) {
      try {
        new window.Swiper(".swiper-container", {
          spaceBetween: 15, slidesPerView: 1.5, loop: true,
          pagination: { el: ".actuals .swiper-pagination", clickable: true },
          navigation: { nextEl: ".swiper-arrows .swiper-next", prevEl: ".swiper-arrows .swiper-prev" },
          breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 15 },
            980: { slidesPerView: 4, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30, loop: false },
          },
        });
      } catch (e) { /* noop */ }
    }
  }

  // ============= boot =============
  function boot() {
    initMenu();
    initLegacyAccordion();
    initVideoModal();
    initCounters();
    initSwiper();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
