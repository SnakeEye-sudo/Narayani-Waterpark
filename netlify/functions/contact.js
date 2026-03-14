const { createClient } = require('@supabase/supabase-client');

// Initialize Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL',
    process.env.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'
);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, phone, subject, message } = JSON.parse(event.body);

        if (!name || !phone || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Name, phone, and message are required' })
            };
        }

        // Store in Supabase
        const { data, error } = await supabase
            .from('contacts')
            .insert([{ name, email, phone, subject, message, created_at: new Date() }]);

        if (error) {
            console.error('Supabase Error:', error);
            // We still return success: false but log the error
            return {
                statusCode: 200, // Still return 200 but with error in body to allow frontend fallback
                body: JSON.stringify({ success: false, error: 'Failed to save to database' })
            };
        }

        // Optional: Send email notification here (e.g., via SendGrid or Postmark)

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ success: true, message: 'Message recorded successfully' })
        };
    } catch (error) {
        console.error('Contact Form Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
