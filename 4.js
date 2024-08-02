var names = ["Pizza", "Burger", "Chowmein", "Sandwich", "Momos"];

/*
function foood(foodname, order){
    if(order > 0 && order < 3 && foodname == "sandwiches"){
        return names[3];
    } else if(order > 3 && order > 6 && foodname == "Burgers"){
        return names[1];
    } else if(order > 7 && order < 10 && foodname == "Momos"){
        return names[4];
    } else if(order > 11 && order < 15 && foodname == "Chowmin"){
        return names[2];
    } else if(order > 16 && order < 20 && foodname == "Pizzas"){
        return names[0];
    } else{
        return "We don't take such large orders sori";
    }
    return
}
console.log(foood("Chowmin", 34));
// unsolved thingy^*/

function caseinswitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "other stuff";
            break;
    }
    return answer;
}

console.log(caseinswitch(5));

//multiple inputs giving the same output:
function switchsize(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Med";
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "Kuch bhi";
            break;
        }  
        return answer;     
}

console.log(switchsize(8));

//we can also replace if else by switch which is easier to comprehend.
//to switch boolean values;

function isless(a , b){
    return a < b;
}
console.log(isless(4, 2));
console.log(isless(2,3));

function abtest(a,b){
    if (a < 0 || b < 0){
        return undefined;
    }
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}
console.log(abtest(1, 1));

/* here .round rounds up value to the closest integer, pow (a, b) means a ki power b
and sqrt is sqrt :) */


