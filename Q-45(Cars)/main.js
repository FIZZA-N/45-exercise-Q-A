//  define a function to create a car object 
function create_car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    //  initializing a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //  Add additional option to the car object
    optional.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//  call the function to create a car object 
var my_car = create_car("honda", "Accord", "color : Silver", "Sunroof : False");
//  print the variable  t ensure all the information is working properly
console.log(my_car);
