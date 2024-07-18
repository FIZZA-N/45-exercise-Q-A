
//  making a function which stores 3  parameters in it 

function album(artist_name: string, album_title: string, track?: number){
    let album_no: {artist: string, titles: string, track?: number} = {
      artist:  artist_name,
      titles: album_title  
    }
    if( track !==  undefined){
        album_no.track = track;
    }
return album_no;
}

//  Assigining 3 different values to the variable 
let album1 = album("jin", "moon", 31);
let album2 = album("jungkook", "seven");
let album3 = album("RM","boss");


//  printing the variable

console.log(album1);
console.log(album2);
console.log(album3);
