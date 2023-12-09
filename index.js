document.addEventListener("DOMContentLoaded", function () {
    // Get the main element
    const mainElement = document.querySelector('main');

    // Function to get a random position within the main element
    function getRandomPosition() {
        const randomX = Math.floor(Math.random() * (mainElement.offsetWidth - 100)); // Adjust 100 based on the circle size
        const randomY = Math.floor(Math.random() * (mainElement.offsetHeight - 100)); // Adjust 100 based on the circle size
        return { x: randomX, y: randomY };
    }

    // Get all elements with class "Project", "Exercise", and "Reading"
    const circles = document.querySelectorAll('.Project, .Exercise, .Reading');

    // Set random positions for each circle within the main element
    circles.forEach(circle => {
        const randomPosition = getRandomPosition();
        circle.style.top = randomPosition.y + 'px';
        circle.style.left = randomPosition.x + 'px';
    });
});
