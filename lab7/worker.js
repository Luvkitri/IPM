function swapCase(word) {
  let letters = word.split('');
  let newWord = [];

  for (letter of letters) {
    if (letter == letter.toUpperCase()) {
      newWord.push(letter.toLowerCase());
    }
    
    if (letter == letter.toLowerCase()) {
      newWord.push(letter.toUpperCase());
    }
  }

  return newWord.toString();
}

onmessage = function (e) {
  let parseObject = JSON.parse(e.data);

  Object.keys(parseObject).foreach(key => {
    console.log(swapCase(parseObject[key]));
  })
};
