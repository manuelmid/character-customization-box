const carouselSlide = document.querySelector('#carousel-slider');
const carouselBoxs = document.querySelectorAll('#carousel-slider .card-1, .card-2, .card-3, .card-4');

//BUTTONS

const prevBtn = document.querySelector('#prvBtn');
const nextBtn = document.querySelector('#nextBtn');
let tittleText = document.getElementById('tittleText');

let faceCtn = document.querySelector('.face-1');
let headCtn = document.getElementById('head');

const headCt = document.createElement('img');


//COUNTER

let counter = 1;
const size = carouselBoxs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/*PRUEBA*/
let carta = 'face-1';

faceCtn.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    headCt.src = `./img/faces/${carta}.png`;
    headCt.classList.add('carta');
    headCtn.append(headCt);
});

/*PRUEBA*/

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
        titleContainer.innerText = "BODY";
    } else if (currentSize === -897) {
        titleContainer.innerText = "LEGS";
    } else if (currentSize === -1196) {
        titleContainer.innerText = "SHOES";
    } else {
        titleContainer.innerText = "FACE";
    }
});

prevBtn.addEventListener('click', function (ev) {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.1ms ease-in-out";
    counter--;
    var currentSize = (-size * counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(currentSize);
    var titleContainer = ev.target;
    titleContainer = titleContainer.offsetParent.querySelector('#tittleText');
    if (currentSize === -0) {
        titleContainer.innerText = "SHOES";
    } else if (currentSize === -897) {
        titleContainer.innerText = "LEGS";
    }
     else if (currentSize === -598) {
        titleContainer.innerText = "BODY";
    }
    else {
        titleContainer.innerText = "FACE"
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