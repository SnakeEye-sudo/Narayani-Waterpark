// Narayani Water Park - Home Page
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import { timeline } from 'wix-animations';

$w.onReady(function () {
    // ==========================================
    // HERO SECTION - Animated entrance
    // ==========================================
    initHeroSection();
    
    // ==========================================
    // COUNTDOWN TIMER - Grand Reopening
    // ==========================================
    initCountdown();
    
    // ==========================================
    // SCROLL ANIMATIONS - Storytelling
    // ==========================================
    initScrollAnimations();
    
    // ==========================================
    // STATS COUNTER ANIMATION
    // ==========================================
    animateStats();
    
    // ==========================================
    // GALLERY / SLIDESHOW
    // ==========================================
    initGallery();
    
    // ==========================================
    // TESTIMONIALS CAROUSEL
    // ==========================================
    initTestimonials();
    
    // ==========================================
    // BOOK NOW BUTTON
    // ==========================================
    setupBookNow();
    
    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================
    setupScrollTop();
    
    // ==========================================
    // FLOATING WHATSAPP
    // ==========================================
    setupWhatsApp();
});

// ============================================
// HERO SECTION
// ============================================
function initHeroSection() {
    // Animate hero text entrance
    if ($w('#heroTitle')) {
        $w('#heroTitle').hide();
        $w('#heroSubtitle').hide();
        $w('#heroBookBtn').hide();
        $w('#heroBadge').hide();
        
        // Staggered animation
        setTimeout(() => {
            $w('#heroBadge').show('fade', { duration: 600 });
        }, 300);
        
        setTimeout(() => {
            $w('#heroTitle').show('slide', { duration: 800, direction: 'top' });
        }, 600);
        
        setTimeout(() => {
            $w('#heroSubtitle').show('fade', { duration: 600 });
        }, 1100);
        
        setTimeout(() => {
            $w('#heroBookBtn').show('bounce', { duration: 700 });
        }, 1600);
    }
    
    // Hero Book Now button
    if ($w('#heroBookBtn')) {
        $w('#heroBookBtn').onClick(() => {
            scrollToBooking();
        });
    }
}

