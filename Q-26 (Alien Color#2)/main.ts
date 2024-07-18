
let  alien_color = "blue";
//  "=" is used ti assing a value to the variable 
//  "==" is used to just check the  inner value 
//  "==="  it not only check the value but also check type as well like if black value is true than it also check whether it is true or  not 


if (alien_color === "blue"){
    //  code 
    console.log(` Player just earned 5 points for shooting an alien. because  alien is in ${alien_color} color `);
}else{
    console.log("player just earned 10 points because alien is not in blue color.");
}

//  Secind version ( wrong )
if (alien_color === "white"){
    //  code 
    console.log(` Player just earned 0 points for shooting an alien. because  alien is in ${alien_color} color `);
}else{
    console.log(" bro this not the right way to deal with the alien.");
}