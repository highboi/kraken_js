//set up other libraries
const { exec } = require("child_process");

//global storage for signal clients
global.signalClients = {};

//custom imports
const {app, server} = require("./servercode/configBasic");
require("./servercode/mainpath");

//listen on port 3000
server.listen(3000, "0.0.0.0", () => {
	console.log(`[+] Server is Running on port 3000`);
});
