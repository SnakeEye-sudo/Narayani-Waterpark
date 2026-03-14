// Narayani Water Park - Contact Page

import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import { sendEmail } from 'backend/emailService';

$w.onReady(function () {
    initContactPage();
    initContactForm();
    initMapSection();
    initQuickContacts();
});

// ============================================
// CONTACT PAGE SETUP
// ============================================
function initContactPage() {
    // Page entrance animations
    try {
        $w('#contactHeroTitle').hide();
        $w('#contactHeroSubtitle').hide();
        
        setTimeout(() => {
            $w('#contactHeroTitle').show('slide', { duration: 700, direction: 'bottom' });
        }, 200);
        
        setTimeout(() => {
            $w('#contactHeroSubtitle').show('fade', { duration: 600 });
        }, 700);
    } catch(e) {}
    
    // Set page info
    try {
        $w('#contactAddress').text = 'Opp. R.L. International School, Pipra, Bettiah, Bihar';
        $w('#contactPhone').text = '+91 8434057242';
        $w('#contactHours').text = 'Monday - Sunday: 10:00 AM to 6:00 PM';
        $w('#contactEmail').text = 'info@narayaniwaterpark.com';
        $w('#contactWebsite').text = 'www.narayaniwaterpark.com';
    } catch(e) {}
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    // Form validation and submission
    try {
        $w('#contactFormSubmit').onClick(async () => {
            await handleFormSubmit();
        });
        
        // Real-time validation
        $w('#cfName').onBlur(() => validateName());
        $w('#cfPhone').onBlur(() => validatePhone());
        $w('#cfEmail').onBlur(() => validateEmail());
        $w('#cfMessage').onBlur(() => validateMessage());
    } catch(e) {}
}

async function handleFormSubmit() {
    // Validate all fields
    const nameValid = validateName();
    const phoneValid = validatePhone();
    const emailValid = validateEmail();
    const messageValid = validateMessage();
    
    if (!nameValid || !phoneValid || !messageValid) {
        return;
    }
    
    try {
        $w('#contactFormSubmit').disable();
        $w('#formLoader').show();
        $w('#formError').hide();
        $w('#formSuccess').hide();
        
        const formData = {
            name: $w('#cfName').value,
            phone: $w('#cfPhone').value,
            email: $w('#cfEmail').value || 'Not provided',
            subject: $w('#cfSubject').value || 'General Inquiry',
            message: $w('#cfMessage').value,
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        };
        
        // Option 1: WhatsApp (immediate)
        const whatsappMsg = `
*New Contact Form Message*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
Time: ${formData.timestamp}`.trim();
        
        $w('#formLoader').hide();
        $w('#contactFormSubmit').enable();
        
        // Show success
        $w('#formSuccess').text = '✓ Message sent! We will contact you within 24 hours.';
        $w('#formSuccess').show('fade');
        
        // Clear form
        clearContactForm();
        
        // Also open WhatsApp with the message
        setTimeout(() => {
            wixWindow.openUrl(`https://wa.me/918434057242?text=${encodeURIComponent(whatsappMsg)}`);
        }, 1500);
        
    } catch(e) {
        $w('#formLoader').hide();
        $w('#contactFormSubmit').enable();
        $w('#formError').text = 'Something went wrong. Please call us directly: 8434057242';
        $w('#formError').show();
    }
}

function validateName() {
    try {
        const name = $w('#cfName').value.trim();
        if (!name || name.length < 2) {
            $w('#cfName').style.borderColor = '#dc3545';
            $w('#nameError').text = 'Please enter your name';
            $w('#nameError').show();
            return false;
        }
        $w('#cfName').style.borderColor = '#28a745';
        $w('#nameError').hide();
        return true;
    } catch(e) { return true; }
}

function validatePhone() {
    try {
        const phone = $w('#cfPhone').value.trim().replace(/\D/g, '');
        if (!phone || phone.length !== 10) {
            $w('#cfPhone').style.borderColor = '#dc3545';
            $w('#phoneError').text = 'Please enter valid 10-digit mobile number';
            $w('#phoneError').show();
            return false;
        }
        $w('#cfPhone').style.borderColor = '#28a745';
        $w('#phoneError').hide();
        return true;
    } catch(e) { return true; }
}

function validateEmail() {
    try {
        const email = $w('#cfEmail').value.trim();
        if (email && !email.includes('@')) {
            $w('#cfEmail').style.borderColor = '#dc3545';
            return false;
        }
        $w('#cfEmail').style.borderColor = '#28a745';
        return true;
    } catch(e) { return true; }
}

function validateMessage() {
    try {
        const msg = $w('#cfMessage').value.trim();
        if (!msg || msg.length < 10) {
            $w('#cfMessage').style.borderColor = '#dc3545';
            $w('#messageError').text = 'Please enter your message (min 10 characters)';
            $w('#messageError').show();
            return false;
        }
        $w('#cfMessage').style.borderColor = '#28a745';
        $w('#messageError').hide();
        return true;
    } catch(e) { return true; }
}

function clearContactForm() {
    try {
        $w('#cfName').value = '';
        $w('#cfPhone').value = '';
        $w('#cfEmail').value = '';
        $w('#cfSubject').value = '';
        $w('#cfMessage').value = '';
    } catch(e) {}
}

// ============================================
// MAP SECTION
// ============================================
function initMapSection() {
    // Get Directions button
    try {
        $w('#getDirectionsBtn').onClick(() => {
            wixWindow.openUrl(
                'https://www.google.com/maps/dir//Narayani+Water+Park,+Opp+RL+International+School,+Pipra,+Bettiah,+Bihar'
            );
        });
    } catch(e) {}
}

// ============================================
// QUICK CONTACT SECTION
// ============================================
function initQuickContacts() {
    // Call button
    try {
        $w('#callNowBtn').onClick(() => {
            wixWindow.openUrl('tel:+918434057242');
        });
    } catch(e) {}
    
    // WhatsApp button
    try {
        $w('#whatsappBtn').onClick(() => {
            const msg = 'Hello! I want to know more about Narayani Water Park.';
            wixWindow.openUrl(`https://wa.me/918434057242?text=${encodeURIComponent(msg)}`);
        });
    } catch(e) {}
    
    // Email button
    try {
        $w('#emailBtn').onClick(() => {
            wixWindow.openUrl('mailto:info@narayaniwaterpark.com');
        });
    } catch(e) {}
}
