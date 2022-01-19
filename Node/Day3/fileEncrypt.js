const crypto = require('./crypto.js');
const fs = require('fs');

const _inFilePath = './src/test.txt';
const _outFilePath = `${_inFilePath}.out`;

const _password = 'my secret key';
const _salt = 'MySalt';
const _key = crypto.getSha256hash(_password + _salt);
const _iv = Buffer.alloc(16, 0x00);


fs.readFile(_inFilePath, null, (err, data) => {	// no encoding parameter
												// returns raw bytes buffer
	if (err) throw err;

	crypto.AESencrypt(data, _key, iv = undefined, (ciphertext) => {	// default iv param; 16 random bytes
		fs.writeFile(_outFilePath, ciphertext.bytes, null, (err) => {
			if (err) throw err;
		});
	});

});