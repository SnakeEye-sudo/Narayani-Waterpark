// Narayani Water Park - Gallery Page

import wixWindow from 'wix-window';
import wixMedia from 'wix-media-backend';

$w.onReady(function () {
    initGalleryPage();
    initVideoSection();
    initFilterBar();
});

// ============================================
// GALLERY PAGE SETUP
// ============================================
function initGalleryPage() {
    // Page entrance animation
    try {
        $w('#galleryPageTitle').hide();
        $w('#galleryPageSubtitle').hide();
        
        setTimeout(() => {
            $w('#galleryPageTitle').show('slide', { duration: 700, direction: 'bottom' });
        }, 200);
        
        setTimeout(() => {
            $w('#galleryPageSubtitle').show('fade', { duration: 600 });
        }, 700);
    } catch(e) {}
    
    // Gallery grid - all images from waterpark
    // Images should be uploaded to Wix Media Manager
    const galleryItems = [
        {
            src: 'wix:image://v1/grand_reopening_poster.jpg',
            title: 'Grand Reopening - 15th March',
            category: 'events'
        },
        {
            src: 'wix:image://v1/har_ride_mein_romanch.jpg',
            title: 'Har Ride Mein Ek Naya Romanch',
            category: 'rides'
        },
        {
            src: 'wix:image://v1/summer_fun_station.jpg',
            title: 'Is Garmi Ka Naya Fun Station',
            category: 'family'
        },
        {
            src: 'wix:image://v1/family_fun.jpg',
            title: 'Family Fun at Narayani',
            category: 'family'
        },
        {
            src: 'wix:image://v1/water_slides.jpg',
            title: 'Thrilling Water Slides',
            category: 'rides'
        },
        {
            src: 'wix:image://v1/wave_pool.jpg',
            title: 'Wave Pool Fun',
            category: 'rides'
        }
    ];
    
    // Set gallery data
    try {
        $w('#galleryProGallery').items = galleryItems.map(item => ({
            type: 'image',
            src: item.src,
            title: item.title
        }));
    } catch(e) {}
    
    // Gallery item click - fullscreen
    try {
        $w('#galleryProGallery').onItemClicked((event) => {
            wixWindow.openLightbox('gallery_lightbox', { item: event.item });
        });
    } catch(e) {}
}

// ============================================
// VIDEO SECTION
// ============================================
function initVideoSection() {
    // Park video showcase
    try {
        $w('#parkVideoPlayer').onPlay(() => {
            $w('#videoPlayOverlay').hide('fade', { duration: 300 });
        });
        
        $w('#parkVideoPlayer').onPause(() => {
            $w('#videoPlayOverlay').show('fade', { duration: 300 });
        });
        
        $w('#videoPlayOverlay').onClick(() => {
            $w('#parkVideoPlayer').play();
        });
    } catch(e) {}
}

// ============================================
// FILTER BAR
// ============================================
let activeFilter = 'all';

function initFilterBar() {
    const filters = [
        { id: '#filterBtnAll', value: 'all', label: 'All Photos' },
        { id: '#filterBtnRides', value: 'rides', label: 'Rides' },
        { id: '#filterBtnFamily', value: 'family', label: 'Family Fun' },
        { id: '#filterBtnEvents', value: 'events', label: 'Events' }
    ];
    
    filters.forEach(filter => {
        try {
            $w(filter.id).onClick(() => {
                activeFilter = filter.value;
                updateActiveFilter(filters, filter.id);
                applyGalleryFilter(filter.value);
            });
        } catch(e) {}
    });
    
    // Set default active
    updateActiveFilter(filters, '#filterBtnAll');
}

function updateActiveFilter(filters, activeId) {
    filters.forEach(f => {
        try {
            if (f.id === activeId) {
                $w(f.id).style.backgroundColor = '#0066cc';
                $w(f.id).style.color = '#ffffff';
            } else {
                $w(f.id).style.backgroundColor = '#f0f0f0';
                $w(f.id).style.color = '#333333';
            }
        } catch(e) {}
    });
}

function applyGalleryFilter(category) {
    // In Wix ProGallery, filtering is done via dataset or manual show/hide
    try {
        if (category === 'all') {
            $w('#galleryProGallery').show();
        }
        // Additional filtering logic would go here
    } catch(e) {}
}
