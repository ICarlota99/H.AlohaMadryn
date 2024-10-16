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

// Fetch footer
fetch('footer.html')
    // Convert the response in plain text
    .then(response => response.text())

    .then(data => {
        // Find the container div
        const footerContainer = document.getElementById('footer-container');

        // Insert the footer HTML into the container
        footerContainer.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
    });