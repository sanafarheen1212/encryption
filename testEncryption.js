const { encrypt, decrypt } = require('../encryption'); // adjust the path if necessary

require('dotenv').config(); // Ensure the environment variables are loaded

// Test if the encryption key is properly loaded
console.log('Encryption Key:', process.env.ENCRYPTION_KEY);

// Sample text to encrypt
const sampleText = 'Hello, World!';
console.log('Original Text:', sampleText);

// Encrypt the sample text
const encryptedText = encrypt(sampleText);
console.log('Encrypted Text:', encryptedText);

// Decrypt the encrypted text
const decryptedText = decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);
