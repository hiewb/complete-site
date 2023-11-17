document.addEventListener('DOMContentLoaded', function () {
    // Get the current HTML file name
    var currentFileName = location.pathname.split('/').pop();
    console.debug(currentFileName);

    // Define a mapping of HTML file names to background images and opacity
    var backgroundMap = {
        'index.html': { image: 'images/paws.jpg'},
        'recipes.html': { image: 'images/herb-spices.jpg'},
        'travel.html': { image: 'images/mountain_background.jpg'},
    };

    // Set the background image, opacity, and size based on the mapping
    var backgroundInfo = backgroundMap[currentFileName];
    console.debug(backgroundInfo);
    if (backgroundInfo) {
        document.body.style.backgroundImage = 'url("' + backgroundInfo.image + '")';
        document.body.style.backgroundSize = '100% auto';
    }
});