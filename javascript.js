var packages = {
	internal: ["function", "import"]
}

function compile(code) {
	var compiledData = {
		functions: {}
	}

	var indent = " "; // Temporary

	var expectedIndent = 0;
	for (var l = 0; l < code.length; l++) {
		var line = code[l];
		var lineSplit = line.split(" ");

		var rawLine = getIndent(line, indent, "without");
		var indents = getIndent(line, indent, "length");

		// This is temporary
		expectedIndent++;
		if (line.startsWith("function")) {
			var functionInfo = {};
			var name = lineSplit[1];

			lineSplit.splice(0, 2); // Remove function and name

			functionInfo.parameters
			functionInfo.line = l;

			compiledData.functions[name] = functionInfo;
		} else {
			expectedIndent--;
		}

		// Uneeded indent
		if (expectedIndent < indents) {
			return "Unneeded indent on line " + (l + 1);
		}
	}

	return compiledData;
}

// indent = tab, spaces, underscores?
// format = "without" indents, "length" of indents
function getIndent(string, indent, format) {
	var length = indent.length;
	
	var c = 0; // Character
	var done = false;
	while (!done) {
		if (string.substring(c, c + length) == indent) {
			c += length;
		} else {
			done = true;
		}
	}

	if (format == "length") {
		return c / length;
	} else if (format == "without") {
		return string.substring(c, string.length);
	}
}

console.log(compile([
	"function doThing jim",
	" print (jim)",
	" print This is a test"
]));