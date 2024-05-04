document.addEventListener('DOMContentLoaded', function() {
    const encryptForm = document.querySelector('form[action="/encrypt"]');
    const decryptForm = document.querySelector('form[action="/decrypt"]');

    encryptForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission
        const formData = new FormData(this);
        const text = formData.get('text');

        fetch('/encrypt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })
        .then(response => response.json())
        .then(data => {
            alert('Encrypted: ' + data.encrypted);  // Display the encrypted text
        })
        .catch(error => console.error('Error:', error));
    });

    decryptForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const encrypted = formData.get('encrypted');

        fetch('/decrypt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ encrypted })
        })
        .then(response => response.json())
        .then(data => {
            alert('Decrypted: ' + data.decrypted);  // Display the decrypted text
        })
        .catch(error => console.error('Error:', error));
    });
});

