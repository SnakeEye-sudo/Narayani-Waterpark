// ===== Narayani Waterpark - MAIN JAVASCRIPT =====

// ---- LANGUAGE TOGGLE ----
var currentLang = 'en';

var translations = {
  en: {
    navHome: 'Home', navAbout: 'About', navRides: 'Rides',
    navGallery: 'Gallery', navPricing: 'Pricing', navContact: 'Contact',
    navBook: '🎟 Book Now',
    heroBadge: '🎉 Grand Reopening — March 15, 2026',
    heroTitle: "Bihar's Most Amazing Water Park!", heroTitleSpan: 'Bettiah!',
    heroSub: 'Thrilling rides, family fun, and memories for a lifetime — only at Narayani Waterpark, Bettiah!',
    heroBtn1: '🎟 Book Now — ₹400 Onwards',
    heroBtn2: '📸 View Gallery',
    stat1: 'Thrilling Rides', stat2: 'Happy Families Daily', stat3: 'Opens Daily', stat4: 'Closes Daily',
    countdownOpen: '🎉 Park is NOW OPEN! Come Join Us!',
    aboutTag: 'About Us', aboutTitle: 'A World of Joy',
    aboutTitleSpan: 'Awaits You',
    aboutP1: "Narayani Waterpark is Bettiah's first and largest water park. Enjoy thrilling rides, cool pools, and unlimited family entertainment — perfect for all ages!",
    aboutAddr: 'Opp. R.L. International School, Pipra Road, Bettiah, Bihar',
    aboutTime: 'Open Daily: 10:00 AM – 6:00 PM',
    aboutPhone: '+91 8434057242',
    f1: '15+ Water Rides', f2: 'Free Parking', f3: 'Food Court',
    f4: 'Kids Zone', f5: 'Safe & Secure', f6: 'Change Rooms', f7: 'First Aid', f8: 'Photo Spots',
    aboutBtn: '🎟 Book Now',
    ridesTag: 'Our Attractions', ridesTitle: 'Thrilling', ridesTitleSpan: 'Rides & Attractions',
    ridesSub: 'Something for every family member — from kids to adults!',
    galleryTag: 'Gallery', galleryTitle: 'Glimpse of', galleryTitleSpan: 'the Park',
    gallerySub: 'Come make memories like these!',
    galleryBtn: '📱 Join Us at the Park!',
    pricingTag: 'Tickets', pricingTitle: 'Entry', pricingTitleSpan: 'Pricing Plans',
    pricingSub: 'Affordable prices, unlimited fun — that\'s the Narayani Waterpark magic!',
    pricingNote: '🌟 Weekdays (Mon–Fri): ₹400 per person &nbsp;|&nbsp; Weekends & Public Holidays (Sat/Sun): ₹500 per person',
    priceWeekday: 'Weekday', priceWeekend: 'Weekend',
    priceChild: 'Children', priceChildAge: 'Per Child (Under 12)',
    priceAdult: 'Adult', priceAdultAge: 'Per Person (12+ Years)',
    priceFamily: 'Family Pack', priceFamilyAge: '2 Adults + 2 Children',
    bookChild: 'Book Now', bookAdult: 'Book Now', bookFamily: 'Book Now',
    mostPop: 'Most Popular',
    contactTag: 'Contact Us', contactTitle: 'Get In', contactTitleSpan: 'Touch With Us',
    contactSub: 'Have questions? We\'re here for you!',
    formTitle: 'Send a Message', nameLabel: 'Your Name *',
    namePh: 'Enter your name', phoneLabel: 'Mobile Number *',
    phonePh: '+91 XXXXXXXXXX', emailLabel: 'Email (Optional)',
    emailPh: 'email@example.com', subjectLabel: 'Subject *',
    msgLabel: 'Your Message *', msgPh: 'Ask anything...',
    formBtn: '📨 Send Message', waBtn: '💬 Chat on WhatsApp',
    modalTitle: '🎟 Book Your Tickets',
    modalSub: 'Narayani Waterpark — Open Daily 10AM–6PM',
    adultTicket: '👨 Adult (12+ Years)',
    childTicket: '👧 Child (Under 12)',
    seniorTicket: '🧓 Senior (60+ Years)',
    dateLabel: 'Select Visit Date *',
    nameModalLabel: 'Your Name *', nameModalPh: 'Enter your name',
    phoneModalLabel: 'Mobile Number *', phoneModalPh: '+91 XXXXXXXXXX',
    totalLabel: '💰 Total Amount:',
    payBtn: '💳 Pay Securely via PayU',
    orDiv: '— or —',
    waBookBtn: '💬 Book via WhatsApp',
    secure: '🔒 100% Secure | Instant Confirmation',
    april2Banner: '⭐ Special Event — April 2, 2026 | Meet Mahi & Manisha at Narayani Waterpark!',
    footerAbout: "Bihar's first and largest water park — Narayani Waterpark, Bettiah. Come with your family and take home endless joy!",
    footerLinks: 'Quick Links', footerInfo: 'Information', footerContact: 'Contact',
    footerCopy: '© 2026 Narayani Waterpark, Bettiah. All Rights Reserved.',
  },
  hi: {
    navHome: 'होम', navAbout: 'हमारे बारे में', navRides: 'राइड्स',
    navGallery: 'गैलरी', navPricing: 'टिकट', navContact: 'संपर्क',
    navBook: '🎟 अभी बुक करें',
    heroBadge: '🎉 ग्रैंड रीओपनिंग — 15 मार्च 2026',
    heroTitle: 'बिहार का सबसे मस्त वाटर पार्क!', heroTitleSpan: 'बेतिया!',
    heroSub: 'थ्रिलिंग राइड्स, फैमिली फन और यादगार लम्हें — सिर्फ नारायणी वाटर पार्क, बेतिया में!',
    heroBtn1: '🎟 अभी बुक करें — ₹400 से शुरू',
    heroBtn2: '📸 गैलरी देखें',
    stat1: 'थ्रिलिंग राइड्स', stat2: 'खुश परिवार रोज', stat3: 'खुलने का समय', stat4: 'बंद होने का समय',
    countdownOpen: '🎉 पार्क अभी खुला है! आइए मिलिए!',
    aboutTag: 'हमारे बारे में', aboutTitle: 'खुशियों की दुनिया', aboutTitleSpan: 'आपका इंतजार करती है',
    aboutP1: 'नारायणी वाटर पार्क बेतिया का पहला और सबसे बड़ा वाटर पार्क है। थ्रिलिंग राइड्स, कूल पूल और पारिवारिक मनोरंजन का भरपूर आनंद — सबके लिए कुछ न कुछ!',
    aboutAddr: 'आरएल इंटरनेशनल स्कूल के सामने, पिपरा रोड, बेतिया, बिहार',
    aboutTime: 'रोज खुला: सुबह 10 बजे – शाम 6 बजे',
    aboutPhone: '+91 8434057242',
    f1: '15+ वाटर राइड्स', f2: 'फ्री पार्किंग', f3: 'फूड कोर्ट',
    f4: 'किड्स ज़ोन', f5: 'सुरक्षित माहौल', f6: 'चेंजिंग रूम', f7: 'प्राथमिक चिकित्सा', f8: 'फोटो स्पॉट',
    aboutBtn: '🎟 अभी बुक करें',
    ridesTag: 'हमारी सवारियाँ', ridesTitle: 'रोमांचक', ridesTitleSpan: 'राइड्स और आकर्षण',
    ridesSub: 'हर परिवार के सदस्य के लिए कुछ न कुछ — बच्चों से बड़ों तक!',
    galleryTag: 'गैलरी', galleryTitle: 'पार्क की', galleryTitleSpan: 'झलक देखें',
    gallerySub: 'यहाँ आकर आपको भी ऐसी ही यादें मिलेंगी!',
    galleryBtn: '📱 पार्क में आइए!',
    pricingTag: 'टिकट', pricingTitle: 'प्रवेश', pricingTitleSpan: 'मूल्य योजनाएं',
    pricingSub: 'किफायती कीमत में अनलिमिटेड मज़ा — यही नारायणी का जादू है!',
    pricingNote: '🌟 वीकडे (सोम–शुक्र): ₹400 प्रति व्यक्ति &nbsp;|&nbsp; वीकेंड व छुट्टियाँ (शनि/रवि): ₹500 प्रति व्यक्ति',
    priceWeekday: 'वीकडे', priceWeekend: 'वीकेंड',
    priceChild: 'बच्चे (12 से कम)', priceChildAge: 'प्रति बच्चा',
    priceAdult: 'वयस्क', priceAdultAge: 'प्रति व्यक्ति (12+ वर्ष)',
    priceFamily: 'फैमिली पैक', priceFamilyAge: '2 वयस्क + 2 बच्चे',
    bookChild: 'अभी बुक करें', bookAdult: 'अभी बुक करें', bookFamily: 'अभी बुक करें',
    mostPop: 'सबसे लोकप्रिय',
    contactTag: 'संपर्क करें', contactTitle: 'हमसे', contactTitleSpan: 'मिलिए',
    contactSub: 'कोई सवाल है? हम यहाँ हैं आपके लिए!',
    formTitle: 'संदेश भेजें', nameLabel: 'आपका नाम *',
    namePh: 'नाम लिखें', phoneLabel: 'मोबाइल नंबर *',
    phonePh: '+91 XXXXXXXXXX', emailLabel: 'ईमेल (वैकल्पिक)',
    emailPh: 'email@example.com', subjectLabel: 'विषय *',
    msgLabel: 'आपका संदेश *', msgPh: 'कुछ भी पूछें...',
    formBtn: '📨 संदेश भेजें', waBtn: '💬 व्हाट्सऐप पर बात करें',
    modalTitle: '🎟 टिकट बुक करें',
    modalSub: 'नारायणी वाटर पार्क — रोज खुला सुबह 10 – शाम 6',
    adultTicket: '👨 वयस्क (12+ वर्ष)',
    childTicket: '👧 बच्चा (12 साल से कम)',
    seniorTicket: '🧓 बुजुर्ग (60+ वर्ष)',
    dateLabel: 'यात्रा की तारीख चुनें *',
    nameModalLabel: 'आपका नाम *', nameModalPh: 'नाम लिखें',
    phoneModalLabel: 'मोबाइल नंबर *', phoneModalPh: '+91 XXXXXXXXXX',
    totalLabel: '💰 कुल राशि:',
    payBtn: '💳 PayU से सुरक्षित भुगतान करें',
    orDiv: '— या —',
    waBookBtn: '💬 व्हाट्सऐप पर बुक करें',
    secure: '🔒 100% सुरक्षित | तत्काल पुष्टि',
    april2Banner: '⭐ विशेष कार्यक्रम — 2 अप्रैल 2026 | माही और मनीषा नारायणी वाटर पार्क में!',
    footerAbout: 'बिहार का पहला और सबसे बड़ा वाटर पार्क — नारायणी वाटर पार्क, बेतिया। परिवार के साथ आएं और अनंत खुशियाँ ले जाएं!',
    footerLinks: 'त्वरित लिंक', footerInfo: 'जानकारी', footerContact: 'संपर्क',
    footerCopy: '© 2026 नारायणी वाटर पार्क, बेतिया। सर्वाधिकार सुरक्षित।',
  }
};

