const songs = Array.from(document.getElementsByClassName("song"));
const songItem = Array.from(document.getElementsByClassName("songItem"));
const playList = Array.from(document.getElementsByClassName("playList"));
const pauseList = Array.from(document.getElementsByClassName("pauseList"));
const masterPlay = document.querySelector("#masterPlay");
const masterPause = document.querySelector("#masterPause");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const progressBar = document.querySelector("#progressBar");
let currentSong = document.querySelector("#currentSong");
currentSong.innerText = songs[0].innerText;
let songIndex = 0;

function pauseAll() {
    for (let j = 0; j < songItem.length; j++) {
        songItem[j].pause();
        playList[j].style.display = "block";
        pauseList[j].style.display = "none";
        masterPlay.style.display = "block";
        masterPause.style.display = "none";
    }
}

//play a song from list
function playSong() {
    for (let i = 0; i < playList.length; i++) {
        playList[i].addEventListener("click", () => {
            pauseAll();
            songItem[i].play();
            masterPlay.style.display = "none";
            masterPause.style.display = "block";
            playList[i].style.display = "none";
            pauseList[i].style.display = "block";
            currentSong.innerText = songs[i].innerText;
            songIndex = i;
            progress();
        })
    }
}
playSong();

// pause a song from list

function pauseSong() {
    for (let i = 0; i < pauseList.length - 1; i++) {
        pauseList[i].addEventListener("click", () => {
            pauseAll();
        })
    }
}
pauseSong();

// progress bar

function progress() {
    songItem[songIndex].addEventListener("timeupdate", () => {
        progressBar.value = songItem[songIndex].currentTime / songItem[songIndex].duration * 100;
    })

    progressBar.addEventListener("change", () => {
        songItem[songIndex].currentTime = progressBar.value * songItem[songIndex].duration / 100;
    })
}
progress();

// control panel

masterPlay.addEventListener("click", () => {
    for (let i = 0; i < songs.length - 1; i++) {
        if (songs[i].innerText === currentSong.innerText) {
            songItem[i].play();
            masterPlay.style.display = "none";
            masterPause.style.display = "block";
            playList[i].style.display = "none";
            pauseList[i].style.display = "block";
            songIndex = i;
            progress();
        }
    }
})

masterPause.addEventListener("click", () => {
    pauseAll();
})

// next and previous

next.addEventListener("click", () => {
    pauseAll();
    if (songIndex === songItem.length - 1) {
        songIndex = 0
    } else {
        songIndex += 1
    }
    songItem[songIndex].play();
    currentSong.innerText = songs[songIndex].innerText;
    masterPlay.style.display = "none";
    masterPause.style.display = "block";
    playList[songIndex].style.display = "none";
    pauseList[songIndex].style.display = "block";
    songItem[songIndex].currentTime = 0;
    progress();
})

previous.addEventListener("click", () => {
    pauseAll();
    if (songIndex === 0) {
        songIndex = songItem.length - 1
    } else {
        songIndex -= 1
    }
    songItem[songIndex].play();
    currentSong.innerText = songs[songIndex].innerText;
    masterPlay.style.display = "none";
    masterPause.style.display = "block";
    playList[songIndex].style.display = "none";
    pauseList[songIndex].style.display = "block";
    songItem[songIndex].currentTime = 0;
    progress();
})


// songItem[songIndex].addEventListener("timeupdate", () => {
//     if (songItem[songIndex].currentTime === songItem[songIndex].duration) {
//         pauseAll();
//         songIndex += 1;
//         songItem[songIndex].play();
//         currentSong.innerText = songs[songIndex].innerText;
//         masterPlay.style.display = "none";
//         masterPause.style.display = "block";
//         playList[songIndex].style.display = "none";
//         pauseList[songIndex].style.display = "block";
//         songItem[songIndex].currentTime = 0;
//         progress();
//     }
// })
