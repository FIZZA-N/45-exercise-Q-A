// Defining a function which will print all array values 
function show_magician(magician_names) {
    magician_names.forEach(function (magician) { return console.log(magician); });
}
//  here we have save the array  in a new variable 
var magician_variable = ["harry potter", "charlie", "peter pan"];
//  now we call the function and assign it the value of the array 
show_magician(magician_variable);
