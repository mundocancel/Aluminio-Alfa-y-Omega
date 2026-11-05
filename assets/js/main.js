<!-- ================= HEADER ================= -->
<header class="header" id="header">
  <nav class="nav">
    <a href="#top" class="logo" aria-label="Aluminio Alfa y Omega - Inicio">
      <img src="assets/img/logo.png" alt="Logo Aluminio Alfa y Omega" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"/>
      <span class="logo-fallback" style="display:none">AΩ</span>
      <span>Aluminio Alfa y Omega</span>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="#galeria">Galería</a>
      <a href="#cotizador">Cotizador</a>
      <a href="#maquila">Maquila</a>
      <a href="#contacto">Contacto</a>
    </div>
    <a href="https://wa.me/523317413454?text=Hola%20Aluminio%20Alfa%20y%20Omega,%20quiero%20cotizar%20un%20proyecto." target="_blank" rel="noopener" class="nav-cta">Cotizar</a>
    <button class="burger" id="burger" aria-label="Menú"><span></span><span></span><span></span></button>
  </nav>
</header>

<!-- ================= HERO ================= -->
<section class="hero" id="top">
  <div class="hero-inner">
    <div>
      <span class="hero-badge">Cancelería premium · Guadalajara</span>
      <h1>Trabajo bien hecho,<br/><span class="grad">vidrio y aluminio</span> que duran.</h1>
      <p>En <strong>Aluminio Alfa y Omega</strong> combinamos precisión técnica, materiales de primera y un compromiso absoluto con la calidad. Cada puerta, ventana o cancel es una pieza que refleja nuestro oficio.</p>
      <div class="hero-actions">
        <a href="#cotizador" class="btn btn-primary">
          Cotiza tu proyecto
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a href="#galeria" class="btn btn-ghost">Ver trabajos</a>
      </div>
    </div>
    <div class="hero-visual">
      <img src="assets/img/hero.jpg" alt="Trabajo de cancelería de vidrio y aluminio en Guadalajara" onerror="this.style.display='none'"/>
      <div class="placeholder">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18"/></svg>
        <p>Reemplaza <code>assets/img/hero.jpg</code></p>
      </div>
    </div>
  </div>
</section>

<!-- ================= GALERÍA ================= -->
<section class="gallery" id="galeria">
  <div class="container">
    <div class="section-head reveal">
      <div class="section-eyebrow">Portafolio</div>
      <h2>Nuestros trabajos reales</h2>
      <p>Toca una categoría para ver la galería completa. Imágenes que hablan de la calidad del taller.</p>
    </div>
    <div class="cat-grid" id="catGrid">
      <!-- Las tarjetas se generan por JS -->
    </div>
  </div>
</section>

<!-- ================= MODAL GALERÍA ================= -->
<div class="modal" id="modal">
  <div class="modal-inner">
    <div class="modal-head">
      <h2 id="modalTitle">Galería</h2>
      <button class="modal-close" id="modalClose" aria-label="Cerrar">✕</button>
    </div>
    <div class="modal-grid" id="modalGrid"></div>
  </div>
</div>

