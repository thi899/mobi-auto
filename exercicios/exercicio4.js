function isFirstLetterUppercase(word) {
    if (isEmpty(word)) {
      return false; 
    }
    
    return isUppercase(word[0]);
  }
  
  function isEmpty(word) {
    return word.length === 0;
  }
  
  function isUppercase(char) {
    return char === char.toUpperCase();
  }
  
  export default isFirstLetterUppercase;
  