const taskbar = document.getElementsByClassName("taskbar")[0];
const startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click", ()=>{
    console.log('dsfa')
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-650px"
    } else {
        startmenu.style.bottom = "50px"
    }
})