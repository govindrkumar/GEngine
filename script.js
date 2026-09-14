// CLOCK

function updateclock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    document.getElementById("clock").textContent = timeString;
}

updateclock();
setInterval(updateclock, 1000);



// TASKBAR ICONS


const myprojectic = document.getElementById("img1");
const sticknoteic = document.getElementById("img2");
const musicic = document.getElementById("img3");

const normalTaskbarColor = "rgba(8, 82, 241, 0.897)";
const activeTaskbarColor = "rgb(151, 204, 240)";



// POWER OFF


const poweroff = document.getElementById("poweroff");

poweroff.addEventListener("click", function () {
    window.close();

    if (!window.close()) {
        window.location = "https://www.google.com";
    }
});



// START MENU


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



// DRAG WINDOW FUNCTION


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

        dragHandle.style.cursor = "";
    });
}



// WINDOW COPY SYSTEM


function makewindowcopies(window_manager_name, taskbarIcon) {

    const hell = window_manager_name.cloneNode(true);

    hell.hidden = false;
    hell.style.display = "flex";

    document.body.appendChild(hell);


    // Window drag system
    const handle = hell.querySelector(".operation_manager");

    dragWindow(hell, handle);


    // Highlight taskbar icon
    if (taskbarIcon) {
        taskbarIcon.style.backgroundColor = activeTaskbarColor;
    }


    // Close button
    const closeButton = hell.querySelector(".close");

    closeButton.addEventListener("click", function () {

        hell.remove();

        // Reset taskbar icon
        if (taskbarIcon) {
            taskbarIcon.style.backgroundColor = normalTaskbarColor;
        }
    });
}



// STICKY NOTES


const stickyWindow =
    document.querySelector(".windows_manager_sticknotes");

const stickynote =
    document.querySelector(".menu5");


stickyWindow.hidden = true;
stickyWindow.style.display = "none";


stickynote.addEventListener("click", function () {

    makewindowcopies(stickyWindow, sticknoteic);
});



// SETTINGS


const settingwindow =
    document.querySelector(".windows_manager_settings");

const settings =
    document.querySelector(".menu3");


settingwindow.hidden = true;
settingwindow.style.display = "none";


settings.addEventListener("click", function () {

    makewindowcopies(settingwindow);
});



// MUSIC WINDOW


const musicwindow =
    document.querySelector(".windows_manager_music");

const music =
    document.querySelector(".menu1");


musicwindow.hidden = true;
musicwindow.style.display = "none";


// Start Menu → Music
music.addEventListener("click", () => {

    musicwindow.hidden = false;
    musicwindow.style.display = "flex";

    musicic.style.backgroundColor = activeTaskbarColor;
});


// Make Music draggable
dragWindow(
    musicwindow,
    musicwindow.querySelector(".operation_manager")
);



// MUSIC CONTROLLER


const fileinput =
    document.getElementById("file");

const playButton =
    document.getElementById("uploadbtn");

const pauseButton =
    document.getElementById("pausebtn");

const incspeed =
    document.getElementById("increasespeed");

const catlistens =
    musicwindow.querySelector("#cat-listening");


const audio = new Audio();


// PLAY
playButton.addEventListener("click", (event) => {

    event.preventDefault();

    const file = fileinput.files[0];

    if (!file) return;

    audio.src = URL.createObjectURL(file);

    audio.play();

    catlistens.src =
        "image/Cat listening GIF.gif";
});


// PAUSE
pauseButton.addEventListener("click", (event) => {

    event.preventDefault();

    audio.pause();

    catlistens.src =
        "image/angry cat GIF.gif";
});


// INCREASE SPEED
incspeed.addEventListener("click", (event) => {

    event.preventDefault();

    audio.playbackRate += 0.25;
});



// MUSIC WINDOW BUTTONS


const closebtn =
    musicwindow.querySelector(".close");

const minibtn =
    musicwindow.querySelector(".minimize");

const maxibtn =
    musicwindow.querySelector(".maximize");


closebtn.addEventListener("click", () => {

    musicwindow.hidden = true;
    musicwindow.style.display = "none";

    // Reset taskbar icon
    musicic.style.backgroundColor = normalTaskbarColor;
});



// PLAYLIST


const playlist =
    document.querySelector(".music_list");

const playlistTitle =
    document.getElementById("playlist-title");

