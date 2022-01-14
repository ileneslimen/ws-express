const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("heeloo");
// });

// app.get("/x", (req, res) => {
//   res.send("<h1>hi</h1>");
// });
const middleware = (req, res, next) => {
  console.log(req.method);
  next();
};

app.use(middleware);

app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });
// app.get("/style.css", (req, res) => {
//   res.sendFile(__dirname + "/public/style.css");
// });

const port = 5000;

app.listen(port, () => console.log(`port is running on port ${port}`));
