// // // returns a random number between 0 and 10

// // //console.log(Math.random()*10);

// // // what is 7^4?

// // console.log(Math.pow(4,2));


// // What is an Object???

// // Object is anything that has properties (attributes) and methods (behavior) 
// //  the definition of the object can be used to create multiple instances of the object
// // definition of object is like a blueprint

// // attributes :  eyecolor, height, haircolor, 
// // behavior(functions): canwalk(), cantalk(), canJump()

// // person1: blue, 160, black, canwalk(), 
// // person2 :  green, 2m, yellow, 

// // house

// // attributes: unit#, no-of-rooms, house_type,color
// // behaviors: heating(),water_heater(),

// //Objects can be created in js in two ways

// // Object literal notation

// // var car = {
// //     // attributes
// //     make:"Honda",
// //     model:"Accord",
// //     year:2020,
// //     color:"Red",
// //     speed:0,
// //     // functions
// //     canBreak:function(){
// //         this.speed = 0;
// //     },
// //     canAccelerate:function(acc){
// //         this.speed+=acc;
// //     },
// //     printInfo:function(){
// //         return this.make+" "+this.model+" "+this.year;
// //     }
// // }

// // var toyota = Object.create(car);// creates a clone of the object

// // toyota.make = "Toyota";
// // toyota.model = "Camry";

// // console.log(toyota.printInfo());
// // console.log(car.printInfo());

// // var civic = Object.create(car);
// // civic.model = "Civic";
// // console.log(civic.printInfo());

// // // console.log(car.printInfo());
// // // car.no_of_tires = 4;// add new property 
// // // car.speed = 80;// update
// // // car.canAccelerate(20);
// // // console.log(car.speed);
// // // car.canBreak();
// // delete car.color;// remove 

// // console.log(car.speed);
// // console.log(car.no_of_tires);

// // car.howmanytires = function(){// add new method
// //     return "it has "+this.no_of_tires+" tires";
// // };
// // console.log(car.howmanytires());
// // console.log(car.color);

// // add a toyota camry
// // ??? will talk about it in a bit

// // function constructor format

// // function Car(m, model, year, color){
// //     this.make_of_car = m;
// //     this.model = model;
// //     this.year = year;
// //     this.color = color;
// //     this.printInfo = function(){
// //         return this.make_of_car+" "+this.model+" "+this.year;
// //     }
// // }

// // // // create instances of object using the keyword new
// // // // Object object
// // var toyota = new Car("Toyota","Camry",2019,"White");
// // var honda = new Car("Honda","Accord",2020,"Silver");
// // // honda.model = "Civic";

// // // //var honda2 = new Car("Honda","Civic",2020,"Silver");
// // Car.prototype.no_of_tires = 4;//
// // Car.prototype.updatedPrint = function(){
// //     return this.make_of_car+" "+this.no_of_tires;
// // }
// //  console.log(toyota.updatedPrint());
// // // console.log(honda.printInfo());

// // //object
// // var books = {
// //     title:"Harry Potter",
// //     price:15,
// //     genre:"Fiction",
// // }

// // var another_book = Object.create(books);// this copies books and adds the new copy to another_book
// // console.log(books.title);
// // console.log(another_book.title);

// // // new keyword is used for the function constructor format

// //  an array of cars

// var car_array = [];

// function Car(m, model, year, color){
//     this.make_of_car = m;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.printInfo = function(){
//         return this.make_of_car+" "+this.model+" "+this.year;
//     }
// }
// var toyota = new Car("Toyota","Camry",2019,"White");
// var honda = new Car("Honda","Accord",2020,"Silver");
// var honda2 = new Car("Honda","Civic",2020,"Silver");

// car_array.push(toyota);
// car_array.push(honda);
// car_array.push(honda2);

// for(var i=0;i<car_array.length;i++){
//     console.log(car_array[i].printInfo());
// }


var arr = ["This is my first sentence in index zero","This is my first sentence in index one"];

var str = arr.join(" ");
console.log(str);
console.log(str.split(" ").length);












