function validAnagram(str1, str2){
    let store = {};
    let isAnagram = true;
  
    if (str1.length !== str2.length){
      return false;
    }
   
    for(var char in str1){
      let letter = str1[char]
        store[letter] = (store[letter] || 0) + 1;
    }
  
    for (var char2 in str2){
      let otherLetter = str2[char2];
  
      if (otherLetter in store && store[otherLetter] > 0){
        store[otherLetter] = store[otherLetter] - 1;
      } else {
        return false;
      }
    }
  
    return isAnagram;
  }