/* ========================================================
   GLOBAL ERROR HANDLER — surfaces silent JS bugs fast
   ======================================================== */
window.addEventListener('error', (e) => {
  console.error('🛑 Portfolio script error:', e.message, 'at', e.filename + ':' + e.lineno);
});

/* ========================================================
   PORTFOLIO DATA
   --------------------------------------------------------
   Real file paths from work 2025/WORK CATEGORIES/
   ✏️  CURATED to 6–8 per category. The full file list per
   category is kept in the `BENCH` block below — uncomment
   any item there and comment one out above to swap.
   ======================================================== */

const BASE = 'work 2025/WORK CATEGORIES/';

const w = (folder, file, category, title) => ({
  src: BASE + folder + '/' + file,
  category,
  title,
  type: 'image',
});

/* ─────────── ACTIVE WORKS (shown on the site) ─────────── */
const works = [

  /* ═══════ ADS — 8/8 ═══════ */
  w('ADS', 'ADS-PGDM---Copy.jpg',    'ads', 'PGDM Admissions'),
  w('ADS', 'POST-MARKETING.jpg',     'ads', 'Marketing Post'),
  w('ADS', 'Scalping-Software.jpg',  'ads', 'Scalping Software'),
  w('ADS', 'Vietnam.jpg',            'ads', 'Vietnam Travel'),
  w('ADS', 'ads-nursing.jpg',        'ads', 'Nursing Ad'),
  w('ADS', 'algotech.jpg',           'ads', 'AlgoTech'),
  w('ADS', 'food.jpg',               'ads', 'Food Campaign'),
  w('ADS', 'post-2-ads.jpg',         'ads', 'Brand Ad Set'),

  /* ═══════ AMAZON LISTING — 8/14 ═══════ */
  w('AMAZON LISTING', '1.png',  'amazon', 'Product Listing 01'),
  w('AMAZON LISTING', '2.png',  'amazon', 'Product Listing 02'),
  w('AMAZON LISTING', '3.png',  'amazon', 'Product Listing 03'),
  w('AMAZON LISTING', '10.png', 'amazon', 'Product Listing 10'),
  w('AMAZON LISTING', '11.png', 'amazon', 'Product Listing 11'),
  w('AMAZON LISTING', '4.jpg',  'amazon', 'Product Listing 04'),
  w('AMAZON LISTING', '7.jpg',  'amazon', 'Product Listing 07'),
  w('AMAZON LISTING', '12.jpg', 'amazon', 'Product Listing 12'),

  /* ═══════ BROCHURE — 3/3 ═══════ */
  w('BROCHURE', 'RUBIK-CUBE.jpg', 'brochure', 'Rubik Cube Brochure'),
  { src: BASE + 'BROCHURE/ART CLASSES 1 .pdf', category: 'brochure', title: 'Art Classes Brochure', type: 'pdf' },
  { src: BASE + 'BROCHURE/tri fold 2.pdf',     category: 'brochure', title: 'Tri-fold Brochure',    type: 'pdf' },

  /* ═══════ LOGO DESIGN — 3/3 ═══════ */
  w('LOGO DESIGN', 'snow-valley-2.png',                'logo', 'Snow Valley'),
  w('LOGO DESIGN', 'speedy-art-logo-variations-1.png', 'logo', 'Speedy Art — Variations'),
  w('LOGO DESIGN', 'tummy-mummy-1-1.png',              'logo', 'Tummy Mummy'),

  /* ═══════ PACKAGING — 2/2 ═══════ */
  w('PACKGING', 'alo-neem and red-toothpaste-19 (2).png', 'packaging', 'Aloe Neem Toothpaste'),
  w('PACKGING', 'tooth paste new aloe vera.png',          'packaging', 'Aloe Vera Toothpaste'),

  /* ═══════ SOCIAL MEDIA — 8 hand-picked across all 5 sub-folders ═══════ */
  w('SOCIAL MEDIA POSTS/CRICKET',          'morkel-2.jpg',                 'social', 'Morne Morkel'),
  w('SOCIAL MEDIA POSTS/CRICKET',          'womens-team.jpg',              'social', 'Women\'s Team'),
  w('SOCIAL MEDIA POSTS/EDUCATION',        'holi.png',                     'social', 'Holi Greeting'),
  w('SOCIAL MEDIA POSTS/EDUCATION',        'Types-of-creative-writing.jpg','social', 'Creative Writing'),
  w('SOCIAL MEDIA POSTS/JEWELLERY',        'bangle.jpg',                   'social', 'Bangle Showcase'),
  w('SOCIAL MEDIA POSTS/JEWELLERY',        'jewellery-grid-new-123.png',   'social', 'Jewellery Grid'),
  w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'Ayodhya.png',                  'social', 'Ayodhya'),
  w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'kerala.jpg',                   'social', 'Kerala'),

  /* ═══════ WEBSITE BANNER — 3/3 ═══════ */
  w('WEBSITE BANNER', 'facebook banner.jpg',     'website', 'Facebook Banner'),
  w('WEBSITE BANNER', 'website-banner.jpg',      'website', 'Website Banner'),
  w('WEBSITE BANNER', 'website-banner.jpg-1.jpg','website', 'Website Banner Variant'),
];

