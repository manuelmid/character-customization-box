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

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselBoxs.length -1) return;
   carouselSlide.style.transition = "transform 0.1ms ease-in-out";
   counter++;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
   carouselSlide.style.transition = "transform 0.1ms ease-in-out";
   counter--;
   carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselBoxs[counter].id === 'lastClone'){
        carouselSlide.style.transform = "none";
        counter = carouselBoxs.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
    if(carouselBoxs[counter].id === 'firstClone'){
        carouselSlide.style.transform = "none";
        counter = carouselBoxs.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };


});



