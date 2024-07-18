
//  making  3 different arrays 

let current_users = ["kiki", "pipi", "titi", "gigi","chichi"];

let  new_users = ["Kiki", "Aiai", "Didi", "lili", "oioi", "titi"]


new_users.forEach( new_0ne_User => {
    let our_condition  =  current_users.some(current_one_user =>   current_one_user.toLowerCase()  === new_0ne_User.toLowerCase());
    if (our_condition){
    console.log(`Sorry ${new_0ne_User} is already taken.`);


    }else {
    console.log(` This username ${new_0ne_User} is not available.`)
}

}
)