function nextinline(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testarr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testarr));
console.log(nextinline(testarr , 6));
console.log("After: " + JSON.stringify(testarr));

//booleans
function boolean() {
    return true;
}

function oddeven(num) {
    if (num % 2 == 1){
        return "Yes it's odd";
    }
    return "No, it's even";
}
console.log(oddeven(12));

function equal(val) {
    if (val % 2 == 0 ) {
        return "divisible by 2";
    }
    return "not divisible by 2";
}
console.log(equal(11));

/*=== is the strict equality sign and differentiates between types
here 3 == '3' (gets converted into number and is equal but in 3 === '3' ; it wont be equal
similarly there is does not equal, !== and strict !===*/

function Equal(num) {
    if (num === 1){
        return "true";
    }
    return "false";
}
console.log(Equal(1.000000000000001));
console.log(Equal(1.0000000000000001));
// can use val > 10 or >= 

function check(Val) {
if (Val >= 10) {
    if (Val <= 100){
        return Val + " is in range";
    }
}
    return "not in range";
}
console.log(check(59));

/*or we can join both statements by &&
if (Val >= 10 && Val <= 100) {
    return blhablhaa...
}
*/
function outside(vaL) {
    if (vaL >= 30 || vaL <= 10) {
        return "outside";
    }
    return "in range";
}
console.log(outside(20));

function ifelse(num) {
    var result = "";
    if (num > 10 && num <20){
        result = "lies between 10 and 20";
    }
        else {
            result = "wrong number";
}
return result;
}            
console.log(ifelse(30));

//for mmultiple if(s) , use elseif

//order is imp, if first condition is met, it doesnt check more conditions
function ordermylogic(num) {
    if (num < 5){
        return "smaller than 5";
    } else if (num < 10){
        return "smaller than 10";
    } else{
        return "10 se badaa";
    }
}
console.log(ordermylogic(11));
