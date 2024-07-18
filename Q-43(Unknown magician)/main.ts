

//  making a function to print magician name 
function magician(magician_name : string []){
    magician_name.forEach(magician_one => console.log(magician_one));
}

function make_great(great_one : string []){
    return magician_name.map(magician_name_one => `The Great ${magician_name_one}`);    
}


let magician_name: string [] = ["Harry potter", "Fizza", "Peterpan", "you"];
// let magician_1: string [] = make_great(magician_name);
// magician(magician_1);



//  making a copy of original array  with .slice 
  let copy_magician_name = magician_name.slice()

// modify the copied array to include "The great " with their name 
let copy_great_magician = make_great(copy_magician_name)


//  show both arrays 
//  1st array 
console.log(`\nThe original array \"values\"\n`);
magician(magician_name);

//  copy array
console.log(`\nThe copied array \"values\"\n`);
magician(copy_great_magician); 

















// //  making a new function to put "The Great "  after every magician name 

// function make_great(magician_names: string []){
//     return magician_names.map(magician => (`The Great ${magician}`));

// }


// //  here we have save the array  in a new variable 
// let magician_variable: string [] = ["harry potter", "charlie", "peter pan"]
// console.log(magician_variable);

// //  now we call the function and assign it the value of the array 

// let great_magician: string[] = make_great(magician_variable);

// show_magician(great_magician);