const fs = require('fs');
const path = './out.log';
const encoding = 'utf8';

const writeStream = fs.createWriteStream(path, 'utf8');

process.stdin.on('data', chunk => {
	const data = chunk.toString(encoding).trim();
	writeStream.write(chunk, 'utf8');
	console.log(`${data} > ${path}`);
});

process.stdin.on('end', () => {
	writeStream.close();
	console.log("Done");
});