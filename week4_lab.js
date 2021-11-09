// // // objects --  anything that has properties (attributes) and methods (behavior/ functions)

// // // var person = {
// // //     name:"Sally", // name is the key, sally is the value
// // //     age: 24 // age is the key, 24 is the value
// // // }
// // function person(name, age){
// //     this.name = name;
// //     this.age = age;
// // }
// // var sally = new person("sally",25);
// // var peter = new person("peter", 24);

// // var person_array = [];
// // person_array.push(sally);
// // person_array.push(peter);

// // for(let element of person_array){
// //     for(let key in element){
// //         console.log(key+" "+element[key]);
// //     }
// // }

// // // for in loop

// // for(var key in person){
// //     console.log(key+" "+person[key]);
// // }

// // // console.log(person.name);// dot notation
// // // console.log(person['name']);// bracket notation

// // // find the element name in the peron object and then return the value associated with 
// // // the key name 


// // create an object called rectangle
// // add two properties: width and height
// // add a function: getArea()
// // create two instances of the object // create two rectangle objects
// // find the total area of the two instances

// // object literal notation

// // var rectangle = {
// //     width:"",
// //     height:"",
// //     getArea:function(){
// //         return this.width*this.height;
// //     }
// // }
// // var rect1 = Object.create(rectangle);// clone of the original rectangle
// // rect1.width = 10;
// // rect1.height = 12;

// // var rect2 = Object.create(rectangle);// clone of the original rectangle
// // rect2.width = 5;
// // rect2.height = 6;
// // var area1 = rect1.getArea();
// // var area2 = rect2.getArea();
// // var total_area = area1+area2;
// // console.log(total_area);

// function grocery(milk, eggs, apples){
//     this.milk = milk;
//     this.eggs = eggs;
//     this.apples = apples;
// }
// // proptotype makes the default property/function accessible to all existing and future
// // object instances
// //  dot notation adds to only that instance of the object, not all the objects 

// //grocery.prototype.bread = 1;

// var george = new grocery(1,12,6);
// var mohammad = new grocery(2, 6, 12);
// var beth = new grocery(1,12,24);

// // george and mohammad decided to get bread as well

// george.bread = 2;
// delete george.bread;
// mohammad.bread = 1;
// console.log(george.bread);//2
// console.log(beth.bread);//1

// var student_array = [];

// function student(name, id, program, info){
//     this.name = name;
//     this.id = id;
//     this.program = program;
//     this.info = info
// }

// var peter = new student("peter",12345,"CPD",{hours:4,email:"peter@a.com"});
// var kate = new student("kate",34512,"CPD", {hours:5,email:"kate@a.com"});
// var bill = new student("bill",12398,"CSD", {hours:3,email:"bill@a.com"});
// student_array.push(peter);
// student_array.push(kate);
// student_array.push(bill);

// var total_hours = 0;

// for(var i=0;i<student_array.length;i++){
//     total_hours+=student_array[i].info.hours;
// }

// console.log(total_hours);


var student_array = [];

function student(name, id, program){
    this.name = name;
    this.id = id;
    this.program = program;
}

var peter = new student("peter",12345,"CPD");
var kate = new student("kate",34512,"CPD");
var bill = new student("bill",12398,"CSD");
student_array.push(peter);
student_array.push(kate);
student_array.push(bill);

for(var i = 0;i<student_array.length;i++){
    for(var key in student_array[i]){
        console.log(key+" "+student_array[i][key]);
    }
}






