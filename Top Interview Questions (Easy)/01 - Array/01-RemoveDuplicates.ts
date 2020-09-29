var removeDuplicates = function (nums: number[]) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// test
console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7]));
