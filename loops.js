//while loop

var array = [];

var i = 0;
while(i < 5) {
    array.push(i);
    i++;
}
console.log(array);

//for loop
var myarray = [];
for (var i = 0; i < 5; i++) {
    myarray.push(i);
}
console.log(myarray);

var apun = [];
for (var i = 1; i < 10; i+=2) {
    apun.push(i);
}
console.log(apun);

var ourArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];
}
console.log(ourTotal);

var  myArr = [1, 2, 3, 4, 5];
var ourTotal = 0;
for (var i = 0; i < myArr.length; i++) {
    ourTotal += myArr[i];
}
console.log(ourTotal);

//nesting for loops
function multiplyAll(arr){
    var product = 1;

    for (var i =0; i < arr.length; i++) {
        for (var j = 0; j< arr[i].length; j++){
            product *=  arr[i][j]
    }
} 
    return product;
}
  var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
  console.log(product);
