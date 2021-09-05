const carouselSlide = document.querySelector('#carousel-slider');
const carouselBoxs = document.querySelectorAll('#carousel-slider .card-1, .card-2, .card-3, .card-4');

//BUTTONS

const prevBtn = document.querySelector('#prvBtn');
const nextBtn = document.querySelector('#nextBtn');
let tittleText = document.getElementById('tittleText');

//COUNTER

let counter = 1;
const size = carouselBoxs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//BUTTON LISTENERS

nextBtn.addEventListener('click', function (ev) {
    if (counter >= carouselBoxs.length - 1) return;
    carouselSlide.style.transition = "transform 0.1ms ease-in-out";
    counter++;
    var currentSize = (-size * counter);
    carouselSlide.style.transform = 'translateX(' + currentSize + 'px)';
    var titleContainer = ev.target;
    titleContainer = titleContainer.offsetParent.querySelector('#tittleText');
    if (currentSize === -598) {
        titleContainer.innerText = "Body";
    } else if (currentSize === -897) {
        titleContainer.innerText = "Legs";
    } else if (currentSize === -1196) {
        titleContainer.innerText = "Shoes";
    } else {
        titleContainer.innerText = "Face";
    }
});

prevBtn.addEventListener('click', function (ev) {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.1ms ease-in-out";
    counter--;
    var currentSize = (-size * counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    var titleContainer = ev.target;
    titleContainer = titleContainer.offsetParent.querySelector('#tittleText');
    if (currentSize === -299) {
        titleContainer.innerText = "SHOES";
    } else if (currentSize === -1196) {
        titleContainer.innerText = "G";
    }
     else if (currentSize === -0) {
        titleContainer.innerText = "H";
    }
});

carouselSlide.addEventListener('transitionend', function () {
    if (carouselBoxs[counter].id === 'lastClone') {
        carouselSlide.style.transform = "none";
        counter = carouselBoxs.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
    if (carouselBoxs[counter].id === 'firstClone') {
        carouselSlide.style.transform = "none";
        counter = carouselBoxs.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
});