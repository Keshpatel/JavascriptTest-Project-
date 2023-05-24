let number = max(5, 10);
console.log(number);
function max(a, b) {
    if(a>b)
        return a;
    else 
        return b;
        
}
//OR
function max(a, b) {
    if(a>b) return a;
       return b;
}
//OR
function max(a, b) {
  return(a>b) ? a : b;
}


console.log("=========================");
console.log(isLandScape(800, 600));
console.log(isLandScape(300, 600));

function isLandScape (width , height) {
    return (width > height)  
}

//FizzBuzz Execise 

const output = fizzBuzz(false);
const output1 = fizzBuzz(3);
const output2 = fizzBuzz(5);
const output3 = fizzBuzz(15);
const output4 = fizzBuzz(7);

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);


function fizzBuzz(input) {
   if(typeof input !== 'number')
     return 'NaN';
    
   if((input % 3 === 0) && (input % 5 === 0))
       return 'FizzBuzz'  
     
   if(input % 3 === 0)
     return 'Fizz';
    
   if(input % 5 === 0 )
     return 'Buzz';

   
      return input  ;  

}

//Odd Even Number 
showNumber(10);

function showNumber(limit) {
    for(let i = 0; i<=limit; i++){
      const message = (i % 2 === 0) ?'EVEN' : 'ODD'
      console.log(i +':'+message);
    }
}

console.log("==============Array ======================")
const numbers =[1, 2, 3]
console.log(numbers);

const joined = numbers.join('-');
console.log(joined);