//  making a function 
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "I Love Typescript"; }
    console.log("I Ordered a shirt of \"".concat(size, "\" size with \"").concat(printmessage, "\" printed on it."));
}
//  Calling a function  with its default values 
make_shirt();
//  Calling a function now with medium size and default message 
make_shirt("Medium");
make_shirt("small", "I love Python");
