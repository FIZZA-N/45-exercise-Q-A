//  making  3 different arrays 
var current_users = ["kiki", "pipi", "titi", "gigi", "chichi"];
var new_users = ["Kiki", "Aiai", "Didi", "lili", "oioi", "titi"];
// new_users.forEach( new_one_user => {
//  if (current_users === new_users){
//     console.log("you will need to enter a new username.")
// }else{
//     console.log ("The username is available")
// }
// }
// )
new_users.forEach(function (new_0ne_User) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_0ne_User.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_0ne_User, " is already taken."));
    }
    else {
        console.log(" This username ".concat(new_0ne_User, " is not available."));
    }
});
