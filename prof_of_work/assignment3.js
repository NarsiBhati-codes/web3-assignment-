const crypto = require('crypto'); 

function findHashWithPrefix(startWith,prefix) {
    let input = 0;
    while(true) {
        let inputStr = startWith + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)) {
            return {input: input,hash: hash} 
        }
        input++;
    }
}


const startWith = `
harkirat => Raman | Rs 100 
Ram => Ankit | Rs 10
`;
const result = findHashWithPrefix(startWith,'00000');
console.log(`input: ${startWith} + ${result.input}`);
console.log(`hash:  ${result.hash}`);