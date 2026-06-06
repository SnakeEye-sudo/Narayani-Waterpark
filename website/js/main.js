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
    heroBtn1: '🎟 Entry ₹400 — All Days',
    heroBtn2: '📸 View Gallery',
    stat1: 'Thrilling Rides', stat2: 'Happy Families Daily', stat3: 'Opens Daily', stat4: 'Closes Daily',
    countdownOpen: '🎉 Park is NOW OPEN! Come Join Us!',
    aboutTag: 'About Us', aboutTitle: 'A World of Joy',
    aboutTitleSpan: 'Awaits You',
    aboutP1: "Narayani Waterpark is Bettiah's first and largest water park. Enjoy thrilling rides, cool pools, and unlimited family entertainment — perfect for all ages!",
    aboutAddr: 'Opp. R.L. International School, Pipra Road, Bettiah, Bihar',
    aboutTime: 'Open Daily: 10:00 AM – 6:00 PM',
    aboutPhone: '+91 8434057242',
    f1: '15+ Water Rides', f3: 'Food Court',
    f4: 'Kids Zone', f5: 'Safe & Secure', f6: 'Change Rooms', f7: 'First Aid', f8: 'Photo Spots',
    aboutBtn: '🎟 Book Now',
    ridesTag: 'Our Attractions', ridesTitle: 'Thrilling', ridesTitleSpan: 'Rides & Attractions',
    ridesSub: 'Something for every family member — from kids to adults!',
    galleryTag: 'Gallery', galleryTitle: 'Glimpse of', galleryTitleSpan: 'the Park',
    gallerySub: 'Come make memories like these!',
    galleryBtn: '📱 Join Us at the Park!',
    pricingTag: 'Tickets', pricingTitle: 'Entry', pricingTitleSpan: 'Pricing Plans',
    pricingSub: 'Affordable prices, unlimited fun — that\'s the Narayani Waterpark magic!',
    pricingNote: '🎟 Entry ₹400 per person — all days. Tickets available at the park counter only.',
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
    adultTicket: '👥 Person (12+ Years)',
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
    heroBtn1: '🎟 एंट्री ₹400 — सभी दिन',
    heroBtn2: '📸 गैलरी देखें',
    stat1: 'थ्रिलिंग राइड्स', stat2: 'खुश परिवार रोज', stat3: 'खुलने का समय', stat4: 'बंद होने का समय',
    countdownOpen: '🎉 पार्क अभी खुला है! आइए मिलिए!',
    aboutTag: 'हमारे बारे में', aboutTitle: 'खुशियों की दुनिया', aboutTitleSpan: 'आपका इंतजार करती है',
    aboutP1: 'नारायणी वाटर पार्क बेतिया का पहला और सबसे बड़ा वाटर पार्क है। थ्रिलिंग राइड्स, कूल पूल और पारिवारिक मनोरंजन का भरपूर आनंद — सबके लिए कुछ न कुछ!',
    aboutAddr: 'आरएल इंटरनेशनल स्कूल के सामने, पिपरा रोड, बेतिया, बिहार',
    aboutTime: 'रोज खुला: सुबह 10 बजे – शाम 6 बजे',
    aboutPhone: '+91 8434057242',
    f1: '15+ वाटर राइड्स', f3: 'फूड कोर्ट',
    f4: 'किड्स ज़ोन', f5: 'सुरक्षित माहौल', f6: 'चेंजिंग रूम', f7: 'प्राथमिक चिकित्सा', f8: 'फोटो स्पॉट',
    aboutBtn: '🎟 अभी बुक करें',
    ridesTag: 'हमारी सवारियाँ', ridesTitle: 'रोमांचक', ridesTitleSpan: 'राइड्स और आकर्षण',
    ridesSub: 'हर परिवार के सदस्य के लिए कुछ न कुछ — बच्चों से बड़ों तक!',
    galleryTag: 'गैलरी', galleryTitle: 'पार्क की', galleryTitleSpan: 'झलक देखें',
    gallerySub: 'यहाँ आकर आपको भी ऐसी ही यादें मिलेंगी!',
    galleryBtn: '📱 पार्क में आइए!',
    pricingTag: 'टिकट', pricingTitle: 'प्रवेश', pricingTitleSpan: 'मूल्य योजनाएं',
    pricingSub: 'किफायती कीमत में अनलिमिटेड मज़ा — यही नारायणी का जादू है!',
    pricingNote: '🎟 एंट्री ₹400 प्रति व्यक्ति — सभी दिन। टिकट सिर्फ पार्क काउंटर पर उपलब्ध।',
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
    adultTicket: '👥 व्यक्ति (12+ वर्ष)',
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
    shuffleInstagramGrid();
    initButtonRipples();
    runStatCounters();
    highlightTodayPrice();
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

  // Auto-popup gallery once per session
  if (!sessionStorage.getItem('galleryAutoPop2')) {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      const gObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sessionStorage.setItem('galleryAutoPop2', 'true');
            const firstImg = document.querySelector('#gsDisplay img');
            if (firstImg) {
               const lb = document.getElementById('lightbox');
               document.getElementById('lightboxImg').src = firstImg.src;
               lb.style.display = 'flex';
               document.body.style.overflow = 'hidden';
            }
            gObs.disconnect();
          }
        });
      }, { threshold: 0.1 });
      gObs.observe(gallerySection);
    }
  }
}

