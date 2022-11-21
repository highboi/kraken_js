//get the app and server
const { app, server } = require("./configBasic");

//a get path for connecting to the network
app.get("/", async (req, res) => {
	console.log("HELLO THERE");
	return res.render("portal.ejs", {nodes: global.signalClients});
});