const musiclist =
    document.getElementById("music_list");

const mzpgname =
    document.querySelector(".program_name_music");

const audiop =
    document.querySelector(".audio-player");


let songs = [];
let currentSong = 0;


musiclist.hidden = true;



// ADD MUSIC


fileinput.addEventListener("change", () => {

    const selectedFiles =
        Array.from(fileinput.files);


    selectedFiles.forEach(file => {

        songs.push(file);


        const songElement =
            document.createElement("div");

        songElement.textContent =
            file.name;

        songElement.classList.add("song");

        musiclist.appendChild(songElement);


        // Song click
        songElement.addEventListener("click", () => {

            currentSong =
                songs.indexOf(file);

            audio.src =
                URL.createObjectURL(file);

            audio.play();

            catlistens.src =
                "image/Cat listening GIF.gif";
        });
    });


    musiclist.hidden = false;
});



// PLAYLIST OPEN


playlist.addEventListener("click", () => {

    playlistTitle.textContent =
        "🔽 Playlist";

    musiclist.hidden = false;

    musicwindow.style.height =
        "450px";

    musicwindow.style.width =
        "450px";

    mzpgname.style["margin-right"] =
        "300px";

    audiop.style.height =
        "400px";

    audiop.style.width =
        "400px";
});



// PLAYLIST CLOSE


playlist.addEventListener("dblclick", () => {

    playlistTitle.textContent =
        "▶️ Playlist";

    musiclist.hidden = true;

    musicwindow.style.height =
        "400px";

    musicwindow.style.width =
        "400px";

    mzpgname.style["margin-right"] =
        "250px";

    audiop.style.height =
        "350px";

    audiop.style.width =
        "350px";
});



// NEXT / PREVIOUS


const nexbtn =
    document.getElementById("nextbtn");

const perbtn =
    document.getElementById("previousbtn");


// NEXT
nexbtn.addEventListener("click", () => {

    if (songs.length === 0) return;

    currentSong++;


    if (currentSong >= songs.length) {
        currentSong = 0;
    }


    audio.src =
        URL.createObjectURL(
            songs[currentSong]
        );

    audio.play();

    catlistens.src =
        "image/Cat listening GIF.gif";
});


// PREVIOUS
perbtn.addEventListener("click", () => {

    if (songs.length === 0) return;

    currentSong--;


    if (currentSong < 0) {
        currentSong =
            songs.length - 1;
    }


    audio.src =
        URL.createObjectURL(
            songs[currentSong]
        );

    audio.play();

    catlistens.src =
        "image/Cat listening GIF.gif";
});



// MUSIC ENDED


audio.addEventListener("ended", () => {

    catlistens.src =
        "image/cat side eye.gif";
});



// MY PROJECTS


const project =
    document.querySelector(".my-project");

const projectMenu =
    document.querySelector(".menu6");


project.hidden = true;
project.style.display = "none";


projectMenu.addEventListener("click", () => {

    makewindowcopies(
        project,
        myprojectic
    );
});



// TASKBAR SYSTEM



// MY PROJECTS
myprojectic.addEventListener("click", () => {

    project.hidden = false;
    project.style.display = "flex";

    myprojectic.style.backgroundColor =
        activeTaskbarColor;
});


// STICKY NOTES
sticknoteic.addEventListener("click", () => {

    stickyWindow.hidden = false;
    stickyWindow.style.display = "flex";

    sticknoteic.style.backgroundColor =
        activeTaskbarColor;
});


// MUSIC
musicic.addEventListener("click", () => {

    musicwindow.hidden = false;
    musicwindow.style.display = "flex";

    musicic.style.backgroundColor =
        activeTaskbarColor;
});


const stickyClose = stickyWindow.querySelector(".close");

stickyClose.addEventListener("click", () => {
    stickyWindow.hidden = true;
    stickyWindow.style.display = "none";

    sticknoteic.style.backgroundColor = normalTaskbarColor;
});

const projectClose = project.querySelector(".close");

projectClose.addEventListener("click", () => {
    project.hidden = true;
    project.style.display = "none";

    myprojectic.style.backgroundColor = normalTaskbarColor;
});

closebtn.addEventListener("click", () => {

    musicwindow.hidden = true;
    musicwindow.style.display = "none";

    musicic.style.backgroundColor = normalTaskbarColor;
});