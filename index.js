
const slides = document.getElementsByClassName('carousel-item')
const dots = document.getElementsByClassName('dot')
totalSlides = slides.length
slidePosition = 0
dotPosition = 0
dots[dotPosition].classList.add('selected-dot')
document.getElementById('carousel-button-next').addEventListener('click', moveToNext)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrev)

function moveToNext(){
    hideAllSlides()
    if(slidePosition === totalSlides - 1)
    {
        slidePosition = 0
        dotPosition = 0
    }else{
        slidePosition++
        dotPosition++
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    dots[dotPosition].classList.add('selected-dot')
}
function moveToPrev(){
    hideAllSlides()
    if(slidePosition === 0)
    {
        slidePosition = totalSlides - 1 
        dotPosition = slidePosition
    }else{
        slidePosition--
        dotPosition--
    }
    slides[slidePosition].classList.add('carousel-item-visible')
    dots[dotPosition].classList.add('selected-dot')
}
function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
    for(const dot of dots)
    {
        dot.classList.remove('selected-dot')
    }
}