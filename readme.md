Simple Express.js Form App
A lightweight web application built with Express.js that serves an HTML form, processes the user's answer, and provides instant feedback.

This project is a great example for beginners learning how to handle GET and POST requests, process form data, and implement basic conditional logic in a Node.js environment.

✨ Features
Interactive Form: Displays a simple question to the user.

Form Submission: Uses the POST method to securely send the user's answer.

Answer Validation: Checks if the submitted answer is correct.

User Feedback: Shows a "congratulations" or "sorry" message based on the answer.

Simple Routing: Demonstrates basic routing for different HTTP methods.

🚀 How to Run
Prerequisites
You must have Node.js and npm installed on your system. You can verify this by running node -v and npm -v in your terminal.

Instructions
Save the Code: Save the code below into a file named server.js.

Create package.json: In your terminal, in the same directory as server.js, run this command to create a package.json file:

npm init -y

Install Express: Install the required dependency:

npm install express

Start the Server: Run the application with the following command:

node server.js

You should see the message: Server is running on http://localhost:3000

Access the App: Open your web browser and navigate to http://localhost:3000.

💻 The Code
Here is the complete, commented source code for the server.

const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Route for the home page - displays the form
app.get("/", function (req, res) {
  res.send(`
    <form action="/answer" method="POST">
      <p>What color is the sky on a clear and sunny day?</p>
      <input name="skyColor" type="text" autocomplete="off">
      <button>Submit Answer</button>
    </form>
  `);
});

// Route to handle the form submission
app.post("/answer", function (req, res) {
  // Sanitize and check the user's answer
  if (req.body.skyColor.toLowerCase().trim() === "blue") {
    res.send(`
      <p>Congratulations, your answer is correct!</p>
      <a href="/">Try again</a>
    `);
  } else {
    res.send(`
      <p>Sorry, your answer is wrong.</p>
      <a href="/">Try again</a>
    `);
  }
});

// A catch-all for anyone trying to GET the /answer URL
app.get("/answer", function (req, res) {
  res.send("Are you lost? The form is on the home page.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
