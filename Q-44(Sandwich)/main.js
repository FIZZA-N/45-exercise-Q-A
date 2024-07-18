//   making a function that accept different number of parameter
function making_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("\n Now enjoy your sandwiches");
}
//  call the function 3 times  different number of arguments 
making_sandwich("tomato", "chesse", "bread", "garlic");
making_sandwich("mayo");
making_sandwich("cheese", "tomato", "egg", "mayo", "chicken", "bread", "olives");
