function checkPalindrome(inputString) {
    if (inputString.length === 1){
        return true
    }
    
    let lastNum = 1;
    
    for(let i = 0; i < inputString.length; i ++){
       if(inputString[i] === inputString.charAt(inputString.length -lastNum)){
           if (i >= inputString.length/2){
               return true
           } else{
             lastNum++  
           }
       } else {
           return false
       }
    }
}