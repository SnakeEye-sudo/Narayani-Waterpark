require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the main website
app.use(express.static(path.join(__dirname, 'website')));

// Serve public assets
app.use('/public_assets', express.static(path.join(__dirname, 'public_assets')));

/**
 * API: Generate PayU Hash
 * Matches main.js endpoint: /api/payu/hash
 */
app.post('/api/payu/hash', (req, res) => {
  const { txnId, amount, productInfo, firstName, email } = req.body;
  
  const key = process.env.PAYU_MERCHANT_KEY;
  const salt = process.env.PAYU_SALT;
  
  if (!key || !salt) {
    return res.status(500).json({ error: 'Merchant Key or Salt missing in server configuration.' });
  }

  // PayU Hash Formula: sha512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt)
  const hashString = `${key}|${txnId}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${salt}`;
  const hash = crypto.createHash('sha512').update(hashString).digest('hex');

  // Return both hash and key so main.js can populate the form
  res.json({ hash, key });
});

/**
 * API: Contact Form
 * Logs submission and returns success
 */
app.post('/api/contact', (req, res) => {
  const { name, phone, email, subject, message } = req.body;
  console.log(`Contact Form Submission:
    To: krishna.sangam11@gmail.com
    From: ${name} (${email})
    Phone: ${phone}
    Subject: ${subject}
    Message: ${message}
  `);
  res.json({ success: true, message: 'Message sent successfully.' });
});

// Fallback to index.html for SPA behavior
app.get('*path', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Narayani Waterpark Server running on http://localhost:${PORT}`);
});
