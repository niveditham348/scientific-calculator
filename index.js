// Function to append values to the result field
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  // Function to clear the result field
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Function to calculate the square of a number
  //function square() {
    //let expression = document.getElementById("result").value;
    //try {
      //let result = eval(`(${expression})**2`);
      //document.getElementById("result").value = result;
    //} catch (error) {
      
   // }
 // }
  
  // Functions for trigonometric functions
  function sin() {
    let expression = document.getElementById("result").value;
    try {
      let result = Math.sin(eval(expression));
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid Expression");
    }
  }
  
  function cos() {
    let expression = document.getElementById("result").value;
    try {
      let result = Math.cos(eval(expression));
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
  
  function tan() {
    let expression = document.getElementById("result").value;
    try {
      let result = Math.tan(eval(expression));
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
  
  // Functions for logarithms, exponentiation, and factorial
  function log() {
    let expression = document.getElementById("result").value;
    try {
      let result = Math.log(eval(expression));
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
  
  function exp() {
    let expression = document.getElementById("result").value;
    try {
      let result = Math.exp(eval(expression));
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
  
  // Function to calculate the result
  function calculateResult() {
    let expression = document.getElementById("result").value;
    try {
      let result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