<!-- ================= COTIZADOR ================= -->
<section class="quoter" id="cotizador">
  <div class="container">
    <div class="section-head reveal">
      <div class="section-eyebrow">Herramienta de croquis</div>
      <h2>Cotiza tu producto al instante</h2>
      <p>Ajusta las medidas y ve el croquis en tiempo real. Al terminar, envía tu cotización por WhatsApp.</p>
    </div>

    <div class="quoter-box reveal">
      <div class="quoter-form">
        <h3>Configura tu pieza</h3>
        <p class="sub">Selecciona el tipo, medidas y acabado.</p>

        <div class="field">
          <label>Producto</label>
          <select id="qProduct">
            <option value="ventana" data-type="Ventana corrediza">Ventana corrediza</option>
            <option value="puerta" data-type="Puerta de aluminio">Puerta de aluminio</option>
            <option value="cancel" data-type="Cancel de baño">Cancel de baño</option>
            <option value="europea" data-type="Línea europea">Línea europea</option>
          </select>
        </div>

        <div class="measure-type" id="measureType">
          <button type="button" class="active" data-unit="cm">Centímetros</button>
          <button type="button" data-unit="in">Pulgadas</button>
        </div>

        <div class="field-row">
          <div class="field">
            <label id="lblW">Ancho (cm)</label>
            <input type="number" id="qWidth" value="120" min="20" max="800"/>
          </div>
          <div class="field">
            <label id="lblH">Alto (cm)</label>
            <input type="number" id="qHeight" value="100" min="20" max="400"/>
          </div>
        </div>

        <div class="field">
          <label>Acabado</label>
          <select id="qFinish">
            <option>Aluminio natural</option>
            <option>Aluminio negro mate</option>
            <option>Aluminio blanco</option>
            <option>Aluminio bronce</option>
          </select>
        </div>

        <button class="wsp-btn" id="qSend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Cotiza ahora por WhatsApp
        </button>
      </div>

      <div class="quoter-preview">
        <div>
          <svg class="preview-svg" id="previewSvg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"></svg>
          <div class="preview-label" id="previewLabel">Ventana corrediza · 120 × 100 cm</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= MAQUILA ================= -->
<section id="maquila" style="padding-top:0">
  <div class="maquila reveal">
    <h2>Maquila para constructores, arquitectos y talleres</h2>
    <p>Fabricamos piezas de cancelería a la medida para proyectos de terceros, con tiempos cumplidos y acabados de primera. Consulta nuestra herramienta de taller.</p>
    <a href="https://0ariel02.github.io/Aluminio-vidrio-Aluminio-Vidrio-CAT-LOGO-T-CNICO/" target="_blank" rel="noopener" class="btn btn-primary">
      Abrir herramienta de taller
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
    </a>
  </div>
</section>

<!-- ================= REDES ================= -->
<section class="social" id="contacto">
  <div class="container">
    <h2>Síguenos y contáctanos</h2>
    <p>Estamos disponibles para proyectos en Guadalajara y zona metropolitana.</p>
    <div class="social-links">
      <a href="https://www.facebook.com/share/19bjqbo5LL/" target="_blank" rel="noopener" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="#E4405F" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#E4405F" stroke="none"/></svg>
        Instagram
      </a>
      <a href="https://www.tiktok.com/" target="_blank" rel="noopener" aria-label="TikTok">
        <svg viewBox="0 0 24 24" fill="#000"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.74 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.78-.1z"/></svg>
        TikTok
      </a>
      <a href="https://wa.me/523317413454" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
        WhatsApp
      </a>
    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="assets/img/logo.png" alt="Aluminio Alfa y Omega" style="height:28px" onerror="this.style.display='none'"/>
      Aluminio Alfa y Omega
    </div>
    <div>© <span id="year"></span> Todos los derechos reservados · Guadalajara, Jalisco</div>
  </div>
</footer>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox"><img id="lightboxImg" src="" alt="Imagen ampliada"/></div>

<script>
/* ============================================================
   1. CONFIGURACIÓN DE CATEGORÍAS
   ------------------------------------------------------------
   Para agregar imágenes reales, coloca tus archivos en
   assets/img/galeria/<categoria>/ y actualiza los arrays.
   ============================================================ */
