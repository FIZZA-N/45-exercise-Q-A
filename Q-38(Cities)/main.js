//  making a function 
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//  calling function  1st time
describe_city("karachi");
//  calling function  2nd time
describe_city("Islamabad");
// calling function 3rd  times
describe_city("Toronto", "CANADA");