function t(key) { return translations[currentLang][key] || translations['en'][key] || key; }

function applyTranslations() {
  document.querySelectorAll('[data-key]').forEach(function(el) {
    var key = el.getAttribute('data-key');
    var val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });
  var pn = document.getElementById('pricingNote');
  if (pn) pn.innerHTML = t('pricingNote');
  var lt = document.getElementById('langToggle');
  if (lt) lt.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
  document.documentElement.lang = currentLang === 'hi' ? 'hi' : 'en';
  updateTotal();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  applyTranslations();
  initTheme();
}

// ---- THEME TOGGLE (Dark Mode) ----
function initTheme() {
  const savedTheme = localStorage.getItem('park-theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const tb = document.getElementById('themeToggle');
    if (tb) tb.textContent = '☀️';
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('park-theme', isDark ? 'dark' : 'light');
  const tb = document.getElementById('themeToggle');
  if (tb) tb.textContent = isDark ? '☀️' : '🌓';
}


// ---- PRELOADER ----
window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('preloader').classList.add('hidden');
    applyTranslations();
    checkApril2Promotions();
    initGallerySlider();
    initWaterEffects();
    initScrollAnimations();
  }, 1400);
});

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.ride-card, .price-card, .gallery-item, .section-header, .about-content, .reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));
}

