document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'Aset/Oca.1.jpeg',
        'Aset/Oca.2.jpeg',
        'Aset/Oca.3.jpeg',
        'Aset/Oca.4.jpeg',
        'Aset/Oca.5.jpeg',
        'Aset/Oca.6.jpeg',
        'Aset/Oca.7.jpeg',
        'Aset/Oca.8.jpeg',
        'Aset/Oca.9.jpeg',
        'Aset/Oca.10.jpeg',
        'Aset/Oca.11.jpeg',
        'Aset/Oca.12.jpeg',
        'Aset/Oca.13.jpeg',
        'Aset/Oca.14.jpeg',
        'Aset/Oca.15.jpeg',
        'Aset/Oca.16.jpeg',
    ];
    
    let currentIndex = 0;
    const slideImage = document.getElementById('slideImage');

    const updateImage = () => {
        slideImage.src = images[currentIndex];
        slideImage.style.opacity = 0;
        setTimeout(() => {
            slideImage.style.opacity = 1;
        }, 100); // Waktu transisi gambar
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    };

    // Perubahan gambar otomatis setiap 5 detik
    setInterval(nextImage, 5000); // 5000 ms = 5 detik
});
