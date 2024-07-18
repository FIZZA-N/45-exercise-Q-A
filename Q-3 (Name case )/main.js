var personalinfo = "Fizza nayyab";
console.log(personalinfo.toLowerCase());
console.log(personalinfo.toUpperCase());
console.log(personalinfo.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
