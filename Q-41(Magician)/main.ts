// Defining a function which will print all array values 


function show_magician(magician_names: string []){
    magician_names.forEach(magician  => console.log(magician));        
    }

//  here we have save the array  in a new variable 
    let magician_variable: string [] = ["harry potter", "charlie", "peter pan"]

//  now we call the function and assign it the value of the array 
show_magician(magician_variable);