const CATEGORIES = [
  {
    id: 'cancel',
    title: 'Cancel de baño',
    desc: 'Vidrio templado y herrajes de acero inoxidable.',
    images: [
      'assets/img/galeria/cancel/1.jpg',
      'assets/img/galeria/cancel/2.jpg',
      'assets/img/galeria/cancel/3.jpg'
    ]
  },
  {
    id: 'puertas',
    title: 'Puertas',
    desc: 'Puertas de aluminio para interior y exterior.',
    images: [
      'assets/img/galeria/puertas/1.jpg',
      'assets/img/galeria/puertas/2.jpg',
      'assets/img/galeria/puertas/3.jpg'
    ]
  },
  {
    id: 'ventanas',
    title: 'Ventanas',
    desc: 'Ventanas corredizas, abatibles y proyectantes.',
    images: [
      'assets/img/galeria/ventanas/1.jpg',
      'assets/img/galeria/ventanas/2.jpg',
      'assets/img/galeria/ventanas/3.jpg'
    ]
  },
  {
    id: 'europeas',
    title: 'Líneas europeas',
    desc: 'Sistemas de alto desempeño térmico y acústico.',
    images: [
      'assets/img/galeria/europeas/1.jpg',
      'assets/img/galeria/europeas/2.jpg'
    ]
  },
  {
    id: 'especiales',
    title: 'Trabajos especiales',
    desc: 'Diseños a medida y piezas únicas.',
    images: [
      'assets/img/galeria/especiales/1.jpg',
      'assets/img/galeria/especiales/2.jpg'
    ]
  },
  {
    id: 'fachadas',
    title: 'Fachadas y sistemas',
    desc: 'Muro cortina, fachadas y sistemas arquitectónicos.',
    images: [
      'assets/img/galeria/fachadas/1.jpg',
      'assets/img/galeria/fachadas/2.jpg'
    ]
  }
];

const WHATSAPP_NUMBER = '523317413454';

/* ============================================================
   2. RENDER DE TARJETAS DE CATEGORÍA
   ============================================================ */
const catGrid = document.getElementById('catGrid');

CATEGORIES.forEach(cat => {
  const card = document.createElement('div');
  card.className = 'cat-card reveal';
  card.dataset.cat = cat.id;

  // Slides (imágenes) con fallback
  const slidesWrap = document.createElement('div');
  slidesWrap.className = 'cat-slides';

  if (cat.images.length === 0) {
    const ph = document.createElement('div');
    ph.className = 'cat-slide-placeholder';
    ph.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
    slidesWrap.appendChild(ph);
  } else {
    cat.images.forEach((src, i) => {
      const img = document.createElement('img');
      img.className = 'cat-slide' + (i === 0 ? ' active' : '');
      img.src = src;
      img.alt = `${cat.title} - trabajo ${i + 1} Aluminio Alfa y Omega`;
      img.loading = 'lazy';
      img.onerror = function() {
        this.style.display = 'none';
        if (!slidesWrap.querySelector('.cat-slide-placeholder')) {
          const ph = document.createElement('div');
          ph.className = 'cat-slide-placeholder';
          ph.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18"/></svg>`;
          slidesWrap.appendChild(ph);
        }
      };
      slidesWrap.appendChild(img);
    });
  }

  const overlay = document.createElement('div');
  overlay.className = 'cat-overlay';
  overlay.innerHTML = `
    <div class="arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </div>
    <h3>${cat.title}</h3>
    <p>${cat.desc}</p>
  `;

  card.appendChild(slidesWrap);
  card.appendChild(overlay);
  card.addEventListener('click', () => openModal(cat));
  catGrid.appendChild(card);
});

/* ============================================================
   3. ROTACIÓN AUTOMÁTICA DE IMÁGENES EN TARJETAS
   ============================================================ */
setInterval(() => {
  document.querySelectorAll('.cat-card').forEach(card => {
    const slides = card.querySelectorAll('.cat-slide');
    if (slides.length < 2) return;
    let activeIdx = -1;
    slides.forEach((s, i) => { if (s.classList.contains('active')) activeIdx = i; });
    slides[activeIdx].classList.remove('active');
    slides[(activeIdx + 1) % slides.length].classList.add('active');
  });
}, 3200);

/* ============================================================
   4. MODAL GALERÍA
   ============================================================ */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalGrid = document.getElementById('modalGrid');
const modalClose = document.getElementById('modalClose');

