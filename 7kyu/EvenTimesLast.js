// Evens times last
function evenLast(numbers) {
  if (!numbers.length) return 0;
  return (
    numbers.reduce((acc, val, i) => (acc += i % 2 === 0 ? val : 0), 0) *
    numbers.slice(-1)
  );
}

let final = evenLast([1, 3, 3, 1, 10]); //  30

// 2 Way

const evenLast = (numbers) =>
  numbers.length
    ? numbers.reduce((acc, val, i) => (acc += i % 2 === 0 ? val : 0), 0) *
      numbers.slice(-1)
    : 0;
