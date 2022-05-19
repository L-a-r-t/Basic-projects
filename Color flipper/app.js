const btn = document.getElementById('button');
const color = document.querySelector('.color');

btn.addEventListener("click", () => {
    let randomColor = pickRandomColor()
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

function pickRandomColor() {
    let color = '#';
    for (let i = 0; i < 3; i ++) {
        let value = Math.floor(Math.random() * 256).toString(16);
        if (value.length == 1) { value += '0'; }
        color += value;
    }
    return color.toUpperCase();
}