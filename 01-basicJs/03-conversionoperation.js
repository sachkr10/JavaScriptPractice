let score = "33ab";

console.log(typeof score);
console.log(typeof(score));

let result = Number(score)
console.log(typeof result);
console.log(result);

/*
 "33" => 33
 "33abc" =>  NaN
 true => 1, false => 0

*/
console.log('Boolean Conversion');

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
// 1=> true, 0 => false
//empty String => false,  anyString => true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//***********Operations************

let value = 3
let negValue = -value
console.log(negValue);





