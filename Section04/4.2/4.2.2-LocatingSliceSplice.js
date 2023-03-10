const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log(arr.indexOf("a"));
console.log(arr.indexOf("b"));
console.log(arr.indexOf("c"))
// find the last index of "a", "b", and "c"
console.log(arr.lastIndexOf("a"));
console.log(arr.lastIndexOf("b"));
console.log(arr.lastIndexOf("c"));
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicates(array, duplicatedValues) {
  let firstInstance = array.indexOf(duplicatedValues);
  let lastInstance = array.lastIndexOf(duplicatedValues);

  while (firstInstance !== lastInstance) {
    array.splice(lastInstance, 1);
    lastInstance = array.lastIndexOf(duplicatedValues);
  }
  return array;
}

let singleAList = removeDuplicates(arr, "a");
console.log(singleAList);

let singleBlist = removeDuplicates(arr, "b");
console.log(singleBlist);

let singleCList = removeDuplicates(arr, "c");
console.log(singleCList);
