const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds061200.mlab.com:61200/heroku_rp1m3s3w");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
