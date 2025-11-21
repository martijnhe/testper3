const images = [
    "images/slideshow/img1.jpg",
    "images/slideshow/img2.jpg",
    "images/slideshow/img3.jpg"
];

let index = 0;
const slideshowImg = document.querySelector(".slideshow-image");

function showNextImage() {
    slideshowImg.src = images[index];
    index = (index + 1) % images.length;
}

showNextImage();
setInterval(showNextImage, 3000);
