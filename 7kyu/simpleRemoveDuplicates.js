// Simple remove duplicates

function solve(arr) {
  let finalResult = [];

  while (arr.length > 0) {
    const popEl = arr.pop();
    if (!finalResult.includes(popEl)) finalResult.push(popEl);
  }
  return finalResult.reverse();
}
