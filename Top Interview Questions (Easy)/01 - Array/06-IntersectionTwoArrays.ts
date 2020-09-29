function intersect(nums1: number[], nums2: number[]): number[] {
  const result = [];
  for (const num of nums1) {
    const index = nums2.indexOf(num);
    if (index >= 0) {
      result.push(num);
      nums2.splice(index, 1);
    }
  }
  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2, 1]));
