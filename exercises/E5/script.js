
let name = "Rutooja";
let size = 10;


for (let step = 0; step < 100; step++) {

    let textBox = document.createElement("p");
    textBox.innerHTML = name;
    textBox.style.fontSize = size + "px";
    document.body.appendChild(textBox);
    size++;
}

document.querySelector("button").addEventListener("click", function () {

    document.body.style.backgroundColor = "green";
})