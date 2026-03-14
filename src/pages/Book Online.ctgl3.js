// Narayani Water Park - Book Online Page

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import { calculateTotal, generateBookingId } from 'backend/emailService';

$w.onReady(function () {
    initBookingPage();
    setupTicketSelection();
    setupDatePicker();
    setupBookingForm();
});

// Pricing constants
const PRICES = {
    adult: 299,
    child: 199,
    senior: 199
};

let adultCount = 1;
let childCount = 0;
let seniorCount = 0;
let selectedDate = null;

// ============================================
// BOOKING PAGE SETUP
// ============================================
function initBookingPage() {
    try {
        // Page title animation
        $w('#bookingPageTitle').hide();
        setTimeout(() => {
            $w('#bookingPageTitle').show('slide', { duration: 600, direction: 'bottom' });
        }, 200);
    } catch(e) {}
    
    // Set initial total
    updateTotal();
    
    // Set min date to today
    const today = new Date();
    try {
        $w('#visitDate').minDate = today;
        
        // Highlight Grand Reopening date
        const reopeningDate = new Date('2026-03-15');
        if (today <= reopeningDate) {
            $w('#reopeningBanner').show();
            $w('#reopeningBanner').text = '🎉 15th March - Grand Reopening! Book now!';
        }
    } catch(e) {}
}

// ============================================
// TICKET SELECTION
// ============================================
function setupTicketSelection() {
    // Adult counter
    try {
        $w('#adultMinus').onClick(() => {
            if (adultCount > 0) {
                adultCount--;
                $w('#adultCountDisplay').text = String(adultCount);
                updateTotal();
            }
        });
        
        $w('#adultPlus').onClick(() => {
            if (adultCount < 20) {
                adultCount++;
                $w('#adultCountDisplay').text = String(adultCount);
                updateTotal();
            }
        });
    } catch(e) {}
    
    // Child counter
    try {
        $w('#childMinus').onClick(() => {
            if (childCount > 0) {
                childCount--;
                $w('#childCountDisplay').text = String(childCount);
                updateTotal();
            }
        });
        
        $w('#childPlus').onClick(() => {
            if (childCount < 20) {
                childCount++;
                $w('#childCountDisplay').text = String(childCount);
                updateTotal();
            }
        });
    } catch(e) {}
    
    // Senior counter
    try {
        $w('#seniorMinus').onClick(() => {
            if (seniorCount > 0) {
                seniorCount--;
                $w('#seniorCountDisplay').text = String(seniorCount);
                updateTotal();
            }
        });
        
        $w('#seniorPlus').onClick(() => {
            if (seniorCount < 10) {
                seniorCount++;
                $w('#seniorCountDisplay').text = String(seniorCount);
                updateTotal();
            }
        });
    } catch(e) {}
}

function updateTotal() {
    const subtotal = (adultCount * PRICES.adult) + 
                     (childCount * PRICES.child) + 
                     (seniorCount * PRICES.senior);
    
    const isWeekend = selectedDate ? [0, 6].includes(selectedDate.getDay()) : false;
    const total = isWeekend ? Math.round(subtotal * 1.1) : subtotal;
    
    try {
        $w('#adultSubtotal').text = `₹${(adultCount * PRICES.adult).toLocaleString('en-IN')}`;
        $w('#childSubtotal').text = `₹${(childCount * PRICES.child).toLocaleString('en-IN')}`;
        $w('#seniorSubtotal').text = `₹${(seniorCount * PRICES.senior).toLocaleString('en-IN')}`;
        
        if (isWeekend) {
            $w('#weekendSurcharge').show();
            $w('#weekendSurchargeText').text = `Weekend Surcharge (+10%): ₹${(total - subtotal).toLocaleString('en-IN')}`;
        } else {
            try { $w('#weekendSurcharge').hide(); } catch(e) {}
        }
        
        $w('#totalAmount').text = `₹${total.toLocaleString('en-IN')}`;
        $w('#checkoutBtn').label = `Proceed to Pay ₹${total.toLocaleString('en-IN')}`;
    } catch(e) {}
    
    return total;
}

// ============================================
// DATE PICKER
// ============================================
function setupDatePicker() {
    try {
        $w('#visitDate').onChange((event) => {
            selectedDate = event.target.value;
            
            const dateStr = new Date(selectedDate).toLocaleDateString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            $w('#selectedDateDisplay').text = `📅 Visiting on: ${dateStr}`;
            $w('#selectedDateDisplay').show();
            
            updateTotal();
            checkAvailability(selectedDate);
        });
    } catch(e) {}
}

