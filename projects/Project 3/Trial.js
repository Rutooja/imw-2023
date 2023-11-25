const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Set Canvas Width and Height to Full Screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let w, h, balls = [];
let mouse = {
    x: undefined,
    y: undefined
}
// array of colors for balls 
let rgb = [
    [26, 188, 156],
    [46, 204, 113],
    [52, 152, 219],
    [155, 89, 182],
    [241, 196, 15],
    [230, 126, 34],
    [231, 76, 60]
]

function init() {
    resizeReset();
    animationLoop();
}

//resize the canvas window sizes 
function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}


function animationLoop() {
    context.clearRect(0, 0, w, h); // to clear canvas 
    if (mouse.x !== undefined && mouse.y !== undefined) {
        balls.push(new Ball());
    }
    if (balls.length > 200) {
        balls = balls.slice(1);
    }

    drawBalls();
    requestAnimationFrame(animationLoop);
}


//we call the functions update and draw that are defined in the class Ball
function drawBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
    }
}


// e is an event that occurs when the mouse is moved 
function mousemove(e) {
    mouse.x = e.x;
    mouse.y = e.y;
}

// when mouse is not hovering, the x and y positions are no defined
function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}

// function to get a random size 
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


//using constructor inside the class - it sets up initial information of the object
class Ball {
    constructor() {
        this.x = mouse.x + getRandomInt(-20, 20);
        this.y = mouse.y + getRandomInt(-20, 20);
        this.size = getRandomInt(40, 20);
        this.rgb = rgb[getRandomInt(0, rgb.length - 1)];
        this.style = "rgba(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ",0.5)";
        this.glow = getRandomInt(5, 10);
    }
    draw() {
        context.shadowBlur = this.glow;
        context.shadowColor = this.style; // Use the ball color for the glow effect
        context.fillStyle = this.style;
        context.fillStyle = this.style; //filling the background with the syle defined in constuctor
        context.beginPath(); //to start a new path on the canvas 
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2); // to draw circles, 0 is rightmost part of circle, pi x 2 is for a full circle 
        context.closePath(); //calling function closePath
        context.fill();

        context.shadowBlur = 0;
        context.shadowColor = 'transparent';
    }
    // reduces the size of the ball by 0.3, if not it is 0
    update() {
        if (this.size > 0) {
            let s = this.size - 0.3;
            this.size = (s <= 0) ? 0 : s;
        }
    }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("reSize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);