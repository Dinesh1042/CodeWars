function multiTable(number) {
  let finalResult = "";
  for (let i = 1; i <= 10; i++)
    finalResult += `${i} * ${number} = ${number * i}` + "\n";
  return finalResult.slice(0, -1);
}
