//   making a function that accept different number of parameter

function making_sandwich (...items: string []){
    console.log("\n Making a sandwich with the following items: \n");
    
    items.forEach(singleitems =>  console.log(singleitems));

    console.log("\n Now enjoy your sandwiches")

}

//  call the function 3 times  different number of arguments 

making_sandwich("tomato","chesse", "bread", "garlic");

making_sandwich("mayo");

making_sandwich("cheese", "tomato", "egg", "mayo", "chicken", "bread", "olives");

