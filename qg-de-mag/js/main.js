/* ============================================
   QG DE MAG — Scripts principaux
   ============================================ */

// ============================================================
//  BANDEAU MATCH — Configuration
//  Pour afficher le bandeau : passer MATCH_ACTIF à true
//  et remplir les infos ci-dessous
// ============================================================
const MATCH_ACTIF = true; // ← mettre true le jour du match

const MATCH_INFO = {
  drapeaux: "🇫🇷 vs 🇧🇷",           // ← les deux équipes
  texte:    "Diffusion sur 3 écrans — 21h00"  // ← heure et infos
};
// ============================================================

function initBandeauMatch() {
  if (!MATCH_ACTIF) return;
  const banner = document.getElementById('match-banner');
  document.getElementById('match-drapeaux').textContent = MATCH_INFO.drapeaux;
  document.getElementById('match-texte').textContent    = MATCH_INFO.texte;
  banner.classList.add('visible');
  document.body.classList.add('match-visible');
}

function fermerBandeauMatch() {
  document.getElementById('match-banner').classList.remove('visible');
  document.body.classList.remove('match-visible');
}

initBandeauMatch();

// ── MENU BURGER ──
function toggleMenu() {
  const burger = document.getElementById('burger');
  const links  = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');
  burger.classList.toggle('open');
  links.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('nav-overlay').classList.remove('active');
  document.body.style.overflow = '';
}


function showTab(tab, btn) {
  // Masquer toutes les sections
  document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
  // Désactiver tous les boutons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  // Afficher la section ciblée
  document.getElementById('tab-' + tab).classList.add('active');
  // Activer le bouton cliqué
  btn.classList.add('active');
}

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── STAGGER SUR LES CARTES JEUX ──
document.querySelectorAll('.jeu-card').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.08) + 's';
});

// ── NAV ACTIVE AU SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--gold)'
      : '';
  });
});
