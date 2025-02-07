// Modify the API URL to point to your local proxy server
const API_URL = "http://localhost:3000/api/testruns"; // Your proxy server endpoint

// Function to fetch and display all Test Plans data
function fetchQUIZResults() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            displayTestPlans(data); // Display the fetched test plans data
            console.log(data); // Log the response data
        })
        .catch(error => {
            console.error('Error fetching Test Plans:', error);
        });
}

// Function to display the fetched test plans (you can modify this function to suit your needs)
function displayTestPlans(testPlans) {
    // Here you can process and display the test plans data on your web page
    console.log(testPlans);
}

// Call the function to fetch test plans data
fetchTestPlans();

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


