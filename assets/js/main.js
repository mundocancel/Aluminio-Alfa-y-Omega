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
      img.className = 'portfolio-img';
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
const finishGroup = document.getElementById('qFinishGroup');
const previewBox = document.querySelector('.quoter-preview');
const lblW = document.getElementById('lblW');
const lblH = document.getElementById('lblH');

let currentUnit = 'cm';
let currentFinish = 'Aluminio natural';
let currentFinishColor = '#c7c7cc';

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

finishGroup.querySelectorAll('.finish-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    finishGroup.querySelectorAll('.finish-pill').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentFinish = btn.dataset.finish;
    currentFinishColor = btn.dataset.color;
    renderPreview();
  });
});

function finishKey() {
  if (currentFinish.includes('negro')) return 'negro';
  if (currentFinish.includes('blanco')) return 'blanco';
  if (currentFinish.includes('bronce')) return 'bronce';
  return 'natural';
}

function getFinishColor() {
  return currentFinishColor;
}

function renderPreview() {
  let w = parseFloat(widthInput.value) || 120;
  let h = parseFloat(heightInput.value) || 100;

  previewBox.dataset.finish = finishKey();

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

  // Marco exterior (contorno sutil para el acabado blanco)
  if (finishKey() === 'blanco') {
    inner += `<rect x="${x}" y="${y}" width="${rw}" height="${rh}" fill="none" stroke="#d1d1d6" stroke-width="8" rx="2"/>`;
  }
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

renderPreview();

/* ============================================================
   7. BOTÓN WHATSAPP DEL COTIZADOR
   ============================================================ */
document.getElementById('qSend').addEventListener('click', () => {
  const prod = productSel.options[productSel.selectedIndex].text;
  const w = widthInput.value;
  const h = heightInput.value;
  const finish = currentFinish;

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