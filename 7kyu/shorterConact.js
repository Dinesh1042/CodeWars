// shorter concat [reverse longer]

function shorter_reverse_longer(a, b) {
  let largestString = a.length >= b.length ? a : b;
  let smallestString = a.length < b.length ? a : b;
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  return `${smallestString}${reverse(largestString)}${smallestString}`;
}

shorter_reverse_longer("first", "abcde");
// abcdetsrifabcde
