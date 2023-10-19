//interaction

let green = document.querySelector('#green');
let plum = document.querySelector('#plum');
let blue = document.querySelector('#blue');
let container = document.querySelector('#interactionContainer');

green.addEventListener("click", function () {
    container.style.backgroundColor = "lightgreen";
})
plum.addEventListener("click", function () {
    container.style.backgroundColor = "plum";
})
blue.addEventListener("click", function () {
    container.style.backgroundColor = "lightblue";
})


//loop

let loop = "Woohoo";
let container1 = document.querySelector('#loopContainer');
for (let step = 0; step <= 3; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = loop;
    container1.appendChild(textBox);
}

//condition 

let position = document.querySelector('#conditionContainer');
let square = document.querySelector('#square');

position.addEventListener('mousemove', mouse);

function mouse(e) {

    if (e.offsetY > 200) {
        square.style.backgroundColor = "beige";
    } else {
        square.style.backgroundColor = "lightpink";
    }
}

//time
let text = document.getElementById("increaseText");
let size = 25;
function increaseFontSize() {

    if (size < 100) {
        size++;
        text.style.fontSize = size + "px";
    }
}
setInterval(increaseFontSize, 1000);

//input

const inputText = document.querySelector('#inputText');
const submitButton = document.querySelector('#submit');
const textLengthElement = document.querySelector('#text-length');

submitButton.addEventListener("click", () => {
    event.preventDefault();
    const textLength = inputText.value.length;
    textLengthElement.innerText = `Text Length: ${textLength}`;
});

//console

console.log("Trying to learn :)")