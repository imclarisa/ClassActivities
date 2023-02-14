const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let removeNumberOne = nums.pop();
let removeNumberTwo = nums.pop();
console.log(removeNumberOne);
console.log(removeNumberTwo);
// remove each of the first two items with shift(), saving each item to a variable
let addNumberOne = nums.shift();
let addNumberTwo = nums.shift();

console.log(addNumberOne);
console.log(addNumberTwo);

console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(removeNumberTwo);
nums.unshift(removeNumberOne);
console.log(nums);

nums.push(addNumberTwo);
nums.push(addNumberOne);
console.log(nums);