/* ────────────────────────────────────────────────────────
   BENCH — full file list per category for easy swapping.
   Move any line up into `works` (and comment one out there)
   to swap your favourites in.
   ────────────────────────────────────────────────────────

   AMAZON LISTING (unused 6/14):
   w('AMAZON LISTING', '5.jpg',  'amazon', 'Product Listing 05'),
   w('AMAZON LISTING', '6.jpg',  'amazon', 'Product Listing 06'),
   w('AMAZON LISTING', '8.jpg',  'amazon', 'Product Listing 08'),
   w('AMAZON LISTING', '9.jpg',  'amazon', 'Product Listing 09'),
   w('AMAZON LISTING', '13.jpg', 'amazon', 'Product Listing 13'),
   w('AMAZON LISTING', '14.jpg', 'amazon', 'Product Listing 14'),

   SOCIAL · CRICKET (unused 1/3):
   w('SOCIAL MEDIA POSTS/CRICKET', 'ritvik.jpg', 'social', 'Ritvik'),

   SOCIAL · EDUCATION (unused 13/15 images):
   w('SOCIAL MEDIA POSTS/EDUCATION', '1.jpg',                                'social', 'Education Post'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'CHILD-LABOR.jpg',                       'social', 'Child Labour Awareness'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'DOCtors-day.jpg',                       'social', 'Doctor\'s Day'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'Guitar.jpg',                            'social', 'Guitar Class'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'campaign.jpg',                          'social', 'Campaign Post'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'chess-bg-revised.jpg',                  'social', 'Chess'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'follow-page.jpg',                       'social', 'Follow Page'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'ftaher.jpg',                            'social', 'Father\'s Day'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'html.jpg',                              'social', 'HTML Course'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'september-].jpg',                       'social', 'September Post'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'summer-campaign.jpg',                   'social', 'Summer Campaign'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'summer.jpg-25.jpg',                     'social', 'Summer 25'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'thanks.jpg',                            'social', 'Thank You'),
   w('SOCIAL MEDIA POSTS/EDUCATION', 'WhatsApp Image 2025-08-26 at 1.08.05 PM.jpeg', 'social', 'Education Brand Post'),

   SOCIAL · JEWELLERY (unused 12/14):
   w('SOCIAL MEDIA POSTS/JEWELLERY', '1-days-go.jpg',                'social', '1 Day to Go'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', '2-days.jpg',                   'social', '2 Days to Go'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', '3-grid.jpg',                   'social', 'Jewellery Grid 03'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', '3-invitaion25.jpg',            'social', 'Invitation 25'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', '4 th grid.jpg',                'social', 'Jewellery Grid 04'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', '5  th grid.jpg',               'social', 'Jewellery Grid 05'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', 'THANKS-GIVING.jpg',            'social', 'Thanksgiving'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', 'THANKS-GIVING.jpg23.jpg',      'social', 'Thanksgiving Variant'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', 'jewellery grid .jpeg',         'social', 'Jewellery Grid'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', 'lohri-baclground.png',         'social', 'Lohri'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', 'makar-sankranti.jpg',          'social', 'Makar Sankranti'),
   w('SOCIAL MEDIA POSTS/JEWELLERY', 'you-invitation.jpg',           'social', 'You\'re Invited'),

   SOCIAL · PRODUCT BASED (unused 14/14 — none picked yet, all available):
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '1.jpg',  'social', 'Product Post 01'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '2.jpg',  'social', 'Product Post 02'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '3.jpg',  'social', 'Product Post 03'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '6.jpg',  'social', 'Product Post 06'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '7.png',  'social', 'Product Post 07'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '8.jpg',  'social', 'Product Post 08'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '9.jpg',  'social', 'Product Post 09'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '10.jpg', 'social', 'Product Post 10'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '11.jpg', 'social', 'Product Post 11'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '12.jpg', 'social', 'Product Post 12'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '13.jpg', 'social', 'Product Post 13'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '14.jpg', 'social', 'Product Post 14'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '15.jpg', 'social', 'Product Post 15'),
   w('SOCIAL MEDIA POSTS/PRODUCT BASED', '17.jpg', 'social', 'Product Post 17'),

   SOCIAL · RESORT & TRAVEL (unused 10/12):
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'Hidden-treasures.jpg',     'social', 'Hidden Treasures'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'POST--4.jpg',              'social', 'Travel Post 04'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'flying-fox-adventure.jpg', 'social', 'Flying Fox Adventure'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'post-3.jpg',               'social', 'Travel Post 03'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'post-4.jpg',               'social', 'Travel Post 04'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'post-5.jpg',               'social', 'Travel Post 05'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'post-11.jpg',              'social', 'Travel Post 11'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'post-13.jpg',              'social', 'Travel Post 13'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'rafting.jpg',              'social', 'Rafting'),
   w('SOCIAL MEDIA POSTS/RESORT  & TRAVEL', 'veintnam.jpg',             'social', 'Vietnam'),

   ──────────────────────────────────────────────────────── */

