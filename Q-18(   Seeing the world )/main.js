// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visit_bucketlist = ["germany", "Turkiye", 'China', 'Canada', 'Japan'];
console.log(" Original order of the array", visit_bucketlist);
//   to make copy of an array we use ...
// and it dont change the original array 
//  .sort will print the  the array in Alphabetical order 
//  without making any changes in the  original array 
console.log(" Array copy in ALPHABETICAL ORDER of the array", __spreadArray([], visit_bucketlist, true).sort());
//  SHOWING MY ORIGINAL ORDER 
console.log("Original Array", visit_bucketlist);
// printing array in reverse order without modifying  original one 
console.log("REVERSE ORDER", __spreadArray([], visit_bucketlist, true).reverse());
//   still in the same order 
console.log("stillin the same order", visit_bucketlist);
// now reverse the ORIGINAL array 
console.log("change the original", visit_bucketlist.reverse());
//  to bring back you array original order we will  so reverse again 
console.log("Bring it back to its orginal way", visit_bucketlist.reverse());
// to sort  the orignal array to alphabetical order consl
console.log("ORGINAL ARRAY IN ALphabetical order", visit_bucketlist.sort());
console.log("Oroginal in alphabetical order and then again in reverse", visit_bucketlist.sort().reverse());
