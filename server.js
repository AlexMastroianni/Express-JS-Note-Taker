// depedancyes
const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");
//ports and app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//paths to routes and logic
app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, function () {
  console.log(`App is listening on Port ${PORT}`);
});
