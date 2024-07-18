//  making a function which stores 3  parameters in it 
function album(artist_name, album_title, track) {
    var album_no = {
        artist: artist_name,
        titles: album_title
    };
    if (track !== undefined) {
        album_no.track = track;
    }
    return album_no;
}
//  Assigining 3 different values to the variable 
var album1 = album("jin", "moon", 31);
var album2 = album("jungkook", "seven");
var album3 = album("RM", "boss");
//  printing the variable
console.log(album1);
console.log(album2);
console.log(album3);
