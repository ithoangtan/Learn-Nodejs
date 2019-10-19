var person = {
    ho: "Hoang",
    ten: "Tan",
    chaomung: function(){
        console.log("Chao mung " + person.ho +" "+ person.ten);
    }
}

person.chaomung();

console.log("Naf nif: " + person["ten"]);