function decrypt(code: number[], k: number): number[] {
  if (k === 0) return code.map(() => 0);
  const result = [];

  if (k > 0) {
    code.forEach((char, charIndex) => {
      const numbersToAdd = [];
      for (let i = charIndex + 1; i <= k + charIndex; i++) {
        numbersToAdd.push(
          code[((i % code.length) + code.length) % code.length]
        );
      }
      result[charIndex] = numbersToAdd.reduce((a, c) => a + c, 0);
    });
  } else if (k < 0) {
    code.forEach((char, charIndex) => {
      const numbersToAdd = [];
      for (let i = charIndex - 1; i >= k + charIndex; i--) {
        numbersToAdd.push(
          code[((i % code.length) + code.length) % code.length]
        );
      }
      result[charIndex] = numbersToAdd.reduce((a, c) => a + c, 0);
    });
  }

  return result;
}

console.log(decrypt([7, 6, 3, 9], 0));
console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));
