// Decode the Morse Code

const morseCodes = {
  "...---...": "sos",
  "-.-.--": "!",
  ".-.-.-": ".",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

// MORSE_CODES are the given in dictonary in codewars

function decodeMorse(str) {
  let finalWord = "";
  const arr = str
    .split("  ")
    .map((item) => item.split(" "))
    .reduce((acc, cur) => acc.concat(cur))
    .map((item) =>
      morseCodes[item] === undefined
        ? (finalWord += " ")
        : (finalWord += morseCodes[item])
    );

  return finalWord.toUpperCase().trim();
}

const finalResult = decodeMorse(".... . -.--   .--- ..- -.. ."); // 'HEY JUDE'

console.log(finalResult);
