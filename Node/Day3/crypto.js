const crypto = require('crypto');
const fs = require('fs');

// returns hash Buffer
exports.getSha256hash = function(data) {
	const hash = crypto.createHash('sha256');
	hash.update(data);
	const hashBuffer = hash.digest();
	return hashBuffer;
}


// asynchronously encrypts and executes callback on data
exports.AESencrypt = async function(data, key, iv = crypto.randomBytes(16), callback, algorithm = 'aes-256-cbc') {

	// createCipheriv: returns Cipher instance
	const cipher = crypto.createCipheriv(algorithm, key, iv);

	// Cipher.update: adds string to Cipher, returns 16 byte Buffer on overflow
	// Cipher.final: returns last block of ciphertext
	const bytes = Buffer.concat([cipher.update(data), cipher.final()]);
	const ciphertext = {
		bytes: bytes,
		hex: bytes.toString('hex'),
		base64: bytes.toString('base64')
	};
	callback(ciphertext);

}


class StreamCiher {

}