function openModal(cat) {
  modalTitle.textContent = cat.title;
  modalGrid.innerHTML = '';

  if (cat.images.length === 0) {
    modalGrid.innerHTML = `<div class="modal-empty">Aún no hay imágenes en esta categoría.<br/>Agrega archivos en <code>assets/img/galeria/${cat.id}/</code></div>`;
  } else {
    cat.images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${cat.title} - ${i + 1}`;
      img.loading = 'lazy';
      img.onerror = function() {
        this.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="#333" width="400" height="300"/><text x="50%" y="50%" fill="#777" font-family="sans-serif" font-size="16" text-anchor="middle">Imagen no encontrada</text></svg>`
        );
      };
      img.addEventListener('click', () => openLightbox(src));
      modalGrid.appendChild(img);
    });
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); }
});

/* ============================================================
   5. LIGHTBOX
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  if (!modal.classList.contains('open')) document.body.style.overflow = '';
}
lightbox.addEventListener('click', closeLightbox);

/* ============================================================
   6. COTIZADOR — SVG EN VIVO
   ============================================================ */
const svg = document.getElementById('previewSvg');
const label = document.getElementById('previewLabel');
const productSel = document.getElementById('qProduct');
const widthInput = document.getElementById('qWidth');
const heightInput = document.getElementById('qHeight');
const finishSel = document.getElementById('qFinish');
const lblW = document.getElementById('lblW');
const lblH = document.getElementById('lblH');

let currentUnit = 'cm';

document.querySelectorAll('#measureType button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#measureType button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentUnit = btn.dataset.unit;
    lblW.textContent = `Ancho (${currentUnit})`;
    lblH.textContent = `Alto (${currentUnit})`;
    renderPreview();
  });
});

function getFinishColor() {
  const v = finishSel.value;
  if (v.includes('negro')) return '#1d1d1f';
  if (v.includes('blanco')) return '#e5e5ea';
  if (v.includes('bronce')) return '#8b6f47';
  return '#c7c7cc';
}

