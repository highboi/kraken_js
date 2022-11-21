//set up express server stuff
const express = require("express");
const app = express();
const server = require("http").Server(app);
const busboy = require("busboy-body-parser");

//set the view engine as ejs for rendering the views
app.set("view engine", require("ejs").renderFile);
app.use(express.static("./views"));

//configure the app with middleware
app.use(busboy());
app.use(express.json());

//export all useful objects
module.exports = {
	app,
	server
};
