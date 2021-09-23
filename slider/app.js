const carouselSlide = document.querySelector('#carousel-slider');
const carouselBoxs = document.querySelectorAll('#carousel-slider .card-1, .card-2, .card-3, .card-4');
const headCtn = document.getElementById('head');
const bodyCtn = document.getElementById('body');
const legCtn = document.getElementById('legs');
const shoeCtn = document.getElementById('shoes');



//BUTTONS

const prevBtn = document.querySelector('#prvBtn');
const nextBtn = document.querySelector('#nextBtn');

//BUTTONS

let tittleText = document.getElementById('tittleText');


let faces = document.querySelectorAll("div#innerBox-1 img");
let face = ['face-1', 'face-2', 'face-3'];

let bodys = document.querySelectorAll("div#innerBox-2 img");
let body = ['body-1', 'body-2', 'body-3'];

let legs = document.querySelectorAll("div#innerBox-3 img");
let leg = ['leg-1', 'leg-2', 'leg-3'];

let shoes = document.querySelectorAll("div#innerBox-4 img");
let shoe = ['shoe-1', 'shoe-2', 'shoe-3'];

let colores = document.querySelectorAll("div.colores div");
let skinColor = colores[0];
let blueColor = colores[1];
let greenColor = colores[2];
let yellowColor = colores[3];
let brownColor = colores[4];
let redColor = colores[5];

skinColor.addEventListener('click', function (){
    headCtn.style.backgroundColor = '#deb887';
    bodyCtn.style.backgroundColor = '#deb887';
});
blueColor.addEventListener('click', function (){
    headCtn.style.backgroundColor = 'royalblue';
    bodyCtn.style.backgroundColor = 'royalblue';
});
greenColor.addEventListener('click', function (){
    bodyCtn.style.backgroundColor = '#75ec27';
    headCtn.style.backgroundColor = '#75ec27';
});
yellowColor.addEventListener('click', function (){
    headCtn.style.backgroundColor = '#d8e01f';
    bodyCtn.style.backgroundColor = '#d8e01f';
});
brownColor.addEventListener('click', function (){
    headCtn.style.backgroundColor = '#8b4513';
    bodyCtn.style.backgroundColor = '#8b4513';
});
redColor.addEventListener('click', function (){
    headCtn.style.backgroundColor = '#da1919';
    bodyCtn.style.backgroundColor = '#da1919';
});


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

//legs

legs[0].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    legCtn.innerHTML = null;
    imgCt.src = `./img/legs/${leg[0]}.png`;
    imgCt.classList.add(leg[0]);
    legCtn.append(imgCt);
});
legs[1].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    legCtn.innerHTML = null;
    imgCt.src = `./img/legs/${leg[1]}.png`;
    imgCt.classList.add(leg[1]);
    legCtn.append(imgCt);
});
legs[2].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    legCtn.innerHTML = null;
    imgCt.src = `./img/legs/${leg[2]}.png`;
    imgCt.classList.add(leg[2]);
    legCtn.append(imgCt);
});

//shoes

shoes[0].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    shoeCtn.innerHTML = null;
    imgCt.src = `./img/shoes/${shoe[0]}.png`;
    imgCt.classList.add(shoe[0]);
    shoeCtn.append(imgCt);
});
shoes[1].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    shoeCtn.innerHTML = null;
    imgCt.src = `./img/shoes/${shoe[1]}.png`;
    imgCt.classList.add(shoe[1]);
    shoeCtn.append(imgCt);
});
shoes[2].addEventListener('click', function () {

    let imgCt = document.createElement('img');
    shoeCtn.innerHTML = null;
    imgCt.src = `./img/shoes/${shoe[2]}.png`;
    imgCt.classList.add(shoe[2]);
    shoeCtn.append(imgCt);
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