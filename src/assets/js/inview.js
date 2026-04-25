/**
 * inview.js — animaciones de entrada con IntersectionObserver + CSS.
 * Reemplaza GSAP / AOS por animaciones puras con CSS que respetan prefers-reduced-motion.
 * Sin dependencias externas.
 */

(function () {
  "use strict";

  // Si el usuario pide menos animación, no animamos nada.
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Inyectar las CSS necesarias para que las clases ".is-inview" y los .term/.letter
  // tengan transición. Esto permite que index.scss no las traiga por defecto.
  function injectBaseCSS() {
    if (document.getElementById("inview-base-style")) return;
    var s = document.createElement("style");
    s.id = "inview-base-style";
    s.textContent = [
      ".inview, .animate-word, .animate-box, .animate-box2, .animate-list, .animate-letters, .animate-appear { transition: opacity .6s ease, transform .6s ease; }",
      ".animate-word .term, .animate-letters .letter { display:inline-block; opacity:0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }",
      ".animate-word.is-inview .term, .animate-letters.is-inview .letter { opacity:1; transform: translateY(0); }",
      ".animate-box, .animate-box2, .animate-appear { opacity: 0; transform: translateY(20px); }",
      ".animate-box.is-inview, .animate-box2.is-inview, .animate-appear.is-inview { opacity:1; transform: translateY(0); }",
      ".animate-list li { opacity:0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }",
      ".animate-list.is-inview li { opacity:1; transform: translateY(0); }",
      "@media (prefers-reduced-motion: reduce) {",
      "  .inview, .animate-word, .animate-box, .animate-box2, .animate-list, .animate-letters, .animate-appear, .animate-word .term, .animate-letters .letter, .animate-list li { opacity:1 !important; transform:none !important; transition:none !important; }",
      "}",
    ].join("\n");
    document.head.appendChild(s);
  }

  function splitWords(el) {
    var text = el.textContent;
    el.textContent = "";
    var parts = text.split(/(\s+)/);
    parts.forEach(function (w) {
      if (w.trim().length > 0) {
        var span = document.createElement("span");
        span.className = "term";
        span.textContent = w;
        el.appendChild(span);
      } else {
        el.appendChild(document.createTextNode(w));
      }
    });
  }

  function splitLetters(el) {
    var text = el.textContent;
    el.textContent = "";
    text.split("").forEach(function (l) {
      var span = document.createElement("span");
      span.className = "letter";
      span.innerHTML = l === " " ? "&nbsp;" : l;
      el.appendChild(span);
    });
  }

  function applyDelays(el) {
    // Delay por data-delay (en segundos como string "0", "1", "2"…)
    var d = parseFloat(el.dataset.delay || 0);
    if (!isNaN(d) && d > 0) el.style.transitionDelay = d * 0.15 + "s";
    // Stagger interno para .term / .letter / li
    var children = el.querySelectorAll(".term, .letter, li");
    children.forEach(function (c, i) {
      c.style.transitionDelay = ((d * 0.15) + (i * 0.04)).toFixed(2) + "s";
    });
  }

  function init() {
    injectBaseCSS();

    if (reduceMotion || !("IntersectionObserver" in window)) {
      // Sin animación: marcar todo como visible.
      document.querySelectorAll(".inview,.animate-word,.animate-box,.animate-box2,.animate-list,.animate-letters,.animate-appear")
        .forEach(function (el) { el.classList.add("is-inview"); });
      return;
    }

    // Pre-procesar elementos
    document.querySelectorAll(".animate-word").forEach(splitWords);
    document.querySelectorAll(".animate-letters").forEach(splitLetters);
    document.querySelectorAll(".animate-word, .animate-box, .animate-box2, .animate-list, .animate-letters, .animate-appear")
      .forEach(applyDelays);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-inview");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".inview,.animate-word,.animate-box,.animate-box2,.animate-list,.animate-letters,.animate-appear")
      .forEach(function (el) {
        io.observe(el);
        // Si ya está en viewport al cargar la página, mostrarlo de inmediato
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom >= 0) {
          el.classList.add("is-inview");
          io.unobserve(el);
        }
      });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