async function checkAvailability(date) {
    try {
        $w('#availabilityMsg').text = '⏳ Checking availability...';
        $w('#availabilityMsg').show();
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        $w('#availabilityMsg').text = '✅ Slots available! Book now.';
        $w('#availabilityMsg').style.color = '#28a745';
    } catch(e) {}
}

// ============================================
// BOOKING FORM & CHECKOUT
// ============================================
function setupBookingForm() {
    try {
        $w('#checkoutBtn').onClick(async () => {
            await processCheckout();
        });
    } catch(e) {}
}

async function processCheckout() {
    // Validate inputs
    const name = getFieldValue('#visitorName');
    const phone = getFieldValue('#visitorPhone');
    const date = selectedDate;
    const totalTickets = adultCount + childCount + seniorCount;
    
    if (!name) {
        showError('Please enter your name');
        return;
    }
    
    if (!phone || phone.replace(/\D/g, '').length !== 10) {
        showError('Please enter valid 10-digit mobile number');
        return;
    }
    
    if (!date) {
        showError('Please select your visit date');
        return;
    }
    
    if (totalTickets === 0) {
        showError('Please select at least 1 ticket');
        return;
    }
    
    hideError();
    
    const total = updateTotal();
    const bookingId = 'NWP-' + Date.now().toString(36).toUpperCase();
    
    // Show loading
    try {
        $w('#checkoutBtn').disable();
        $w('#checkoutLoader').show();
    } catch(e) {}
    
    // ============================================
    // PayU PAYMENT INTEGRATION PLACEHOLDER
    // ============================================
    // TODO: Client will add PayU credentials and integrate
    // 
    // PayU Payment Flow:
    // 1. Generate hash on backend (NEVER on frontend)
    // 2. Redirect to PayU payment page
    // 3. On success: redirect to /thank-you-page?bookingId=xxx
    // 4. On failure: redirect back with error
    //
    // Backend hash formula:
    // sha512(key|txnid|amount|productinfo|firstname|email|udf1||||||||||SALT)
    //
    // const payuData = {
    //     key: 'MERCHANT_KEY',  // From PayU dashboard
    //     salt: 'MERCHANT_SALT', // From PayU dashboard
    //     txnid: bookingId,
    //     amount: total,
    //     productinfo: `Narayani WaterPark - ${adultCount}A ${childCount}C ${seniorCount}S`,
    //     firstname: name,
    //     phone: phone,
    //     email: getFieldValue('#visitorEmail') || 'guest@narayaniwaterpark.com',
    //     surl: 'https://www.narayaniwaterpark.com/thank-you-page',
    //     furl: 'https://www.narayaniwaterpark.com/book-online',
    //     udf1: bookingId,
    //     udf2: date,
    // };
    // 
    // Send to PayU integration API call here
    // ============================================
    
    // CURRENT: WhatsApp booking (until PayU is integrated)
    const visitDate = new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    
    const bookingMsg = `
🎟️ TICKET BOOKING REQUEST
==========================
Booking ID: ${bookingId}
Name: ${name}
Phone: ${phone}
Visit Date: ${visitDate}
Tickets: ${adultCount} Adult | ${childCount} Child | ${seniorCount} Senior
Total Amount: ₹${total.toLocaleString('en-IN')}
==========================
Narayani Water Park
📍 Opp. R.L. Int'l School, Pipra, Bettiah
⏰ 10:00 AM - 6:00 PM`.trim();
    
    try {
        $w('#checkoutLoader').hide();
        $w('#checkoutBtn').enable();
    } catch(e) {}
    
    // Show success with booking ID
    try {
        $w('#bookingSuccessBox').show('bounce');
        $w('#bookingIdDisplay').text = `Your Booking ID: ${bookingId}`;
        $w('#bookingSuccessMsg').text = 'Booking request sent! Our team will confirm via WhatsApp/call within 1 hour.';
    } catch(e) {}
    
    // Open WhatsApp for confirmation
    setTimeout(() => {
        wixWindow.openUrl(`https://wa.me/918434057242?text=${encodeURIComponent(bookingMsg)}`);
    }, 2000);
}

function getFieldValue(id) {
    try {
        return $w(id).value.trim();
    } catch(e) { return ''; }
}

function showError(msg) {
    try {
        $w('#bookingFormError').text = '⚠️ ' + msg;
        $w('#bookingFormError').show('fade', { duration: 300 });
    } catch(e) {}
}

function hideError() {
    try {
        $w('#bookingFormError').hide();
    } catch(e) {}
}
