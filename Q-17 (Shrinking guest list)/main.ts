// // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.






let guest = ["rimsha", "marooj", "minahil", "zoran"];

//   rimsha cant come 

let not_coming = guest[0];
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

let middleguest_inthemiddle: number =  Math.floor(guest.length /2);


//  now we will add the middle value to the middle of the array 
//  using .splice 

guest.splice(middleguest_inthemiddle, 0, "shazia");


console.log("Updated List  of our guest");

//  sending invitation to  each guest customise 
//  to print  array value seperately we use .foreach 

guest.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with me`));

//   sending a new message that we can invite only 2 people 

console.log("Unfortunately, we are really sorry that we can not invite  you to  the dinner as  the order table has not been arrive at the  time. therefore we can only invite only 2  people at the dinner.");


//  we will use while loop bcz we have to remove all the guest from the list  untill  there is only 2  guest left

while (guest.length > 2 ){
    let remove_guest =  guest.pop()
    console.log(`sorry, ${remove_guest}, we cant invite you to the dinner.`);

}

//   To print  a message  to  all the lucky  guest that are sytill invited 

console.log(" Invitation to the 2 lucky guests");

guest.forEach(lucky_guest => console.log(`Luckily, ${lucky_guest} are still invited to the dinner`));


//  removing last two guest from the list 
guest.pop();
guest.pop();

console.log( "Empty list", guest);
