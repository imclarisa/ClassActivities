// Named Parameters
// write a function that takes two named parameters:
function myFunction(param1, param2 = 5) {  //make sure you put function before your function
// print each named parameter,
console.log(param1);
console.log(param2)
// then return the parameters added together
return param1 + param2;
}
// invoke the function and pass in two numbers
myFunction(1, 2);
// invoke the function and pass in more than two numbers
myFunction(1, 2, 3, 4)
// invoke the function and pass in only one number
myFunction(1)
// change the function to set default values for the parameters
myFunction()
// again, invoke the function and pass in only one number
myFunction(1);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
