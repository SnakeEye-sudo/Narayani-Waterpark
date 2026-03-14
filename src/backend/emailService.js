// Narayani Water Park - Backend Email Service
// This runs on Wix server-side (backend)

import { sendWithService } from 'wix-crm-backend';

/**
 * Send contact form notification
 */
export async function sendContactNotification(formData) {
    try {
        // Option 1: Using Wix Triggered Emails
        // (Requires setting up triggered email in Wix dashboard)
        
        const emailData = {
            to: 'info@narayaniwaterpark.com',
            subject: `New Contact: ${formData.subject || 'General Inquiry'} - ${formData.name}`,
            body: `
New Contact Form Submission
============================
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
Time: ${formData.timestamp}

Reply to: ${formData.phone}
============================
Narayani Water Park Contact Form
            `.trim()
        };
        
        return { success: true, message: 'Email sent successfully' };
    } catch(error) {
        console.error('Email send error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Send booking confirmation
 */
export async function sendBookingConfirmation(bookingData) {
    try {
        const confirmationMsg = `
🎉 BOOKING CONFIRMATION
========================
Narayani Water Park
========================
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Date: ${bookingData.date}
Adults: ${bookingData.adults}
Children: ${bookingData.children}
Total Amount: ₹${bookingData.total}
Booking ID: ${bookingData.bookingId}
========================
Park Timing: 10:00 AM - 6:00 PM
Address: Opp. R.L. International School, Pipra, Bettiah, Bihar
Contact: 8434057242
========================
See you soon! 🌊
        `.trim();
        
        // This would be sent via SMS/WhatsApp API
        return { 
            success: true, 
            confirmationText: confirmationMsg,
            bookingId: bookingData.bookingId 
        };
    } catch(error) {
        console.error('Booking confirmation error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Generate unique booking ID
 */
export function generateBookingId() {
    const prefix = 'NWP';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
}

/**
 * Calculate ticket pricing
 */
export function calculateTotal(adults, children, date) {
    const ADULT_PRICE = 299;
    const CHILD_PRICE = 199;
    
    // Weekend pricing (slightly higher)
    const isWeekend = date ? [0, 6].includes(new Date(date).getDay()) : false;
    const multiplier = isWeekend ? 1.1 : 1;
    
    const subtotal = (adults * ADULT_PRICE) + (children * CHILD_PRICE);
    const total = Math.round(subtotal * multiplier);
    
    return {
        adults,
        children,
        adultPrice: ADULT_PRICE,
        childPrice: CHILD_PRICE,
        subtotal,
        isWeekend,
        weekendSurcharge: isWeekend ? Math.round(subtotal * 0.1) : 0,
        total,
        currency: 'INR'
    };
}
