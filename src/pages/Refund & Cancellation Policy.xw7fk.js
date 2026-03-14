// Narayani Water Park - Refund & Cancellation Policy

$w.onReady(function () {
    try {
        $w('#refundTitle').hide();
        setTimeout(() => {
            $w('#refundTitle').show('fade', { duration: 500 });
        }, 200);
    } catch(e) {}
    
    // Contact for refund
    try {
        $w('#refundContactBtn').onClick(() => {
            wixLocation.to('/contact');
        });
    } catch(e) {}
});

/*
REFUND & CANCELLATION CONTENT FOR WIX EDITOR:
===============================================

NARAYANI WATER PARK - REFUND & CANCELLATION POLICY

CANCELLATION POLICY:
--------------------
• 48+ hours before visit date: 90% refund
• 24-48 hours before visit date: 50% refund
• Less than 24 hours: No refund

REFUND PROCESS:
---------------
1. Email: info@narayaniwaterpark.com with Booking ID
2. Call: 8434057242 (Mon-Sun, 10AM-6PM)
3. Refunds processed within 5-7 business days
4. Refund to original payment method only

SPECIAL CIRCUMSTANCES:
----------------------
• Rain/Bad Weather: Free rescheduling to any available date
• Park Closure: Full refund or credit for future visit
• Technical Issues: Full refund guaranteed

CONTACT FOR REFUNDS:
--------------------
Phone: 8434057242
Email: info@narayaniwaterpark.com
Timing: 10:00 AM - 6:00 PM (All days)
*/
