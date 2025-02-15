document.getElementById('factorial-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(document.getElementById('number').value);
  
    if (isNaN(number) || number < 0) {
      alert('Please enter a valid positive integer.');
      return;
    }
  
    const iterativeResult = factorialIterative(number);
    const recursiveResult = factorialRecursive(number);
  
    document.getElementById('result').innerHTML = `
      <p>Iterative Factorial: ${iterativeResult}</p>
      <p>Recursive Factorial: ${recursiveResult}</p>
    `;
  });
  
  function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }