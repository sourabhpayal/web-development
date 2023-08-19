let slideIndex = 2;
let slides = Array.from(document.querySelectorAll(".slide"));
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

function slideShow() {
    slides.forEach(slide => {
        slide.classList.remove("imgFront", "imgRight", "imgRight2", "imgLeft", "imgLeft2");
        slide.classList.add("hidden");
    })
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add("imgFront")
        }
        if (index - 1 === slideIndex) {
            slide.classList.add("imgRight")
        }
        if (index - 2 === slideIndex) {
            slide.classList.add("imgRight2")
        }
        if (index + 1 === slideIndex) {
            slide.classList.add("imgLeft")
        }
        if (index + 2 === slideIndex) {
            slide.classList.add("imgLeft2")
        }
    });
}
slideShow();

next.addEventListener("click", () => {
    let firstImg = slides.shift();
    slides.push(firstImg);
    slideShow();
})

previous.addEventListener("click", () => {
    let lastImg = slides.pop();
    slides.unshift(lastImg);
    slideShow();
})