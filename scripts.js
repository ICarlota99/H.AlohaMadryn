// Fetch the navbar content from navbar.html
fetch('navbar.html')
    // Convert the response in plain text
    .then(response => response.text())

    .then(data => {
        // Find the container div
        const navbarContainer = document.getElementById('navbar-container');

        // Insert the navbar HTML into the container
        navbarContainer.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching navbar:', error);
    });