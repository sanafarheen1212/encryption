const express = require('express');
const { encrypt, decrypt } = require('./encryption');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data
app.use(express.static('public')); 
// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Encryption Service. Use /encrypt and /decrypt for operations.');
});

// Endpoint for encryption
app.post('/encrypt', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send('No text provided');
    }
    try {
        const encryptedText = encrypt(text);
        res.json({ encrypted: encryptedText });
    } catch (error) {
        res.status(500).send('Encryption failed');
    }
});

// Endpoint for decryption
app.post('/decrypt', (req, res) => {
    const { encrypted } = req.body;
    if (!encrypted) {
        return res.status(400).send('No encrypted text provided');
    }
    try {
        const decryptedText = decrypt(encrypted);
        res.json({ decrypted: decryptedText });
    } catch (error) {
        res.status(500).send('Decryption failed');
    }
});

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
