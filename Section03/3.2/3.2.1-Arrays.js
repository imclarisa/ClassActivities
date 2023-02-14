// create an Array using an Array literal
const names = ["Clarisa", "Charity", "Doc", "James", "Joshua"]
// access the 1st item in the Array
console.log(names[0]);
// access the last item in the Array
console.log(names[4]);
// print the length of the Array
console.log(names.length);
// use the length property to access the last item in the Array
console.log(names[names.length-1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let name of names) {
  console.log(name);

}
