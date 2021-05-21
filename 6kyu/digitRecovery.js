function recover(str) {
  const alpha = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
  };

  const arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let key in alpha) {
      let a = str
        .split("")
        .slice(i, i + key.length)
        .sort()
        .join("");

      let b = key.split("").sort().join("");

      if (a === b) arr.push(alpha[key]);
    }
  }
  return arr.length ? arr.join("") : "No digits found";
}

const finalResult = recover("NEO"); //,"1"

console.log(finalResult);
