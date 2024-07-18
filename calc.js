// Event listener for the Multiply button
document.getElementById('multiplyButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    } else {
        const multiplicationResult = multiplyNumbers(num1, num2);
        document.getElementById('result').textContent = `The Result is: ${multiplicationResult}`;
    }
});

// Event listener for the Divide button
document.getElementById('divideButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if inputs are valid numbers and handle division by zero
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers';
    } else {
        const divisionResult = divideNumbers(num1, num2);
        document.getElementById('result').textContent = divisionResult;
    }
});

// Function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// Function to divide two numbers, handling division by zero
function divideNumbers(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
}
