//counting cards
var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:    
        case 5:
        case 6:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case"A":
            count--;
            break;
    }
    
    var holdbet = 'Hold'
    if (count > 0){
        holdbet = 'bet'
    }
    return count  +" " + holdbet ;
}
console.log(cc("A"));

//objects
var mydog = {
    "name": 'Doggu',
    "his legs": 4,
    "tails": 1,
    "friends": ['tina', 'mina', 'rina'],
    12 : "dog number12"
}
var nameValue = mydog.name;
var legsValue = mydog["his legs"];
console.log(nameValue);
console.log(legsValue);

var number = mydog[12];
console.log(number);
console.log(mydog[12]); //both same thing
console.log(mydog);

mydog.name = "happi doggu";
var naam = mydog.name;
console.log(naam);

//to add a new property in already existing object
mydog.bark = "bohtt tez";
console.log(mydog);
// we can delete also a property
delete mydog["his legs"];
console.log(mydog);

//we can also use object in place of switch as a dictionary:

function namelookup(val){
    var result = "";

var lookup = {
    afor : "anaar",
    bfor: "bengan",
    cfor: "charkhi",
    dfor: "doodh",
    efor: "elephant"
};
result = lookup[val];
return result;
} console.log(namelookup("afor"));

//check property:
var myobj = {
    gift: "pony",
    pet: "kitten",
    love: "doggu"
};
function checkobj(prop){
    if (myobj.hasOwnProperty(prop)) {
        return myobj[prop];
    } else {
        return "Not Found";
} 
}
console.log(checkobj("love"));

/* manipualtion of complex objects (idk why it called manipulation either)
 we can have multiple objects in the form of arrays
like
var bigarray = [
    {
        object ; and an array in an object
        rose: ["redrose", "bluerose", "whiterose"]
    },
    {
        gold : necklace,
        silver: ring
    } 
]; like this */
