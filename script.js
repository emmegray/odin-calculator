document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
      appendToDisplay(key);
  } else if (key === '.') {
      appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendToDisplay(key);
  } else if (key === 'Enter') {
      calculateResult();
  } else if (key === 'Backspace') {
      deleteLast();
  }
});

function clearDisplay() {
  document.getElementById('display').innerText = '0';
}

function deleteLast() {
  const display = document.getElementById('display');
  const currentValue = display.innerText;
  if (currentValue.length > 1) {
      display.innerText = currentValue.slice(0, -1);
  } else {
      display.innerText = '0';
  }
}

function appendToDisplay(value) {
  const display = document.getElementById('display');
  const currentValue = display.innerText;

  if (currentValue === '0' && value !== '.') {
      display.innerText = value;
  } else if (isOperator(value) && (isOperator(currentValue.slice(-1)) || currentValue === '0')) {
      return;
  } else if (value === '.' && currentValue.split(/[\+\-\*\/]/).pop().includes('.')) {
      return;
  } else {
      display.innerText += value;
  }
}

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      const expression = display.innerText;
      if (expression.includes('/0')) {
          display.innerText = 'Error';
      } else if (expression !== '' && !isOperator(expression.slice(-1))) {
          display.innerText = eval(expression);
      }
  } catch {
      display.innerText = 'Error';
  }
}
