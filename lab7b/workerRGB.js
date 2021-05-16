function getStringValue(totalString) {
  let stringValue = 0;
  let count = 0;

  for (let letter of totalString) {
    count += 1;
    stringValue += count;
    if (letter.toUpperCase() === letter) {
      stringValue += 30;
    }
  }

  return stringValue;
}

function singleString(data) {
  let totalString = "";

  for (let fieldString of Object.values(data)) {
    let letters = fieldString.split("");

    for (let letter of letters) {
      if (
        letter.toUpperCase() != letter.toLowerCase() ||
        letter.codePointAt(0) > 127
      ) {
        totalString += letter;
      }
    }
  }

  return totalString;
}

function getRGBObject(data) {
  let totalString = singleString(data);
  let stringValue = getStringValue(totalString);

  let r = stringValue % 255;
  let g = 255 - (stringValue % 255);
  let b = 0.5 * r > 125 ? 99 : 199;

  return {
    R: r,
    G: g,
    B: b,
  };
}

onmessage = function (e) {
  let data = e.data;
  let rgbObj = getRGBObject(data);

  postMessage(rgbObj);
};
