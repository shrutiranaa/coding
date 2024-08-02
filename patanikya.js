//ternary operator
//condition ? statement if true : statement if false;
function checkEquals(a, b) {
    return a === b ? true : false;
}
console.log(checkEquals(1,2));

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(-7));

//diff bw var and let keyword is that let doesnt let you change the variable name whereas 
// var does; use const or let more often than var, it helps to know repeated variable
//eg:
function checkScope() {
    "use strict";
        var i = "function scope";
        if (true) {
            var i = "block scope";
            console.log("Block scope i is:", i );
        }
        console.log("Function scope is: ", i );
        return i;
}
checkScope();
/* so if we use var instead of let is has a global scope and functions everywhere
in the code whereas let is only limited till the block.*/

/* var magic = function() {
    return new Date();   
}; ARROW FUNCTION FOR THE SAME- */

const magic = () => new Date();
console.log(magic());

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [12,34,21]));

const increment = function(){
    "use strict";
    return function(number, value = 3){
    return number + value
}
}();
console.log(increment(4));
console.log(increment(1,2));

/* const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a,b) => a + b, 0);
    };
}) ();
console.log(sum(1, 2, 3)); */

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
}) ();
console.log(sum(1, 2, 3, 4));

/* spread operator is used as to copy the elements of one array into another
and denoted same as rest operator*/

const arr1 = ['sooti', 'rahu', 'orange', 'pineapple'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = "potato"

})();
console.log(arr2);

const avgTemp = {
    today: 28 ,
    tomorrow: 32
};
function getTempOfTmrw(avgTemp) {
    "use strict";
    const {tomorrow : tempOfTomorrow} = avgTemp;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(avgTemp));
