// Moving Zeros to End
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let finalResult = [];
  let zeroCount = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== 0) finalResult.push(arr[i]);
    else if (arr[i] === 0) zeroCount.push(arr[i]);

  finalResult = [...finalResult, ...zeroCount];
  return finalResult;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
