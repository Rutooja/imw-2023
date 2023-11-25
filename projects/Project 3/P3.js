const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let fireRocketsArray = [];
let fireRocketsSparklesArray = [];

function FireRockets() {
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = window.innerHeight;
    this.color = `hsl(${Math.floor(Math.random() * 360)},70%,50%)`;
    this.size = Math.floor(Math.random() * 5 + 5);
    this.speedY = Math.random() * 5 + 5;
    this.crackRocketY = Math.floor(window.innerHeight - ((Math.random() * window.innerHeight) + 100));
    this.isHovered = false;

    this.update = () => {
        if (this.isHovered && this.y <= this.crackRocketY) {
            for (let i = 0; i < 20; i++) {
                fireRocketsSparklesArray.push(
                    new FireRocketsSparkles(this.x, this.y, this.color, this.explosionSize)
                );
            }
            fireRocketsArray.splice(fireRocketsArray.indexOf(this), 1);
        } else {
            this.y -= this.speedY;
        }
    };

    this.draw = () => {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    };
}

function FireRocketsSparkles(x, y, color, size) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size || Math.floor(Math.random() * 3 + 6);
    this.speedY = Math.random() * 2 - 2;
    this.speedX = Math.round((Math.random() - 0.5) * 10);
    this.velocity = Math.random() / 5;

    this.update = () => {
        if (this.size > 0.2) {
            this.size -= 0.1;
        }
        this.y += this.speedY;
        this.x += this.speedX;
        this.speedY += this.velocity;
    };

    this.draw = () => {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    };
}

canvas.addEventListener('mouseenter', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    for (let i = 0; i < fireRocketsArray.length; i++) {
        const rocket = fireRocketsArray[i];

        const distX = mouseX - rocket.x;
        const distY = mouseY - rocket.y;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance <= rocket.size && !rocket.isHovered) {
            rocket.isHovered = true;
        }
    }
});

function renderFireRockets() {
    for (let i = 0; i < fireRocketsArray.length; i++) {
        fireRocketsArray[i].draw();
        fireRocketsArray[i].update();
    }
}

function renderFireRocketsSparkles() {
    for (let i = 0; i < fireRocketsSparklesArray.length; i++) {
        fireRocketsSparklesArray[i].draw();
        fireRocketsSparklesArray[i].update();
        if (fireRocketsSparklesArray[i].size <= 0.2) {
            fireRocketsSparklesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    context.fillStyle = 'rgba(24,28,31,.2)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    renderFireRockets();
    renderFireRocketsSparkles();
    requestAnimationFrame(animate);
}

animate();

setInterval(() => {
    fireRocketsArray.push(new FireRockets());
}, 600);
