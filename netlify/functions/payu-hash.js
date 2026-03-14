const crypto = require('crypto');

// CORS headers for all responses
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
    const body = JSON.parse(event.body || '{}');
    const txnId       = body.txnId || body.txnid || '';
    const amount      = body.amount || '';
    const productInfo = body.productInfo || body.productinfo || '';
    const firstName   = body.firstName || body.firstname || '';
    const email       = body.email || '';

    // Read from Netlify Environment Variables (set in Netlify Dashboard → Site Settings → Environment)
    const key  = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_SALT;

    if (!key || !salt) {
      console.error('PAYU_MERCHANT_KEY or PAYU_SALT environment variable not set!');
      return {
        statusCode: 500,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Payment configuration missing. Please contact park staff.' })
      };
    }

    if (!txnId || !amount || !productInfo || !firstName || !email) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Missing required fields: txnId, amount, productInfo, firstName, email' })
      };
    }

    // PayU Hash Formula: sha512(key|txnid|amount|productinfo|firstname|email|udf1|...|udf10|salt)
    const hashString = `${key}|${txnId}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${salt}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    console.log(`PayU Hash generated for txnId: ${txnId}, amount: ${amount}`);

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ hash, key })
    };

  } catch (err) {
    console.error('Hash Generation Error:', err.message);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Server error during hash generation' })
    };
  }
};
