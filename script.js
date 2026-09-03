function updateclock(){
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

updateclock();
setInterval(updateclock,1000);

const poweroff = document.getElementById("poweroff");
poweroff.addEventListener("click",function(){
    window.close();
    if (!window.close()){
        window.location.href("www.google.com");
    }
});