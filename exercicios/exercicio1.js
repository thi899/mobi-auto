
function maskify(string) {
    if (isShortString(string)) {
      return string;  
    }
  
    const maskedPart = getMaskedPart(string);
    const visiblePart = getVisiblePart(string);
    
    return maskedPart + visiblePart; 
}
  
  function isShortString(string) {
    return string.length <= 4;
  }
  

  function getMaskedPart(string) {
    const numberOfHashes = string.length - 4;
    return '#'.repeat(numberOfHashes);
  }
  

  function getVisiblePart(string) {
    return string.slice(-4);
  }
  
  module.exports = maskify;
  