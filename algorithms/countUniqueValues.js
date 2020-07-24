function countUniqueValues(array){
    // add whatever parameters you deem necessary - good luck!
    if(array.length === 0){
      return 0;
    }
  
    let i = 0;
    
    for(let j = 0; j < array.length; j++){
  
      if (array[i] !== array[j]){
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
}
  
  
  countUniqueValues([1, 1, 2, 3, 3, 4])