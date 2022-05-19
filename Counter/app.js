const mainCounter = document.querySelector('.main-counter');
const button = document.querySelector('.js-btn');
const cpsCounter = document.querySelector('.js-cps');
const clmCounter = document.querySelector('.js-clm');

let counter = 0;
let clicksThisSec = 0;
let clicksThisMin = 0;

let cps = 0;

let lastFiveSecs = [];
const lastMin = [];

button.addEventListener("click", () => {
    counter++;
    clicksThisSec++;
    mainCounter.textContent = counter;
})

let secondsInterval = setInterval(() => {
    updateMin();
    updateSecs();
}, 1000)

let cpsInterval = setInterval(() => {
    cps = Math.round(lastFiveSecs.reduce((sum, clicks) => sum += clicks) / lastFiveSecs.length * 100) / 100;
    cpsCounter.textContent = cps;
}, 200)

function updateSecs() {
    if (lastFiveSecs.length == 5) {
        lastFiveSecs.shift();
    }
    if (clicksThisSec = 0) {
        lastFiveSecs = [];
    }
    lastFiveSecs.push(clicksThisSec);
    clicksThisSec = 0;
}

function updateMin() {
    if (lastMin.length == 60) {
        lastMin.shift();
    }
    lastMin.push(clicksThisSec);
    clicksThisMin = lastMin.reduce((sum, clicks) => sum += clicks);
    clmCounter.textContent = clicksThisMin;
}