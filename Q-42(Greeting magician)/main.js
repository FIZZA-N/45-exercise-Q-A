// Defining a function which will print all array values 
function show_magician(magician_names) {
    magician_names.forEach(function (magician) { return console.log(magician); });
}
//  function to make  magicinan great throught .map() it will  modify array 
//  making a new function to put "The Great "  after every magician name 
function make_great(magician_names) {
    return magician_names.map(function (magician) { return ("The Great ".concat(magician)); });
}
//  here we have save the array  in a new variable 
var magician_variable = ["harry potter", "charlie", "peter pan"];
console.log(magician_variable);
//  now we call the function and assign it the value of the array 
var great_magician = make_great(magician_variable);
show_magician(great_magician);
