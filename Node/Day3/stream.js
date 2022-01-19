const fs = require('fs');
const file = fs.createWriteStream('./test.txt');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
	let chunk;
	while ((chunk = process.stdin.read()) !== null) {
		process.stdout.write(`data: ${chunk}`);
		file.write(`${chunk}`);
	}
});

process.stdin.on('end', () => {
	// control + d
	process.stdout.write("done\n");
});


process.stdin.on('close', () => {
	process.stdout.write("close end\n");
});

// file.end();