const darkMode = document.querySelector('.js-dark-mode');

const isDarkModeLS = localStorage.getItem('darkMode');
let isDarkMode = false;
if (isDarkModeLS != null) {
    isDarkMode = isDarkModeLS == "true";
}
loadColorMode();

darkMode.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', String(isDarkMode));
    loadColorMode();
});

function loadColorMode() {
    if (isDarkMode == true) {
        document.documentElement.classList.add('dark-mode');
        darkMode.textContent = "Light mode";
    } else {
        document.documentElement.classList.remove('dark-mode');
        darkMode.textContent = "Dark mode";
    }
}