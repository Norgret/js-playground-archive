/*

When reading large files, should read
data chunk-by-chunk as variable may not
be able to store huge values.

First, create read stream. Then, read
individual chunks of data from stream.

*/

const fs = require('fs');
const path = './bigfile.log';

fs.stat(path, (err, stats) => {
	if (err) throw err;
	console.log(stats);
});


/*

use [createReadStream | createWriteStream]
instead of [readFile | writeFile] too for
optimization

*/

const stream = fs.createReadStream(path, 'utf8');

let data = '';

stream.once('data', () => {
	console.log("*> Created read stream");
	process.stdout.write("[BOF>>]\n");
});

stream.on('data', chunk => {
	process.stdout.write(`>> read chunk: ${chunk.length} bytes\n`);

	// process data here
	// optimize runtime by asynchronously processing file data
	data += chunk;
});

stream.on('end', () => {
	process.stdout.write("[<<EOF]\n");
});
