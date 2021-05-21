function strToHash(str) {
  let finalResult = str.split(", ");
  const obj = {};

  finalResult = finalResult.filter((currentValue) => {
    // split the current value - eg: hello=5 returns ['hello', 5]
    let crItem = currentValue.split("=");
    if (!crItem[0] || !crItem[1]) return {};

    obj[crItem[0]] = parseInt(crItem[1]);
  });

  return obj;
}

const finalResult = strToHash("hello=5, world=3");

console.log(finalResult);
