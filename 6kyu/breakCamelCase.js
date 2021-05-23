// Break CamelCase

function solution(str) {
  let ZCharCode = "Z".charCodeAt(0);
  const splitStr = str.split("");
  let finalWord = "";

  splitStr.forEach((char) =>
    ZCharCode > char.charCodeAt(0)
      ? (finalWord = `${finalWord} ${char}`)
      : (finalWord += char)
  );
  return finalWord;
}

solution("camelCase"); // "camel Case"
