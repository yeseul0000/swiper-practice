const data = [
    {
        "id": 1,
        "src": "img1.jpeg"
    },
    {
        "id": 2,
        "src": "img2.jpeg"
    },
    {
        "id": 3,
        "src": "img3.jpeg"
    }
];

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const navigation = document.querySelector('.navigation');
const visualImages = document.querySelectorAll('li img');
let activeIndex = 0;

function movePrevSlides() {
    if (activeIndex === 0) {
        activeIndex = data.length - 1;
    } else {
        activeIndex--;
    }
    updateVisual();
}

function moveNextSlides() {
    if (activeIndex === (data.length - 1)) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    updateVisual();
}

function updateVisual() {
    visualImages.forEach((img, index) => {
        if (index === activeIndex) {
            img.src = `/src/assets/${data[activeIndex].src}`;
        }
    });
}

prev.addEventListener('click', movePrevSlides);
next.addEventListener('click', moveNextSlides);
