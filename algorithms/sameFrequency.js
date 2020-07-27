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
  
    for(let i=0; i < num2arr.length; i++){
      if(!(num2arr[i] in storage) || storage[num2arr[i]] < 1){
        return false
      } else {
        storage[num2arr[i]] -=1
      }
    }
  
    return true
  }