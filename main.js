// Part 2 Question 1

let myArray = ['Deloris', 'Tajanae', 'Victoria']
//myArray.splice(myArray.length - 2, 1)
//console.log(myArray);

function removeSecondToLast(a) {
    a.splice(a.length - 2, 1)
}

removeSecondToLast(myArray);
console.log(myArray);

//Question 2 
function copyingAnArray(a1,a2){
    // let alpha = [58, 96, 37, 68, 53];
    // let beta = [];
    for (let value of a1){
        a2.push(value)
    }
}
console.log(beta);

// var first =  [1, 2, 3];
// var second = [4, 5];
 
// for (var i of second) {
//     first.push(i);
// }
 
// console.log(first);
 
/*
    Output: [ 1, 2, 3, 4, 5 ]
*/

//Given two arrays alpha and beta, copy all the values of alpha into beta.

// Given an array `myArray`, a number `value`, and a number `index`,
// insert the `value` into `myArray` at the `index`.

function insertValueAtIndex (i,value, array){
    // let value = 9;
    // let i = 0 
    array.splice(i,0,value);
}
insertValueAtIndex(0,9,myArray)
console.log (myArray)

