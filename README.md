# Gate3 Security Testing

## Description

The **Gate3 Security Testing** page is designed to introduce **QA security training** using tools like **Burp Suite** and **PortSwigger**. This page provides an overview of security testing processes, including pen-testing, vulnerabilities detection (such as XSS and SQL injection), and practical examples using real-time scenarios.

The website is part of a training initiative for the QA team, where various **pen-testing techniques** are covered, and live test results are displayed to evaluate the security issues identified by the QA team.

## Features

- **Hero Banner Section**: Provides a brief introduction to QA team training with a call-to-action (CTA) button that leads to further information about the Gate3 Training.
- **Navigation Menu**: Links to various sections of the site including the pen-testing page and training section.
- **Test Run Results**: Displays live results of test runs from an API endpoint, showing the status of the test (completed, in progress), and the number of passed, failed, or untested results.
- **QA Security Training**: Provides a link to a full document outlining the security testing process and a button to start a quiz based on the training.
- **Pen-Testing Updates**: Displays a list of security vulnerabilities being tested and explained in real-time.
- **Footer**: Includes information about the creator, **Elima Tripathy**, and links to the GitHub repository for the project.

## Technologies Used

- **HTML**: Used for structuring the webpage.
- **CSS**: Used for styling and layout of the webpage.
- **JavaScript**: Used for dynamic interactions, such as loading test run data, displaying live results, and handling popups.

## Design Process

### Layout
The page layout is designed to provide a user-friendly experience with a hero banner, easy navigation, and dynamic content sections. The main sections include:
1. **Hero Banner** with a CTA button.
2. **Navigation** bar with links to key sections.
3. **Gate3 Security Training** section with information and quiz buttons.
4. **Pen Testing** section that highlights different security vulnerabilities.

### Wireframes
- **Desktop View**: Features a large hero banner, navigation at the top, and dynamic content sections.
- **Mobile View**: Fully responsive, adjusting the content to smaller screen sizes for easy navigation.

## Features to be Implemented in Future Releases

- **Improved Mobile Optimization**: Further optimize for mobile users.
- **Additional Security Training Modules**: More interactive quizzes and real-world pen-testing scenarios.

## Deployment Steps

To deploy the website:
1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Open the `index.html` file in your browser to view the website locally.
4. For online deployment, use services like **GitHub Pages** or **Netlify**.
   - Push the repository to your GitHub account.
   - Go to your repository’s settings and select the **GitHub Pages** section to deploy the site.
   - Your site will be live at `https://<your-username>.github.io/<repository-name>`.

## Testing Attempts

### Manual Testing:
- **Cross-browser Testing**: The site has been tested on Chrome, Firefox, and Safari to ensure compatibility across different browsers.
- **Responsiveness Testing**: Ensured the page adjusts correctly on mobile and desktop devices using browser developer tools.

### Automated Testing:
- Although the project doesn't currently have automated testing set up, there are plans to implement it in future releases.

## Acknowledgements and Credits

- **Elima Tripathy**: Creator of the Gate3 Security Testing website.
- **GitHub Repo**: [Gate3-Security-Testing GitHub Repository](https://github.com/TripathyElima-Applitools/Gate3-Security-Testing)
- **Burp Suite & PortSwigger**: Tools used for security testing in the training process.

## License

This project is open-source and available under the MIT License. Feel free to clone, modify, and use this code for your own learning or projects.
