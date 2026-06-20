/* Sound & Fury — shared site JS */
(function () {
  'use strict';

  // ---- Mobile menu ----
  var burger = document.querySelector('.hamburger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Reveal on scroll ----
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- Animated stat counters ----
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseFloat(el.dataset.count),
            suffix = el.dataset.suffix || '', dur = 1200, start = null;
        function tick(t) {
          if (!start) start = t;
          var p = Math.min((t - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(eased * target) + (p === 1 ? suffix : '');
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  // ---- Active nav (current page) ----
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (href === path || (path === 'index.html' && href === 'index.html')) a.classList.add('active');
  });

  // ---- Year ----
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();

  // ---- Lazy-load homepage quote iframe when near viewport ----
  var lazyFrames = document.querySelectorAll('iframe[data-src]');
  if (lazyFrames.length && 'IntersectionObserver' in window) {
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.src = e.target.dataset.src; fo.unobserve(e.target); }
      });
    }, { rootMargin: '300px' });
    lazyFrames.forEach(function (f) { fo.observe(f); });
  } else {
    lazyFrames.forEach(function (f) { f.src = f.dataset.src; });
  }

  // ---- Scroll cue: fade out once the user starts scrolling ----
  var cue = document.querySelector('.scroll-cue');
  if (cue) {
    var onCueScroll = function () {
      document.body.classList.toggle('cue-hide', window.scrollY > 40);
    };
    window.addEventListener('scroll', onCueScroll, { passive: true });
    onCueScroll();
  }
})();
