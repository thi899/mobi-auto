
function updateData(currentObject, newDataObject) {
    const updatedObject = { ...currentObject }; 
    
    Object.keys(newDataObject).forEach(key => {
      if (isValidKey(currentObject, key)) {
        updatedObject[key] = newDataObject[key]; 
      }
    });
  
    return updatedObject; 
  }
  
  function isValidKey(currentObject, key) {
    return currentObject.hasOwnProperty(key); 
  }
  
  module.exports = updateData;
  