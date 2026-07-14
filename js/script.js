/* ==========================================================================
   SPIDER-MAN: BRAND NEW DAY — sitio de fans
   JavaScript sin dependencias externas. Pensado para funcionar tal cual
   al subirlo a GitHub Pages, sin build ni pasos extra.
   ========================================================================== */

(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  let audioCtx = null;
  let soundEnabled = false;

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initTheme();
    initSound();
    initCountdown();
    if (isFinePointer && !prefersReducedMotion) initWebTrail();
    initClickBurst();
    initScrollReveal();
    initCastCards();
    initFileCards();
    initScanToggle();
    initGame();
    initSpiderAlert();
    initBackToTop();
  });

  /* ---------- Navegación móvil ---------- */
  function initNav() {
    const toggle = $('#navToggle');
    const links = $('#navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    $$('.nav-link', links).forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Interruptor vigilia nocturna / amanecer ---------- */
  function initTheme() {
    const STORAGE_KEY = 'bnd_theme';
    const toggle = $('#themeToggle');
    const label = $('#themeToggleLabel');
    const body = document.body;
    if (!toggle) return;

    function applyTheme(theme) {
      body.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-pressed', String(theme === 'dawn'));
      if (label) label.textContent = theme === 'dawn' ? 'Amanecer' : 'Vigilia nocturna';
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* almacenamiento no disponible */ }
    }

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* almacenamiento no disponible */ }
    applyTheme(saved === 'dawn' ? 'dawn' : 'night');

    toggle.addEventListener('click', () => {
      const isDawn = body.getAttribute('data-theme') === 'dawn';
      applyTheme(isDawn ? 'night' : 'dawn');
    });
  }

  /* ---------- Sonido sintetizado (sin archivos de audio) ---------- */
  function initSound() {
    const STORAGE_KEY = 'bnd_sound';
    const toggle = $('#soundToggle');
    if (!toggle) return;

    function setSound(on) {
      soundEnabled = on;
      toggle.classList.toggle('is-on', on);
      toggle.setAttribute('aria-pressed', String(on));
      toggle.setAttribute('aria-label', on ? 'Silenciar efectos de sonido' : 'Activar efectos de sonido');
      try { localStorage.setItem(STORAGE_KEY, on ? 'on' : 'off'); } catch (e) { /* almacenamiento no disponible */ }
    }

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* almacenamiento no disponible */ }
    setSound(saved === 'on');

    toggle.addEventListener('click', () => setSound(!soundEnabled));
  }

  function playThwip() {
    if (!soundEnabled) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.11);
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) { /* Web Audio no disponible en este navegador */ }
  }

  /* ---------- Cuenta regresiva al estreno (31 de julio de 2026) ---------- */
  function initCountdown() {
    const target = new Date('2026-07-31T00:00:00');
    const days = $('#cdDays'), hours = $('#cdHours'), min = $('#cdMin'), sec = $('#cdSec');
    if (!days) return;

    let timer;
    function tick() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        [days, hours, min, sec].forEach(el => { el.textContent = '00'; });
        const meta = $('.hero-meta');
        if (meta) meta.textContent = '¡YA ESTÁ EN CINES!';
        clearInterval(timer);
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      days.textContent = String(d).padStart(2, '0');
      hours.textContent = String(h).padStart(2, '0');
      min.textContent = String(m).padStart(2, '0');
      sec.textContent = String(s).padStart(2, '0');
    }
    tick();
    timer = setInterval(tick, 1000);
  }

  /* ---------- Rastro de telaraña que sigue al cursor ---------- */
  function initWebTrail() {
    const canvas = $('#webTrailCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    let lastEmit = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', e => {
      const now = performance.now();
      if (now - lastEmit < 30) return;
      lastEmit = now;
      particles.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (particles.length > 60) particles.shift();
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const accent = getComputedStyle(document.body).getPropertyValue('--accent-2').trim() || '#4d72b3';
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life -= 0.02;
        if (p.life <= 0) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          if (q.life <= 0) continue;
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 46) {
            ctx.globalAlpha = Math.min(p.life, q.life) * (1 - dist / 46) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      particles = particles.filter(p => p.life > 0);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  /* ---------- Disparo de telaraña al hacer clic, en cualquier lugar del sitio ---------- */
  function initClickBurst() {
    document.addEventListener('click', e => {
      if (!prefersReducedMotion) spawnBurst(e.clientX, e.clientY);
      playThwip();
    });

    function spawnBurst(x, y) {
      const burst = document.createElement('div');
      burst.className = 'click-burst';
      burst.style.left = x + 'px';
      burst.style.top = y + 'px';
      burst.setAttribute('aria-hidden', 'true');
      burst.innerHTML = '<svg viewBox="0 0 40 40"><g stroke="currentColor" stroke-width="1.6" fill="none">' +
        '<path d="M20 20 L20 4"/><path d="M20 20 L34 10"/><path d="M20 20 L36 20"/><path d="M20 20 L34 30"/>' +
        '<path d="M20 20 L20 36"/><path d="M20 20 L6 30"/><path d="M20 20 L4 20"/><path d="M20 20 L6 10"/>' +
        '<path d="M11 11 L29 11 M8 20 L32 20 M11 29 L29 29" opacity="0.5"/></g></svg>';
      document.body.appendChild(burst);
      burst.addEventListener('animationend', () => burst.remove());
      setTimeout(() => { if (burst.isConnected) burst.remove(); }, 700);
    }
  }

  /* ---------- Revelado progresivo al hacer scroll ---------- */
  function initScrollReveal() {
    const targets = $$('.story-text, .story-scan, .cast-grid, .files-grid, .trailer-frame, .game-hud, .dawn-cta-inner');
    if (!targets.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    targets.forEach(t => observer.observe(t));
  }

  /* ---------- Credenciales del reparto (flip) ---------- */
  function initCastCards() {
    $$('.cast-card').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-pressed', 'false');
      const name = $('.cast-card-front h3', card);
      if (name) card.setAttribute('aria-label', 'Ver más sobre ' + name.textContent);

      function flip() {
        const isFlipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-pressed', String(isFlipped));
      }
      card.addEventListener('click', flip);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flip();
        }
      });
    });
  }

  /* ---------- Expedientes de Control de Daños (desclasificar) ---------- */
  function initFileCards() {
    $$('.file-card').forEach(card => {
      card.setAttribute('aria-expanded', 'false');
      card.addEventListener('click', () => {
        const isOpen = card.classList.toggle('is-declassified');
        card.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  /* ---------- Panel de mutación (antes / después) ---------- */
  function initScanToggle() {
    const toggle = $('#scanToggle');
    const panel = $('.story-scan');
    const rows = $$('#scanData dd');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
      const isAfter = toggle.getAttribute('aria-checked') !== 'true';
      toggle.setAttribute('aria-checked', String(isAfter));
      panel.classList.toggle('is-after', isAfter);
      rows.forEach(dd => {
        dd.textContent = isAfter ? dd.dataset.after : dd.dataset.before;
      });
    });
  }

  /* ---------- Minijuego: Sentido Arácnido ---------- */
  function initGame() {
    const board = $('#gameBoard');
    const startBtn = $('#gameStart');
    const msg = $('#gameMsg');
    const scoreEl = $('#gameScore');
    const livesEl = $('#gameLives');
    const bestEl = $('#gameBest');
    if (!board || !startBtn) return;

    const STORAGE_KEY = 'bnd_best_score';
    let best = 0;
    try { best = parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0; } catch (e) { /* almacenamiento no disponible */ }
    bestEl.textContent = String(best);

    let score = 0, lives = 3, running = false, spawnTimer = null;

    function updateHUD() {
      scoreEl.textContent = String(score);
      livesEl.textContent = '🕷️'.repeat(Math.max(lives, 0)) + '🕸️'.repeat(Math.max(3 - lives, 0));
    }

    function spawnTarget() {
      if (!running) return;
      const rect = board.getBoundingClientRect();
      const size = 46;
      const x = Math.random() * Math.max(rect.width - size, 10);
      const y = Math.random() * Math.max(rect.height - size, 10);

      const target = document.createElement('button');
      target.type = 'button';
      target.className = 'game-target';
      target.style.left = x + 'px';
      target.style.top = y + 'px';
      target.setAttribute('aria-label', 'Amenaza — tocar para neutralizar');
      target.innerHTML = '<svg viewBox="0 0 40 40"><g stroke="currentColor" stroke-width="2.2" fill="none">' +
        '<path d="M20 20 L20 4"/><path d="M20 20 L34 10"/><path d="M20 20 L36 20"/><path d="M20 20 L34 30"/>' +
        '<path d="M20 20 L20 36"/><path d="M20 20 L6 30"/><path d="M20 20 L4 20"/><path d="M20 20 L6 10"/></g></svg>';
      board.appendChild(target);

      const timeout = setTimeout(() => {
        if (target.isConnected) {
          target.remove();
          loseLife();
        }
      }, 1300);

      target.addEventListener('click', () => {
        clearTimeout(timeout);
        target.classList.add('is-fading');
        setTimeout(() => target.remove(), 200);
        score += 10;
        updateHUD();
      });
    }

    function loseLife() {
      lives -= 1;
      updateHUD();
      if (lives <= 0) endGame();
    }

    function startGame() {
      score = 0; lives = 3; running = true;
      updateHUD();
      msg.textContent = '';
      startBtn.hidden = true;
      spawnTimer = setInterval(spawnTarget, 900);
    }

    function endGame() {
      running = false;
      clearInterval(spawnTimer);
      $$('.game-target', board).forEach(t => t.remove());
      if (score > best) {
        best = score;
        try { localStorage.setItem(STORAGE_KEY, String(best)); } catch (e) { /* almacenamiento no disponible */ }
        bestEl.textContent = String(best);
        msg.textContent = '¡Nuevo récord! Puntaje final: ' + score + '.';
      } else {
        msg.textContent = 'Se te escaparon tres amenazas. Puntaje final: ' + score + '.';
      }
      startBtn.hidden = false;
      startBtn.textContent = 'Jugar de nuevo';
    }

    updateHUD();
    startBtn.addEventListener('click', startGame);
  }

  /* ---------- Alerta de sentido arácnido (dato curioso, una vez por sesión) ---------- */
  function initSpiderAlert() {
    const alertEl = $('#spiderAlert');
    const textEl = $('#spiderAlertText');
    const closeBtn = $('#spiderAlertClose');
    if (!alertEl || !textEl) return;

    const trivia = [
      'El subtítulo "Brand New Day" retoma el arco de cómics de 2008 escrito por Dan Slott y dibujado por Steven McNiven.',
      'Esta es la película número 38 del Universo Cinematográfico de Marvel.',
      'Michael Mando ya aparecía como Mac Gargan en Homecoming (2017), años antes de convertirse en Escorpión.',
      'La película dura 2 horas y 25 minutos.',
      'Destin Daniel Cretton, el director, también dirigió Shang-Chi y la leyenda de los diez anillos.',
      'Frank Castle (Punisher) y Bruce Banner (Hulk) son aliados inesperados de Peter en esta historia.'
    ];

    let shown = false;
    try { shown = sessionStorage.getItem('bnd_alert_shown') === '1'; } catch (e) { /* almacenamiento no disponible */ }
    if (shown) return;

    function trigger() {
      if (shown) return;
      shown = true;
      try { sessionStorage.setItem('bnd_alert_shown', '1'); } catch (e) { /* almacenamiento no disponible */ }
      textEl.textContent = trivia[Math.floor(Math.random() * trivia.length)];
      alertEl.classList.add('is-visible');
      setTimeout(() => alertEl.classList.remove('is-visible'), 8000);
    }

    const hero = $('#hero');
    if (hero && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            trigger();
            obs.disconnect();
          }
        });
      }, { threshold: 0 });
      obs.observe(hero);
    } else {
      setTimeout(trigger, 6000);
    }

    if (closeBtn) closeBtn.addEventListener('click', () => alertEl.classList.remove('is-visible'));
  }

  /* ---------- Botón volver arriba ---------- */
  function initBackToTop() {
    const btn = $('#backToTop');
    const hero = $('#hero');
    if (!btn) return;

    function onScroll() {
      const threshold = hero ? hero.offsetHeight * 0.8 : 400;
      btn.classList.toggle('is-visible', window.scrollY > threshold);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

})();
