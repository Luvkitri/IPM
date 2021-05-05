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
  console.log(parseObject);

  console.log("HEllo?");
  Object.keys(parseObject).forEach(key => {
    console.log(swapCase(parseObject[key]));
  })
};
