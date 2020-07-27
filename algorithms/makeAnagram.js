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

  validAnagram('car', 'rac');

// Instructor's - (Colt Steele's) solution:
  function validAnagram(first, second){
    let lookup = {};
  
    if (first.length !== second.length){
      return false;
    }
   
    for(let i = 0; i < first.length; i++){
      let letter = first[i]
      // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
  
    for (let i = 0; i < second.length; i++){
      let letter = second[i];
  
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]){
          return false;
      } else {
          lookup[letter] -= 1;
      }
    }

    return true;
  }
