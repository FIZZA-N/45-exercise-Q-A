var guest = ["rimsha", "marooj", "minahil", "zoran"];
//   rimsha cant come 
var not_coming = guest[0];
//  message print to  print message   that risha is not coming 
console.log(not_coming, " I can't come to the  dinner, i am really sorry");
//  to remvoe a person from the list we use .splice 
guest.splice(0, 1, "Fizza");
console.log("Good news We have found a bigger dinner");
//  to add  value inthe begining  
//   unshift =>  to add a  anew value at start of  the array 
guest.unshift("Alia");
//  Adding  a new value at the ending index 
guest.push("hina");
//  we dont have any built-in fuction  to add a value in the middle 
//  we ahve to use  own logic to do it 
//  adding a new value in the middle of  te array 
//   1st = we will check the length 
//   2nd = then divide the length by /2 
//  3rd  = we will round off it by math.floor
//  math.floor  will round off the value if the array is in odd number 
var middleguest_inthemiddle = Math.floor(guest.length / 2);
//  now we will add the middle value to the middle of the array 
//  using .splice 
guest.splice(middleguest_inthemiddle, 0, "shazia");
console.log("Updated List  of our guest");
//  sending invitation to  each guest customise 
//  to print  array value seperately we use .foreach 
guest.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with me")); });
