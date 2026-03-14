// Narayani Water Park - Rides / Service Page

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

$w.onReady(function () {
    initRidesPage();
    initPricingSection();
    initRideFilters();
    initBookingCTA();
});

// ============================================
// RIDES PAGE DATA
// ============================================
const rides = [
    {
        id: 'wave_pool',
        name: 'Wave Pool',
        hindi: 'वेव पूल',
        category: 'thrill',
        minHeight: '0',
        description: 'Samudra ki leheron jaisi anubhav. Perfect for all ages!',
        duration: 'Unlimited',
        icon: '🌊',
        ageGroup: 'All Ages'
    },
    {
        id: 'speed_slide',
        name: 'Speed Slide',
        hindi: 'स्पीड स्लाइड',
        category: 'extreme',
        minHeight: '120cm',
        description: 'Heart-pounding 60 km/h speed slide for thrill seekers!',
        duration: '45 seconds',
        icon: '⚡',
        ageGroup: '12+ years'
    },
    {
        id: 'lazy_river',
        name: 'Lazy River',
        hindi: 'लेजी रिवर',
        category: 'relaxing',
        minHeight: '0',
        description: 'Aram se tube mein baith kar nadi ki sair karo.',
        duration: '10 minutes',
        icon: '🚣',
        ageGroup: 'All Ages'
    },
    {
        id: 'family_raft',
        name: 'Family Raft Ride',
        hindi: 'फैमिली राफ्ट',
        category: 'family',
        minHeight: '90cm',
        description: 'Pure family ke saath enjoy karo ek saath! 6 seater raft.',
        duration: '3 minutes',
        icon: '👨‍👩‍👧‍👦',
        ageGroup: 'All Ages'
    },
    {
        id: 'kids_pool',
        name: 'Kids Splash Pool',
        hindi: 'किड्स स्प्लैश पूल',
        category: 'kids',
        minHeight: '0',
        description: 'Chote bacchon ke liye specially designed safe pool.',
        duration: 'Unlimited',
        icon: '🎠',
        ageGroup: '2-10 years'
    },
    {
        id: 'rain_dance',
        name: 'Rain Dance Zone',
        hindi: 'रेन डांस',
        category: 'thrill',
        minHeight: '0',
        description: 'Music ke saath baarish mein naachon! Party atmosphere!',
        duration: 'Unlimited',
        icon: '💃',
        ageGroup: 'All Ages'
    },
    {
        id: 'tornado_slide',
        name: 'Tornado Slide',
        hindi: 'टोर्नाडो स्लाइड',
        category: 'extreme',
        minHeight: '130cm',
        description: 'Aandhi ki tarah ghumao - adrenaline ka ultimate dose!',
        duration: '90 seconds',
        icon: '🌀',
        ageGroup: '14+ years'
    },
    {
        id: 'tube_slide',
        name: 'Multi-Lane Tube Slide',
        hindi: 'ट्यूब स्लाइड',
        category: 'thrill',
        minHeight: '100cm',
        description: 'Doston ke saath race karo multi-lane slide mein!',
        duration: '2 minutes',
        icon: '🏄',
        ageGroup: '8+ years'
    }
];

// ============================================
// RIDES PAGE SETUP
// ============================================
function initRidesPage() {
    // Page entrance
    try {
        $w('#ridesHeroTitle').hide();
        setTimeout(() => {
            $w('#ridesHeroTitle').show('slide', { duration: 700, direction: 'bottom' });
        }, 200);
    } catch(e) {}
    
    // Populate rides grid
    displayRides('all');
}

function displayRides(categoryFilter) {
    const filteredRides = categoryFilter === 'all' 
        ? rides 
        : rides.filter(r => r.category === categoryFilter);
    
    // Set repeater data (if using Wix Repeater)
    try {
        $w('#ridesRepeater').data = filteredRides.map(ride => ({
            _id: ride.id,
            name: ride.name,
            hindiName: ride.hindi,
            description: ride.description,
            icon: ride.icon,
            minHeight: ride.minHeight,
            ageGroup: ride.ageGroup,
            duration: ride.duration,
            category: ride.category
        }));
        
        $w('#ridesRepeater').onItemReady(($item, itemData) => {
            $item('#rideIcon').text = itemData.icon;
            $item('#rideName').text = itemData.name;
            $item('#rideHindiName').text = itemData.hindiName;
            $item('#rideDesc').text = itemData.description;
            $item('#rideMinHeight').text = 'Min Height: ' + itemData.minHeight;
            $item('#rideAgeGroup').text = 'Age: ' + itemData.ageGroup;
            $item('#rideDuration').text = 'Duration: ' + itemData.duration;
            
            // Category badge color
            const categoryColors = {
                'extreme': '#dc3545',
                'thrill': '#fd7e14',
                'family': '#0d6efd',
                'relaxing': '#198754',
                'kids': '#6f42c1'
            };
            $item('#rideCategoryBadge').text = itemData.category.charAt(0).toUpperCase() + itemData.category.slice(1);
            $item('#rideCategoryBadge').style.backgroundColor = categoryColors[itemData.category] || '#6c757d';
            
            // Book This Ride button
            $item('#bookRideBtn').onClick(() => {
                wixLocation.to('/book-online');
            });
        });
    } catch(e) {}
}

