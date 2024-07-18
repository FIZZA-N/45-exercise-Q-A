//  creating an array 
var user_name = ["Fizza", "Minahil", "Marooj", "Admin", "Rimsha", "Zoran"];
user_name = [];
//  if 
if (user_name.length === 0) {
    console.log("We need to find some users!");
}
else {
    // greeting message  to each user 
    user_name.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
//  now removing all the user from the array 
//  by doing this above userName = []
