const ten_seconds = 12000;
const endDate = new Date().getTime() + ten_seconds;
const timer = setInterval(function () {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("days").innerHTML = "0" + days;
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + mins).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + secs).slice(-2);

    } else {
        showPopUp();
        clearInterval(timer);
    }

}, 1000);

let pu = document.getElementById("popup");
let body = document.getElementById("body");

function showPopUp() {
    pu.style.display = "flex";
    body.style.overflow = "hidden";
}
function closePopUp() {
    pu.style.display = "none";
    body.style.overflow = "unset";
}
