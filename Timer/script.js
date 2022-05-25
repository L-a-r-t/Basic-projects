const days = document.querySelector('#days');
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const header = document.querySelector('h1');

function initTimer(interval, dateName) {
    const daysTime = Math.floor(interval / 86400000);
    const hoursTime = Math.floor((interval % 86400000) / 3600000);
    const minutesTime = Math.floor((interval % 3600000) / 60000);
    const secondsTime = Math.floor((interval % 60000) / 1000);
    days.textContent = daysTime;
    hours.textContent = hoursTime;
    minutes.textContent = minutesTime;
    seconds.textContent = secondsTime;
    header.textContent = `Time until ${dateName}`
};

// Checks if input is correct, reports error otherwhise
function parseInput(targetDate, dateName) {
    const formatted = targetDate.split('-')
    const goal = new Date(
        formatted[0],
        formatted[1] - 1,
        formatted[2]
    );
    const now = Date.now();
    const interval = goal.valueOf() - now;
    if (isNaN(interval)) {
        if (dateName.length == 0) {
            return true;
        }
        raise('Invalid date format');
        return false;
    }
    if (dateName.length == 0) {
        raise('Please provide a name for this date');
        return false;
    }
    if (interval <= 0) {
        raise("The target date can't be in the past")
        return false;
    }
    initTimer(interval, dateName);
    return true;
}

const errorText = document.querySelector('.settings__error');

function raise(err) {
    errorText.classList.add('settings__error--show');
    errorText.textContent = err;
}

parseInput('2023-01-01', '2023');

// Interactivity
const settingsBtn = document.querySelector('.settings__btn');
const btnIcon = settingsBtn.firstChild;
const settingsContainer = document.querySelector('.settings__c');
const settings = document.querySelector('.settings__modal');
const settingsName = document.querySelector('.settings__name');
const settingsDate = document.querySelector('.settings__date');
settingsBtn.addEventListener("click", () => {
    if (settings.classList.contains('settings--open')) {
        if (!parseInput(settingsDate.value, settingsName.value)) {
            return;
        }
        (Array.from(settings.children)).forEach((item) => item.classList.add('hide'));
        settingsContainer.classList.remove('settings__c--open');
        settings.classList.remove('settings--open');
        btnIcon.classList.remove('fa-check');
        btnIcon.classList.add('fa-gear');
        errorText.textContent = '';
    } else {
        settingsContainer.classList.add('settings__c--open');
        settings.classList.add('settings--open');    
        btnIcon.classList.add('fa-check');
        btnIcon.classList.remove('fa-gear');
        (Array.from(settings.children)).forEach((item) => item.classList.remove('hide'));
    }
});

// Start the timer
setInterval(() => {
    seconds.textContent = Number(seconds.textContent) - 1;
    if (Number(seconds.textContent) >= 0 ) { return; }
    else if (days.textContent == 0
        && hours.textContent == 0
        && minutes.textContent == 0)
        { seconds.textContent = 0; return; } // If the timer is over
    seconds.textContent = 59;
    minutes.textContent = Number(minutes.textContent) - 1;
    if (Number(minutes.textContent) >= 0 ) { return; }
    minutes.textContent = 59;
    hours.textContent = Number(hours.textContent) - 1;
    if (Number(hours.textContent) >= 0) { return; }
    hours.textContent = 23;
    days.textContent = Number(days.textContent) - 1;
    if (Number(days.textContent) >= 0) { return; }
    days.textContent = 0;
}, 1000)
