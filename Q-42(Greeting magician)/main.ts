// Defining a function which will print all array values 


function show_magician(magician_names: string []){
    magician_names.forEach(magician  => console.log(magician));        
    }

//  function to make  magicinan great throught .map() it will  modify array 
//  making a new function to put "The Great "  after every magician name 

function make_great(magician_names: string []){
    return magician_names.map(magician => (`The Great ${magician}`));

}


//  here we have save the array  in a new variable 
let magician_variable: string [] = ["harry potter", "charlie", "peter pan"]
console.log(magician_variable);

//  now we call the function and assign it the value of the array 

let great_magician: string[] = make_great(magician_variable);

show_magician(great_magician);





