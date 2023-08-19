let slideIndex = 0;
const slides = Array.from(document.getElementsByClassName("slide"));
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const dots = Array.from(document.getElementsByClassName("dot"));

function showSlides() {
    slides.forEach((slide, index )=> {
        slide.style.display = (index === slideIndex) ? "block" : "none" ;
    });
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = (index === slideIndex) ? "black" : "gray";
    });
}

next.addEventListener("click", ()=>{
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex +1;
    showSlides();
})

previous.addEventListener("click", ()=>{
    slideIndex = (slideIndex === 0) ? slides.length -1 : slideIndex - 1;
    showSlides();
})

dots.forEach((dot, index) =>{
    dot.addEventListener("click", ()=>{
        slideIndex = index;
        showSlides();
    });
});

showSlides();