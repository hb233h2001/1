'use strict';

{
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
    ];
    let currentIndex = 0;
    const mainImage = document.getElementById('main');
    mainImage.src = images[currentIndex];

    function showImage(index) {
        mainImage.src = images[index];
        const thumbnails = document.querySelectorAll('.thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
    }

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        const li = document.createElement('li');
        if (index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            showImage(index);
        });
        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    function nextImage() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= images.length) {
            nextIndex = 0;
        }
        showImage(nextIndex);
    }

    function prevImage() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = images.length - 1;
        }
        showImage(prevIndex);
    }

    const nextButton = document.getElementById('next');
    nextButton.addEventListener('click', () => {
        nextImage();
    });

    const prevButton = document.getElementById('prev');
    prevButton.addEventListener('click', () => {
        prevImage();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        }
    });
}
