# Wix Domain & Deployment Guide

This guide explains how to take the code for **Narayani Waterpark** and make it live using your existing Wix domain.

## 1. Choosing a Hosting Provider
Since this is a custom-coded website (HTML, CSS, JS, Node.js), it cannot be hosted directly inside the Wix "Drag & Drop" editor. You need a standard web host.

**Recommended Options:**
*   **Vercel / Netlify (Easiest)**: Great for the frontend.
*   **Hostinger / Bluehost**: Standard shared hosting with Node.js support.
*   **Heroku / Render**: Good for the Node.js backend integration.

## 2. Deploying the Code
1.  **Upload Files**: Use FTP or Git to upload the `website` folder (frontend) and `server.js` (backend) to your host.
2.  **Environment Variables**: If using the backend, ensure you set your `PAYU_KEY` and `PAYU_SALT` in the host's environment settings.
3.  **Start the Server**: Run `npm install` and then `npm start` (or use a process manager like PM2).

## 3. Connecting Your Wix Domain
Once the site is hosted elsewhere (e.g., on Vercel), follow these steps in your **Wix Account**:

1.  Go to **Domains** in your Wix Dashboard.
2.  Select **Manage Domain**.
3.  Choose **DNS Settings**.
4.  **Option A: Pointing (Recommended)**:
    *   Find the **A Record** (Host: `@`) and point it to your new hosting's IP address.
    *   Find the **CNAME Record** (Host: `www`) and point it to your new host's domain alias (e.g., `narayani.vercel.app`).
5.  Wait for **Propagation** (usually 1-2 hours, up to 48 hours).

## 4. Handling the Database
Currently, the site is dynamic but doesn't store bookings in a permanent database (it uses memory and prepares email confirmation).

**To add a real database:**
1.  **Firebase (NoSQL)**: Easy to integrate without a server.
2.  **MongoDB / Supabase**: Excellent for storing user booking details, ticket IDs, and payment status permanently.
3.  **Update `server.js`**: In the `/api/payu/success` route, add a function to `db.collection('bookings').add(paymentData)`.

---
*For any technical assistance during deployment, contact your developer.*