/* ─────────── REELS / MOTION VIDEOS — 8 total ───────────
   poster: drop a JPG at posters/<filename>.jpg to use a custom thumbnail.
   Leave poster empty and the browser will use the metadata frame
   (loaded via #t=0.5 in the source URL).
   ────────────────────────────────────────────────────── */
const reels = [
  { src: BASE + 'Motion graphics/WhatsApp Video 2025-08-29 at 2.30.51 PM.mp4',     label: 'Motion Graphics 01', poster: '' },
  { src: BASE + 'Motion graphics/WhatsApp Video 2025-08-29 at 2.30.51 PM (1).mp4', label: 'Motion Graphics 02', poster: '' },
  { src: BASE + 'Motion graphics/WhatsApp Video 2025-08-29 at 2.30.51 PM (2).mp4', label: 'Motion Graphics 03', poster: '' },
  { src: BASE + 'Motion graphics/WhatsApp Video 2025-08-29 at 2.30.51 PM (3).mp4', label: 'Motion Graphics 04', poster: '' },
  { src: BASE + 'Motion graphics/WhatsApp Video 2025-08-29 at 2.30.51 PM (4).mp4', label: 'Motion Graphics 05', poster: '' },
  { src: BASE + 'SOCIAL MEDIA POSTS/REEL/WhatsApp Video 2025-08-26 at 12.47.54 PM.mp4', label: 'Social Reel',     poster: '' },
  { src: BASE + 'SOCIAL MEDIA POSTS/EDUCATION/Happy (1).mp4', label: 'Happy — Education', poster: '' },
  { src: BASE + 'SOCIAL MEDIA POSTS/EDUCATION/gif.mp4',       label: 'Animated Post',     poster: '' },
];

const CATEGORY_LABELS = {
  ads: 'Ads',
  amazon: 'Amazon Listing',
  brochure: 'Brochure',
  logo: 'Logo Design',
  packaging: 'Packaging',
  social: 'Social Media',
  website: 'Website Banner',
};

/* ─────────── CATEGORY DESCRIPTIONS — short blurbs ───────────
   ✏️ EDIT these to match your own voice. Markdown-free,
   one or two sentences each.
   ─────────────────────────────────────────────────────────── */
const CATEGORY_DESCRIPTIONS = {
  all:       "A curated selection of recent work across brand, social, motion, and print. Click any tile to view full size.",
  social:    "Posts, grids and campaigns built for brands across education, jewellery, sports and travel. [Edit this with your social-media approach — what makes your feeds feel different from everyone else's.]",
  logo:      "Identity systems and wordmarks designed to feel timeless. [Edit: write a sentence on how you approach logo design — the questions you ask before sketching, the look you avoid.]",
  ads:       "Scroll-stopping ad creatives — built for performance and memorability. [Edit: add a line about formats you specialise in: print, digital, OOH, etc.]",
  amazon:    "Product-listing visuals optimised to convert on marketplace pages — A+ content, infographic stacks and lifestyle compositions. [Edit this short blurb.]",
  brochure:  "Editorial layouts for print and digital. Type-led, hierarchy-aware, and built around the reader's eye-flow. [Edit this section.]",
  packaging: "Packaging concepts that earn a second glance on shelf — colour systems, material thinking, hierarchy. [Edit this section.]",
  website:   "Hero banners, social covers, and on-site visuals built around brand voice and conversion. [Edit this section.]",
};

/* ========================================================
   PATH HANDLING
   --------------------------------------------------------
   Browsers natively encode relative paths set via JS
   (e.g. `img.src = 'a b/c.jpg'` becomes `a%20b/c.jpg`),
   and that turns out to be the most reliable approach
   on Windows file:// URLs. We also keep an encoded
   fallback in case the raw path fails on a host that
   stricter-parses URIs.
   ======================================================== */
function encodePathStrict(p) {
  return p.split('/').map(seg => encodeURIComponent(seg)).join('/');
}
// kept for the (rare) places that still want manual encoding
function encodePath(p) { return p; }

const brokenLinks = []; // collected for the console summary

/* ========================================================
   WORK SCROLLER — horizontal track, mixed tile sizes,
   category dividers, drag-to-scroll, arrow nav, stagger reveal
   ======================================================== */
const workTrack = document.getElementById('workTrack');
const workPrev  = document.getElementById('workPrev');
const workNext  = document.getElementById('workNext');

// Order of categories as they appear in the horizontal scroll
const CATEGORY_ORDER = [
  'logo', 'social', 'brochure', 'ads', 'packaging', 'amazon', 'website'
];

// Tile size cycle — varied rhythm, deterministic
const TILE_SIZE_CYCLE = ['wide', 'tall', 'square', 'panoramic', 'square', 'panoramic', 'wide', 'tall'];

