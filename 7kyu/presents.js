// Presents
// [2, 3, 4, 1]  =>  [4, 1, 2, 3]
// [1, 3, 2]     =>  [1, 3, 2]
// [1, 2]        =>  [1, 2]

function presents(a) {
  let giftArray = [];

  for (let i = 0; i < a.length; i++) giftArray[a[i]] = i + 1;

  giftArray = giftArray.slice(1);
  return giftArray;
}

console.log(presents([2, 3, 4, 1])); // [4, 1, 2, 3]
