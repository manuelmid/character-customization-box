const carouselSlide = document.querySelector('#carousel-slider');
const carouselBoxs = document.querySelectorAll('#carousel-slider .card-1, .card-2, .card-3, .card-4');
const headCtn = document.getElementById('head');
const bodyCtn = document.getElementById('body');
const legsCtn = document.getElementById('legs');
const shoesCtn = document.getElementById('shoes');


//BUTTONS

const prevBtn = document.querySelector('#prvBtn');
const nextBtn = document.querySelector('#nextBtn');

//BUTTONS

let tittleText = document.getElementById('tittleText');


let faces = document.querySelectorAll("div#innerBox-1 img");
let face = ['face-1', 'face-2', 'face-3'];

let bodys = document.querySelectorAll("div#innerBox-2 img");
let body = ['body-1', 'body-2', 'body-3'];



//COUNTER

let counter = 1;
const size = carouselBoxs[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/*CLICKS FUNCTION*/

//face
faces[0].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${face[0]}.png`;
    imgCt.classList.add(face[0]);
    headCtn.append(imgCt);
});
faces[1].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${face[1]}.png`;
    imgCt.classList.add(face[1]);
    headCtn.append(imgCt);
});
faces[2].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    headCtn.innerHTML = null;
    imgCt.src = `./img/faces/${face[2]}.png`;
    imgCt.classList.add(face[2]);
    headCtn.append(imgCt);
});

//body

bodys[0].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    bodyCtn.innerHTML = null;
    imgCt.src = `./img/bodys/${body[0]}.png`;
    imgCt.classList.add(body[0]);
    bodyCtn.append(imgCt);
});
bodys[1].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    bodyCtn.innerHTML = null;
    imgCt.src = `./img/bodys/${body[1]}.png`;
    imgCt.classList.add(body[1]);
    bodyCtn.append(imgCt);
});
bodys[2].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    bodyCtn.innerHTML = null;
    imgCt.src = `./img/bodys/${body[2]}.png`;
    imgCt.classList.add(body[2]);
    bodyCtn.append(imgCt);
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

//BUTTON LISTEbody