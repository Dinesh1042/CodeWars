// Consecutive items

function consecutive(arr, a, b) {
  const indexOfa = arr.indexOf(a);
  return arr[indexOfa - 1] === b || arr[indexOfa + 1] === b ? true : false;
}

consecutive([7, 3, 5, 7], 3, 7); // false;
consecutive([1, 3, 5, 7], 3, 1); // true;
