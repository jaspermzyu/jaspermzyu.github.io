function loadHTML(filePath, elementID) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementID).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}