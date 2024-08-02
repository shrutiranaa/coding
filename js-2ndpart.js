//madlibs game:

function wordbank(noun, adjective, verb, adverb) {
    var result= "The"+adjective+noun+verb +"away "+adverb;
    return result;}

console.log(wordbank("ant ", " mighty ", "swam ", "furiously."));

var array = ["Shruti", 20];
//collection of elements of any datatype

var nested_array = [["hellu", 2], ["My", 27]];

var one_array = [20,10, 30];
var two_array = [30, 10, 30];
one_array[0] = two_array[0];
one_array[1] = 20;
one_array.length = 4;
console.log(one_array);
//it will show one item as empty
console.log(one_array.length);
//array in array:
var array2 = [[1,2,3], [4,5,6],[[7,8,9], 10, 11], [15]];
var data= array2[0][0];
console.log(array2.length);
console.log(data);
//array2.push([blah blah]) will push it in array2
var myarray = [1, 2, 3];
myarray.pop();
console.log(myarray);
//.shift() is same just that it will remove the 1st element
//.unshift() will add just like push but in the beginning
function reusablefnctn() {
    console.log("hey world!");
}
reusablefnctn();
//a function is reusable and ends with() and anytime it is called, it returns what is 
//written inside {}
function functionwithargs(a, b) {
    console.log(a - b);
}
functionwithargs(23, 10);

//problem:  why cant i change var 1000 to 2000 by []

var pizza = 10;
function fun1() {
    burger = 5;
}
function fun2() {
    var output = "";
    if (typeof output != undefined){
        output += "pizza: " + pizza;
    }
    console.log(output);
}
function fun3() {
    var output = "";
    if (typeof output != undefined){
        output+= "burgers: " + burger;
    }
    console.log(output);
}
fun1();
fun2();
fun3();
//if you define a variable into a function, then it wont be called outside the 
//function, else, it can be called anywhere in the code. eg of local scope:
function localscope() {
    var MYvar = 5;
    console.log(MYvar);
}
localscope();
// console.log(MYvar); won't work. eg2:

var cloth = "jeans";
function outfit() {
   var cloth= "shirt";
    return cloth;
}
console.log(outfit());
console.log(cloth);

//to return a value:
function value(num) {
    return num - 7;
}
console.log(value(20));


function addvalue(sum) {
    return sum + 3
}
console.log(addvalue(1));

var changed = 0;
function change(num) {
    return (num +5) / 3;
}
changed = change;
console.log(change(1));
console.log(changed(3)); //i just turned a variable into a f(x).
