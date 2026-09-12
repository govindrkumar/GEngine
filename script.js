function updateclock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

updateclock();
setInterval(updateclock, 1000);


// Power off
const poweroff = document.getElementById("poweroff");

poweroff.addEventListener("click", function () {
    window.close();

    if (!window.close()) {
        window.location = "https://www.google.com";
    }
});


// Start Menu
const start_menu = document.querySelector("#start-menu");
const start_button = document.querySelector(".start-button");

start_button.addEventListener("mouseenter", () => {
    start_menu.hidden = false;
});

start_button.addEventListener("click", () => {
    start_menu.hidden = false;
});

start_menu.addEventListener("mouseleave", () => {
    start_menu.hidden = true;
});

start_menu.addEventListener("mouseenter", () => {
    start_menu.hidden = false;
});





// Function to make a window draggable
function dragWindow(windowElement, dragHandle) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    dragHandle.addEventListener("mousedown", function (event) {

        isDragging = true;

        offsetX = event.clientX - windowElement.offsetLeft;
        offsetY = event.clientY - windowElement.offsetTop;
        dragHandle.style.cursor = "grabbing";

    });

    document.addEventListener("mousemove", function (event) {

        if (!isDragging) return;

        windowElement.style.left =
            (event.clientX - offsetX) + "px";

        windowElement.style.top =
            (event.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup", function () {

        isDragging = false;

    });
}


function makewindowcopies(window_manager_name) {

    const hell = window_manager_name.cloneNode(true);

    hell.hidden = false;
    hell.style.display = "flex";

    document.body.appendChild(hell);

    const handle = hell.querySelector(".operation_manager");
    const closeButton = hell.querySelector(".close");

    dragWindow(hell, handle);

    closeButton.addEventListener("click", function () {
        hell.remove();
    });
}


// Sticky Notes
const stickyWindow = document.querySelector(".windows_manager_sticknotes");
const stickynote = document.querySelector(".menu5");


// Original window ko initially hidden rakho
stickyWindow.hidden = true;
stickyWindow.style.display = "none";

stickynote.addEventListener("click", function () {
    makewindowcopies(stickyWindow);
});

// Settings
const settingwindow = document.querySelector(".windows_manager_settings")
const settings = document.querySelector(".menu3")

settingwindow.hidden = true;
settingwindow.style.display = "none";

settings.addEventListener("click",function(){
    makewindowcopies(settingwindow);
});



// Music
const musicwindow = document.querySelector(".windows_manager_music")
const music = document.querySelector(".menu1")

musicwindow.hidden = true;
musicwindow.style.display = "none";

music.addEventListener("click", () => {
    musicwindow.hidden = false;
    musicwindow.style.display = "flex";
});

dragWindow(musicwindow, musicwindow.querySelector(".operation_manager"));


// Music controller system

const fileinput = document.getElementById("file");
const playButton = document.getElementById("uploadbtn");
const pauseButton = document.getElementById("pausebtn");
const incspeed = document.getElementById("increasespeed");
const catlistens = musicwindow.querySelector("#cat-listening")

const audio = new Audio();
playButton.addEventListener("click",(event) => {
    event.preventDefault(); //stop default behavior
    const file = fileinput.files[0]; // file 
    if (!file) return;
    audio.src = URL.createObjectURL(file); //file link
    audio.play(); //playing audio
    catlistens.src = "image/Cat listening GIF.gif";
});

pauseButton.addEventListener("click",(event) => {
    event.preventDefault();
    audio.pause(); // pausing audio
    catlistens.src = "image/angry cat GIF.gif";
});

incspeed.addEventListener("click",(event) => {
    event.preventDefault();
    audio.playbackRate += 0.25; // increasing speed 
});


// Playlist system
// I will show music here, dynamically.....

const playlist = music.querySelector(".music_list");


