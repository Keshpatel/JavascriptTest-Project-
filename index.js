// Comments : This is my first Java script code  
console.log('Hello World');
let Name = "Keshini";
console.log(Name);
//can not be a reserved key word 
// they should be meeningful 
//can not start with the number (1name)
// can not contain space or hyphen (-)
let firstName = 'Keshini', FirstName = "Dhaval";
console.log(firstName, FirstName);
console.log(firstName, FirstName);

//Constant 
const intrestRate =0.3;
// only in case of let : intrestRate= 1;
console.log(intrestRate);

// Primitives/Values Types : String , Number, Boolean, undefined , null 
let myname ="Keshini";  //String Literal 
let age = 30;
let isApproved = true;
let firstNameNew = undefined;
let selectedColor = null;

// Reference type : Object,  Array , Function

let person = {
    Name: 'KeshiniPatel', 
    age: 30
};
// Dot Notation
person.Name = "Dhaval";

//Braket Notation 
person['Name'] = 'Kavya';

console.log(person.Name);

//Array : is A datastucture use  to list of items 
let selectedColors =['red', 'green'];
selectedColors[2] = 'Blue';
selectedColors[3] = 1;
console.log(selectedColors.length); 

//Functions : One of findamental building block,  Perform task or caculate the values 
//--- Perfoming a Task 
function greet(Name, lastName) {
    console.log('Hello ' + Name+ ' ' +lastName);
}

greet('Keshini', 'Patel');
greet('Dhaval', 'Patel');

//Types Of Functions 
// Canlulate and returned a Value 

function square(number) {
    return number * number ;
}
 
let numberValue = square(400);
console.log(numberValue);
console.log(square(2));

let a = 'red';
let b = 'blue';
let c =a;
a=b;
b=c;


console.log('------------------------------------')
console.log(a);
console.log(b);
