// ============================================================
// WATER EFFECTS (Ripples & Bubbles)
// ============================================================
// ============================================================
// WATER EFFECTS (Ripples & Bubbles)
// ============================================================
function initWaterEffects() {
  const container = document.getElementById('ripple-container');
  if (!container) return;

  // Ripples on click
  window.addEventListener('mousedown', (e) => createRipple(e, container));
  
  // Occasional bubbles
  setInterval(() => createBubble(container), 3000);

  // Fish Mascot Following Cursor
  const mascot = document.getElementById('mascot');
  if (mascot) {
    mascot.style.visibility = 'visible';
    let mouseX = 0, mouseY = 0;
    let mascotX = 0, mascotY = 0;
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateMascot() {
      mascotX += (mouseX - mascotX) * 0.08;
      mascotY += (mouseY - mascotY) * 0.08;
      
      // Face direction of travel
      const flip = (mouseX > mascotX + 5) ? 'scaleX(-1)' : (mouseX < mascotX - 5) ? 'scaleX(1)' : mascot.style.transform.includes('scaleX(-1)') ? 'scaleX(-1)' : 'scaleX(1)';
      mascot.style.transform = `translate3d(${mascotX - 45}px, ${mascotY - 45}px, 0) ${flip}`;
      
      requestAnimationFrame(animateMascot);
    }
    animateMascot();
  }
}

