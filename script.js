/* ==============================================
   BelegNest Landing Page – Interactions
   Vanilla JS, no dependencies
   ============================================== */
(function () {
    'use strict';
    var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
    var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── 1. REVEAL ON SCROLL ── */
    function initReveal() {
        var els = $$('.reveal');
        if (!els.length) return;
        els.forEach(function (el) {
            var parent = el.parentElement;
            if (!parent) return;
            var siblings = Array.prototype.slice.call(parent.children).filter(function (c) { return c.classList.contains('reveal'); });
            if (siblings.length > 1) {
                var idx = siblings.indexOf(el);
                if (idx > 0) el.style.transitionDelay = Math.min(idx * 0.08, 0.4) + 's';
            }
        });
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal--visible');
                } else {
                    if (entry.boundingClientRect.top > 0) entry.target.classList.remove('reveal--visible');
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        els.forEach(function (el) { observer.observe(el); });
    }

    /* ── 2. COUNT-UP COUNTERS ── */
    function formatNumber(num, sep) {
        if (!sep) return String(num);
        var s = String(num), r = '';
        for (var i = s.length - 1, c = 0; i >= 0; i--, c++) {
            if (c > 0 && c % 3 === 0) r = sep + r;
            r = s[i] + r;
        }
        return r;
    }
    function animateCounter(el) {
        var target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        var suffix = el.dataset.suffix || '', prefix = el.dataset.prefix || '', sep = el.dataset.separator || '';
        var duration = 1600, start = null;
        if (el._raf) cancelAnimationFrame(el._raf);
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var ease = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + formatNumber(Math.round(ease * target), sep) + suffix;
            if (p < 1) el._raf = requestAnimationFrame(step);
        }
        el._raf = requestAnimationFrame(step);
    }
    function resetCounter(el) {
        if (el._raf) cancelAnimationFrame(el._raf);
        el.textContent = (el.dataset.prefix || '') + '0' + (el.dataset.suffix || '');
    }
    function initCounters() {
        var counters = $$('[data-target]');
        if (!counters.length) return;
        counters.forEach(function (el) {
            var target = parseInt(el.dataset.target, 10);
            if (isNaN(target)) return;
            var finalText = (el.dataset.prefix || '') + formatNumber(target, el.dataset.separator || '') + (el.dataset.suffix || '');
            var clone = el.cloneNode(false);
            clone.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap';
            clone.textContent = finalText;
            el.parentNode.insertBefore(clone, el);
            el.style.minHeight = clone.scrollHeight + 'px';
            el.style.minWidth = clone.scrollWidth + 'px';
            el.style.display = 'inline-block';
            clone.remove();
        });
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { e.isIntersecting ? animateCounter(e.target) : resetCounter(e.target); });
        }, { threshold: 0.4 });
        counters.forEach(function (el) { if (!isNaN(parseInt(el.dataset.target, 10))) obs.observe(el); });
    }

    /* ── 3. NAVBAR ── */
    function initNavbar() {
        var nav = $('#nav');
        if (!nav) return;
        var navLinks = $$('.nav-link[data-nav-section]');
        var ticking = false;
        function setActive(id) {
            navLinks.forEach(function (l) { l.classList.toggle('nav-link--active', l.dataset.navSection === id); });
        }
        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function () {
                nav.classList.toggle('nav-scrolled', window.scrollY > 60);
                var active = null;
                navLinks.forEach(function (l) {
                    var sec = document.getElementById(l.dataset.navSection);
                    if (!sec) return;
                    var r = sec.getBoundingClientRect();
                    if (r.top <= window.innerHeight * 0.45 && r.bottom > 0) active = l.dataset.navSection;
                });
                if (active) setActive(active);
                ticking = false;
            });
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ── 4. SMOOTH SCROLL ── */
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var t = $(link.getAttribute('href'));
                if (!t) return;
                e.preventDefault();
                window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 118, behavior: 'smooth' });
            });
        });
    }

    /* ── 5. FAQ ACCORDION ── */
    function initFAQ() {
        var faqList = $('#faqList');
        if (!faqList) return;
        faqList.addEventListener('click', function (e) {
            var btn = e.target.closest('.faq-question');
            if (!btn) return;
            var item = btn.closest('.faq-item');
            if (!item) return;
            var isOpen = item.classList.contains('faq-item--open');
            $$('.faq-item--open', faqList).forEach(function (o) {
                o.classList.remove('faq-item--open');
                var q = o.querySelector('.faq-question');
                if (q) q.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                item.classList.add('faq-item--open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    /* ── 6. HERO PARTICLES (Teal/Green theme) ── */
    function initParticles() {
        if (prefersReduced) return;
        var canvas = document.getElementById('heroParticles');
        var hero = document.getElementById('hero');
        if (!canvas || !hero) return;
        var ctx = canvas.getContext('2d');
        var particles = [], mouse = { x: -9999, y: -9999 };
        var isMobile = window.innerWidth < 768;
        var count = isMobile ? 140 : 260;
        var running = true, time = 0;

        function resize() { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; }
        function create() {
            var angle = Math.random() * Math.PI * 2;
            var speed = Math.random() * .5 + .1;
            var size = Math.random() * 2.5 + .5;
            var type = Math.random();
            return {
                x: Math.random() * canvas.width, y: Math.random() * canvas.height,
                vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
                size: size, baseSize: size,
                opacity: Math.random() * .5 + .1, baseOpacity: Math.random() * .5 + .1,
                pulse: Math.random() * Math.PI * 2, pulseSpeed: Math.random() * .02 + .005,
                type: type < .5 ? 'teal' : (type < .8 ? 'emerald' : 'leaf')
            };
        }
        function seed() {
            resize();
            particles = [];
            for (var i = 0; i < count; i++) particles.push(create());
        }
        function animate() {
            if (!running) return;
            time += .016;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                var dx = mouse.x - p.x, dy = mouse.y - p.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                p.pulse += p.pulseSpeed;
                p.size = p.baseSize * (1 + Math.sin(p.pulse) * .3);
                if (dist < 280 && dist > 0) {
                    var f = (280 - dist) / 280;
                    p.vx += dx / dist * f * .04;
                    p.vy += dy / dist * f * .04;
                    p.size *= (1 + f * .6);
                    p.opacity = Math.max(p.opacity, p.baseOpacity + f * .3);
                } else {
                    p.opacity += (p.baseOpacity - p.opacity) * .05;
                }
                p.vx += Math.sin(time + p.pulse * 3) * .003;
                p.vy += Math.cos(time + p.pulse * 2) * .003;
                p.vx *= .985; p.vy *= .985;
                p.x += p.vx; p.y += p.vy;
                if (p.x < -20) p.x = canvas.width + 20;
                if (p.x > canvas.width + 20) p.x = -20;
                if (p.y < -20) p.y = canvas.height + 20;
                if (p.y > canvas.height + 20) p.y = -20;
                // Teal/Green color palette
                var r, g, b;
                if (p.type === 'teal') { r = 13; g = 150; b = 104; }
                else if (p.type === 'emerald') { r = 16; g = 185; b = 129; }
                else { r = 52; g = 211; b = 153; }
                if (p.size > 2.5) {
                    var gl = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                    gl.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',' + (p.opacity * .25) + ')');
                    gl.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
                    ctx.fillStyle = gl;
                    ctx.fillRect(p.x - p.size * 4, p.y - p.size * 4, p.size * 8, p.size * 8);
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + p.opacity + ')';
                ctx.fill();
            }
            requestAnimationFrame(animate);
        }
        hero.addEventListener('mousemove', function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
        hero.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; });
        seed();
        window.addEventListener('resize', function () { resize(); });
        animate();
    }

    /* ── 7. MOBILE MENU ── */
    function initMobileMenu() {
        var btn = document.getElementById('navHamburger');
        var menu = document.getElementById('mobileMenu');
        if (!btn || !menu) return;
        function open() { btn.classList.add('is-open'); menu.classList.add('is-open'); }
        function close() { btn.classList.remove('is-open'); menu.classList.remove('is-open'); }
        btn.addEventListener('click', function () { menu.classList.contains('is-open') ? close() : open(); });
        $$('.mm-link', menu).forEach(function (l) { l.addEventListener('click', close); });
        window.closeMobileMenu = close;
    }

    /* ── 8. BACK TO TOP ── */
    function initBackToTop() {
        var btn = document.getElementById('backToTop');
        if (!btn) return;
        window.addEventListener('scroll', function () {
            btn.classList.toggle('back-to-top--visible', window.scrollY > 600);
        }, { passive: true });
        btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    /* ── 9. COOKIE CONSENT ── */
    function initCookie() {
        var banner = document.getElementById('cookieBanner');
        if (!banner || localStorage.getItem('bn_cookie')) return;
        setTimeout(function () {
            banner.classList.add('cookie-banner--visible');
            document.body.classList.add('cookie-open');
        }, 2000);
        $$('[data-cookie-action]', banner).forEach(function (btn) {
            btn.addEventListener('click', function () {
                localStorage.setItem('bn_cookie', btn.dataset.cookieAction);
                banner.classList.remove('cookie-banner--visible');
                document.body.classList.remove('cookie-open');
            });
        });
    }

    /* ── INIT ── */
    document.addEventListener('DOMContentLoaded', function () {
        initReveal();
        initCounters();
        initNavbar();
        initSmoothScroll();
        initFAQ();
        initParticles();
        initMobileMenu();
        initBackToTop();
        initCookie();
    });
})();
