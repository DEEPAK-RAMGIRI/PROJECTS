const form = document.getElementById('QrForm');
const urlInput = document.getElementById('urlinput');
const qrImage = document.getElementById('qrImage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = urlInput.value;
    try {
        const response = await fetch('/api/generate-qr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        if (!response.ok) {
            throw new Error('Failed to generate QR code');
        }

        const data = await response.json();
        qrImage.src = data.qrPath;
    } catch (err) {
        console.error(err);
        alert('Something went wrong while generating QR code.');
    }
});

