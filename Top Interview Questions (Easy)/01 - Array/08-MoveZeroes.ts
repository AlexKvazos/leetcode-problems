function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
}

// test
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
