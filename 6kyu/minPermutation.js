function minPermutation(n) {
  let arr = n < 0 ? Math.abs(n) : n;
  arr = arr.toString().split("").sort();

  let i = 0;
  while (arr[i] == 0) {
    i++;
  }

  let temp = arr[0]; // So temp = 0
  arr[0] = arr[i]; // arr[0] =  2
  arr[i] = temp; // arr[i which means 1] = 0
  arr = arr.join("");

  return (arr = n < 0 ? -arr : +arr);
}

let finalResult = minPermutation(320); // returns 203

console.log(finalResult);
