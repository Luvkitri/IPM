function swapCase(word) {
  let letters = word.split("");
  let newWord = [];

  for (letter of letters) {
    if (letter.toUpperCase() != letter.toLowerCase()) {
      if (letter == letter.toUpperCase()) {
        newWord.push(letter.toLowerCase());
      }

      if (letter == letter.toLowerCase()) {
        newWord.push(letter.toUpperCase());
      }
    } else {
      newWord.push(letter);
      continue;
    }
  }

  return newWord.join("");
}

onmessage = function (e) {
  let parseObject = e.data;

  Object.keys(parseObject).forEach((key) => {
    parseObject[key] = swapCase(parseObject[key]);
  });

  postMessage(parseObject);
};
