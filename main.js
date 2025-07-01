// const express = require("express");
// let ourApp = express();

// ourApp.use(express.urlencoded({ extended: false }));

// ourApp.get("/", function (req, res) {
//   res.send(`
//         <form action = "/answer" method = "POST">
//             <p>What color is the sky on a clear and sunny day?</p>
//             <input name = "skyColor" type = "text" autoComplete = "off">
//             <button>Submit Answer</button>
//         </form>
//         `);
// });

// ourApp.post("/answer", function (req, res) {
//   if (req.body.skyColor.toLowerCase().trim() == "blue") {
//     res.send(`
//         <p>congratulation your answer is correct</p>
//         <a href="/">Home</a>
//         `);
//   } else {
//     res.send(`
//         <p>Sorry, your answer is wrong</p>
//         <a href="/">Home</a>
//         `);
//   }
// });

// ourApp.get("/answer", function (req, res) {
//   res.send("Are you lost your mind!");
// });

// const port = 3000;

// ourApp.listen(port, () =>
//   console.log(`Server is running on http://localhost:${port}`)
// );

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
