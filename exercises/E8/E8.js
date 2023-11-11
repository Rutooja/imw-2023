function getAstronomyPicture() {
    const apiKey = 'YOUR_NASA_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayAstronomyPicture(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('apod-title').innerHTML = 'Error fetching data. Please try again.';
            document.getElementById('apod-explanation').innerHTML = '';
        });
}

function displayAstronomyPicture(data) {
    document.getElementById('apod-image').src = data.url;
    document.getElementById('apod-title').innerHTML = data.title;
    document.getElementById('apod-explanation').innerHTML = data.explanation;
}

// Load an astronomy picture initially
getAstronomyPicture();