// ============================================================
// WATER EFFECTS (Ripples & Bubbles)
// ============================================================
// ============================================================
// WATER EFFECTS (Ripples & Bubbles)
// ============================================================
// Fish Mascot - Mobile: Auto-roam, Desktop: Mouse Follow
    const mascot = document.getElementById('mascot');
    if (mascot) {
      mascot.style.visibility = 'visible';
      const isMobile = window.innerWidth < 1024 || ('ontouchstart' in window);
      if (isMobile) {
        // --- MOBILE: Auto-roam across full screen ---
        let mX = Math.random() * window.innerWidth;
        let mY = Math.random() * window.innerHeight;
        let vX = (Math.random() * 2 + 1.5) * (Math.random() < 0.5 ? 1 : -1);
        let vY = (Math.random() * 2 + 1.5) * (Math.random() < 0.5 ? 1 : -1);
        const SIZE = 65;
        function roamMascot() {
          mX += vX;
          mY += vY;
          if (mX < 0) { mX = 0; vX = Math.abs(vX); }
          if (mX > window.innerWidth - SIZE) { mX = window.innerWidth - SIZE; vX = -Math.abs(vX); }
          if (mY < 0) { mY = 0; vY = Math.abs(vY); }
          if (mY > window.innerHeight - SIZE) { mY = window.innerHeight - SIZE; vY = -Math.abs(vY); }
          const flip = vX > 0 ? 'scaleX(-1)' : 'scaleX(1)';
          mascot.style.transform = `translate3d(${mX}px, ${mY}px, 0) ${flip}`;
          requestAnimationFrame(roamMascot);
        }
        roamMascot();
      } else {
        // --- DESKTOP: Follow mouse ---
        let mouseX = 0, mouseY = 0;
        let mascotX = 0, mascotY = 0;
        window.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });
        function animateMascot() {
          mascotX += (mouseX - mascotX) * 0.08;
          mascotY += (mouseY - mascotY) * 0.08;
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

// Button Ripples for extra waterpark vibe
function initButtonRipples() {
  document.querySelectorAll('.btn-primary, .btn-secondary, .btn-book').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', function(e) {
      let rect = this.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let ripple = document.createElement('span');
      ripple.className = 'btn-ripple-effect';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// Instagram Shuffle (Fallback if Widget not used)
function shuffleInstagramGrid() {
  const grid = document.querySelector('.insta-grid');
  if (!grid) return;
  const items = Array.from(grid.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  // Remove existing and append shuffled
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(item));
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
    display.innerHTML = '<img src="' + item.src + '" alt="Narayani Waterpark — park photo " style="width:100%;height:100%;object-fit:cover;">';
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
      thumb.innerHTML = '<img src="' + item.src + '" alt="Narayani Waterpark gallery thumbnail " style="width:100%;height:100%;object-fit:cover;border-radius:6px;">';
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
// PRICING — Flat ₹400 entry on all days (tickets at counter)
// ============================================================
// Flat pricing — ₹400 every day (no weekday/weekend split)
var PRICE_FLAT = 400;
var PRICE_WEEKDAY = PRICE_FLAT; // kept for backward compatibility
var PRICE_WEEKEND = PRICE_FLAT; // kept for backward compatibility

function getPriceForDate(dateStr) {
  return PRICE_FLAT; // same price on all days
}


// ============================================================
// BOOKING MODAL
// ============================================================
var ticketCounts = { adult: 0, child: 0, senior: 0 };

function changeCount(type, delta) {
  ticketCounts[type] = Math.max(0, ticketCounts[type] + delta);
    updateTotal();}

function updateTotal() {
  var dateStr = document.getElementById('bookingDate') ? document.getElementById('bookingDate').value : '';
  var price = getPriceForDate(dateStr); // same price for everyone

  var adEl = document.getElementById('adultPriceDisplay');

  if (adEl) adEl.textContent = '₹' + price + ' per ticket';     var ac = document.getElementById('adultCount');     if (ac) ac.textContent = ticketCounts.adult;

  // Price indicator colour
  var ind = document.getElementById('priceIndicator');
  if (ind) {
    ind.className = '';
    ind.textContent = '🎟 Entry ₹400 per person (all days) — tickets at the park counter';
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
// TICKETS — Online payment disabled (counter-only)
// ============================================================
function proceedToPay() {
  // Online payment disabled — tickets are sold at the park counter only.
  showToast(currentLang==='hi' ? 'ऑनलाइन बुकिंग बंद है — टिकट काउंटर पर मिलेंगे!' : 'Online booking is disabled — tickets available at the park counter only!', 'info');
}

function bookViaWhatsApp() {
  // Online booking disabled — open a general WhatsApp enquiry instead.
  var msg = '🎟 *Narayani Waterpark, Bettiah*\n\nNamaste! Mujhe park ke baare mein jaankari chahiye.\nEntry: ₹400 per person (all days).\nTickets counter par milte hain.';
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


// ============================================================
// WORLD-CLASS VISUAL UPGRADES — JS
// ============================================================

// --- Stat Counter Animation ---
function runStatCounters() {
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1800;
    var startTime = null;
    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current + suffix;
      el.classList.add('counting');
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + suffix;
        el.classList.remove('counting');
      }
    }
    requestAnimationFrame(tick);
  });
}

// --- Quick-Book Bar ---
var qbCount = 1;
function qbChange(delta) {
  qbCount = Math.max(1, Math.min(20, qbCount + delta));
  var el = document.getElementById('qbCount');
  if (el) el.textContent = qbCount;
}
function openBookingFromQuickBar() {
  var date = document.getElementById('qbDate') ? document.getElementById('qbDate').value : '';
  ticketCounts = { adult: qbCount, child: 0, senior: 0 };
  var dateInput = document.getElementById('bookingDate');
  if (dateInput && date) dateInput.value = date;
  var ac = document.getElementById('adultCount');
  if (ac) ac.textContent = qbCount;
  updateTotal();
  document.getElementById('bookingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
(function () {
  var qbDate = document.getElementById('qbDate');
  if (!qbDate) return;
  var today = new Date();
  var y = today.getFullYear(), m = today.getMonth() + 1, d = today.getDate();
  qbDate.min = y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
})();

// --- Today Pricing Highlight ---
function highlightTodayPrice() {
  // Flat pricing — highlight the single all-days card.
  var flat = document.getElementById('pricingFlat');
  if (flat) flat.classList.add('today-active');
}

// --- Mobile Bottom Nav Active State ---
function updateMbnActive() {
  var pairs = [
    { section: 'hero',   btn: 'mbnHome' },
    { section: 'rides',  btn: 'mbnRides' }
  ];
  var mid = window.innerHeight / 2;
  pairs.forEach(function (p) {
    var sec = document.getElementById(p.section);
    var btn = document.getElementById(p.btn);
    if (!sec || !btn) return;
    var r = sec.getBoundingClientRect();
    if (r.top <= mid && r.bottom >= mid) {
      document.querySelectorAll('.mbn-item').forEach(function (i) { i.classList.remove('active'); });
      btn.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateMbnActive, { passive: true });

// --- Google Review Expand ---
function grExpand(btn, textId) {
  var el = document.getElementById(textId);
  if (!el) return;
  el.classList.remove('clamped');
  btn.style.display = 'none';
}

// --- Google Places Reviews Auto-Fetch ---
function _grInit() {
  var placeId = window._grPlaceId;
  if (!placeId) return;
  var dummy = document.createElement('div');
  dummy.style.cssText = 'width:1px;height:1px;position:absolute;visibility:hidden';
  document.body.appendChild(dummy);
  var map = new google.maps.Map(dummy, { center: { lat: 0, lng: 0 }, zoom: 1 });
  var svc = new google.maps.places.PlacesService(map);
  svc.getDetails(
    { placeId: placeId, fields: ['reviews', 'rating', 'user_ratings_total'] },
    function (place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK || !place.reviews) return;
      _grRender(place.reviews, place.rating, place.user_ratings_total);
    }
  );
}

function _grRender(reviews, avgRating, totalCount) {
  var track = document.getElementById('grTrack');
  if (!track) return;

  // Update average score display
  var scoreEl = document.querySelector('.greview-score');
  if (scoreEl && avgRating) scoreEl.textContent = avgRating.toFixed(1);

  // Filter 3+ stars only
  var filtered = reviews.filter(function (r) { return r.rating >= 3; });
  if (!filtered.length) return;

  track.innerHTML = '';
  filtered.forEach(function (r) {
    var filledStars = '';
    for (var i = 0; i < 5; i++) {
      filledStars += '<span class="greview-card-star" ' +
        (i >= r.rating ? 'style="color:#e8eaed"' : '') + '>★</span>';
    }
    var initials = r.author_name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2).toUpperCase();
    var colors = ['#4285f4','#34a853','#ea4335','#fbbc05','#7b1fa2','#0097a7'];
    var color  = colors[initials.charCodeAt(0) % colors.length];

    var avatarHtml = r.profile_photo_url
      ? '<img src="' + r.profile_photo_url + '" class="greview-avatar" style="width:44px;height:44px;border-radius:50%;object-fit:cover" alt="' + r.author_name + '">'
      : '<div class="greview-avatar" style="background:' + color + '">' + initials + '</div>';

    var card = document.createElement('div');
    card.className = 'greview-card reveal';
    card.setAttribute('data-stars', r.rating);
    card.innerHTML =
      '<div class="greview-card-top">' +
        '<div class="greview-author-row">' +
          avatarHtml +
          '<div><div class="greview-name">' + r.author_name + '</div>' +
          '<div class="greview-ago">' + r.relative_time_description + '</div></div>' +
        '</div>' +
        '<svg viewBox="0 0 24 24" style="width:20px;height:20px;flex-shrink:0" aria-hidden="true">' +
          '<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>' +
          '<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>' +
          '<path d="M5.84 14.09c-.22-.66-.35-2.09.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>' +
          '<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>' +
        '</svg>' +
      '</div>' +
      '<div class="greview-card-stars">' + filledStars + '</div>' +
      '<p class="greview-text">' + r.text + '</p>' +
      '<div class="greview-footer"><span class="greview-verified">✔ Google Review</span></div>';
    track.appendChild(card);
  });
}
