// Filter provides a new array only contained with all of the
// elements of the previous array that pass the test implemented
// by the provided function.

const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter (n => {
    return n % 2 === 1; // This returns true or false, if it returns true, n is added to the filtered array
})
//[9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);  //note that you can abbreviate the variable you started with "nums" into its first letter "n"
// [4, 3, 2, 1]