// ============================================
// PRICING SECTION
// ============================================
function initPricingSection() {
    const pricing = [
        {
            id: '#pricingAdult',
            type: 'Adult',
            hindi: 'वयस्क',
            price: '₹299',
            age: '12+ years',
            includes: ['All Rides Access', 'Wave Pool', 'Rain Dance', 'Locker Facility'],
            isPopular: false
        },
        {
            id: '#pricingFamily',
            type: 'Family Pack',
            hindi: 'फैमिली पैक',
            price: '₹999',
            age: '2 Adults + 2 Kids',
            includes: ['All Rides Access', 'Wave Pool', 'Rain Dance', 'Locker Facility', 'Free Food Voucher', 'Priority Entry'],
            isPopular: true
        },
        {
            id: '#pricingChild',
            type: 'Child',
            hindi: 'बच्चे',
            price: '₹199',
            age: '3-11 years',
            includes: ['Kids Zone Access', 'Wave Pool', 'Kids Slides', 'Splash Pool'],
            isPopular: false
        },
        {
            id: '#pricingSenior',
            type: 'Senior Citizen',
            hindi: 'वरिष्ठ नागरिक',
            price: '₹199',
            age: '60+ years',
            includes: ['All Rides Access', 'Wave Pool', 'Lazy River', 'Locker Facility'],
            isPopular: false
        }
    ];
    
    pricing.forEach(plan => {
        try {
            if (plan.isPopular) {
                $w(`${plan.id}PopularBadge`).show();
            }
            $w(`${plan.id}Price`).text = plan.price;
            $w(`${plan.id}Age`).text = plan.age;
            
            // Book button
            $w(`${plan.id}BookBtn`).onClick(() => {
                wixLocation.to('/book-online');
            });
        } catch(e) {}
    });
}

// ============================================
// RIDE FILTERS
// ============================================
function initRideFilters() {
    const filterBtns = [
        { id: '#rideFilterAll', category: 'all', label: 'All Rides' },
        { id: '#rideFilterExtreme', category: 'extreme', label: 'Extreme' },
        { id: '#rideFilterThrill', category: 'thrill', label: 'Thrill' },
        { id: '#rideFilterFamily', category: 'family', label: 'Family' },
        { id: '#rideFilterKids', category: 'kids', label: 'Kids' },
        { id: '#rideFilterRelax', category: 'relaxing', label: 'Relaxing' }
    ];
    
    filterBtns.forEach(btn => {
        try {
            $w(btn.id).onClick(() => {
                // Update active state
                filterBtns.forEach(b => {
                    try {
                        $w(b.id).style.backgroundColor = '#f8f9fa';
                        $w(b.id).style.color = '#495057';
                    } catch(e) {}
                });
                $w(btn.id).style.backgroundColor = '#0066cc';
                $w(btn.id).style.color = '#ffffff';
                
                // Filter rides
                displayRides(btn.category);
            });
        } catch(e) {}
    });
}

// ============================================
// BOOKING CTA
// ============================================
function initBookingCTA() {
    try {
        $w('#ridesBookNowBtn').onClick(() => {
            wixLocation.to('/book-online');
        });
    } catch(e) {}
    
    try {
        $w('#ridesCallBtn').onClick(() => {
            wixWindow.openUrl('tel:+918434057242');
        });
    } catch(e) {}
    
    try {
        $w('#ridesWhatsappBtn').onClick(() => {
            const msg = 'Hello! I would like to book tickets for Narayani Water Park.';
            wixWindow.openUrl(`https://wa.me/918434057242?text=${encodeURIComponent(msg)}`);
        });
    } catch(e) {}
}
