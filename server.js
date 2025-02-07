const express = require('express');
const axios = require('axios');
const https = require('https');
const cors = require('cors');

// Initialize express app
const app = express();
const port = 3000;

// Enable CORS for all origins (you can restrict to specific domains if needed)
app.use(cors());

// Replace with your TestRail domain and API credentials
const API_URL = "https://ellisdontestpractices.testrail.io/index.php?/api/v2/get_runs/35"; // Replace with your project ID
const USERNAME = "automationeditor@ellisdon.com";  // Your TestRail username
const API_KEY = "iRoXKxHnBgoIHorVO5sj-hdIjlHLb3CVISeyWoJMM";  // Your TestRail API key

// Set up an httpsAgent to handle SSL certificate issues
const agent = new https.Agent({
  rejectUnauthorized: false  // Disable SSL certificate validation (not recommended for production)
});

// Set up a route to proxy the API request for fetching test runs
app.get('/api/testruns', async (req, res) => {
  const auth = 'Basic ' + Buffer.from(`${USERNAME}:${API_KEY}`).toString('base64');
  
  try {
    // Fetch the test runs for the specified project
    const response = await axios.get(API_URL, {
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
      httpsAgent: agent // Using httpsAgent to handle SSL
    });

    // Log the full response to inspect its structure
    console.log('API Response:', response.data);

    // Extracting the 'runs' array from the response
    const testRuns = response.data.runs; // Get the 'runs' array from the response

    if (!Array.isArray(testRuns)) {
      console.error('API did not return an array of test runs. Response:', testRuns);
      return res.status(500).json({ error: 'API response is not an array of test runs' });
    }

    // Map through the runs and extract the necessary fields
    const extractedTestRuns = testRuns.map((testRun) => {
      return {
        name: testRun.name,
        description: testRun.description,
        url: testRun.url,
        isCompleted: testRun.is_completed,
        passedCount: testRun.passed_count,
        failedCount: testRun.failed_count,
        untestedCount: testRun.untested_count
      };
    });

    // Send the extracted data back to the client
    res.json(extractedTestRuns);
  } catch (error) {
    console.error('Error fetching Test Runs:', error);
    res.status(500).json({ error: 'Failed to fetch test runs' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
