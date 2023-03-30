const $ = document;
const text = ["درحال یادگیری ریکت", "برنامه نویس وب", "طراح وب"];
let index = 0;
let count = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".type").textContent = letter;

  setTimeout(type, 200);
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
})();
