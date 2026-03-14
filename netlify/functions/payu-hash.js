const crypto = require('crypto');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body);
        // Map potential camelCase or lowercase keys from frontend
        const txnId = body.txnId || body.txnid;
        const amount = body.amount;
        const productInfo = body.productInfo || body.productinfo;
        const firstName = body.firstName || body.firstname;
        const email = body.email;
        const phone = body.phone;

        // Use Merchant Key and Salt from Environment Variables
        const key = process.env.PAYU_MERCHANT_KEY || 'YOUR_MERCHANT_KEY';
        const salt = process.env.PAYU_SALT || 'YOUR_MERCHANT_SALT';

        // Check if required fields are present
        if (!txnId || !amount || !productInfo || !firstName || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields for hash generation' })
            };
        }

        // PayU Hash Format: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
        // Using empty strings for UDFs as they are often optional
        const hashString = `${key}|${txnId}|${amount}|${productInfo}|${firstName}|${email}|||||||||||${salt}`;
        const hash = crypto.createHash('sha512').update(hashString).digest('hex');

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hash: hash })
        };
    } catch (error) {
        console.error('Hash Generation Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error during hash generation' })
        };
    }
};
