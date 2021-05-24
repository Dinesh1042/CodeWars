// Build a square

function generateShape(integer) {
  const stringRepeat = "+".repeat(integer);
  let finalResult = ``;
  for (let i = 0; i < integer; i++) finalResult += `${stringRepeat}\n`;
  return finalResult.slice(0, -1);
}

console.log(generateShape(8));

// Output
// ++++++++
// ++++++++
// ++++++++
// ++++++++
// ++++++++
// ++++++++
// ++++++++
// ++++++++