// Index into `displayedWorks` so the lightbox can navigate prev/next within
// only what the user actually sees in the scroller.
let displayedWorks = [];

function buildWorkScroller() {
  if (!workTrack) return;
  let tileIdx = 0;

  CATEGORY_ORDER.forEach(cat => {
    const catWorks = works.filter(w => w.category === cat).slice(0, 4);
    if (!catWorks.length) return;

    // Vertical divider with rotated category label (one before each group)
    const divider = document.createElement('div');
    divider.className = 'cat-divider';
    divider.dataset.cat = cat;
    divider.innerHTML = `<span class="cat-divider-label">${CATEGORY_LABELS[cat]}</span>`;
    workTrack.appendChild(divider);

    catWorks.forEach(work => {
      const size = TILE_SIZE_CYCLE[tileIdx % TILE_SIZE_CYCLE.length];
      tileIdx++;

      const tile = document.createElement('div');
      tile.className = `tile tile-${size}`;
      tile.dataset.category = work.category;
      tile.dataset.workIndex = String(works.indexOf(work));
      tile.dataset.displayIndex = String(displayedWorks.length);

      const inner = (work.type === 'pdf')
        ? `<div class="tile-pdf-fallback">
             <div class="doc"></div>
             <p>${work.title}</p>
           </div>
           <span class="tile-pdf-badge">PDF</span>`
        : `<img alt="${work.title}" loading="lazy" decoding="async" />`;

      tile.innerHTML = `
        ${inner}
        <div class="tile-tint"></div>
        <div class="tile-overlay">
          <span class="tile-cat">${CATEGORY_LABELS[cat]}</span>
          <span class="tile-title">${work.title}</span>
        </div>
      `;

      if (work.type !== 'pdf') {
        const img = tile.querySelector('img');
        let retried = false;
        img.addEventListener('error', () => {
          if (!retried) {
            retried = true;
            img.src = encodePathStrict(work.src);
            return;
          }
          // Mark broken
          tile.classList.add('is-broken');
          tile.querySelector('img')?.remove();
          tile.querySelector('.tile-overlay')?.remove();
          tile.querySelector('.tile-tint')?.remove();
          tile.innerHTML = `
            <div class="card-broken" style="height:100%;">
              <span class="broken-tag">Broken</span>
              <p>${work.title}</p>
              <small>${work.src}</small>
            </div>
          `;
          brokenLinks.push({ title: work.title, path: work.src });
          console.warn('🚨 Broken portfolio asset:', work.src);
        });
        img.src = work.src;
      }

      tile.addEventListener('click', () => {
        if (justDragged) return; // ignore click that ended a drag
        const idx = parseInt(tile.dataset.displayIndex, 10);
        const w = displayedWorks[idx];
        if (!w) return;
        if (w.type === 'pdf') { downloadFile(w.src, w.title); return; }
        openLightboxFromTile(idx);
      });

      displayedWorks.push(work);
      workTrack.appendChild(tile);
    });
  });

  // Staggered reveal (80ms per item) when scroller comes into view
  const items = workTrack.querySelectorAll('.tile, .cat-divider');
  const reveal = (el, idx) => {
    if (el.classList.contains('is-in')) return;
    el.style.transitionDelay = `${Math.min(idx * 80, 1200)}ms`;
    el.classList.add('is-in');
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = [...items].indexOf(e.target);
          reveal(e.target, idx);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 100px 0px 100px' });
    items.forEach(el => io.observe(el));
  }
  // Failsafe — guarantee everything appears within 1.5s
  setTimeout(() => items.forEach((el, idx) => reveal(el, idx)), 1500);
}

/* ─── DRAG-TO-SCROLL ─── */
let isDragging = false;
let dragStartX = 0;
let dragStartScroll = 0;
let dragMoved = false;
let justDragged = false;

if (workTrack) {
  workTrack.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragMoved = false;
    // CRITICAL: do NOT add `is-dragging` here. The CSS rule
    //   .work-track.is-dragging * { pointer-events: none }
    // would otherwise activate immediately, change the mouseup target
    // (because tile children become pointer-event-transparent), and
    // BROWSERS WILL NOT FIRE A CLICK EVENT when mousedown and mouseup
    // resolve to different targets. We only set the class once we've
    // confirmed real drag movement (>6px walk) below.
    dragStartX = e.pageX - workTrack.offsetLeft;
    dragStartScroll = workTrack.scrollLeft;
  });

  // mousemove + mouseup on `document` so drag continues outside the track
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - workTrack.offsetLeft;
    const walk = (x - dragStartX) * 1.2;
    if (Math.abs(walk) > 6 && !dragMoved) {
      dragMoved = true;
      workTrack.classList.add('is-dragging'); // only now
    }
    if (dragMoved) {
      e.preventDefault();
      workTrack.scrollLeft = dragStartScroll - walk;
    }
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    workTrack.classList.remove('is-dragging');
    if (dragMoved) {
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 80);
    }
  });
}

