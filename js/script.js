const body = document.body;
const slides = document.querySelectorAll('.slide');
const backwardBtn = document.querySelector('#backward');
const forwardBtn = document.querySelector('#forward');

let activeSlide = 0;

forwardBtn.addEventListener('click', ()=> {
    activeSlide++;
    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
});

backwardBtn.addEventListener('click', ()=> {
    activeSlide--;
    if(activeSlide < 0) {
        activeSlide = slides.length -1;
    }
    setBgToBody();
    setActiveSlide();
});


setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;

}
function setActiveSlide() {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[activeSlide].classList.add('active');
}