const songsContainer = document.getElementById("songsContainer");
const song = document.getElementsByClassName("song");
const songItem = document.getElementsByClassName("songItem");

songsContainer.addEventListener("click",(event)=>{
    if (event.target.classList.contains("song")) {  
        const audioElement = event.target.querySelector("audio");
        const playList = event.target.querySelector(".playList");
        const pauseList = event.target.querySelector(".pauseList");
        pauseList.style.display = "block";
        playList.style.display = "none";
        audioElement.play();
    }
})

