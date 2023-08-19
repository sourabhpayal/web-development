let slideIndex = 0;
const slides = Array.from(document.getElementsByClassName("slide"));
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const dots = Array.from(document.getElementsByClassName("dot"));
let currentSlideNumber = document.querySelector("#currentSlideNumber");
let totalSlideNumber = document.querySelector("#totalSlideNumber");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
        currentSlideNumber.innerHTML = slideIndex + 1;
        totalSlideNumber.innerHTML = slides.length;

    });
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = (index === slideIndex) ? "black" : "gray";
    });
}
showSlides();

next.addEventListener("click", () => {
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    showSlides();
})

previous.addEventListener("click", () => {
    slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    showSlides();
})

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlides();
    });
});

setInterval(() => {
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    showSlides();
}, 3000);


