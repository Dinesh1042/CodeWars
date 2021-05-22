//  #Find the missing letter

function findMissingLetter(array) {
  let firstLetter = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== String.fromCharCode(firstLetter))
      return String.fromCharCode(firstLetter);

    firstLetter++;
  }
}

const final = findMissingLetter(["a", "b", "d", "e"]); // return c

console.log(final);
