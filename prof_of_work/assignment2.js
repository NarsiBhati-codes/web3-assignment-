const crypto = require("crypto");

function findHashWithPrefix(startString, Prefix) {
  let input = 0;
  while (true) {
    let inputStr = startString + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");

    if (hash.startsWith(Prefix)) {
      return { input: input, hash: hash };
    }

    input++;
  }
}

const result = findHashWithPrefix("100xdevs", "00000");
console.log(`input: 100xdevs + ${result.input}`);
console.log(`hash ${result.hash}`);
