// Narayani Water Park - About Page

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

$w.onReady(function () {
    initAboutPage();
    initTimeline();
    initTeamSection();
});

// ============================================
// ABOUT PAGE SETUP
// ============================================
function initAboutPage() {
    // Animate entrance
    try {
        $w('#aboutHeroTitle').hide();
        setTimeout(() => {
            $w('#aboutHeroTitle').show('slide', { duration: 700, direction: 'bottom' });
        }, 200);
    } catch(e) {}
    
    // About stats
    const stats = [
        { id: '#aboutStat1', target: 15000, suffix: '+', label: 'Visitors' },
        { id: '#aboutStat2', target: 20, suffix: '+', label: 'Rides' },
        { id: '#aboutStat3', target: 5, suffix: ' Acres', label: 'Area' },
        { id: '#aboutStat4', target: 8, suffix: ' Yrs', label: 'Experience' }
    ];
    
    stats.forEach(stat => {
        try {
            $w(stat.id).onViewportEnter(() => {
                animateCount($w(stat.id), stat.target, stat.suffix);
            });
        } catch(e) {}
    });
    
    // Book Now CTA
    try {
        $w('#aboutBookBtn').onClick(() => {
            wixLocation.to('/book-online');
        });
    } catch(e) {}
}

function animateCount(element, target, suffix) {
    let current = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        try {
            element.text = current.toLocaleString('en-IN') + suffix;
        } catch(e) { clearInterval(timer); }
    }, 40);
}

// ============================================
// OUR STORY TIMELINE
// ============================================
function initTimeline() {
    const milestones = [
        { year: '2016', event: 'Narayani Water Park ki neev rakhi gayi Bettiah, Bihar mein' },
        { year: '2017', event: 'Park officially khula - 5000+ visitors pehle season mein' },
        { year: '2019', event: 'Wave Pool aur 10 naye rides add kiye gaye' },
        { year: '2022', event: 'Major renovation - safety upgrades aur new attractions' },
        { year: '2026', event: 'Grand Reopening - 15th March ke saath naya chapter shuru!' }
    ];
    
    // Animate timeline items on scroll
    milestones.forEach((milestone, index) => {
        try {
            const itemId = `#timeline${index + 1}`;
            $w(itemId).onViewportEnter(() => {
                $w(itemId).show('slide', { 
                    duration: 600, 
                    direction: index % 2 === 0 ? 'left' : 'right' 
                });
            });
        } catch(e) {}
    });
}

// ============================================
// TEAM / FEATURES SECTION
// ============================================
function initTeamSection() {
    const features = [
        {
            id: '#feature1',
            icon: '🌊',
            title: 'Wave Pool',
            desc: 'Samudra jaisi leheron ka anand'
        },
        {
            id: '#feature2', 
            icon: '🎢',
            title: 'Water Slides',
            desc: '20+ thrilling slides for all ages'
        },
        {
            id: '#feature3',
            icon: '👨‍👩‍👧‍👦',
            title: 'Family Zone',
            desc: 'Bacchon ke liye safe play area'
        },
        {
            id: '#feature4',
            icon: '🍽️',
            title: 'Food Court',
            desc: 'Swadisht khana park ke andar'
        },
        {
            id: '#feature5',
            icon: '🅿️',
            title: 'Free Parking',
            desc: 'Ample parking space available'
        },
        {
            id: '#feature6',
            icon: '🛡️',
            title: 'Safety First',
            desc: 'Trained lifeguards on duty 24/7'
        }
    ];
    
    features.forEach(feature => {
        try {
            $w(feature.id).onViewportEnter(() => {
                $w(feature.id).show('bounce', { duration: 500 });
            });
        } catch(e) {}
    });
}