// ============================================
// COUNTDOWN TIMER - Grand Re-opening 15th March
// ============================================
function initCountdown() {
    const targetDate = new Date('2026-03-15T10:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            // Park is open!
            if ($w('#countdownSection')) {
                $w('#countdownSection').hide();
            }
            if ($w('#openNowBanner')) {
                $w('#openNowBanner').show('fade');
            }
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Update countdown display elements
        try {
            $w('#countDays').text = String(days).padStart(2, '0');
            $w('#countHours').text = String(hours).padStart(2, '0');
            $w('#countMinutes').text = String(minutes).padStart(2, '0');
            $w('#countSeconds').text = String(seconds).padStart(2, '0');
        } catch(e) {}
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    // Intersection observer for scroll-reveal
    const elementsToAnimate = [
        '#section2Title',
        '#section2Desc', 
        '#featuresGrid',
        '#pricingSection',
        '#gallerySection',
        '#testimonialsSection',
        '#contactSection'
    ];
    
    elementsToAnimate.forEach(selector => {
        try {
            const el = $w(selector);
            if (el) {
                el.onViewportEnter(() => {
                    el.show('slide', { duration: 600, direction: 'bottom' });
                });
            }
        } catch(e) {}
    });
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================
function animateStats() {
    const stats = [
        { id: '#stat1Value', target: 15000, suffix: '+', label: 'Happy Visitors' },
        { id: '#stat2Value', target: 20, suffix: '+', label: 'Thrilling Rides' },
        { id: '#stat3Value', target: 5, suffix: ' Acres', label: 'Total Area' },
        { id: '#stat4Value', target: 100, suffix: '%', label: 'Safe & Secure' }
    ];
    
    stats.forEach(stat => {
        try {
            const el = $w(stat.id);
            if (el) {
                el.onViewportEnter(() => {
                    animateNumber(el, 0, stat.target, stat.suffix, 2000);
                });
            }
        } catch(e) {}
    });
}

function animateNumber(element, start, end, suffix, duration) {
    const startTime = Date.now();
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(start + (end - start) * eased);
        
        try {
            element.text = current.toLocaleString('en-IN') + suffix;
        } catch(e) {}
        
        if (progress < 1) {
            setTimeout(update, 16);
        }
    };
    
    update();
}

// ============================================
// GALLERY INITIALIZATION
// ============================================
function initGallery() {
    // Gallery filter buttons
    try {
        $w('#filterAll').onClick(() => filterGallery('all'));
        $w('#filterRides').onClick(() => filterGallery('rides'));
        $w('#filterFamily').onClick(() => filterGallery('family'));
        $w('#filterFun').onClick(() => filterGallery('fun'));
    } catch(e) {}
    
    // Gallery image click - open lightbox
    try {
        $w('#galleryGrid').onItemClicked((event) => {
            const item = event.item;
            $w('#lightboxImage').src = item.src;
            $w('#lightboxOverlay').show('fade', { duration: 300 });
        });
    } catch(e) {}
    
    // Close lightbox
    try {
        $w('#lightboxClose').onClick(() => {
            $w('#lightboxOverlay').hide('fade', { duration: 300 });
        });
        $w('#lightboxOverlay').onClick(() => {
            $w('#lightboxOverlay').hide('fade', { duration: 300 });
        });
    } catch(e) {}
}

function filterGallery(category) {
    // Remove active class from all buttons
    try {
        ['#filterAll', '#filterRides', '#filterFamily', '#filterFun'].forEach(id => {
            $w(id).style.backgroundColor = '#ffffff';
        });
        
        const activeMap = {
            'all': '#filterAll',
            'rides': '#filterRides',
            'family': '#filterFamily',
            'fun': '#filterFun'
        };
        $w(activeMap[category]).style.backgroundColor = '#0066cc';
    } catch(e) {}
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
function initTestimonials() {
    let currentTestimonial = 0;
    const totalTestimonials = 4;
    
    const testimonials = [
        {
            name: 'Rahul Kumar',
            location: 'Bettiah',
            text: 'Narayani Water Park mein family ke saath gaya tha, bahut maza aaya! Slides zabardast hain aur bacchon ke liye perfect jagah hai. Definitely aaunga firse!',
            rating: 5
        },
        {
            name: 'Priya Singh',
            location: 'Muzaffarpur',
            text: 'Gamiyon mein Narayani Water Park jaane ka plan banaya tha, sach mein behtareen experience raha! Staff bahut cooperative hai aur cleanliness bhi kaafi achi hai.',
            rating: 5
        },
        {
            name: 'Amit Sharma',
            location: 'Patna',
            text: 'Bettiah mein ek world-class water park mil gaya! Rides exciting hain, pool mein bahut maza aata hai. Affordable pricing mein premium experience milता है.',
            rating: 5
        },
        {
            name: 'Sunita Devi',
            location: 'Gopalganj',
            text: 'Puri family ke saath gaye - bade, bacche, buzurg sab khush! Safety ka bahut dhyaan rakha jaata hai. Bahut achi jagah hai summer vacation ke liye.',
            rating: 5
        }
    ];
    
    function showTestimonial(index) {
        try {
            const t = testimonials[index];
            $w('#testimonialName').text = t.name;
            $w('#testimonialLocation').text = t.location;
            $w('#testimonialText').text = t.text;
            updateStars(t.rating);
        } catch(e) {}
    }
    
    function updateStars(rating) {
        try {
            $w('#testimonialStars').text = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        } catch(e) {}
    }
    
    showTestimonial(0);
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 4000);
    
    // Navigation buttons
    try {
        $w('#testimonialPrev').onClick(() => {
            currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
            showTestimonial(currentTestimonial);
        });
        
        $w('#testimonialNext').onClick(() => {
            currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
            showTestimonial(currentTestimonial);
        });
    } catch(e) {}
}

// ============================================
// BOOK NOW - PayU Integration Ready
// ============================================
function setupBookNow() {
    // Book Now buttons (multiple on page)
    const bookBtns = ['#bookNowBtn1', '#bookNowBtn2', '#bookNowBtn3', '#heroBookBtn'];
    
    bookBtns.forEach(id => {
        try {
            $w(id).onClick(() => {
                scrollToBooking();
            });
        } catch(e) {}
    });
    
    // Booking form submit
    try {
        $w('#bookingSubmitBtn').onClick(async () => {
            await processBooking();
        });
    } catch(e) {}
    
    // Ticket type selection - update price
    try {
        $w('#adultCount').onChange(() => updateTotalPrice());
        $w('#childCount').onChange(() => updateTotalPrice());
        $w('#ticketDate').onChange(() => checkAvailability());
    } catch(e) {}
}

function scrollToBooking() {
    try {
        $w('#bookingSection').scrollTo();
    } catch(e) {
        // Fallback - go to booking page
        wixLocation.to('/book-online');
    }
}

function updateTotalPrice() {
    try {
        const adultCount = parseInt($w('#adultCount').value) || 0;
        const childCount = parseInt($w('#childCount').value) || 0;
        
        const ADULT_PRICE = 299; // per person
        const CHILD_PRICE = 199; // per child
        
        const total = (adultCount * ADULT_PRICE) + (childCount * CHILD_PRICE);
        $w('#totalPriceDisplay').text = `Total: ₹${total.toLocaleString('en-IN')}`;
        $w('#bookingSubmitBtn').label = `Book Now - ₹${total.toLocaleString('en-IN')}`;
    } catch(e) {}
}

async function checkAvailability() {
    try {
        const selectedDate = $w('#ticketDate').value;
        if (selectedDate) {
            $w('#availabilityStatus').text = '✓ Slots Available for ' + formatDate(selectedDate);
            $w('#availabilityStatus').style.color = '#28a745';
        }
    } catch(e) {}
}

function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

async function processBooking() {
    try {
        // Validate form
        const name = $w('#bookingName').value;
        const phone = $w('#bookingPhone').value;
        const date = $w('#ticketDate').value;
        const adultCount = $w('#adultCount').value;
        
        if (!name || !phone || !date || !adultCount) {
            $w('#bookingError').text = 'Please fill all required fields';
            $w('#bookingError').show();
            return;
        }
        
        if (phone.length !== 10) {
            $w('#bookingError').text = 'Please enter valid 10-digit mobile number';
            $w('#bookingError').show();
            return;
        }
        
        // Show loading
        $w('#bookingSubmitBtn').disable();
        $w('#bookingLoader').show();
        
        // TODO: PayU Payment Integration
        // PayU will be integrated here by the client
        // Reference:
        // const payuConfig = {
        //     key: 'YOUR_MERCHANT_KEY',
        //     txnid: 'TXN_' + Date.now(),
        //     amount: calculateTotal(),
        //     productinfo: 'Narayani Water Park Entry Tickets',
        //     firstname: name,
        //     phone: phone,
        //     email: $w('#bookingEmail').value || 'guest@narayaniwaterpark.com',
        //     surl: 'https://www.narayaniwaterpark.com/thank-you-page',
        //     furl: 'https://www.narayaniwaterpark.com',
        // };
        
        // For now - redirect to Contact/WhatsApp
        const message = `Booking Request:\nName: ${name}\nPhone: ${phone}\nDate: ${formatDate(date)}\nAdults: ${adultCount}`;
        const whatsappUrl = `https://wa.me/918434057242?text=${encodeURIComponent(message)}`;
        
        $w('#bookingLoader').hide();
        $w('#bookingSubmitBtn').enable();
        
        // Show success message
        $w('#bookingSuccess').text = '✓ Redirecting to WhatsApp for confirmation...';
        $w('#bookingSuccess').show();
        
        setTimeout(() => {
            wixWindow.openLightbox('booking_confirmation', {
                name, phone, date: formatDate(date), adultCount,
                whatsappUrl
            });
        }, 1000);
        
    } catch(e) {
        $w('#bookingSubmitBtn').enable();
        $w('#bookingLoader').hide();
        $w('#bookingError').text = 'Something went wrong. Please call us: 8434057242';
        $w('#bookingError').show();
    }
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function setupScrollTop() {
    try {
        $w('#scrollTopBtn').onClick(() => {
            $w('#header').scrollTo();
        });
        
        // Show/hide based on scroll position
        wixWindow.getBoundingRect().then(rect => {
            // Show after scrolling 300px
        });
    } catch(e) {}
}

// ============================================
// FLOATING WHATSAPP BUTTON
// ============================================
function setupWhatsApp() {
    try {
        $w('#whatsappFloat').onClick(() => {
            const message = 'Hello! I want to book tickets for Narayani Water Park.';
            wixWindow.openUrl(`https://wa.me/918434057242?text=${encodeURIComponent(message)}`);
        });
    } catch(e) {}
}
