// Dont't drink water

function separateLiquids(glass) {
  if (!glass.length) return glass;

  const finalGlass = [];
  let liquids = [];

  const liquidOrder = { H: 1.36, W: 1.0, A: 0.87, O: 0.8 };
  const liquidValue = { 1.36: "H", 1.0: "W", 0.87: "A", 0.8: "O" };

  glass.forEach((liq) => {
    liq.forEach((lq) => {
      liquids.push(liquidOrder[lq]);
    });
  });

  liquids = liquids.sort((a, b) => a - b);

  const glassLength = glass[0].length;

  liquids.map((liq) => {
    let last = finalGlass[finalGlass.length - 1];
    !last || last.length === glassLength
      ? finalGlass.push([liquidValue[liq]])
      : last.push(liquidValue[liq]);
  });

  return finalGlass;
}
const arr = [
  ["A", "A", "O", "H"],
  ["A", "H", "W", "O"],
  ["W", "W", "A", "W"],
  ["H", "H", "O", "O"],
];
// Output
// [
//   ["O", "O", "O", "O"],
//   ["A", "A", "A", "A"],
//   ["W", "W", "W", "W"],
//   ["H", "H", "H", "H"],
// ];
console.log(separateLiquids(arr));
