let displayValue = "";


function appendToDisplay(value) {
  if (displayValue === "0" || displayValue === "Error") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  document.getElementById("display").value = displayValue;
}


function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "0";
}


async function calculate() {
  const display = document.getElementById("display");

  if (!displayValue || displayValue === "Error") {
    return;
  }

 
  const operatorMatch = displayValue.match(/[\+\-\*\/]/);
  if (!operatorMatch) {
    display.value = "Error";
    return; 
  }

  const operator = operatorMatch[0];
  const operands = displayValue.split(operator);
  const a = parseFloat(operands[0]);
  const b = parseFloat(operands[1]);

  if (isNaN(a) || isNaN(b)) {
    display.value = "Error"; 
    return;
  }

  try {

    const response = await fetch("https://calculator-backend-2nfu.onrender.com/calulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ value : a+operator+b })
    });

    const data = await response.json();

   
    if (data && data.result !== undefined) {
      displayValue = data.result.toString();
      display.value = displayValue;
    } else {
      display.value = "Error: Invalid Response";
    }
  } catch (error) {
    display.value = "Error";
    console.error("Error with calculation API:", error);
  }
}