function renderPreview() {
  let w = parseFloat(widthInput.value) || 120;
  let h = parseFloat(heightInput.value) || 100;

  // Convertir a cm internamente para escalar
  const wCm = currentUnit === 'in' ? w * 2.54 : w;
  const hCm = currentUnit === 'in' ? h * 2.54 : h;

  // Escalar al viewBox 400x300 respetando proporción
  const maxW = 340, maxH = 230;
  const scale = Math.min(maxW / wCm, maxH / hCm);
  const rw = wCm * scale;
  const rh = hCm * scale;
  const x = (400 - rw) / 2;
  const y = (300 - rh) / 2;

  const frameColor = getFinishColor();
  const type = productSel.value;
  const isDoor = type === 'puerta';
  const isCancel = type === 'cancel';
  const isEuropean = type === 'europea';

  let inner = '';

  // Marco exterior
  inner += `<rect x="${x}" y="${y}" width="${rw}" height="${rh}" fill="none" stroke="${frameColor}" stroke-width="6" rx="2"/>`;

  // Vidrio
  const glassFill = 'rgba(150,200,255,0.18)';
  inner += `<rect x="${x + 4}" y="${y + 4}" width="${rw - 8}" height="${rh - 8}" fill="${glassFill}"/>`;

  if (isDoor) {
    // Puerta: división horizontal + manija
    const midY = y + rh * 0.55;
    inner += `<line x1="${x}" y1="${midY}" x2="${x + rw}" y2="${midY}" stroke="${frameColor}" stroke-width="4"/>`;
    inner += `<circle cx="${x + rw - 20}" cy="${y + rh * 0.5}" r="5" fill="${frameColor}"/>`;
    inner += `<line x1="${x + rw - 4}" y1="${y + rh * 0.45}" x2="${x + rw - 4}" y2="${y + rh * 0.55}" stroke="${frameColor}" stroke-width="8"/>`;
  } else if (isCancel) {
    // Cancel: hoja corrediza + manija
    const divX = x + rw * 0.5;
    inner += `<line x1="${divX}" y1="${y}" x2="${divX}" y2="${y + rh}" stroke="${frameColor}" stroke-width="4"/>`;
    inner += `<circle cx="${divX - 14}" cy="${y + rh * 0.5}" r="4" fill="${frameColor}"/>`;
  } else if (isEuropean) {
    // Línea europea: varias hojas + apertura
    const cols = 2;
    for (let i = 1; i < cols; i++) {
      const lx = x + (rw / cols) * i;
      inner += `<line x1="${lx}" y1="${y}" x2="${lx}" y2="${y + rh}" stroke="${frameColor}" stroke-width="4"/>`;
    }
    inner += `<circle cx="${x + rw * 0.35}" cy="${y + rh * 0.55}" r="4" fill="${frameColor}"/>`;
  } else {
    // Ventana corrediza: división central + flecha corrediza
    const divX = x + rw * 0.5;
    inner += `<line x1="${divX}" y1="${y}" x2="${divX}" y2="${y + rh}" stroke="${frameColor}" stroke-width="4"/>`;
    // Indicador corredizo
    inner += `<line x1="${x + rw * 0.2}" y1="${y + rh * 0.85}" x2="${x + rw * 0.8}" y2="${y + rh * 0.85}" stroke="${frameColor}" stroke-width="2" stroke-dasharray="6 4" opacity="0.6"/>`;
  }

  // Cotas (dimensiones) con flechas
  const cY = y + rh + 18;
  inner += `<line x1="${x}" y1="${cY}" x2="${x + rw}" y2="${cY}" stroke="#8e8e93" stroke-width="1"/>`;
  inner += `<path d="M${x} ${cY} l6 -3 v6 z" fill="#8e8e93"/>`;
  inner += `<path d="M${x + rw} ${cY} l-6 -3 v6 z" fill="#8e8e93"/>`;
  inner += `<text x="${x + rw / 2}" y="${cY + 14}" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6e6e73">${w} ${currentUnit}</text>`;

  const cX = x + rw + 18;
  inner += `<line x1="${cX}" y1="${y}" x2="${cX}" y2="${y + rh}" stroke="#8e8e93" stroke-width="1"/>`;
  inner += `<path d="M${cX} ${y} l-3 6 h6 z" fill="#8e8e93"/>`;
  inner += `<path d="M${cX} ${y + rh} l-3 -6 h6 z" fill="#8e8e93"/>`;
  inner += `<text x="${cX + 12}" y="${y + rh / 2}" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#6e6e73" transform="rotate(90 ${cX + 12} ${y + rh / 2})">${h} ${currentUnit}</text>`;

  svg.innerHTML = inner;

  const prodName = productSel.options[productSel.selectedIndex].text;
  label.innerHTML = `<strong>${prodName}</strong> · ${w} × ${h} ${currentUnit}`;
}

productSel.addEventListener('change', renderPreview);
widthInput.addEventListener('input', renderPreview);
heightInput.addEventListener('input', renderPreview);
finishSel.addEventListener('change', renderPreview);

renderPreview();

/* ============================================================
   7. BOTÓN WHATSAPP DEL COTIZADOR
   ============================================================ */
document.getElementById('qSend').addEventListener('click', () => {
  const prod = productSel.options[productSel.selectedIndex].text;
  const w = widthInput.value;
  const h = heightInput.value;
  const finish = finishSel.value;

  const msg = `Hola *Aluminio Alfa y Omega*, quiero cotizar:

• Producto: ${prod}
• Medidas: ${w} ${currentUnit} de ancho × ${h} ${currentUnit} de alto
• Acabado: ${finish}

¿Me pueden dar precio y tiempo de entrega?`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ============================================================
   8. HEADER SCROLL + MENÚ MÓVIL
   ============================================================ */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ============================================================
   9. REVEAL ON SCROLL
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============================================================
   10. AÑO FOOTER
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();