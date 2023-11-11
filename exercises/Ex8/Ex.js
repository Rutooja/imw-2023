document.addEventListener("DOMContentLoaded", function () {
    const dogImage = document.getElementById("dogImage");
    const reloadButton = document.getElementById("reloadButton");

    // Function to fetch a random dog picture
    async function fetchRandomDog() {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            return data.message;
        } catch (error) {
            console.error("Error fetching dog picture:", error);
        }
    }

    // Function to update the dog picture
    async function updateDogPicture() {
        const imageUrl = await fetchRandomDog();
        dogImage.src = imageUrl;
    }

    // Initial load
    updateDogPicture();

    // Event listener for the reload button
    reloadButton.addEventListener("click", updateDogPicture);
});
