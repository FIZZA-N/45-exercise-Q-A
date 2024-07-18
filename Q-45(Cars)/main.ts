//  define a function to create a car object 

function create_car(manufacturer, model, ...optional){
    //  initializing a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model

    };

    //  Add additional option to the car object
    optional.forEach(option => {
        let [key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}

//  call the function to create a car object 
let my_car = create_car("honda", "Accord", "color : Silver", "Sunroof : False");

//  print the variable  t ensure all the information is working properly
console.log(my_car);

