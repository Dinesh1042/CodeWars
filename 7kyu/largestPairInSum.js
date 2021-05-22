function largestPairSum(numbers) {
  const finalResult = numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((acc, val) => acc + val);

  return finalResult;
}

// Simplified Version

largestPairSum1 = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((acc, val) => acc + val);
