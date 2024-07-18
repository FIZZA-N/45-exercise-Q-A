//  making a function 

function make_shirt(size: string =  "large", printmessage: string = "I Love Typescript"){

    console.log(`I Ordered a shirt of \"${size}"\ size with \"${printmessage}"\ printed on it.`)
}


//  Calling a function  with its default values 
make_shirt()

//  Calling a function now with medium size and default message 
make_shirt("Medium")

make_shirt("small", "I love Python")