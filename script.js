// Function to load test runs and display them at the bottom
async function loadTestRuns() {
  try {
      // Show loading indicator
      const loadingElement = document.getElementById('loading');
      loadingElement.style.display = 'block';

      // Fetch data from your API endpoint
      const response = await fetch('http://localhost:3000/api/testruns');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const testRuns = await response.json();

      // Create HTML content for the test results
      let iframeContent = '';
      if (testRuns.length === 0) {
          iframeContent += '<p>No test runs available. Please try again later or check the test setup.</p>';
      } else {
          testRuns.forEach((testRun) => {
              iframeContent += `
                          <div class="test-run">
                              <strong>${testRun.name}</strong><br>
                              ${testRun.description ? `${testRun.description}` : ''}
                              <a href="${testRun.url}" target="_blank">View Test Run</a><br>
                              <span class="status ${testRun.isCompleted ? 'completed' : 'in-progress'}">
                                  ${testRun.isCompleted ? 'Completed' : 'In Progress'}
                              </span><br>
                              Passed: ${testRun.passedCount} | Failed: ${testRun.failedCount} | Untested: ${testRun.untestedCount}
                          </div>
                      `;
          });
      }

      // Append the new content to the content section at the bottom
      const testRunsDiv = document.getElementById('testRuns');
      testRunsDiv.innerHTML = iframeContent;

      // Hide the loading indicator after content is fetched
      loadingElement.style.display = 'none';

      // Show the content section now
      const contentDiv = document.getElementById('content');
      contentDiv.style.display = 'block';
  } catch (error) {
      console.error('Error fetching test runs:', error);
      const loadingElement = document.getElementById('loading');
      loadingElement.innerHTML = 'Failed to load test runs. Please try again later.';
  }
}

// Function to close the test results
function closeTestResults() {
  const contentDiv = document.getElementById('content');
  contentDiv.style.display = 'none'; // Hide the test result section
}