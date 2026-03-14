// Narayani Water Park - Master Page (Header + Footer + Global)
// This runs on every page of the site

import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w.onReady(function () {
    // ==========================================
    // NAVIGATION - Mobile Hamburger Menu
    // ==========================================
    initNavigation();
    
    // ==========================================
    // STICKY HEADER on scroll
    // ==========================================
    initStickyHeader();
    
    // ==========================================
    // ACTIVE NAV LINK based on current page
    // ==========================================
    setActiveNavLink();
    
    // ==========================================
    // GLOBAL BOOK NOW BUTTON (in nav)
    // ==========================================
    setupNavBookBtn();
    
    // ==========================================
    // FOOTER LINKS
    // ==========================================
    initFooter();
    
    // ==========================================
    // COOKIE/WELCOME POPUP (first visit)
    // ==========================================
    initWelcomePopup();
    
    // ==========================================
    // ANNOUNCEMENT BAR
    // ==========================================
    initAnnouncementBar();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    // Mobile menu toggle
    try {
        $w('#hamburgerBtn').onClick(() => {
            const menu = $w('#mobileMenu');
            if (menu.hidden) {
                menu.show('slide', { direction: 'right', duration: 400 });
                $w('#hamburgerBtn').label = '✕';
            } else {
                menu.hide('slide', { direction: 'right', duration: 400 });
                $w('#hamburgerBtn').label = '☰';
            }
        });
    } catch(e) {}
    
    // Close mobile menu on nav link click
    const navLinks = ['#navHome', '#navAbout', '#navGallery', '#navContact', '#navRides'];
    navLinks.forEach(id => {
        try {
            $w(id).onClick(() => {
                try { $w('#mobileMenu').hide(); } catch(e) {}
            });
        } catch(e) {}
    });
    
    // Logo click > Home
    try {
        $w('#siteLogo').onClick(() => {
            wixLocation.to('/');
        });
    } catch(e) {}
    
    // Nav link routing
    try {
        $w('#navHome').onClick(() => wixLocation.to('/'));
        $w('#navAbout').onClick(() => wixLocation.to('/about'));
        $w('#navGallery').onClick(() => wixLocation.to('/gallery'));
        $w('#navContact').onClick(() => wixLocation.to('/contact'));
        $w('#navRides').onClick(() => wixLocation.to('/service-page'));
    } catch(e) {}
}

// ============================================
// STICKY HEADER
// ============================================
function initStickyHeader() {
    // Wix handles this via site design settings
    // But we can add scroll-dependent behavior:
    try {
        // Change nav background on scroll 
        // (header element needs scroll listener if available)
        let lastScroll = 0;
        setInterval(() => {
            // Note: In Wix, full scroll detection requires 
            // wix-window getBoundingRect or similar
        }, 100);
    } catch(e) {}
}

// ============================================
// SET ACTIVE NAV LINK
// ============================================
function setActiveNavLink() {
    const currentPath = wixLocation.path;
    
    const pathToNav = {
        '': '#navHome',
        'about': '#navAbout', 
        'gallery': '#navGallery',
        'contact': '#navContact',
        'service-page': '#navRides'
    };
    
    const currentNav = pathToNav[currentPath[0] || ''];
    
    if (currentNav) {
        try {
            $w(currentNav).style.color = '#FF6B35';
            $w(currentNav).style.fontWeight = '700';
        } catch(e) {}
    }
}

// ============================================
// NAVIGATION BOOK NOW
// ============================================
function setupNavBookBtn() {
    try {
        $w('#navBookBtn').onClick(() => {
            wixLocation.to('/book-online');
        });
    } catch(e) {}
}

// ============================================
// FOOTER
// ============================================
function initFooter() {
    // Quick Links
    try {
        $w('#footerHome').onClick(() => wixLocation.to('/'));
        $w('#footerAbout').onClick(() => wixLocation.to('/about'));
        $w('#footerGallery').onClick(() => wixLocation.to('/gallery'));
        $w('#footerContact').onClick(() => wixLocation.to('/contact'));
        $w('#footerBook').onClick(() => wixLocation.to('/book-online'));
        $w('#footerPrivacy').onClick(() => wixLocation.to('/privacy-policy'));
        $w('#footerTerms').onClick(() => wixLocation.to('/terms-conditions'));
        $w('#footerRefund').onClick(() => wixLocation.to('/refund-cancellation-policy'));
    } catch(e) {}
    
    // Social Media Links
    try {
        $w('#footerFacebook').onClick(() => {
            wixWindow.openUrl('https://www.facebook.com/narayaniwaterpark');
        });
        $w('#footerInstagram').onClick(() => {
            wixWindow.openUrl('https://www.instagram.com/narayaniwaterpark');
        });
        $w('#footerYoutube').onClick(() => {
            wixWindow.openUrl('https://www.youtube.com/@narayaniwaterpark');
        });
        $w('#footerWhatsapp').onClick(() => {
            wixWindow.openUrl('https://wa.me/918434057242');
        });
    } catch(e) {}
    
    // Phone click - dial
    try {
        $w('#footerPhone').onClick(() => {
            wixWindow.openUrl('tel:+918434057242');
        });
        $w('#footerPhone2').onClick(() => {
            wixWindow.openUrl('tel:+918434057242');
        });
    } catch(e) {}
    
    // Address click - Google Maps
    try {
        $w('#footerAddress').onClick(() => {
            wixWindow.openUrl('https://maps.google.com/?q=Narayani+Water+Park+Bettiah+Bihar');
        });
    } catch(e) {}
    
    // Dynamic Copyright Year
    try {
        $w('#footerCopyright').text = `© ${new Date().getFullYear()} Narayani Water Park. All Rights Reserved.`;
    } catch(e) {}
}

// ============================================
// WELCOME POPUP (first visit)
// ============================================
function initWelcomePopup() {
    try {
        // Check if first visit (use Wix storage in real implementation)
        const isFirstVisit = !sessionStorage.getItem('nwp_visited');
        
        if (isFirstVisit) {
            sessionStorage.setItem('nwp_visited', 'true');
            
            setTimeout(() => {
                try {
                    $w('#welcomePopup').show('fade', { duration: 500 });
                } catch(e) {}
            }, 2000);
        }
        
        // Close popup
        $w('#closeWelcomePopup').onClick(() => {
            $w('#welcomePopup').hide('fade', { duration: 300 });
        });
        
        // Popup Book Now
        $w('#popupBookBtn').onClick(() => {
            $w('#welcomePopup').hide();
            wixLocation.to('/book-online');
        });
    } catch(e) {}
}

// ============================================
// ANNOUNCEMENT BAR
// ============================================
function initAnnouncementBar() {
    try {
        // Rotating announcement messages
        const announcements = [
            '🎉 Grand Reopening - 15th March! Book your tickets now!',
            '⏰ Park Timing: 10:00 AM to 6:00 PM Daily',
            '📞 For Booking: Call 8434057242',
            '🌊 20+ Water Rides | Family Fun | Safe & Secure',
            '📍 Opp. R.L. International School, Pipra, Bettiah'
        ];
        
        let currentAnnouncement = 0;
        
        function rotateAnnouncement() {
            try {
                $w('#announcementText').hide('fade', { duration: 300 });
                setTimeout(() => {
                    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
                    $w('#announcementText').text = announcements[currentAnnouncement];
                    $w('#announcementText').show('fade', { duration: 300 });
                }, 300);
            } catch(e) {}
        }
        
        // Set initial text
        $w('#announcementText').text = announcements[0];
        
        // Rotate every 3 seconds
        setInterval(rotateAnnouncement, 3000);
        
        // Close announcement bar
        $w('#closeAnnouncement').onClick(() => {
            $w('#announcementBar').hide('slide', { direction: 'top', duration: 400 });
        });
    } catch(e) {}
}
