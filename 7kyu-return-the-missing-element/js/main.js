//Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element

function getMissingElement(superImportantArray){
  //Sum of numbers 0 to 9
  const expectedSum = 45;
  //Calculate sums of array elements
  const actualSum = superImportantArray.reduce((acc, num) => acc + num, 0);
  //Return the missing number
  return expectedSum - actualSum;
}

//Test - should print 4 to the console
console.log(getMissingElement([0, 1, 2, 3, 5, 6, 7, 8, 9]));