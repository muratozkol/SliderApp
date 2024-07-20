var models = [
    {
        name: 'BMW 418',
        image: 'img/bmw.jpg',
        link: 'https://www.bmw-motorrad.com.tr/tr/models/urban_mobility/ce04.html'
    },
    {
        name: 'Honda A2',
        image: 'img/honda.jpg',
        link: 'https://www.bmw-motorrad.com.tr/tr/models/urban_mobility/ce04.html'
    },
    {
        name: 'Mazda 12',
        image: 'img/mazda.jpg',
        link: 'https://www.bmw-motorrad.com.tr/tr/models/urban_mobility/ce04.html'
    },
    {
        name: 'Skoda f12',
        image: 'img/skoda.jpg',
        link: 'https://www.bmw-motorrad.com.tr/tr/models/urban_mobility/ce04.html'
    },
    {
        name: 'Volvo XC90',
        image: 'img/volvo.jpg',
        link: 'https://www.bmw-motorrad.com.tr/tr/models/urban_mobility/ce04.html'
    }
];

var index = 0;
var slaytCount = models.length;
showSlide(index);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = slaytCount - 1;
    }
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;
    if (index >= slaytCount) {
        index = 0; // son slaytı geçerse başa dön
    }
    showSlide(index);
    console.log(index);
});

function showSlide(index) {
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

function getRandomIndex() {
    return Math.floor(Math.random() * slaytCount);
}

function startSlideShow() {
    setTimeout(function() {
        index = getRandomIndex();
        showSlide(index);
        startSlideShow(); 
    }, 3000);
}

startSlideShow();
