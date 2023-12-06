document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "Project" and "Exercise"
    const circles = document.querySelectorAll('.Project, .Exercise, .Reading');

    // Function to get a random position
    function getRandomPosition() {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        return { x: randomX, y: randomY };
    }

    // Set random positions for each circle
    circles.forEach(circle => {
        const randomPosition = getRandomPosition();
        circle.style.top = randomPosition.y + 'px';
        circle.style.left = randomPosition.x + 'px';
    });
});
