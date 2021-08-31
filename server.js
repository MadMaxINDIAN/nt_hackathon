// IMPORTING LIBRARIES
const express = require("express");
const fs = require("fs");
var path = require("path");
const bodyParser = require("body-parser");
var morgan = require("morgan");

// CONFIGURATION VARIABLES AND LOGS
const { IP, PORT } = require("./config");
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});

// APP INITIALISATION
const app = express();

// CONFIGURING APPLICATION
app.use(morgan("combined", { stream: accessLogStream })); // Lon in log file
app.use(morgan("combined")); // Log in Command LIne
app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// ROUTE FILES

// APP ROUTING

// APP LISTENING
app.listen(PORT, IP, (req, res) => {
	console.log(`Server is running on ${IP}:${PORT}`);
});
