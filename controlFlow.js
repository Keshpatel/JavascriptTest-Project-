let hour = 14
if(hour >= 6 && hour < 12) {
   console.log("Good Morning !");

} else if(hour >=12 && hour < 18) {
     console.log("Good Afternoon!");
} else {
    console.log("Good Evening !")
}


//Switcvh Case 

console.log("===============================");
let role ="Not";
switch(role) {
    case'guest':
        console.log("Guest User !");
        break;
    case'moderator':
        console.log("Moderator  User !");
        break;
   default:
        console.log("Unknown User !");
        break; 

}


//LOOPS  : For 

for (let i =0;i<=5;i++) {

    console.log("The Loops are super easy in Java script ....");
}

for (let i=5;i>=1;i--) {
   if(i % 2 !== 0 )
      console.log("The Odd Numner are "+i);
}


//-- : While loop 

let i = 0;
console.log("------------While loop-------------");
while(i<= 5) {
    if(i%2 !==0)
         console.log(i);
    i++;     
}

//- - Do  while loop
console.log("------------ Do While loop-------------"); 
let j = 9;
do {
    if(j%2 !==0)
         console.log(j);
    j++;  
} while(j <= 5);

// -- For in loop 
console.log("------------ For in loop-------------");
const person = {
    Name : 'Keshini',
    age: 30
};

/////---  For in loop : To itirate the properties of an Object
for (let key in person) 
    console.log(key, person[key]);

    //Dot Notation 
person.Name
   
 //Braket Notation
 person['Name']

//---  For in loop : To itirate the properties of an Object
 const colors =['red', 'green', 'blue'];
 for (let index in colors)
    console.log(index, colors[index]);

   
// For Of loop  : To iterate the Items of an array     
 const newcolors =['Pink', 'White', 'Black'];
console.log("------------ For of loop-------------");
for (let color of newcolors)
    console.log(color);

// Break and Continue  in loops 

let k = 0 
while(k<=10) {
   // if(k===5) break;
   if(k % 2 === 0 ) {
     k++;
     continue;  // NOT recomanded 
   }
    console.log(k);
    k++
} 






     




