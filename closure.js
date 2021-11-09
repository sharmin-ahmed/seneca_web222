// closure is when we create an inner function
// suppose we were to create a counter

//var count = 56;// initialize the counter value
//  the goal is to make sure that the count variable cannot be changed outside
// of the function
// to make local scope, you have to put it inside of a function
// and declare with var keyword 
//  if we had an inner function, we could decalre the count in the outer function
//  and incerement it in the inner function
// inner functions in js are able to access variables in the outer function
//  but variables in the outer function cannot access variable in the inner function
//  so in this situation encapsulation is maintained

// all the variables are encapsulated

function add(){// outer function
    var count = 1;
    // inner function
    function plus(){
        count+=1;
        return count;
    }
    return plus;// the outer function is returning the inner function    
}
var counter = add();//execution of the outer function returns the inner function
// counter has a reference to the inner function
console.log(counter());
console.log(counter());
console.log(counter());