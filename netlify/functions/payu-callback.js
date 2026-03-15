// PayU sends POST callback after payment — verify hash, save booking, send ticket email
const crypto = require('crypto');

// Generate unique Booking ID
function generateBookingId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let random = '';
  for (let i = 0; i < 6; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const d = new Date();
  const dateStr = d.getFullYear().toString() +
    String(d.getMonth() + 1).padStart(2, '0') +
    String(d.getDate()).padStart(2, '0');
  return `NWP-${dateStr}-${random}`;
}

// QR Code URL (Google Charts)
function getQRUrl(text) {
  return `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(text)}&choe=UTF-8`;
}

// Format date in Hindi style
function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  } catch(e) { return dateStr; }
}

// HTML Ticket Template
function generateTicketHTML({ bookingId, name, email, phone, visitDate, adults, children, amount, txnId }) {
  const ticketColor = '#1a56db';
  const adultCount = parseInt(adults) || 0;
  const childCount = parseInt(children) || 0;
  const ticketLine = [
    adultCount > 0 ? `${adultCount} Adult${adultCount > 1 ? 's' : ''}` : '',
    childCount > 0 ? `${childCount} Child${childCount > 1 ? 'ren' : ''}` : ''
  ].filter(Boolean).join(' + ') || '1 Ticket';

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><style>
body{font-family:Arial,sans-serif;background:#f0f4ff;margin:0;padding:20px}
.wrap{max-width:560px;margin:0 auto}
.ticket{background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.15)}
.hdr{background:linear-gradient(135deg,#1a56db,#0ea5e9);color:white;padding:28px;text-align:center}
.hdr h1{margin:0;font-size:24px}
.hdr p{margin:5px 0 0;opacity:.85;font-size:14px}
.badge{background:#22c55e;color:white;border-radius:20px;padding:4px 16px;display:inline-block;margin-top:10px;font-size:12px;font-weight:bold}
.body{padding:28px}
.bid-box{background:#eff6ff;border:2px dashed #3b82f6;border-radius:12px;padding:15px;text-align:center;margin-bottom:22px}
.bid-box .lbl{color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:1px}
.bid-box .id{color:#1d4ed8;font-size:24px;font-weight:bold;letter-spacing:3px;margin:6px 0}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px}
.item .lbl{color:#9ca3af;font-size:11px;text-transform:uppercase;letter-spacing:1px}
.item .val{color:#111827;font-size:14px;font-weight:600;margin-top:3px}
.amt{background:#f0fdf4;border-left:4px solid #22c55e;padding:12px 15px;border-radius:8px;margin-bottom:18px}
.amt .paid{color:#15803d;font-size:18px;font-weight:bold}
.amt .tid{color:#9ca3af;font-size:11px;margin-top:3px}
hr{border:none;border-top:2px dashed #e5e7eb;margin:18px 0}
.qr{text-align:center;padding:10px 0}
.qr img{width:150px;height:150px}
.qr p{color:#6b7280;font-size:12px;margin-top:6px}
.ftr{background:#f9fafb;padding:18px 28px;border-top:1px solid #e5e7eb}
.ftr ul{color:#374151;font-size:12px;padding-left:18px;margin:8px 0}
.ftr li{margin-bottom:5px}
.info{text-align:center;color:#9ca3af;font-size:11px;margin-top:12px}
</style></head>
<body><div class="wrap"><div class="ticket">
<div class="hdr">
  <h1>&#127905; Narayani Waterpark</h1>
  <p>Bettiah, Bihar &mdash; Bihar's #1 Water Park</p>
  <span class="badge">&#10003; CONFIRMED TICKET</span>
</div>
<div class="body">
  <div class="bid-box">
    <div class="lbl">Booking ID</div>
    <div class="id">${bookingId}</div>
    <div style="color:#6b7280;font-size:11px">Gate par yeh ID dikhayein</div>
  </div>
  <div class="grid">
    <div class="item"><div class="lbl">Visitor Name</div><div class="val">${name}</div></div>
    <div class="item"><div class="lbl">Mobile</div><div class="val">${phone || 'N/A'}</div></div>
    <div class="item"><div class="lbl">Visit Date</div><div class="val">${formatDate(visitDate)}</div></div>
    <div class="item"><div class="lbl">Tickets</div><div class="val">${ticketLine}</div></div>
  </div>
  <div class="amt">
    <div style="color:#6b7280;font-size:11px">Amount Paid</div>
    <div class="paid">&#8377;${amount} &mdash; PAID &#10003;</div>
    <div class="tid">Transaction ID: ${txnId}</div>
  </div>
  <hr>
  <div class="qr">
    <img src="${getQRUrl(bookingId)}" alt="QR Code">
    <p>Entry ke liye gate par yeh QR scan karein</p>
  </div>
</div>
<div class="ftr">
  <strong style="font-size:13px">Important Instructions:</strong>
  <ul>
    <li>Yeh ticket sirf <strong>${formatDate(visitDate)}</strong> ko valid hai</li>
    <li>Park timing: 10:00 AM &ndash; 6:00 PM</li>
    <li>Gate par Booking ID ya QR Code dikhayein</li>
    <li>Ticket non-transferable hai</li>
  </ul>
  <div class="info">&#128205; Opp. R.L. International School, Pipra, Bettiah, Bihar<br>&#128222; +91 8434057242 &nbsp;|&nbsp; &#127760; narayaniwaterpark.com</div>
</div>
</div></div></body></html>`;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const BASE_URL = 'https://narayaniwaterpark.com';

  try {
    const params = new URLSearchParams(event.body);
    const status      = params.get('status')      || 'failure';
    const txnid       = params.get('txnid')       || '';
    const amount      = params.get('amount')      || '';
    const productinfo = params.get('productinfo') || '';
    const firstname   = params.get('firstname')   || '';
    const email       = params.get('email')       || '';
    const payuHash    = params.get('hash')        || '';
    const udf1        = params.get('udf1')        || ''; // visit_date
    const udf2        = params.get('udf2')        || ''; // adults
    const udf3        = params.get('udf3')        || ''; // children
    const udf4        = params.get('udf4')        || ''; // phone
    const key         = process.env.PAYU_MERCHANT_KEY || '';
    const salt        = process.env.PAYU_SALT || '';

    // Verify PayU hash
    const reverseHashStr = `${salt}|${status}|${udf4}|${udf3}|${udf2}|${udf1}||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    const expectedHash = crypto.createHash('sha512').update(reverseHashStr).digest('hex');
    console.log(`PayU Callback: txnid=${txnid}, status=${status}, amount=${amount}`);

    if (status !== 'success') {
      return {
        statusCode: 302,
        headers: { Location: `${BASE_URL}/failure.html?txn=${txnid}` },
        body: ''
      };
    }

    // Generate unique Booking ID
    const bookingId = generateBookingId();

    // Save to Supabase
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
            booking_id: bookingId,
            amount: parseFloat(amount) || 0,
            status: 'success',
            name: firstname,
            email,
            phone: udf4,
            visit_date: udf1 || null,
            adults: parseInt(udf2) || 0,
            children: parseInt(udf3) || 0,
            entry_status: 'VALID',
            created_at: new Date().toISOString()
          })
        });
        console.log(`Booking saved: bookingId=${bookingId}, txnid=${txnid}`);
      } catch (dbErr) {
        console.error('Supabase save error:', dbErr.message);
      }
    }

    // Send ticket email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey && email) {
      try {
        const ticketHTML = generateTicketHTML({
          bookingId, name: firstname, email,
          phone: udf4, visitDate: udf1,
          adults: udf2, children: udf3,
          amount, txnId: txnid
        });
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Narayani Waterpark <tickets@narayaniwaterpark.com>',
            to: [email],
            subject: `Your Ticket is Ready! Booking ID: ${bookingId} | Narayani Waterpark`,
            html: ticketHTML
          })
        });
        if (emailRes.ok) {
          console.log(`Ticket email sent to ${email}, bookingId=${bookingId}`);
        } else {
          const errText = await emailRes.text();
          console.error('Resend error:', errText);
        }
      } catch (emailErr) {
        console.error('Email send error:', emailErr.message);
      }
    }

    // Redirect to success page with booking details
    return {
      statusCode: 302,
      headers: {
        Location: `${BASE_URL}/success.html?booking=${bookingId}&name=${encodeURIComponent(firstname)}&txn=${txnid}`
      },
      body: ''
    };

  } catch (err) {
    console.error('PayU Callback Error:', err.message);
    return {
      statusCode: 302,
      headers: { Location: `${BASE_URL}/failure.html` },
      body: ''
    };
  }
};
