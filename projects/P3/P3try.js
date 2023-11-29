const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ballsArray = [];

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    this.color = 'hsl(' + hue + ', 100%, 50%)';
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;

    this.update = () => {
        if (this.radius >= 10) {
            this.x += this.speedX * 10;
            this.y += this.speedY * 10;
        }
        if (this.radius <= 9) {
            this.x += this.speedX * 2;
            this.y += this.speedY * 2;
        }
        if (this.radius > 4) {
            this.radius -= 0.9;
        }
        if (this.radius < 4) {
            this.radius -= 0.2;
        }
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    };

    this.draw = () => {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    };
}

let mouseX = 0;
let mouseY = 0;
let hue = 0;

const textElement = $('.backgroundText'); // Use jQuery to select the element

textElement.on('mouseenter', () => {
    for (let i = 0; i < 5; i++) {
        ballsArray.push(new Ball(mouseX, mouseY));
    }
});

textElement.on('mouseleave', () => {
    ballsArray = [];
});

$(document).on('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(`Mouse position: (${mouseX}, ${mouseY})`);
});

function renderBalls() {
    for (let i = 0; i < ballsArray.length; i++) {
        ballsArray[i].draw();
        ballsArray[i].update();
        if (ballsArray[i].radius <= 0.1) {
            ballsArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    renderBalls();
    hue++;
    requestAnimationFrame(animate);
}

animate();
