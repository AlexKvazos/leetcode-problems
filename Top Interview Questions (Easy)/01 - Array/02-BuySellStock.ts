function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  prices.forEach((price, index) => {
    const profit = prices[index + 1] - price;
    if (profit > 0) {
      maxProfit += profit;
    }
  });
  return maxProfit;
}

// test
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7);
console.log(maxProfit([1, 2, 3, 4, 5]), 4);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
