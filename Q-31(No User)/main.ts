//  creating an array 
let user_name = ["Fizza", "Minahil", "Marooj","Admin", "Rimsha", "Zoran"]

user_name = []

//  if 
if (user_name.length === 0){
    console.log("We need to find some users!")

}else{
    // greeting message  to each user 
user_name.forEach(oneUser => 
{
    if (oneUser === "Admin" ){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);

    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
}

)
}
//  now removing all the user from the array 
//  by doing this above userName = []

