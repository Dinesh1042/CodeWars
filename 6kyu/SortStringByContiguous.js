// Sort Strings by Most Contiguous Vowels

function sortStringsByVowels(strings) {
  const regex = /[aiueoAIUEO]+/g;
  function findLength(str) {
    return (str.match(regex) || []).reduce(
      (acc, val) => (acc = Math.max(acc, val.length)),
      0
    );
  }
  return strings.sort((a, b) => findLength(b) - findLength(a));
}

const final = sortStringsByVowels(["Yuuuge!!", "uuu", "none"]); // ["iiii", "eee", "aa", "oo"];

console.log(final);
