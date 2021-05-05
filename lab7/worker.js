function swapCase(word) {
  let letters = word.split('');
  let newWord = [];

  for (letter of letters) {
    if (!isNaN(letter * 1)) {
      newWord.push(letter);
      continue;
    }

    if (letter == letter.toUpperCase()) {
      newWord.push(letter.toLowerCase());
    }
    
    if (letter == letter.toLowerCase()) {
      newWord.push(letter.toUpperCase());
    }
  }

  return newWord.join("");
}

onmessage = function (e) {
  let parseObject = JSON.parse(e.data);

  Object.keys(parseObject).forEach(key => {
    parseObject[key] = swapCase(parseObject[key]);
  })

  postMessage(JSON.stringify(parseObject));
};
