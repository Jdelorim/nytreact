require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3001;

console.log(`test the process ${process.env.BASEURL}`);
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.post("nyt/:query", ((req, res) => {
  axios.get(process.env.BASEURL + process.env.APIKEY + req.params.query)
    .then(response =>{
      
      res.json(response.data.response.docs);
      
    });
}));

app.use(routes);



app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
