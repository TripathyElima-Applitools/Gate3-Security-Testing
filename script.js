// Function to show the popup by adding the 'show' class to the element with ID 'popup'
function showPopup() {
    var popup = document.getElementById('popup'); // Get the popup element
    popup.classList.add('show'); // Add the 'show' class to make the popup visible
}

// Function to hide the popup by removing the 'show' class from the element with ID 'popup'
function hidePopup() {
    var popup = document.getElementById('popup'); // Get the popup element
    popup.classList.remove('show'); // Remove the 'show' class to hide the popup
}

// Function to open a specified URL in a new tab
function openInNewTab() {
    window.open(
        'https://ellisdontestpractices.testrail.io/index.php?/projects/overview/35',
        '_blank'
    ); // Open the URL in a new browser tab
}

// Modified fetch function to fetch test plans from a server endpoint
function fetchQUIZResults() {
    fetch('http://localhost:3000/testplans') // Send a GET request to fetch data from the given endpoint
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
            displayTestPlans(data); // Call the displayTestPlans function with the received data
        })
        .catch((error) => {
            console.error('Error fetching Test Plans:', error); // Log any errors to the console
        });
}
