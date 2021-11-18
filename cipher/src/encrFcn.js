const alphLower = 'abcdefghijklmnopqrstuvwxyz';
const alphUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LENGTH = 26;

const encrFcn = (data, shift, obj) => {
    let letterNum 
    letterNum = alphLower.indexOf(data.toString());
    if (shift === 0) {
      if (letterNum === -1) {
        letterNum = alphUpper.indexOf(data.toString());
        if (letterNum === -1) {
          obj.push(data);
          return;
        }
        obj.push(alphUpper[25 - letterNum]);
        return;
      }
      obj.push(alphLower[25 - letterNum]);
      return;
    }
    if (letterNum === -1) {
      letterNum = alphUpper.indexOf(data.toString());
      if (letterNum === -1) {
        obj.push(data);
        return;
      }
      obj.push(alphUpper[(letterNum + shift + ALPHABET_LENGTH) % ALPHABET_LENGTH]);
      return;
    }
    obj.push(alphLower[(letterNum + shift + ALPHABET_LENGTH) % ALPHABET_LENGTH]);
}

module.exports = encrFcn;