// Contact form — stores in Supabase OR falls back to logging
// Uses native fetch (Node 18+, available on Netlify)

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body || '{}');

    if (!name || !phone || !message) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Name, phone, and message are required' })
      };
    }

    // Log the contact (always works even without Supabase)
    console.log(`=== Contact Form Submission ===
Name:    ${name}
Phone:   ${phone}
Email:   ${email || 'N/A'}
Subject: ${subject || 'General'}
Message: ${message}
Time:    ${new Date().toISOString()}
==============================`);

    // Try to save to Supabase if configured
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const resp = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ name, email, phone, subject, message })
        });

        if (!resp.ok) {
          const err = await resp.text();
          console.error('Supabase insert error:', err);
        } else {
          console.log('Saved to Supabase successfully');
        }
      } catch (dbErr) {
        console.error('Supabase connection failed:', dbErr.message);
        // Don't fail the whole request — form still submitted
      }
    } else {
      console.warn('Supabase not configured — contact logged but not stored in DB');
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true, message: 'Message received! We will contact you soon.' })
    };

  } catch (err) {
    console.error('Contact Form Error:', err.message);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Server error. Please try WhatsApp instead.' })
    };
  }
};