function createRipple(e, container) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  const size = 50;
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - size/2}px`;
  ripple.style.top = `${e.clientY - size/2}px`;
  container.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

function createBubble(container) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  const size = Math.random() * 20 + 5;
  bubble.style.width = bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.setProperty('--duration', `${Math.random() * 5 + 5}s`);
  container.appendChild(bubble);
  setTimeout(() => bubble.remove(), 10000);
}

// ---- NAVBAR SCROLL ----
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  var sections = ['hero','about','rides','gallery','pricing','contact'];
  var links = document.querySelectorAll('.nav-links a');
  sections.forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var rect = el.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      links.forEach(function(l) { l.classList.remove('active'); });
      var active = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (active) active.classList.add('active');
    }
  });
});

// ---- MOBILE MENU ----
function toggleMenu() {
  var navLinks = document.getElementById('navLinks');
  var bars = document.querySelectorAll('#menuToggle span');
  navLinks.classList.toggle('open');
  if (navLinks.classList.contains('open')) {
    bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity = '1';
    bars[2].style.transform = '';
  }
}
document.querySelectorAll('.nav-links a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ---- HERO SLIDER ----
var currentSlide = 0;
var slides = document.querySelectorAll('.hero-slide');
var dots = document.querySelectorAll('.hero-dot');
function goToSlide(idx) {
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = (idx + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}
function nextSlide() { goToSlide(currentSlide + 1); }
setInterval(nextSlide, 4500);

// ---- COUNTDOWN ----
var targetDate = new Date('2026-03-15T10:00:00').getTime();
function updateCountdown() {
  var now = Date.now();
  var diff = targetDate - now;
  var waitTxt = currentLang === 'hi' ? '🎉 ग्रैंड रीओपनिंग — 15 मार्च 2026' : '🎉 Grand Reopening — March 15, 2026';
  var cText = document.querySelector('.countdown-text');
  
  // if opening date passed, completely hide modal and stop updating
  if (diff <= 0) {
    if (document.getElementById('countdownModal')) document.getElementById('countdownModal').style.display = 'none';
    return;
  }
  
  // show modal if not closed
  if (!sessionStorage.getItem('countdownClosed')) {
    var m = document.getElementById('countdownModal');
    if (m && m.style.display === 'none') m.style.display = 'flex';
  }

  if (cText) cText.textContent = waitTxt;
  var days = Math.floor(diff / 86400000);
  var hours = Math.floor((diff % 86400000) / 3600000);
  var mins  = Math.floor((diff % 3600000) / 60000);
  var secs  = Math.floor((diff % 60000) / 1000);
  function pad(n) { return n < 10 ? '0' + n : n; }
  var d = document.getElementById('days'), hr = document.getElementById('hours'),
      mi = document.getElementById('minutes'), se = document.getElementById('seconds');
  if (d) d.textContent = pad(days);
  if (hr) hr.textContent = pad(hours);
  if (mi) mi.textContent = pad(mins);
  if (se) se.textContent = pad(secs);
}
setInterval(updateCountdown, 1000);
updateCountdown();



// ============================================================
// GALLERY SLIDER (Issue #4 — photos & videos)
// ============================================================
var gallerySlider = {
  items: [], // { type: 'img'|'vid', src: '...', thumb: '...' }
  current: 0,
  timer: null
};

function initGallerySlider() {
  var slides = document.querySelectorAll('.gs-slide');
  gallerySlider.items = [];
  slides.forEach(function(s) {
    gallerySlider.items.push({
      type: s.dataset.type,
      src: s.dataset.src,
      thumb: s.dataset.thumb || s.dataset.src
    });
  });
  if (!gallerySlider.items.length) return;
  showGallerySlide(0);
  buildGalleryThumbs();
  startGalleryAuto();
}

function showGallerySlide(idx) {
  var items = gallerySlider.items;
  if (!items.length) return;
  idx = (idx + items.length) % items.length;
  gallerySlider.current = idx;
  var item = items[idx];
  var display = document.getElementById('gsDisplay');
  if (!display) return;

  if (item.type === 'video') {
    display.innerHTML = '<video autoplay controls muted playsinline style="width:100%;height:100%;object-fit:contain;background:#000;border-radius:0" onended="galleryNext()"><source src="' + item.src + '" type="video/mp4">Sorry, your browser does not support video.</video>';
  } else {
    display.innerHTML = '<img src="' + item.src + '" alt="Gallery" style="width:100%;height:100%;object-fit:cover;">';
  }

  // update thumbs
  document.querySelectorAll('.gs-thumb').forEach(function(t, i) {
    t.classList.toggle('active', i === idx);
  });

  // update counter
  var counter = document.getElementById('gsCounter');
  if (counter) counter.textContent = (idx + 1) + ' / ' + items.length;
}

function buildGalleryThumbs() {
  var container = document.getElementById('gsThumbs');
  if (!container) return;
  container.innerHTML = '';
  gallerySlider.items.forEach(function(item, i) {
    var thumb = document.createElement('div');
    thumb.className = 'gs-thumb' + (i === 0 ? ' active' : '');
    if (item.type === 'video') {
      thumb.innerHTML = '<div style="position:relative;width:100%;height:100%;background:#111;border-radius:6px;display:flex;align-items:center;justify-content:center;"><video src="' + item.src + '" muted style="width:100%;height:100%;object-fit:cover;border-radius:6px;opacity:0.7"></video><div style="position:absolute;font-size:1.4rem;">▶</div></div>';
    } else {
      thumb.innerHTML = '<img src="' + item.src + '" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">';
    }
    thumb.onclick = function() { stopGalleryAuto(); showGallerySlide(i); startGalleryAuto(); };
    container.appendChild(thumb);
  });
}

function galleryPrev() { stopGalleryAuto(); showGallerySlide(gallerySlider.current - 1); startGalleryAuto(); }
function galleryNext() { stopGalleryAuto(); showGallerySlide(gallerySlider.current + 1); startGalleryAuto(); }
function startGalleryAuto() {
  stopGalleryAuto();
  gallerySlider.timer = setInterval(function() {
    var cur = gallerySlider.items[gallerySlider.current];
    // skip auto advance for video currently playing; rely on video 'onended' instead
    if (cur.type === 'video') return;
    showGallerySlide(gallerySlider.current + 1);
  }, 4000);
}
function stopGalleryAuto() { if (gallerySlider.timer) { clearInterval(gallerySlider.timer); gallerySlider.timer = null; } }


// ============================================================
// LIGHTBOX (for any direct image click)
// ============================================================
function openLightbox(el) {
  var img = el.querySelector('img');
  if (!img) return;
  var lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeLightbox(); closeBooking(); }
});


// ============================================================
// APRIL 2ND CHECK (auto-hide promotions after April 2)
// ============================================================
function checkApril2Promotions() {
  var now = new Date();
  var april2End = new Date('2026-04-02T23:59:59');
  if (now > april2End) {
    document.querySelectorAll('.april2-promo').forEach(function(b) { b.style.display = 'none'; });
  } else {
    document.querySelectorAll('.april2-promo').forEach(function(b) { b.style.display = 'block'; });
  }
}


// ============================================================
// PRICING — Uniform: Weekday ₹400, Weekend ₹500
// ============================================================
var PRICE_WEEKDAY = 400;
var PRICE_WEEKEND = 500;

function getPriceForDate(dateStr) {
  if (!dateStr) return PRICE_WEEKDAY;
  var d = new Date(dateStr);
  // April 2, 2026 is a special event day → always ₹500
  if (d.getFullYear() === 2026 && d.getMonth() === 3 && d.getDate() === 2) return PRICE_WEEKEND;
  var day = d.getDay(); // 0=Sun, 6=Sat
  if (day === 0 || day === 6) return PRICE_WEEKEND;
  return PRICE_WEEKDAY;
}


// ============================================================
// BOOKING MODAL
// ============================================================
var ticketCounts = { adult: 0, child: 0, senior: 0 };

function changeCount(type, delta) {
  ticketCounts[type] = Math.max(0, ticketCounts[type] + delta);
  document.getElementById(type + 'Count').textContent = ticketCounts[type];
  updateTotal();
}

function updateTotal() {
  var dateStr = document.getElementById('bookingDate') ? document.getElementById('bookingDate').value : '';
  var price = getPriceForDate(dateStr); // same price for everyone

  var adEl = document.getElementById('adultPriceDisplay');

  if (adEl) adEl.textContent = '₹' + price + ' per ticket';

  // Price indicator colour
  var ind = document.getElementById('priceIndicator');
  if (ind) {
    var d2 = dateStr ? new Date(dateStr) : null;
    var isApril2 = d2 && d2.getFullYear() === 2026 && d2.getMonth() === 3 && d2.getDate() === 2;
    var isWeekend = d2 && (d2.getDay() === 0 || d2.getDay() === 6);
    if (!dateStr) {
      ind.className = '';
      ind.textContent = '📅 Select a date to see pricing';
    } else if (isApril2) {
      ind.className = 'special';
      ind.textContent = '⭐ April 2 — Mahi & Manisha Special Day! ₹500/person';
    } else if (isWeekend) {
      ind.className = 'weekend';
      ind.textContent = '🎉 Weekend Rate: ₹500 per ticket (Sat/Sun)';
    } else {
      ind.className = 'weekday';
      ind.textContent = '📅 Weekday Rate: ₹400 per ticket (Mon–Fri)';
    }
  }

  // April 2nd info banner inside modal
  var april2Info = document.getElementById('april2BookingInfo');
  if (april2Info) {
    var d = dateStr ? new Date(dateStr) : null;
    if (d && d.getFullYear() === 2026 && d.getMonth() === 3 && d.getDate() === 2) {
      april2Info.style.display = 'block';
    } else {
      april2Info.style.display = 'none';
    }
  }

  var total = (ticketCounts.adult + (ticketCounts.child || 0) + (ticketCounts.senior || 0)) * price;
  var ta = document.getElementById('totalAmount');
  var pa = document.getElementById('payuAmount');
  if (ta) ta.textContent = '₹' + total;
  if (pa) pa.value = total;
}

function openBooking(type) {
  ticketCounts = { adult: 0, child: 0, senior: 0 };
  if (type === 'adult') ticketCounts.adult = 1;
  if (type === 'child') ticketCounts.child = 1;
  if (type === 'family') { ticketCounts.adult = 2; ticketCounts.child = 2; }

  var ac = document.getElementById('adultCount');
  if (ac) ac.textContent = ticketCounts.adult;

  // Set min date to today
  var dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    var today = new Date();
    var dd = today.getDate(), mm = today.getMonth() + 1, yy = today.getFullYear();
    dateInput.min = yy + '-' + (mm < 10 ? '0' : '') + mm + '-' + (dd < 10 ? '0' : '') + dd;
    dateInput.value = '';
  }

  var april2Info = document.getElementById('april2BookingInfo');
  if (april2Info) april2Info.style.display = 'none';

  updateTotal();
  document.getElementById('bookingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  document.getElementById('bookingModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) closeBooking();
});


// ---- TOAST ----
function showToast(msg, type) {
  var toast = document.getElementById('nwpToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'nwpToast';
    toast.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);color:#fff;padding:16px 28px;border-radius:50px;z-index:999999;font-size:1rem;font-weight:600;box-shadow:0 8px 30px rgba(0,0,0,0.3);transition:opacity 0.4s;max-width:90vw;text-align:center;';
    document.body.appendChild(toast);
  }
  toast.style.background = type === 'success' ? '#27ae60' : type === 'info' ? '#0a4fa0' : '#e74c3c';
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.display = 'block';
  setTimeout(function() {
    toast.style.opacity = '0';
    setTimeout(function() { toast.style.display = 'none'; }, 400);
  }, 3500);
}


// ============================================================
// LEGAL MODALS
// ============================================================
function openLegal(id) {
  document.getElementById(id + 'Modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLegal(id) {
  document.getElementById(id + 'Modal').classList.remove('open');
  document.body.style.overflow = '';
}


// ============================================================
// PAYU PAYMENT (Issue #6)
// PayU OAuth Credentials provided:
// Client ID:     2fed7e33abe5db09b124afdc0cbcd85d7fdf251f79f8bdf3e1d084d1d4247d04
// Client Secret: 1f4863450c1dea84e550d2984f1409ae7153c20609fd53f42e59c2a44b96a759
// NOTE: These are OAuth credentials for PayU Biz APIs.
// For payment gateway integration, you also need: Merchant Key + Salt (from PayU dashboard).
// Hash MUST be generated server-side. Until server-side hash is ready, WhatsApp fallback is used.
// ============================================================
function proceedToPay() {
  var name    = document.getElementById('bookingName').value.trim();
  var phone   = document.getElementById('bookingPhone').value.trim();
  var dateStr = document.getElementById('bookingDate').value;
  var price   = getPriceForDate(dateStr);
  var totalTickets = (ticketCounts.adult || 0) + (ticketCounts.child || 0) + (ticketCounts.senior || 0);
  var total   = totalTickets * price;

  var email = (document.getElementById('bookingEmail') || {}).value || '';
  email = email.trim();
  if (!email) email = 'guest@narayaniwaterpark.com';

  if (!name)  { showToast(currentLang==='hi'?'कृपया अपना नाम लिखें!':'Please enter your name!', 'error'); return; }
  if (!phone || phone.replace(/\D/g,'').length < 10) { showToast(currentLang==='hi'?'कृपया सही मोबाइल नंबर लिखें!':'Please enter a valid 10-digit mobile number!', 'error'); return; }
  if (!dateStr) { showToast(currentLang==='hi'?'कृपया यात्रा की तारीख चुनें!':'Please select your visit date!', 'error'); return; }
  if (total === 0) { showToast(currentLang==='hi'?'कृपया कम से कम एक टिकट चुनें!':'Please select at least 1 ticket!', 'error'); return; }

  var txnId = 'NWP' + Date.now();
  var ticketDesc = [];
  if (ticketCounts.adult  > 0) ticketDesc.push('Adult x' + ticketCounts.adult);
  if (ticketCounts.child  > 0) ticketDesc.push('Child x' + ticketCounts.child);
  if (ticketCounts.senior > 0) ticketDesc.push('Senior x' + ticketCounts.senior);
  var productInfo = 'NWP ' + ticketDesc.join(',') + ' Date:' + dateStr;
  var formattedTotal = Number(total).toFixed(2);

  document.getElementById('txnid').value       = txnId;
  document.getElementById('payuAmount').value  = formattedTotal;
  document.getElementById('productinfo').value = productInfo;
  document.getElementById('payuName').value    = name;
  document.getElementById('payuPhone').value   = phone;
  document.getElementById('payuEmail').value   = email;

  var btn = document.querySelector('.pay-btn');
  var origText = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = '⏳ Processing...'; btn.disabled = true; }

  // Fetch hash from Netlify Function
  var controller = new AbortController();
  var timeoutId  = setTimeout(function() { controller.abort(); }, 15000); // 15s timeout

  fetch('/api/payu-hash', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: controller.signal,
    body: JSON.stringify({
      txnId: txnId,
      amount: formattedTotal,
      productInfo: productInfo,
      firstName: name,
      email: email,
      phone: phone
    })
  })
  .then(function(res) {
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error('Server returned ' + res.status);
    return res.json();
  })
  .then(function(data) {
    if (data.hash && data.key) {
      document.getElementById('payuHash').value = data.hash;
      document.getElementById('payuKey').value  = data.key;
      document.getElementById('payuForm').submit();
    } else {
      throw new Error(data.error || 'Hash missing in response');
    }
  })
  .catch(function(err) {
    clearTimeout(timeoutId);
    console.error('PayU hash error:', err.message);
    var msg = err.name === 'AbortError'
      ? 'Request timed out. Please retry.'
      : ('Error: ' + err.message);
    showToast(msg, 'error');
    if (btn) { btn.innerHTML = origText; btn.disabled = false; }
  });
}

function bookViaWhatsApp() {
  var name  = document.getElementById('bookingName').value.trim();
  var phone = document.getElementById('bookingPhone').value.trim();
  var dateStr = document.getElementById('bookingDate').value;
  var price = getPriceForDate(dateStr);
  var total = ticketCounts.adult * price;

  if (!name)    { showToast(currentLang==='hi'?'कृपया अपना नाम लिखें!':'Please enter your name!', 'error'); return; }
  if (!dateStr) { showToast(currentLang==='hi'?'कृपया यात्रा की तारीख चुनें!':'Please select your visit date!', 'error'); return; }
  if (total === 0) { showToast(currentLang==='hi'?'कृपया कम से कम एक टिकट चुनें!':'Please select at least one ticket!', 'error'); return; }

  var d = new Date(dateStr);
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayName = days[d.getDay()];
  var isWeekend = d.getDay() === 0 || d.getDay() === 6;

  var msg = '🎟 *BOOKING REQUEST — Narayani Waterpark, Bettiah*\n\n'
    + '👤 Name: ' + name + '\n'
    + '📞 Phone: ' + phone + '\n'
    + '📅 Visit Date: ' + dateStr + ' (' + dayName + ' — ' + (isWeekend ? 'Weekend' : 'Weekday') + ')\n'
    + '💰 Ticket Rate: ₹' + price + ' per person\n'
    + '🎫 Tickets:\n'
    + (ticketCounts.adult  > 0 ? '  • Adult x'  + ticketCounts.adult  + ' = ₹' + (ticketCounts.adult  * price) + '\n' : '')
    + (ticketCounts.child  > 0 ? '  • Child x'  + ticketCounts.child  + ' = ₹' + (ticketCounts.child  * price) + '\n' : '')
    + (ticketCounts.senior > 0 ? '  • Senior x' + ticketCounts.senior + ' = ₹' + (ticketCounts.senior * price) + '\n' : '')
    + '💰 *Total: ₹' + total + '*\n\n'
    + '✅ Kripya booking confirm karein!';

  window.open('https://wa.me/918434057242?text=' + encodeURIComponent(msg), '_blank');
}


// ============================================================
// CONTACT FORM — Email to krishna.sangam11@gmail.com via EmailJS
// Issue #5: User ko pata nahi chalega kise message ja raha
// ============================================================
function submitForm(e) {
  e.preventDefault();
  var name    = document.getElementById('cName').value.trim();
  var phone   = document.getElementById('cPhone').value.trim();
  var email   = document.getElementById('cEmail').value.trim();
  var subject = document.getElementById('cSubject').value;
  var msg     = document.getElementById('cMsg').value.trim();

  if (!name || !phone || !msg) {
    showToast(currentLang==='hi'?'कृपया सभी ज़रूरी जानकारी भरें!':'Please fill all required fields!', 'error');
    return;
  }

  var btn = e.target.querySelector('button[type="submit"]');
  var origText = btn ? btn.innerHTML : '';
  if (btn) { btn.innerHTML = '⏳ Sending...'; btn.disabled = true; }

  // Backend Contact Form — sends to krishna.sangam11@gmail.com
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, phone: phone, email: email, subject: subject, message: msg })
  })
  .then(function(res) { 
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json(); 
  })
  .then(function(data) {
    if (data.success) {
      showToast(currentLang==='hi'?'✅ संदेश सफलतापूर्वक भेज दिया गया!':'✅ Message sent successfully!', 'success');
      e.target.reset();
    } else {
      showToast('Error: ' + (data.error || 'Unknown error'), 'error');
    }
  })
  .catch(function(err) {
    console.error(err);
    // Silent Fallback to WhatsApp if API fails but show a different message
    _sendContactWhatsApp(name, phone, subject, msg);
  })
  .finally(function() {
    if (btn) { btn.innerHTML = origText; btn.disabled = false; }
  });
}

function _sendContactWhatsApp(name, phone, subject, msg) {
  var wa = '💬 *CONTACT — Narayani Waterpark*\n\n'
    + '👤 ' + name + '\n📞 ' + phone + '\n📋 ' + subject + '\n💬 ' + msg;
  window.open('https://wa.me/918434057242?text=' + encodeURIComponent(wa), '_blank');
  showToast(currentLang==='hi'?'✅ संदेश भेज दिया गया!':'✅ Message sent!', 'success');
}

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
