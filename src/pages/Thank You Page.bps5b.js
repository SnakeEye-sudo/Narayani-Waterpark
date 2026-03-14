// Narayani Water Park - Thank You Page
// Shown after successful booking

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';

$w.onReady(function () {
    // Get booking details from URL params or session
    const bookingId = wixLocation.query.bookingId || 'NWP-' + Date.now().toString(36).toUpperCase();
    
    // Display booking confirmation
    try {
        $w('#confirmBookingId').text = bookingId;
        $w('#confirmMessage').text = 'Aapki booking successful rahi! Narayani Water Park mein aapka swagat hai! 🎉';
    } catch(e) {}
    
    // Confetti animation (if Wix Animations available)
    try {
        $w('#thankYouIcon').hide();
        setTimeout(() => {
            $w('#thankYouIcon').show('bounce', { duration: 800 });
        }, 300);
    } catch(e) {}
    
    // Next Steps buttons
    try {
        $w('#viewGalleryBtn').onClick(() => wixLocation.to('/gallery'));
        $w('#backHomeBtn').onClick(() => wixLocation.to('/'));
        
        // Share on WhatsApp
        $w('#shareWhatsappBtn').onClick(() => {
            const shareMsg = `🎉 Maine Narayani Water Park ka ticket book kar liya! Booking ID: ${bookingId}. Tum bhi aao! 🌊 www.narayaniwaterpark.com`;
            wixWindow.openUrl(`https://wa.me/?text=${encodeURIComponent(shareMsg)}`);
        });
    } catch(e) {}
    
    // Park info reminder
    try {
        $w('#thankYouParkInfo').text = `
📍 Address: Opp. R.L. International School, Pipra, Bettiah, Bihar
⏰ Timing: 10:00 AM to 6:00 PM
📞 Contact: 8434057242
🌊 Wear comfortable swimwear | Bring sunscreen | Food available inside
        `.trim();
    } catch(e) {}
});
