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
  let data = e.data;

  Object.keys(data).forEach((key) => {
    data[key] = swapCase(data[key]);
  });

  postMessage(data);
};
