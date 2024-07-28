const newColourBtnElem = document.getElementById("new-colour-button");
const currentColourElement = document.getElementById("current-colour");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValues() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);

  const randomHexValues = hexValues[randomIndexPosition];

  return randomHexValues;
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValues();
  }

  return hexString;
}

newColourBtnElem.addEventListener("click", () => {
  const randomHexString = "#" + getRandomHexString(6);

  document.body.style.setProperty("background-color", randomHexString);

  currentColourElement.textContent = randomHexString;
});
