function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentNumber = arr[i];
    const nextNumber = arr[i + 1];
    if (currentNumber + 1 !== nextNumber) return nextNumber;
  }
  return null;
}

const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);

console.log(first); // Result is 6
