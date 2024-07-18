// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//  making a variables
var apple = "apple";
var UPPERCASE_APPLE = "APPLE";
var ten = 10;
var twenty = 20;
//   creating an array 
var city_name = ["berlin", "moscow", "LA", " doha", "london"];
// • Tests for equality and inequality with strings
console.log("\n Test 1: is apple equal to apple?");
console.log(apple == "apple");
console.log("\n Test 1: is apple  not equal to apple?");
console.log(apple != "apple");
// • Tests using the lower case function
console.log("\n test 2 :Is  apple  equal to apple  after  conversion to lower case? ");
console.log(UPPERCASE_APPLE.toLowerCase() == "apple");
console.log("\n TEST 2: is apple equal to lower case after  converting it to lower case ");
console.log(UPPERCASE_APPLE.toLowerCase() != "apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n Test 3: to check whether it is equal or not ?");
console.log(ten != twenty);
console.log("\n  to check whether the numeric value inequality");
console.log(ten == twenty);
//  greather than 
console.log("\n to  check whether it is greater than or not?");
console.log(ten > twenty);
// less than 
console.log("\n to check whether it is less than or not?");
console.log(ten < twenty);
// greater than or equal to 
console.log("\n  to check that is  greater than or eual to 10 ?");
console.log(ten >= 5);
//  less than or equal to 
console.log("\n to check that is  ten less than or equal to 20 ?");
console.log(twenty <= 50);
// • Tests using "and" and "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
// in &&  if any one condition is wrong it will say that it is wrong and if any one is true it will executr false 
//  both condition need to be true 
console.log("\n twenty is equal to 20 and twenty is  greater than 10. ");
console.log(twenty == 20 && twenty > 30);
//  "or " operator  will give true if onyone is true  oppposite to &&
//   "or "  operator will give true if anyone is  false 
//   one condition is true here and one is false 
console.log("\n 20 is greater than 30 or equal to 20");
console.log(20 > 30 || 20 == 20);
//  both condition are false 
console.log("\n to check whether 10 is equal to 30 or greater than 30 ");
console.log(10 > 30 || ten == 30);
// • Test whether an item is in a array
console.log("\n To check  that is dubai included in array  or not ");
console.log(city_name.includes("dubai"));
console.log("\n To check whether the berlin is includedin the array or not ");
console.log(city_name.includes("berlin"));
// • Test whether an item is not in a array
