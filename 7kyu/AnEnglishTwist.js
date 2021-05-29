// An English Twist on a Japanese Classic

function shiritori(arr) {
  if (!arr.length || arr[0] === "") return [];
  const finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    const lastWord = arr[i].slice(-1);
    let firstWord = arr[i + 1];
    if (!firstWord) {
      finalArr.push(arr[i]);
      break;
    }
    firstWord = firstWord.slice(0, 1);

    if (lastWord === firstWord) finalArr.push(arr[i]);
    else {
      finalArr.push(arr[i]);
      break;
    }
  }

  return finalArr;
}

let final = shiritori([
  "dog",
  "goose",
  "elephant",
  "tiger",
  "rhino",
  "orc",
  "cat",
]);
// ,["dog","goose","elephant","tiger","rhino","orc","cat"]);

// https://www.codewars.com/kata/5a1a9e5032b8b98477000004
