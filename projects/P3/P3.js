//canvas 2d rendering
const canvas = document.getElementById('canvas'); //get canvas elements from html
const text = document.getElementById('hoverText');
const context = canvas.getContext('2d'); //2d rendering context of canvas

//canvas width and height is set to full Screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//array to store instances of the ball class
let ballsArray = [];

//ball class constructor
function Ball(x, y) {
    this.x = x; // x coordinate assigned to the object ball created 
    this.y = y;
    this.radius = 20; // base radius of the ball
    this.color = 'hsl(' + hue + ', 100%, 50%)'; //hue, saturation

    //random initial speed for the ball
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;

    //ball properties
    this.update = () => {
        //position of the ball is updated by adding speed of the ball x 10
        if (this.radius >= 10) {
            this.x += this.speedX * 10; //this.x =  this.x + this.speedX * 10;
            this.y += this.speedY * 10;
        }
        if (this.radius <= 9) {
            this.x += this.speedX * 2;
            this.y += this.speedY * 2;
        }
        //to keep reducing the radius of the ball
        if (this.radius > 4) {
            this.radius -= 0.9;
        }
        if (this.radius < 4) {
            this.radius -= 0.2;
        }
    };

    //render the ball 
    this.draw = () => {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //rendering balls on canvas
        context.fill();
    };
}



//function to render all balls in the ballsArray
function renderBalls() {
    for (let i = 0; i < ballsArray.length; i++) {
        ballsArray[i].draw();
        ballsArray[i].update();
        //remove balls with radius equal to or less than 0.1
        if (ballsArray[i].radius <= 0.1) {
            ballsArray.splice(i, 1);
            i--;
        }
    }
}

let mouseX = 0;
let mouseY = 0;
let hue = 0;
let notOnText = false;

//funciton to update and render the canvas continously 
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
    renderBalls(); //calling the renderballs function
    hue++; //to create variation of color (hue)
    requestAnimationFrame(animate);
}

// canvas.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//     for (let i = 0; i < 5; i++) {
//         ballsArray.push(new Ball(mouseX, mouseY));
//     }
// });

text.addEventListener('mousemove', (e) => {
    notOnText = false;
    const x = e.clientX;
    const y = e.clientY;

    mouseX = e.clientX;
    mouseY = e.clientY;
    for (let i = 0; i < 5; i++) {
        ballsArray.push(new Ball(mouseX, mouseY));
    }

});

text.addEventListener('mouseout', () => {
    mouseX = 0;
    mouseY = 0;
    notOnText = true;
    cancelAnimationFrame(animationFrameId);
    context.clearRect(0, 0, canvas.width, canvas.height);
});

let noOfBubbles = 5;


setInterval(() => {
    if (!notOnText && mouseX != 0 && mouseY != 0) {
        for (let i = 0; i < noOfBubbles; i++) {
            ballsArray.push(new Ball(mouseX, mouseY));
        }
    }

    noOfBubbles > 300 ? (noOfBubbles = 5) : (noOfBubbles += 5);
}, 300);


animate();

