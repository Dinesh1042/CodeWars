// Reverse or rotate

function revrot(str, sz) {
  if (sz <= 0 || !str.length || sz > str.length) return ``;

  const pattern = new RegExp(`.{${sz}}`, "g");
  let chunks = str.match(pattern);

  chunks = chunks.map((chunk) =>
    cubeDivTwo(chunk) ? reverseIt(chunk) : rotateIt(chunk)
  );

  function cubeDivTwo(numStr) {
    return (
      numStr.split("").reduce((cubeSum, d) => (cubeSum += d ** 3), 0) % 2 === 0
    );
  }

  function reverseIt(numStr) {
    return numStr.split("").reverse().join("");
  }
  function rotateIt(numStr) {
    return numStr.slice(1) + numStr[0];
  }

  return chunks.join("");
}

const finalResult = revrot("733049910872815764", 5); // "330479108928157";

console.log(finalResult);
