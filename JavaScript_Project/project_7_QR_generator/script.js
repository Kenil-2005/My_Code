const input = document.getElementById('inputUrl');
const sizes = document.getElementById('selectSize');
const qrCode = document.querySelector('.code-section');
const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateBtnQrCode();
    console.log('kenil pansara');

})


function generateBtnQrCode() {
    const size = parseInt(sizes.value);

    // Clear previous QR code
    qrCode.innerHTML = "";

    var qr = new QRCode(qrCode, {
        text: input.value,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}

downloadBtn.addEventListener('click', () => {
    let qrImg = document.querySelector('.code-section img');

    if (qrImg !== null) {
        let imgAttr = qrImg.getAttribute('src');
        downloadBtn.setAttribute("href", imgAttr);
        downloadBtn.setAttribute("download", "qrcode.png");
    } else {
        let canvas = document.querySelector('.code-section canvas');
        if (canvas) {
            let imgAttr = qrImg.getAttribute('src');
            downloadBtn.setAttribute("href", imgAttr);
            downloadBtn.setAttribute("download", "qrcode.png");
        } else {
            alert("Please generateBtnBtn a QR code first");
        }
        // downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }

    // // if we use button instad of anchor tag
    // downloadBtn.addEventListener('click', () => {
    //     let qrImg = document.querySelector('.code-section img');
    //
    //     let downloadImage = (dataUrl, filename) => {
    //         const a = document.createElement('a');
    //         a.href = dataUrl;
    //         a.download = filename;
    //         document.body.appendChild(a);
    //         a.click();
    //         document.body.removeChild(a);
    //     };
    //
    //     if (qrImg) {
    //         let imgAttr = qrImg.getAttribute('src');
    //         downloadImage(imgAttr, "qrcode.png");
    //     } else {
    //         let canvas = document.querySelector('.code-section canvas');
    //         if (canvas) {
    //             let imgAttr = canvas.toDataURL("image/png");
    //             downloadImage(imgAttr, "qrcode.png");
    //         } else {
    //             alert("Please generate a QR code first.");
    //         }
    //     }
    // });
    
})