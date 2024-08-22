function arrayToHex(bytesArray) {
  let hexString = "";
  bytesArray.map((char) => {
    hexString += char.toString(16).padStart(2, "0");
  });
  return hexString;
}

const str = "hello";
const bytesArray = new TextEncoder().encode(str);
console.log(bytesArray);
const hexString = arrayToHex(bytesArray);
console.log(hexString);
