//  creating an array 
var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_number_1 = ordinal_number; _i < ordinal_number_1.length; _i++) {
    var onenumber = ordinal_number_1[_i];
    var ordinalnum = void 0;
    if (onenumber === 1) {
        ordinalnum = "st";
    }
    else if (onenumber === 2) {
        ordinalnum = "nd";
    }
    else if (onenumber === 3) {
        ordinalnum = "rd";
    }
    else {
        ordinalnum = "th";
    }
    console.log("".concat(onenumber).concat(ordinalnum));
}
