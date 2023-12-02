equationDisplay = document.getElementById('equation-display');

function calculate() {
  try {
    equationDisplay.innerText = eval(equationDisplay.innerText);
  } catch (error) {
    equationDisplay.innerText = 'Error';
  }
}
