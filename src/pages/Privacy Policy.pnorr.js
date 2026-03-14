// Narayani Water Park - Privacy Policy Page

$w.onReady(function () {
    // Simple page - content managed via Wix editor
    // Animate page title
    try {
        $w('#privacyTitle').hide();
        setTimeout(() => {
            $w('#privacyTitle').show('fade', { duration: 500 });
        }, 200);
    } catch(e) {}
    
    // Set last updated date
    try {
        $w('#lastUpdated').text = 'Last Updated: March 2026';
    } catch(e) {}
});

/*
PRIVACY POLICY CONTENT FOR WIX EDITOR:
========================================

NARAYANI WATER PARK PRIVACY POLICY

Last Updated: March 2026

1. INFORMATION WE COLLECT
   - Name, Phone Number, Email Address (for booking)
   - Visit preferences and ticket selections
   - Payment information (processed securely via PayU)

2. HOW WE USE YOUR INFORMATION
   - To process and confirm ticket bookings
   - To send you booking confirmations and updates
   - To improve our services and customer experience
   - To communicate offers and seasonal updates

3. INFORMATION SHARING
   - We do NOT sell your personal information
   - Payment data is securely processed by PayU
   - We may share information with our service partners

4. DATA SECURITY
   - All data is encrypted and stored securely
   - Payment transactions use SSL/TLS encryption
   - We follow industry-standard security practices

5. YOUR RIGHTS
   - Access your personal data
   - Request correction or deletion of your data
   - Opt-out of marketing communications

6. COOKIES
   - We use cookies to improve website experience
   - You can disable cookies in browser settings

7. CONTACT US
   Email: info@narayaniwaterpark.com
   Phone: 8434057242
   Address: Opp. R.L. International School, Pipra, Bettiah, Bihar

By using our website and services, you agree to this Privacy Policy.
*/
