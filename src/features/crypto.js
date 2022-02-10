const SECRET = 'wrdly'

export const encrypt = (str) => {
  const textToChars = (str) => str.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => {
    let temp = "0" + Number(n).toString(16)
    return temp.substring(temp.length - 2)
  }
  const applySaltToChar = (code) =>
    textToChars(SECRET).reduce((a, b) => a ^ b, code);

  return str
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

export const decrypt = (encrypted) => {
  const textToChars = (encrypted) =>
    encrypted.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(SECRET).reduce((a, b) => a ^ b, code);
  return encrypted
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};
