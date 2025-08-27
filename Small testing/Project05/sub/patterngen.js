const patternText = document.getElementById("patterntext");

function generatePattern(symbol, length) {
  let pattern = "";
  let minimum = 1; // reset on each call

  for (let i = 0; i < length; i++) {
    pattern += symbol.repeat(minimum) + "\n";
    minimum += 2;
  }

  return pattern;
}

const generate = document.getElementById("generate");

const lengthSelect = document.getElementById("length-select");
const charSelect = document.getElementById("char-select");
// Populate options from 1 to 20
for (let i = 1; i <= 20; i++) {
  const option = document.createElement("option");
  option.value = i; // the value sent to JS
  option.textContent = i; // what the user sees
  lengthSelect.appendChild(option);
}

generate.onclick = () => {
  // Get the selected value directly
  const char = charSelect.value;
  const value = parseInt(lengthSelect.value, 10); // make sure it's a number
  patternText.textContent = generatePattern(char, value);
};
copyToClip.onclick = () => {
  const copyToClipBtn = document.getElementById("copyToClip");
  // Get the <pre> element
  var copyText = document.getElementById("patterntext");

  // Copy its text content
  navigator.clipboard
    .writeText(copyText.textContent)
    .then(() => {
      copyToClipBtn.textContent = "Copied!";
      setTimeout(() => {
        copyToClipBtn.textContent = "Copy";
      }, 2000); // 2000 ms = 2 seconds
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
