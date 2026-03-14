exports.handler = async (event, context) => {
  // PayU sends a POST request with the transaction status
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Parse the url-encoded body from PayU
  const body = new URLSearchParams(event.body);
  const status = body.get('status');
  const txnid = body.get('txnid');
  const amount = body.get('amount');
  const hash = body.get('hash');

  // TODO: Verify hash here using Merchant Salt for production security

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    // Update booking status in Supabase
    await fetch(`${supabaseUrl}/rest/v1/bookings?txn_id=eq.${txnid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      },
      body: JSON.stringify({ status: status })
    });
  }

  // Redirect back to website with result
  const redirectUrl = status === 'success' ? '/success.html' : '/failure.html';
  
  return {
    statusCode: 302,
    headers: {
      Location: redirectUrl,
    },
    body: '',
  };
};
