document.querySelector("#compileform #wasm-submit").addEventListener("click", async (event) => {
	//get information about the form
	var form = document.querySelector("#compileform");
	var posturl = form.action;
	var data = new FormData(form);

	//send the code to the server
	var response = await fetch(posturl, {
		method: "post",
		body: data
	});

	//get the response data (the url for the WASM file)
	var responsedata = await response.json();

	//execute the webassembly file as an example
	var wasmresponse = await fetch(responsedata.wasm);

	console.log(wasmresponse);

	var wasmresults = await WebAssembly.instantiateStreaming(wasmresponse);
	console.log(wasmresults);
});
