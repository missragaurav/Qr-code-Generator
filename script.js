const qrText = document.getElementById('qr-text');
const size = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
let qrCode;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    qrContainer.innerHTML = '';
    
    const text = qrText.value.trim();
    const qrSize = parseInt(size.value);

    if (text.length === 0) {
        alert('Please enter valid text or a URL');
        return;
    }

    qrCode = new QRCode(qrContainer, {
        text: text,
        width: qrSize,
        height: qrSize,
        correctLevel: QRCode.CorrectLevel.H  
    });

    setTimeout(() => {
        const img = qrContainer.querySelector('img');
        if (img) {
            downloadBtn.href = img.src;
            downloadBtn.download = 'qr-code.png';
        }
    }, 500);  
});
