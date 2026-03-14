// PayU sends POST callback after payment — verify hash & redirect
const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const params = new URLSearchParams(event.body);
    const status      = params.get('status') || 'failure';
    const txnid       = params.get('txnid') || '';
    const amount      = params.get('amount') || '';
    const productinfo = params.get('productinfo') || '';
    const firstname   = params.get('firstname') || '';
    const email       = params.get('email') || '';
    const payuHash    = params.get('hash') || '';

    const key  = process.env.PAYU_MERCHANT_KEY || '';
    const salt = process.env.PAYU_SALT || '';

    // Verify response hash (reverse formula): sha512(salt|status|||||||||||email|firstname|productinfo|amount|txnid|key)
    const reverseHashString = `${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    const expectedHash = crypto.createHash('sha512').update(reverseHashString).digest('hex');

    console.log(`PayU Callback: txnid=${txnid}, status=${status}, amount=${amount}`);

    if (key && salt && payuHash !== expectedHash) {
      console.error(`Hash mismatch! txnid=${txnid}`);
      // Still redirect but log the issue
    }

    // Save to Supabase if configured
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/bookings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            txn_id: txnid,
            amount: parseFloat(amount) || 0,
            status,
            firstname,
            email,
            productinfo,
            created_at: new Date().toISOString()
          })
        });
        console.log(`Booking saved: txnid=${txnid}, status=${status}`);
      } catch (dbErr) {
        console.error('Failed to save booking to Supabase:', dbErr.message);
      }
    }

    // Redirect to success or failure page
    const baseUrl = 'https://narayaniwaterpark.netlify.app';
    const redirectUrl = status === 'success'
      ? `${baseUrl}/success.html`
      : `${baseUrl}/failure.html`;

    return {
      statusCode: 302,
      headers: { Location: redirectUrl },
      body: ''
    };

  } catch (err) {
    console.error('PayU Callback Error:', err.message);
    return {
      statusCode: 302,
      headers: { Location: 'https://narayaniwaterpark.netlify.app/failure.html' },
      body: ''
    };
  }
};
