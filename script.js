const outputText = document.getElementById("output-text");
const buttons = document.querySelectorAll("button");
const outputTextSpan = document.getElementById("output-text-span");

let outputValueResult = "";
let currentInput = "";
let inputHistoryValue = "";

// Handle manual input in the text field
outputText.addEventListener("input", (e) => {
  const filtered = e.target.value.replace(/[^0-9.+%*/()\-]/g, '');
  if (filtered !== e.target.value) {
    e.target.value = filtered;
  }
  currentInput = filtered;
});

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (currentInput === "SyntaxError") currentInput = "";

    if (value === "AC") {
      currentInput = "";
      inputHistoryValue = "";
    } else if (value === "Delete") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      calculate();
    } else {
      currentInput += value;
    }

    updateDisplay();
  });
});

// Handle pressing Enter key
outputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // prevent form submit
    calculate();
    updateDisplay();
  }
});

function calculate() {
  if (currentInput.trim() === "") return;

  // Prevent evaluation if expression ends with an operator
  const invalidEnd = /[+\-*/]$/;
  if (invalidEnd.test(currentInput)) {
    return; // don’t calculate incomplete expressions
  }

  try {
    inputHistoryValue = currentInput;
    const result = eval(currentInput);
    if (result === undefined || isNaN(result)) return;
    outputValueResult = result.toString();
    currentInput = outputValueResult;
  } catch (e) {
    currentInput = "SyntaxError";
  }

  updateDisplay(); // <-- ensure display updates after calculation
}

function updateDisplay() {
  outputTextSpan.textContent = inputHistoryValue;
  outputText.value = currentInput;
}
