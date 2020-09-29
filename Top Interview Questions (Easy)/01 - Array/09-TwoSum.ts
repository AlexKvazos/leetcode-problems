function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      const a = nums[x];
      const b = nums[y];
      if (a + b === target && x !== y) {
        result.push(x, y);
        return result;
      }
    }
  }
  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
