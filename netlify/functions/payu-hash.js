const crypto = require('crypto');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body);
        const txnId = body.txnId || body.txnid;
        const amount = body.amount;
        const productInfo = body.productInfo || body.productinfo;
        const firstName = body.firstName || body.firstname;
        const email = body.email;
        const phone = body.phone;

        // Use Merchant Key and Salt from Environment Variables
        // Defaulting to the dummy keys if not set, but they should be set in Netlify
        const key = process.env.PAYU_MERCHANT_KEY || '6GvYsh';
        const salt = process.env.PAYU_SALT || 'p2B6t7Yq';

        // Check if required fields are present
        if (!txnId || !amount || !productInfo || !firstName || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields for hash generation' })
            };
        }

        // PayU Hash Format: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
        const hashString = `${key}|${txnId}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${salt}`;
        const hash = crypto.createHash('sha512').update(hashString).digest('hex');

        return {
            statusCode: 200,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // For better compatibility
            },
            body: JSON.stringify({ 
                hash: hash,
                key: key // Return the key so frontend can use it
            })
        };
    } catch (error) {
        console.error('Hash Generation Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error during hash generation' })
        };
    }
};
