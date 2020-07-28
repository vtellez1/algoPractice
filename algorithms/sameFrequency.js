function sameFrequency(num1, num2){

    if (num1.length !== num2.length){
      return false;
    }
  
    let storage = {};
    let num1arr = num1.toString().split('');
    let num2arr = num2.toString().split('');  
  
    for(let i = 0; i < num1arr.length; i++ ){
      if (num1arr[i] in storage){
        storage[num1arr[i]] += 1
      } else {
        storage[num1arr[i]] = 1
      }
    }
  
    for(let i = 0; i < num2arr.length; i++){
      if(!(num2arr[i] in storage) || storage[num2arr[i]] < 1){
        return false
      } else {
        storage[num2arr[i]] -=1
      }
    }
  
    return true
  }

  // Instructors solution:

  function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }