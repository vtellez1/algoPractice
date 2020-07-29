
// my initial solution
function makeSevenTriangle(){

    let triangle = '';
  
    for (let i = 0; i < 7 ; i ++){
      console.log(triangle += '#');
    };
  };
  
  makeSevenTriangle();
  
  
  // book suggested using length, made another solution
  function otherTriangle(){
    let tri = '';
  
    while(tri.length < 7){
      tri += '#'
      console.log(tri);
    };  
  };
  
  otherTriangle()
  
  function fizzBuzz(){
    for ( let i = 1; i <= 100; i++){
  
      if( i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
      } else if (i % 3 === 0){
        console.log('Fizz')    
      } else if (i % 5 === 0){
        console.log('Buzz')
      } else {
        console.log(i)
      };
    };
  };
  
  fizzBuzz()