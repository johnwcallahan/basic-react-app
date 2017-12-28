const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// CONFIG
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(express.static("dst"));

app.listen(port);
console.log(`listening on port ${port}`);
