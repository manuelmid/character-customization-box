const carouselSlide = document.querySelector('#carousel-slider');
const carouselBoxs = document.querySelectorAll('#carousel-slider .card-1, .card-2, .card-3, .card-4');
const headCtn = document.getElementById('head');
const bodyCtn = document.getElementById('body');
const legsCtn = document.getElementById('legs');
const shoesCtn = document.getElementById('shoes');
const imgCt = document.createElement('img');

//BUTTONS

const prevBtn = document.querySelector('#prvBtn');
const nextBtn = document.querySelector('#nextBtn');

//BUTTONS

let tittleText = document.getElementById('tittleText');


let faceOne = document.querySelector('.face-1');
let faceTwo = document.querySelector('.face-2');
let faceThree = document.querySelector('.face-3');
let faces = ['face-1', 'face-2', 'face-3'];

let bodyOne = document.querySelector('.face-1');
let bodyTwo = document.querySelector('.face-2');
let bodyThree = document.querySelector('.face-3');
let bodys = ['body-1', 'body-2', 'body-3'];



//COUNTER

let counter = 1;
const size = carouselBoxs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/*CLICKS FUNCTION*/

//face
faceOne.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${faces[0]}.png`;
    imgCt.classList.add(faces[0]);
    headCtn.append(imgCt);
});
faceTwo.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${faces[1]}.png`;
    imgCt.classList.add(faces[1]);
    headCtn.append(imgCt);
});
faceThree.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${faces[2]}.png`;
    imgCt.classList.add(faces[2]);
    headCtn.append(imgCt);
});

//body

bodyOne.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${faces[0]}.png`;
    imgCt.classList.add(faces[0]);
    headCtn.append(imgCt);
});
bodyTwo.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${faces[1]}.png`;
    imgCt.classList.add(faces[1]);
    headCtn.append(imgCt);
});
bodyThree.addEventListener('click', function () {
    console.log('tok');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${faces[2]}.png`;
    imgCt.classList.add(faces[2]);
    headCtn.append(imgCt);
});


/*CLICKS FUNCTION*/

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

//BUTTON LISTENERS