/* ─── ARROW NAV ─── */
if (workPrev && workNext && workTrack) {
  workPrev.addEventListener('click', () => workTrack.scrollBy({ left: -400, behavior: 'smooth' }));
  workNext.addEventListener('click', () => workTrack.scrollBy({ left:  400, behavior: 'smooth' }));
}

/* ========================================================
   WORK CATEGORY TABS — sliding indicator + scroll-to-category
   ======================================================== */
const workTabs         = document.querySelectorAll('.work-tab');
const workTabIndicator = document.getElementById('workTabIndicator');

const TAB_CSS_VAR = {
  all:       '--accent',
  logo:      '--cat-logo',
  social:    '--cat-social',
  brochure:  '--cat-brochure',
  ads:       '--cat-ads',
  packaging: '--cat-packaging',
  amazon:    '--cat-amazon',
  website:   '--cat-website',
};

function updateTabIndicator() {
  const active = document.querySelector('.work-tab.is-active');
  if (!active || !workTabIndicator) return;
  const r  = active.getBoundingClientRect();
  const pr = active.parentElement.getBoundingClientRect();
  workTabIndicator.style.transform = `translateX(${r.left - pr.left}px)`;
  workTabIndicator.style.width     = `${r.width}px`;

  const cssVar = TAB_CSS_VAR[active.dataset.cat] || '--accent';
  const color = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  workTabIndicator.style.background = color;
}

function scrollWorkToCategory(cat) {
  if (!workTrack) return;
  if (cat === 'all') {
    workTrack.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }
  const target = workTrack.querySelector(`.cat-divider[data-cat="${cat}"]`);
  if (!target) return;
  const trackPaddingLeft = parseFloat(getComputedStyle(workTrack).paddingLeft) || 0;
  const left = target.offsetLeft - trackPaddingLeft;
  workTrack.scrollTo({ left, behavior: 'smooth' });
}

workTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    workTabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    updateTabIndicator();
    scrollWorkToCategory(tab.dataset.cat);
  });
});

// Sync the active tab as the user scrolls the work track manually
if (workTrack) {
  let scrollSyncTimer;
  workTrack.addEventListener('scroll', () => {
    clearTimeout(scrollSyncTimer);
    scrollSyncTimer = setTimeout(syncTabFromScroll, 80);
  }, { passive: true });
}

function syncTabFromScroll() {
  if (!workTrack || !workTabs.length) return;
  const dividers = [...workTrack.querySelectorAll('.cat-divider')];
  if (!dividers.length) return;

  const trackLeft = workTrack.scrollLeft;
  const padL = parseFloat(getComputedStyle(workTrack).paddingLeft) || 0;
  const probe = trackLeft + padL + 20;

  // If the scroll is near the start, "All" is active
  let activeCat = 'all';
  if (trackLeft > 40) {
    // Find the last divider whose left edge is <= probe
    let candidate = null;
    for (const d of dividers) {
      if (d.offsetLeft <= probe) candidate = d;
      else break;
    }
    if (candidate) activeCat = candidate.dataset.cat;
  }

  const targetTab = document.querySelector(`.work-tab[data-cat="${activeCat}"]`);
  if (targetTab && !targetTab.classList.contains('is-active')) {
    workTabs.forEach(t => t.classList.remove('is-active'));
    targetTab.classList.add('is-active');
    updateTabIndicator();
  }
}

window.addEventListener('resize', () => {
  clearTimeout(window.__tabResizeTimer);
  window.__tabResizeTimer = setTimeout(updateTabIndicator, 100);
});

/* ========================================================
   MARQUEE — section transition
   ======================================================== */
(function buildMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  // Each item carries its category accent color (lighter shades for legibility)
  const items = [
    { text: 'Logo Design',     color: '#a060d0' }, // violet
    { text: 'Social Media',    color: '#4ab590' }, // emerald
    { text: 'Branding',        color: '#c9a86c' }, // gold
    { text: 'Motion Graphics', color: '#b48bff' }, // light purple
    { text: 'Packaging',       color: '#d97a6e' }, // softer crimson
  ];
  // Duplicate twice so translateX(-50%) loops seamlessly
  for (let pass = 0; pass < 2; pass++) {
    items.forEach(it => {
      const span = document.createElement('span');
      span.className = 'marquee-item';
      span.textContent = it.text;
      span.style.color = it.color;
      track.appendChild(span);
      const dot = document.createElement('span');
      dot.className = 'marquee-dot';
      dot.textContent = '·';
      track.appendChild(dot);
    });
  }
})();

/* ========================================================
   REELS — horizontal track with 16:9 video tiles,
   hover-autoplay, duration badge, click → fullscreen modal
   ======================================================== */
const reelsTrack = document.getElementById('reelsTrack');
const reelsPrev  = document.getElementById('reelsPrev');
const reelsNext  = document.getElementById('reelsNext');

