//global storage for signal server clients
global.appRoot = __dirname;
global.signalClients = {};

//import the app and server
const {app, server} = require("./servercode/configBasic");

//import the code for signalling and the kraken portal
require("./servercode/mainpath");

//listen on port 3000
server.listen(3000, "0.0.0.0", () => {
	console.log(`[+] Server is Running on port 3000`);
});
