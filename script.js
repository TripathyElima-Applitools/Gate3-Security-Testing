// Modify the API URL to point to your local proxy server
const API_URL = "http://localhost:3000/api/testruns"; // Your proxy server endpoint

 // Fetch data from your API endpoint
 async function fetchQUIZResults() {
    try {
      const response = await fetch('http://localhost:3000/api/testruns');
      const testRuns = await response.json();

      // Hide loading indicator
      document.getElementById('loading').style.display = 'none';

      // Get the container where we will display the test run data
      const testRunsContainer = document.getElementById('testRuns');

      // Check if there are test runs to display
      if (testRuns.length === 0) {
        testRunsContainer.innerHTML = '<p>No test runs available.</p>';
        return;
      }

      // Loop through the test runs and display them
      testRuns.forEach((testRun) => {
        const div = document.createElement('div');
        div.classList.add('test-run');
        div.innerHTML = `
          <strong>${testRun.name}</strong>
          ${testRun.description ? `<p>${testRun.description}</p>` : ''}
          <a href="${testRun.url}" target="_blank">View Test Run</a><br>
          <span class="status ${testRun.isCompleted ? 'completed' : 'in-progress'}">
            ${testRun.isCompleted ? 'Completed' : 'In Progress'}
          </span><br>
          Passed: ${testRun.passedCount} | Failed: ${testRun.failedCount} | Untested: ${testRun.untestedCount}
        `;
        testRunsContainer.appendChild(div);
      });
    } catch (error) {
      console.error('Error fetching test runs:', error);
      document.getElementById('loading').innerHTML = 'Failed to load test runs. Please try again later.';
    }
  }

  // Call the fetchTestRuns function when the page loads
  window.onload = fetchTestRuns;

// Open popup when the link is clicked
document.getElementById("openPopupLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link
    document.getElementById("popup").style.display = "flex";
    fetchTestRuns(); // Fetch data when popup opens
  });
  
  // Close popup when the close button is clicked
  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });
  
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


