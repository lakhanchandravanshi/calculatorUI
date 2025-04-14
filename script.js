async function calculate() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const operation = document.getElementById("operation").value;
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Calculating...";
  
    try {
      const response = await fetch("https://calculator-backend-2nfu.onrender.com/calulate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value:a+operation+b})
      });
  
      const data = await response.json();
  
      console.log(data)
      if (response.ok) {
        resultDiv.textContent = `Result: ${data.result}`;
      } else {
        resultDiv.textContent = `Error: ${data.message || "Something went wrong."}`;
      }
    } catch (error) {
      resultDiv.textContent = `Error: ${error.message}`;
    }
  }
  