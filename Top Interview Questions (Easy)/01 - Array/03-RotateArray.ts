/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  nums.unshift(...nums.splice(nums.length - k));
}

//test
const nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
