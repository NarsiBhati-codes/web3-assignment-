// using hashing function sha-256 

const crypto = require('crypto');
const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);