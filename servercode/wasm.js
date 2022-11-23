//allow for the execution of system commands
const { exec } = require("child_process");
const fs = require("fs");

//import app and server
const { app, server } = require("./configBasic");

//post path for code
app.post("/wasm-upload", async (req, res) => {
	console.log(req.files);

	//save the uploaded file
	var filepath = global.appRoot + "/views/binaries/" + Date.now() + req.files.code.name;
	fs.writeFile(filepath, req.files.code.data, (err) => {
		if (err) throw err;
	});

	//make a target file for emscripten to compile to
	var wasmpath = global.appRoot + "/views/binaries/" + Date.now() + req.body.title + ".wasm"

	//execute emscripten
	var result = await new Promise((resolve, reject) => {
		exec(`emcc ${filepath} -o ${wasmpath}`, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
			}

			resolve(stdout);
		});
	});

	//give the file for the client to access using a url
	var wasmaccess = wasmpath.replace(global.appRoot + "/views", "");
	return res.send({wasm: wasmaccess});
});
