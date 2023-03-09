const hourEl = document.querySelector("#hour");
const minuteEL = document.querySelector("#minutes");
const secondEL = document.querySelector("#seconds");
const ampmEL = document.querySelector(".ampm");

const updateClock = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

if(h > 12) {
    h = h- 12
    ampm = "PM"
}

hourEl.textContent = h;
minuteEL.textContent = m;
secondEL.textContent = s;
ampmEL.textContent = ampm;

setTimeout(() => {
    updateClock()
}, 1000);

}

updateClock();