const button = document.querySelector('button');
const h1 = document.querySelector('h1');

function randomColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', function(){
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if((r + g + b) < 500){
        h1.classList.toggle("white-toggle");
    }
});
