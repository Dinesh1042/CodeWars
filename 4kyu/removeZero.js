// Remove Zeros

function removeZeros(array) {
  let zeroArray = [];
  let falseArr = [];
  let nonZeroArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) falseArr = [...falseArr, false];
    if (array[i] === 0 || array[i] === "0")
      zeroArray = [...zeroArray, array[i]];
  }

  for (let i = 0; i < array.length; i++)
    if (array[i] != 0) nonZeroArray = [...nonZeroArray, array[i]];

  return [...nonZeroArray, ...falseArr, ...zeroArray];
}