function fmtDuration(secs) {
  if (!isFinite(secs) || secs < 0) return '';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function buildReels() {
  if (!reelsTrack) return;

  reels.forEach((reel) => {
    const tile = document.createElement('div');
    tile.className = 'reel-tile';
    tile.innerHTML = `
      <video preload="metadata" muted playsinline loop${reel.poster ? ` poster="${reel.poster}"` : ''}>
        <source src="${reel.src}#t=0.5" type="video/mp4" />
      </video>
      <button class="play-btn" aria-label="Play preview" tabindex="-1">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </button>
      <span class="duration-badge">--:--</span>
      <span class="reel-tile-label">${reel.label}</span>
    `;

    const video  = tile.querySelector('video');
    const source = video.querySelector('source');
    const badge  = tile.querySelector('.duration-badge');

    // Duration once metadata loads
    video.addEventListener('loadedmetadata', () => {
      const text = fmtDuration(video.duration);
      if (text) badge.textContent = text;
      else      badge.style.display = 'none';
    });

    // Retry with %-encoded src once before flagging broken
    let retried = false;
    const onError = () => {
      if (!retried) {
        retried = true;
        source.setAttribute('src', encodePathStrict(reel.src) + '#t=0.5');
        video.load();
        return;
      }
      tile.classList.add('is-broken');
      tile.innerHTML = `
        <div class="card-broken" style="height:100%;">
          <span class="broken-tag">Broken Video</span>
          <p>${reel.label}</p>
          <small>${reel.src}</small>
        </div>
      `;
      brokenLinks.push({ title: reel.label, path: reel.src });
      console.warn('🚨 Broken video asset:', reel.src);
    };
    video.addEventListener('error', onError, true);
    source.addEventListener('error', onError);

    // Hover → autoplay muted
    tile.addEventListener('mouseenter', () => {
      if (tile.classList.contains('is-broken')) return;
      video.currentTime = 0;
      const p = video.play();
      if (p && typeof p.then === 'function') p.catch(() => {});
      tile.classList.add('is-playing');
    });
    tile.addEventListener('mouseleave', () => {
      video.pause();
      tile.classList.remove('is-playing');
    });

    // Click → fullscreen modal (with sound, controls)
    tile.addEventListener('click', () => {
      if (reelsJustDragged) return;
      if (tile.classList.contains('is-broken')) return;
      openVideoLightbox(reel.src, reel.label);
    });

    reelsTrack.appendChild(tile);
  });

  // Stagger reveal (80ms per tile)
  const tiles = reelsTrack.querySelectorAll('.reel-tile');
  const reveal = (el, idx) => {
    if (el.classList.contains('is-in')) return;
    el.style.transitionDelay = `${Math.min(idx * 80, 800)}ms`;
    el.classList.add('is-in');
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = [...tiles].indexOf(e.target);
          reveal(e.target, idx);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 100px 0px 100px' });
    tiles.forEach(t => io.observe(t));
  }
  setTimeout(() => tiles.forEach((t, idx) => reveal(t, idx)), 1500);
}

/* Drag-to-scroll + arrow nav for the reels track */
let reelsIsDragging = false;
let reelsDragStartX = 0;
let reelsDragStartScroll = 0;
let reelsDragMoved = false;
let reelsJustDragged = false;

if (reelsTrack) {
  reelsTrack.addEventListener('mousedown', (e) => {
    reelsIsDragging = true;
    reelsDragMoved = false;
    // Same reason as the work track — DO NOT add is-dragging until we're
    // sure the user is dragging, otherwise the click event is suppressed.
    reelsDragStartX = e.pageX - reelsTrack.offsetLeft;
    reelsDragStartScroll = reelsTrack.scrollLeft;
  });
  document.addEventListener('mousemove', (e) => {
    if (!reelsIsDragging) return;
    const x = e.pageX - reelsTrack.offsetLeft;
    const walk = (x - reelsDragStartX) * 1.2;
    if (Math.abs(walk) > 6 && !reelsDragMoved) {
      reelsDragMoved = true;
      reelsTrack.classList.add('is-dragging');
    }
    if (reelsDragMoved) {
      e.preventDefault();
      reelsTrack.scrollLeft = reelsDragStartScroll - walk;
    }
  });
  document.addEventListener('mouseup', () => {
    if (!reelsIsDragging) return;
    reelsIsDragging = false;
    reelsTrack.classList.remove('is-dragging');
    if (reelsDragMoved) {
      reelsJustDragged = true;
      setTimeout(() => { reelsJustDragged = false; }, 80);
    }
  });
}

// Belt-and-braces: clear any sticky dragging class on every mouseup
document.addEventListener('mouseup', () => {
  if (workTrack)  workTrack.classList.remove('is-dragging');
  if (reelsTrack) reelsTrack.classList.remove('is-dragging');
});
if (reelsPrev && reelsNext && reelsTrack) {
  reelsPrev.addEventListener('click', () => reelsTrack.scrollBy({ left: -400, behavior: 'smooth' }));
  reelsNext.addEventListener('click', () => reelsTrack.scrollBy({ left:  400, behavior: 'smooth' }));
}

/* ========================================================
   LIGHTBOX
   ======================================================== */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbVideo   = document.getElementById('lbVideo');
const lbCaption = document.getElementById('lbCaption');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

// Index into `displayedWorks`, NOT the global `works` array
let currentIndex = -1;

function openLightboxFromTile(displayIdx) {
  currentIndex = displayIdx;
  showImage(displayedWorks[displayIdx]);
}

function showImage(work) {
  if (!lightbox || !lbImg) {
    console.error('Lightbox elements missing — cannot expand image');
    return;
  }
  if (!work) {
    console.warn('showImage called with no work data');
    return;
  }
  console.log('🖼️  Expanding:', work.title, work.src);
  lightbox.classList.remove('is-video');
  lightbox.classList.add('is-open');
  // Force-show in case a stale style is hanging around
  lightbox.style.opacity = '1';
  lightbox.style.pointerEvents = 'auto';
  if (lbVideo) lbVideo.pause();
  lbImg.src = work.src;
  lbImg.alt = work.title || '';
  if (lbCaption) {
    const cat = CATEGORY_LABELS[work.category] || '';
    lbCaption.textContent = cat ? `${cat} — ${work.title}` : (work.title || '');
  }
  document.body.style.overflow = 'hidden';
  if (lbPrev) lbPrev.style.display = '';
  if (lbNext) lbNext.style.display = '';
}

function openVideoLightbox(src, label) {
  if (!lightbox || !lbVideo) {
    console.error('Lightbox/video elements missing — cannot expand video');
    return;
  }
  console.log('🎬 Expanding video:', label, src);
  currentIndex = -1;
  lightbox.classList.add('is-open', 'is-video');
  lightbox.style.opacity = '1';
  lightbox.style.pointerEvents = 'auto';
  lbVideo.src = src;
  lbVideo.muted = false;
  const p = lbVideo.play();
  if (p && typeof p.then === 'function') p.catch(() => {});
  if (lbCaption) lbCaption.textContent = label || '';
  document.body.style.overflow = 'hidden';
  if (lbPrev) lbPrev.style.display = 'none';
  if (lbNext) lbNext.style.display = 'none';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('is-open', 'is-video');
  lightbox.style.opacity = '';
  lightbox.style.pointerEvents = '';
  if (lbVideo) {
    lbVideo.pause();
    lbVideo.removeAttribute('src');
    lbVideo.load();
  }
  if (lbImg) lbImg.src = '';
  document.body.style.overflow = '';
}

function nav(dir) {
  if (currentIndex < 0 || !displayedWorks.length) return;
  // Build a list of *image* tiles (skip PDFs) within displayedWorks
  const imageEntries = displayedWorks
    .map((w, i) => ({ w, i }))
    .filter(({ w }) => w.type === 'image');
  if (!imageEntries.length) return;
  const pos = imageEntries.findIndex(e => e.i === currentIndex);
  const next = imageEntries[(pos + dir + imageEntries.length) % imageEntries.length];
  currentIndex = next.i;
  showImage(next.w);
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => nav(-1));
lbNext.addEventListener('click', () => nav(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') nav(1);
  if (e.key === 'ArrowLeft')  nav(-1);
});

/* ========================================================
   HERO TYPEWRITER
   --------------------------------------------------------
   Types each tagline character-by-character, holds, then
   deletes back to empty before typing the next one.
   ======================================================== */
const TAGLINES = [
  'I craft motion stories.',
  'I craft bold identities.',
  'I craft scroll-stopping visuals.',
];

const TYPE_SPEED   = 55;   // ms per character while typing
const DELETE_SPEED = 28;   // ms per character while deleting
const HOLD_FULL    = 1700; // ms to hold once a line is fully typed
const HOLD_EMPTY   = 320;  // ms to hold before next line starts

const typewriter = document.getElementById('typewriter');
if (typewriter) {
  let line = 0;
  let pos  = 0;
  let deleting = false;

  const tick = () => {
    const full = TAGLINES[line];
    if (!deleting) {
      pos++;
      typewriter.textContent = full.slice(0, pos);
      if (pos === full.length) {
        deleting = true;
        setTimeout(tick, HOLD_FULL);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      pos--;
      typewriter.textContent = full.slice(0, pos);
      if (pos === 0) {
        deleting = false;
        line = (line + 1) % TAGLINES.length;
        setTimeout(tick, HOLD_EMPTY);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  };
  tick();
}

/* ========================================================
   CUSTOM CURSOR — no fade-in, visible immediately
   ======================================================== */
const cursor = document.getElementById('cursor');
const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (isFinePointer && cursor) {
  const dot  = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');

  let mx = -100, my = -100;
  let cx = -100, cy = -100;
  let hasMoved = false;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!hasMoved) {
      cx = mx; cy = my;
      hasMoved = true;
      // Only NOW hide the default cursor — guarantees the user always has
      // a visible cursor (the default one) until our custom dot is positioned.
      document.documentElement.classList.add('cursor-ready');
    }
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  }, { passive: true });

  document.addEventListener('mouseleave', () => cursor.classList.add('is-hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('is-hidden'));
  document.addEventListener('mousedown',  () => cursor.classList.add('is-click'));
  document.addEventListener('mouseup',    () => cursor.classList.remove('is-click'));

  let curScale = 0;
  const tick = () => {
    // lerp smoothing for the ring (lag follow)
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    // Target scale: 0 at rest, 1 on hover (40px ring + VIEW text), 0.6 on click
    const targetScale = cursor.classList.contains('is-hover') ? 1
                      : cursor.classList.contains('is-click') ? 0.6
                      : 0;
    curScale += (targetScale - curScale) * 0.22;
    ring.style.transform = `translate(${cx}px, ${cy}px) scale(${curScale.toFixed(3)})`;
    requestAnimationFrame(tick);
  };
  tick();

  const hoverSelector = 'a, button, .card, .reel, .filter, .nav-links a, [data-cursor="hover"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) cursor.classList.remove('is-hover');
  });
}

/* ========================================================
   NAV SCROLLED STATE
   ======================================================== */
const navEl = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 40) navEl.classList.add('is-scrolled');
  else navEl.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ========================================================
   SECTION HEAD REVEAL
   ======================================================== */
const headIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      headIO.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.section-head').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .8s var(--ease-out), transform .8s var(--ease-out)';
  headIO.observe(el);
});

/* ========================================================
   DOWNLOAD HELPER — used for brochure PDFs
   ======================================================== */
function downloadFile(src, suggestedName) {
  const a = document.createElement('a');
  a.href = src;
  // Suggest a clean filename — browsers will use this as the download name
  // when same-origin / file:// permits. Falls back to opening in a tab if the
  // browser refuses to download (e.g. cross-origin).
  const fallbackName = src.split('/').pop() || (suggestedName || 'download');
  a.download = suggestedName ? `${suggestedName}.pdf` : fallbackName;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ========================================================
   SCROLL-REVEAL — section headings slide in from left
   ======================================================== */
(function setupHeadingReveal() {
  const heads = document.querySelectorAll('.work-heading, .section-head, .contact-title');
  if (!heads.length) return;
  heads.forEach(el => el.classList.add('reveal-left'));
  if (!('IntersectionObserver' in window)) {
    heads.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  heads.forEach(el => io.observe(el));
  // Failsafe
  setTimeout(() => heads.forEach(el => el.classList.add('is-in')), 1800);
})();

/* ========================================================
   ABOUT — line reveal with gold underline draw
   ======================================================== */
(function setupAboutLines() {
  const lines = [...document.querySelectorAll('.about-line')];
  if (!lines.length) return;
  if (!('IntersectionObserver' in window)) {
    lines.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = lines.indexOf(e.target);
        e.target.style.transitionDelay = `${idx * 200}ms`;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.25 });
  lines.forEach(el => io.observe(el));
  setTimeout(() => lines.forEach(el => el.classList.add('is-in')), 2200);
})();

/* ========================================================
   ABOUT — skill tiles staggered reveal
   ======================================================== */
(function setupSkillCards() {
  const cards = document.querySelectorAll('.skill-card');
  if (!cards.length) return;
  cards.forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(20px)';
    c.style.transition = 'opacity .7s var(--ease-out), transform .7s var(--ease-out)';
  });
  const reveal = (c, idx) => {
    c.style.transitionDelay = `${idx * 100}ms`;
    c.style.opacity = '1';
    c.style.transform = 'translateY(0)';
  };
  if (!('IntersectionObserver' in window)) {
    cards.forEach((c, i) => reveal(c, i));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = [...cards].indexOf(e.target);
        reveal(e.target, idx);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  cards.forEach(c => io.observe(c));
  // Failsafe
  setTimeout(() => cards.forEach((c, i) => reveal(c, i)), 1800);
})();

/* ========================================================
   ABOUT — stat numbers count up on scroll-into-view
   ======================================================== */
(function setupStatCounters() {
  const nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    if (!isFinite(target)) return;
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    nums.forEach(animate);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(el => io.observe(el));
})();

/* ========================================================
   FOOTER — back-to-top
   ======================================================== */
(function setupFooter() {
  const back = document.getElementById('backToTop');
  if (back) back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ========================================================
   INIT
   ======================================================== */
buildWorkScroller();
buildReels();

// Position the tab indicator after layout settles
requestAnimationFrame(() => requestAnimationFrame(updateTabIndicator));

window.addEventListener('load', () => {
  updateTabIndicator();
  // Final broken-asset summary in console after everything has settled
  setTimeout(() => {
    if (brokenLinks.length) {
      console.group(`%c⚠️  ${brokenLinks.length} broken portfolio link(s) — fix or replace these:`, 'color:#ff7560;font-weight:bold;');
      brokenLinks.forEach(b => console.log(`• ${b.title}  →  ${b.path}`));
      console.groupEnd();
    } else {
      console.log('%c✅  All portfolio assets loaded successfully.', 'color:#7ed957;font-weight:bold;');
    }
  }, 800);
});
