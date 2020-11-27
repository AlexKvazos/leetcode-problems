function frequencySort(numbers: number[]): number[] {
  const frequencies = new Map();

  for (let num of numbers) {
    frequencies.set(num, (frequencies.get(num) || 1) + 1);
  }

  numbers.sort((a, b) =>
    frequencies.get(a) === frequencies.get(b)
      ? b - a
      : frequencies.get(a) - frequencies.get(b)
  );
  return numbers;
}
