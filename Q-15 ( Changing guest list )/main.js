var guest_list = ["rimsha", "minahil", "marooj", "zoran"];
var not_coming = guest_list[0];
console.log(not_coming, "is not coming to the dinner for some personal reason");
//   how to remove a person from the list 
guest_list.splice(0, 1, "Sadia");
//  slice will remove the  the rimsha from the list as we have indicate it by providing it the index  numberv
//   and then we have provided it a  new index number and the value to put it in that place so that it will re set the list 
//  now  we  will make it for each function for this 
guest_list.forEach(function (new_guestlist) { return console.log("Salam ".concat(new_guestlist, " would you like to come to the dinner at my house?")); });
