const dino = document.querySelector(".dino");
const dragon = document.querySelector(".dragon");
let score = document.querySelector(".score");
const gameover = document.querySelector(".gameover");
let scoreIndex = 0;
let audio = new Audio("music.mp3");
let audiogo = new Audio("gameover.mp3");
audio.play();

document.onkeydown = function (e) {
    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    if (e.keyCode === 38) {
        dino.classList.add("dinoAnimate");
        setTimeout(() => {
            dino.classList.remove('dinoAnimate')
        }, 700)
    }
    if (e.keyCode === 39) {
        dino.style.left = (dx + 200) + 'px';
    }
    if (e.keyCode === 37) {
        dino.style.left = (dx - 200) + "px";
    }
}

setInterval(() => {
    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("bottom"));
    let ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
    let oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("bottom"));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 100 && offsetY < 100) {
        gameover.style.display = "block"
        dragon.classList.remove("dragonAnimate");
        audio.pause();
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
        }, 1000)
    }
    else if(offsetX < 100 && count){
        scoreIndex +=1;
        count = false;
        updateScore(scoreIndex);
        setTimeout(() => {
            count = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue("animation-duration"));
            let newDur = aniDur - 0.1;
            dragon.style.animationDuration = newDur + "s";
        }, 200);
    }
}, 10);

function updateScore(){
    score.innerHTML = "Your score:" + scoreIndex;
}
updateScore();