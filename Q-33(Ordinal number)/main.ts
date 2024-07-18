
//  creating an array 
let ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9]


for( let onenumber of ordinal_number ){

    let ordinalnum: string; 

    if (onenumber === 1){
        ordinalnum = "st";

    }else if(onenumber === 2){
        ordinalnum = "nd";

    }else if (onenumber === 3){
        ordinalnum = "rd";

    }else {
        ordinalnum = "th";
    }
    console.log(`${onenumber}${ordinalnum}`);


} 
