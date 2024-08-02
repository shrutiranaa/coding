//this is called a comment. it is not a code but only for your understanding.
/* using this we can make a multi line comment
and type anything for any no. of lines,
ok*/
/*in js, typing ; after every sentence isnt imp but preferred so as to know
when a sentence is ending, to be more organised.*/
//to make js print something on the console:
console.log("hello world");
// 7 datatypes: undefined, null, boolean, string, symbol, number, and object//
var myname = "Sooti";
myname = 5;
const pi = 3.14;
console.log(myname);
console.log(pi);
//here, var can be changed, const remains same and let is used in same manner
//only when we define it at times eg: let a = 10;
var a;
var b = 2;
//here var a is declared, and 2 is assigned to var b
a = 7; //now a is assigned
console.log(b);
b = a;
console.log(a)
var c;
c = "i am a";
c = c + " string";
console.log(c);
var sum = 10 + 10;
var diff = 10 - 8;
var product = 2 * 6;
var quotient= 66 / 6;
console.log(diff, sum, product, quotient);
//for incrementing a number
var plus= 20;
plus++;
console.log(plus++);
//decrementing
var minus = 20;
minus--;
console.log(minus--);
//multiplying float is same as multiplying int
var multiply = 0.5 * 2.5
console.log(multiply);
console.log(typeof("Sooti"));
 var remainder;
 remainder = 11 % 3;
 console.log(remainder);
 //often used for finding if a number is odd or even 
 var A = 3;
 A = A + 10
 //can be written in the form;
 A += 10;
 console.log(A);
 //same goes all other operators
 var Str = "I am a \"double quoted\" string in a \"double quote.\"";
 //using backlash before " identifies it as string 
 console.log(Str);
 //or we can use '' first and "" inside, eg:
 var str= 'Hello guys i am the "double quote" again hehe';
 console.log(str); //if both '' and "" are to be used there's a back tick also but 
 //i dont know where it is so we gon skip it ok hehe.
var anything = "First line\n\t\Second line\nThirdline";
console.log(anything);
//you can concatenate(join) strings too. Eg:
var mystr= "This is string starting. " + "This is the end.";
console.log(mystr);
var ourstr = "This is my string.";
ourstr += "This is your string oki";
console.log(ourstr);
var myname = "sooti";
var myself = "my name is " + myname + " and i best hehe";
console.log(myself);
var me = "amazing"
var mystr= "i am ";
mystr += me;
console.log(mystr);
var firstname = "shrooooteeee";
var firstnamelength = firstname.length;
console.log(firstname);
console.log(firstnamelength);
var firstletterofname = "";
var firstName= "shruti";
firstletterofname = firstName[0];
console.log(firstletterofname);
//string immutability: if we name a string, then we cant change it's letters rather,
//we'll have to change the string itself oki; eg;
/* var mystr = "Jello World";
    mystr[0] = "H"; 
    it will show an error and hence we will have to rename string as "Hello world" */
