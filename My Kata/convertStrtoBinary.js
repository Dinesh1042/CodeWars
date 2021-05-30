// Convert StringToBinary

// Your Task is to create a function that returns binary codes of the given string in an array. If length array length is 1 return only the binary code.

// 'a' => 1100001

// 'abcde' => [1100001, 1100010, 1100011, 1100100, 1100101 ]

// 'codewars' => [1100011, 1101111, 1100100, 1100101, 1110111, 1100001, 1110010, 1110011]

// if Empty string return empty string

// '' => ''

// Happy Coding!

function convertStrToBinary(str) {
  if (!str.length) return "";

  const arr = str.split("").map((item) => +item.charCodeAt(0).toString(2));
  return arr.length > 1 ? arr : arr[0];
}

const final = convertStrToBinary(`CodeWars`); // [1000011, 1101111, 1100100, 1100101, 1010111, 1100001, 1110010, 1110011];

console.log(final);
