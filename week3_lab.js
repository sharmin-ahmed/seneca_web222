// // // reg exp rules:

// // // []- set of possible characters
// // // \d---digits   \D---no digits
// // // \w---alphabets and digits
// // // \s- whitespace
// // // ?-once or none
// // // *-zero or more
// // // +---one or more
// // // ^ start with
// // // $ end with

//  objects in js is anything that has properties and methods
// string, array, regexp


// suppose you have an array and you need to check that the array elements contain
// the given substring

// var arr = ["hi","higher","abc","highest","def"];

// var str = "hi";
// output: the number of occurance of the substring

// methods to iterate across the array are basically advanced versions of for loops

// foreach 
//- the only methods that doesn't return anything
// does a computation specified in the callback function on each element

// map
// returns an array where each element is a result of the computation in the callback 
//function


// find
//  returns the first match that meets the given condition in the callback function

// filter
// returns an array that contains all the elements that meets the condition in the
//  callback function

// every
// returns a boolean value based on whether all the elements meets the condition

// problem 4

// var arr = [1,2,3,4,5];
// // element represents the ith index
// var arr2 = [];
// var temp;
// arr.forEach(function(element){
//     temp = "$"+element;//$1
//     arr2.push(temp);
// })


// var arr = [1,2,3,4,5];
// var arr2 =[];

// var temp = 42;
// // put temp into the arr array
// // what push does
// var len = arr.length;
// arr[len-1] = temp;


// how push works

// for(var i=0;i<arr.length;i++){
//     arr2[i] = arr[i];
// }
//console.log(arr2);



// var temp;
// // map returns an array
// // the changed value of element is pushed into the new arr
// var arr2 = arr.map(function(element){
//     temp = "$"+element;
//     return temp;// concatenate a "$" to the current element of arr and 
//     //push this element into arr2
// })

// console.log(arr2);

//problem 5
 //var arr = ["     hi     ", "hello      "];
// map does the computation and then returns the elemnts and saves it as the last element
//  of a new array
// var arr1 = arr.map(function(element){
//     return (element.trim());
// })
// arr.forEach(function(element){

//     arr1.push(element.trim());
// })
// console.log(arr1);


// problem 7

// var arr = ['Jim Waldorf', 'Lynn Waldon', 'Frank Smith',"Peter Liwaldo"];

// // filter returns an array bases on a conditional if statement

// var arr2 = arr.filter(function(element){
//     return (element.includes("Waldo")||element.includes("waldo"));
// });//push element into array only if it contains substring waldo or Waldo

// //find will return the first element that meets the if condition

// var match = arr.find(function(element){
//     return (element.includes("Waldo")||element.includes("waldo"));
// });

//console.log(match);//jim

// every returns a boolean value based on whether all the elements in the array
// satisfies the if condition

// var bool = arr.every(function(element){
//     // check if every element includes the substring waldo
//          return (element.includes("Waldo")||element.includes("waldo"));
//      });
// console.log(bool);//false

// var arr2 = [];
// arr.forEach(function(element){
//     if(element.includes("Waldo")||element.includes("waldo")){
//         arr2.push(element);
//     }
// })
// console.log(arr2);

// var arr = [15,34,5,23,34];
// // for...of
// for(var element of arr){
//     console.log(element);
// }
// var cutoff = 12;

// var bool = arr.every(function(element){
    
//     return (element>=cutoff);
// });

var pattern = /colou?r/ig;// you either have one u or no u at all
//advanced search flags
// i --- ignore the case     // g --- global occurance 
var str = "the Color of your eyes are brown and the colour of your dogs eyes are black";
console.log(pattern.test(str));// returns a boolean value based on whether the pattern is there in the string

// match returns an array with all occurances of the pattern

console.log(str.match(pattern));


// find a pattern and make a replacement

console.log(str.replace(pattern,"iris"));


var str = "this is my string,with spaces in between";

console.log(str.split(/[ ,]/));// both comma and space as seperator






